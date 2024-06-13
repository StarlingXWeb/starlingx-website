---
templateKey: blog-post
title: ORAN Notification for Monitoring System Timing Synchronization
author: Cole Walker
date: 2024-06-24
category:
  - label: Features & Updates
    id: category-A7fnZYrE1
---

In previous blog posts, we have explored how Precision Time Protocol is supported and configured in
StarlingX. Once a system is configured to synchronize time from a local GNSS source or external PTP
Grandmaster clock and workloads are deployed that depend on precise timing, a new challenge presents
itself: how can these workloads determine if the timing state is healthy and accurate?

On a single StarlingX AIO-SX system, there may be multiple ptp4l and ts2phc instances writing time
to various PHCs, a phc2sys instance keeping the realtime system clock in sync, multiple GNSS inputs
and several PPS connections between NICs. Any degradation to one of these components can have
significant impacts to the overall precision of the system timing and may require user workloads to
act in response. For example, a 5G radio unit may be configured to stop transmitting until time
synchronization is restored.

Available starting from the 9.0 StarlingX release, the ptp-notification application to enables user workloads
to query and be notified of changes to the system timing state. This containerized application
provides an API that can be used by other applications to query the current synchronization state of
the various PTP components, as well as providing the ability to subscribe to and receive push
notifications when a change in timing state is detected. The ptp-notification application implements
the "O-Cloud Notification API Specification for Event Consumers" O-RAN standard. This post will
review the major functionality provided by ptp-notification.

The full standard can be downloaded from the [O-RAN Alliance
website](https://orandownloadsweb.azurewebsites.net/specifications).


# The ptp-notification application
The ptp-notification application is a system-managed application that is packaged with StarlingX. It
can be deployed and configured using the various "system application-*" commands. Installing
ptp-notification is a simple process of labelling the specific hosts that should run the application,
uploading the application tarball, specifying a few configuration values and then deploying the
application. Complete steps for this procedure can be found in the [StarlingX PTP documentation](https://docs.
starlingx.io/admintasks/kubernetes/install-ptp-notifications.html)

The application consists of three logical functions for handling the tracking of timing state, the
delivery of push notifications and the registration of subscribers for notifications.

![alt text](/img/ptp-notification-functions.png)


## The ptp-notification API
Ptp-notification provides a REST API for user applications to interact with. In the StarlingX
documentation, it is referred to as the "v2 API", which implements the O-RAN standard. The v1 API
predates the O-RAN standard and is not recommended for use in new deployments.

Check out the [v2 API](https://docs.starlingx.io/api-ref/ptp-notification-armada-app/api_ptp_notifications_definition_v2.html) documentation for more details.
[here](https://docs.starlingx.io/api-ref/ptp-notification-armada-app/api_ptp_notifications_definition_v2.html).

The main functions of the API are the following:

### Pull Status Notifications

These API calls allow a user application to query the current status of a given PTP component. There
is currently support status information for these components:
- ptp4l lock state
- ptp4l current clockClass
- GNSS lock state
- os-clock sync state
- overall system sync state

If there are multiples of a given component, i.e. multiple ptp4l instances, then the user can query
the status of all components at once or specify a single instance to receive only information about
that one.

To query the lock-state of a ptp4l instance:

```
curl -v -H 'Content-Type: application/json' \
http://127.0.0.1:8080/ocloudNotifications/v2/././sync/ptp-status/lock-state/CurrentState

```

A successful API request returns a JSON response with the state of the component:

```json
{
   "ptp-inst1": {
      "id": "ee37956c-5fed-4414-abce-d8de44fa6718",
      "specversion": "1.0",
      "source": "/sync/ptp-status/lock-state",
      "type": "event.sync.ptp-status.ptp-state-change",
      "time": "2022-09-09T15:57:40078919Z",
      "data": {
         "version": "1.0",
         "values": [
            {
               "data_type": "notification",
               "ResourceAddress": "/././sync/ptp-status/lock-state",
               "value_type": "enumeration",
               "value": "LOCKED"
            }
         ]
      }
   }
}
```

### Create and manage subscriptions

User applications can be configured to subscribe to and receive push notifications from the
ptp-notification app.

To create a subscription:

```
curl -v -d '{"ResourceAddress": "/east/controller-0/sync/sync-status/sync-state", "EndpointUri": "http://127.0.0.1:9090/v2/resource_status/ptp"}' \
-H 'Content-Type: application/json' -X POST \
http://127.0.0.1:${SIDECAR_API_PORT}/ocloudNotifications/v2/subscriptions
```

This returns a SubscriptionID that can be used to query the state of the subscription or to delete
the subscription using GET or DELETE calls.

```json
{
    "EndpointUri": "http://127.0.0.1:9090/v2/resource_status/ptp",
    "ResourceAddress": "/./controller-0/sync/sync-status/sync-state",
    "SubscriptionId": "ca244f8a-1fec-11ed-854c-8a6cf180560d",
    "UriLocation": "http://127.0.0.1:8080/ocloudNotifications/v2/subscriptions/ca244f8a-1fec-11ed-854c-8a6cf180560d"
}
```

After a successful subscription, the user application will receive an initial notification of the
current resource state and then subsequent notifications any time the resource state changes. For
example, if the ptp4l resource degrades to the Holdover state, each subscriber would receive this
notification:

```json
{
    "id": "d38af5a6-70bb-4b3d-892a-df50cf2fdb09",
    "specversion": "1.0",
    "source": "/sync/sync-status/sync-state",
    "type": "event.sync.sync-status.synchronization-state-change",
    "time": "2022-08-12T19:20:54896244Z",
    "data": {
      "version": "1.0",
      "values": [
         {
            "data_type": "notification",
            "ResourceAddress": "/././sync/sync-status/sync-state",
            "value_type": "enumeration",
            "value": "HOLDOVER"
         }
      ]
   }
}
```


# The ptp-notification sidecar

In order to simplify the use of the ptp-notification API, StarlingX provides the "notificationclient"
container image which can be deployed as a sidecar alongside user applications. User applications
can then make their API requests via the notification client. The notification client container
handles the process of locating the appropriate notification server and tracking active
subscriptions for the user application.

An example of integrating the notification client as a sidecar is available in the [related StarlingX documentation](https://docs.starlingx.io/guest_integration/kubernetes/integrate-application-with-notification-client-sidecar.html).

A StarlingX system running the ptp-notification application and client sidecar allows user
applications to have clear and up-to-date picture of the system's timing synchronization state. This
enables timing sensitive applications to take appropriate steps when timing accuracy degrades.

The StarlingX community is continuously working on enhancements to the PTP support in the platform. 
Stay tuned for an upcoming blog post describing recent work on a High Availability solution for
phc2sys, which allows multiple clock sources to synchronize the system clock.

If you would like to learn more about the project and get involved check the 
[website](https://www.starlingx.io) for more information or 
[download the code](https://opendev.org/starlingx) and start to experiment with the platform.
If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.




---
templateKey: blog-post
title: Taking timing to the Edge with PTP and TSN – Part 3
author: Udi Schwager   
date: 2021-07-26T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Learn more about how to configure StarlingX to use it with Precision Time Protocol (PTP).<!-- more -->

In [part 1](https://www.starlingx.io/blog/starlingx-ptp-part-1.html) and [part 2](https://www.starlingx.io/blog/starlingx-ptp-part-2.html)  we discussed how important PTP (Precision Time Protocol) is for applications that need high precision in a granularity of microseconds and how this ability is provided by StarlingX.

Beyond ensuring the proper synchronization of the clocks around the system it is also important to be able to manage a PTP network and be aware of any issues that the system might be facing. Status notifications which you can subscribe to through the StarlingX platform, provide important information about the system health. This article will give you an example to why it is crucial to have and guide you through how to set it up in your environment.

To describe the use case the best, let's take a look at the the telecom market as synchronizing mobile phone tower transmissions is one of the primary use cases for PTP. A virtualized Radio Access Network (vRAN) environment contains disaggregated functions compared to a traditional RAN setup which allows to move real time functions, combined in the virtual distributed unit (vDU) out to the edge while keeping the more compute-intensive, non-real-time ones in a central data center as part of the virtual central unit (vCU).

In this setup, if a vDU application transitions to the 'FREERUN' state, because the synchronizing network delivers unacceptable synchronization quality, it should immediately disable radio frequency (RF) transmission and keep it turned off until proper synchronization is reacquired. But here comes the obstacle, just like other functionality in the applications, PTP also relies on a hardware resource, namely the physical hardware clock (PHC). In order to follow the state of the synchronization system the application would need to have access to the underlying hardware layer which is ncan get complicated in virtualized and cloud environments. On one hand, he application needs to know what mechanism is offered by the cloud in order to monitor the synchronization state (e.g. ptp4l, ts2phc). On the other hand, t needs to have privileged access that is typically a level that admins hold and that does not get provided to the application layer in a cloud solution.

StralingX addressed the above challenges by providing a subscription framework that gives the hosted applications the ability to subscribe and receive PTP status notifications. This framework is used as an abstraction layer between the application and the platform, keeping the platform secure and provides an easy way for the applications to request PTP notifications. This functionality is accessible via [REST API](https://docs.starlingx.io/api-ref/ptp-notification-armada-app/index.html). Please note that this API only covers subscription to PTP status notifications but may expand in the future to provide status notifications for other resources as well, such as FPGAs.

The subscription mechanism provides the following features and values to applications:
- Subscription triggers the readiness of the application to receive the notifications
- The application will be able to subscribe to resource status notifications offered by the cloud, currently only for PTP status notifications but can expand to other resources
- Upon subscription the application will receive the initial resource status notification (currently PTP)
- The subscription mechanism requires an endpoint URI (callback URI) which provides a safe method for multiple applications to subscribe to the same notifications 
- This new component can report to the applications in case the requested notifications are not available in which case the platform will deny the subscription request

Please note that in addition to subscription StarlingX also provides the applications the ability to pull the status notification on demand.

Below you can find an examples that describe how an application subscribes to PTP status notifications, receives an event when there is a change to the PTP synchronization state and how it can pull for the current PTP status.

Create Subscription for PTP Status Notifications:
`curl -v -d '{"SubscriptionId":"","ResourceType": "PTP", "ResourceQualifier": {"NodeName": "controller-0"}, "EndpointUri": "http://127.0.0.1:9090/v1/resource_status/ptp"}' -H 'Content-Type: application/json' -X POST http://127.0.0.1:${SIDECAR_API_PORT}/ocloudNotifications/v1/subscriptions`

Application receives a PTP event:
`PtpStatus (latency:237664010.379ms):node controller-0 in Locked state with timestamp 1618188990.276201 2021-04-14 18:57:34,287 [INFO    ] [pecan.commands.serve][MainThread] "POST /v1/resource_status/ptp HTTP/1.1" 204 0`

Application pulls the current PTP status:
`curl -v  -H 'Content-Type: application/json' http://127.0.0.1:8080/ocloudNotifications/v1/PTP/CurrentState`

For more information about installing and using PTP with Starlingx check out the [project documentation](https://docs.starlingx.io/guest_integration/kubernetes/index.html).

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform.

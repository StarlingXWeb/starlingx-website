---
templateKey: blog-post
title: A Tutorial to Configure Dual-Stack (IPv4/IPv6) Support in StarlingX 10.0
author: Andre Kantek
date: 2025-05-06T01:32:05.627Z
category:
  - label: Features & Updates
    id: category-A7fnZYrE1
---

StarlingX, an open source distributed cloud platform, now supports dual-stack functionality on its platform networks (OAM, management, cluster-host, cluster-pod, cluster-service, admin, storage, and multicast), enabling it to operate with both IPv4 and IPv6 L3 protocols. This enhanced capability offers greater flexibility and scalability for network deployments by allowing the user's Kubernetes applications to operate simultaneously on both address families if needed.

# Key Features and Considerations

In this section you can find some highlights about what and how you can configure to use dual-stack mode, or switch between single and dual-stack, along with some limitations to this feature. For further information about the feature and its usage, please refer to the [dual-stack feature documentation](https://docs.starlingx.io/system_configuration/kubernetes/dual-stack-support-318550fd91b5.html).

## Address Pool Management

As the feature’s name suggests, two address pools are required for dual-stack operation, with the first one linked to the network at creation. This also means that the primary pool cannot be removed later, while removing the second pool can transform the system into a single-stack mode. As the dual-stack support is still new in the platform, there are some additional limitations to this configuration options, for example, the pxeboot network currently only supports IPv4.

## Installation Bootstrap

Dual-stack installations require specifying secondary subnets in bootstrap variables using comma-separated values. The order of network listing determines primary and secondary address pools, for instance, in `external_oam_subnet: fd00::/64,10.20.2.0/24`,  'fd00::/64' is the primary. You will also need to remember that all primary subnets must use the same address family.

## Distributed Cloud Operations

The Distributed Cloud architecture is what differentiates StarlingX from most other cloud platforms, and therefore it has been crucial that it supports the dual-stack configuration option as well. Subclouds can be installed in dual-stack mode if their version is new enough to support it. When this setup is used, all operational communication between the system controller and subclouds uses the primary address pool.

It is also important to note, that the System Controller and subclouds can operate in different network modes, however, they must share the same primary address family in the OAM and management networks (for subclouds this can be OAM and admin networks). The geo-redundancy feature also uses the primary pools to communicate.

## Kubernetes Configuration

When dual-stack mode is used with Kubernetes, the OAM, cluster-host, cluster-service, and cluster-pod networks must be configured for dual-stack support. And be mindful that runtime changes trigger quick restarts for the kube-apiserver and kube-controller-manager pods.

Once the system is deployed and configured, new pods will automatically receive both primary and secondary addresses. At the same time, existing pods may retain their current primary addresses and require restarts to acquire secondary addresses. 

## Runtime Configuration

You can also update a running system to use dual-stack, follow the steps outlined in the [documentation](https://docs.starlingx.io/system_configuration/kubernetes/dual-stack-support-318550fd91b5.html), which include adding address pools and associating them with networks. In the scenario of reverting to single-stack configuration, you will need to remove the network association with the address pool.

# Configuring a Kubernetes network with dual-stack

This section will show an example on how to use pods that have access to both address families. For more information:
- https://kubernetes.io/docs/concepts/services-networking/dual-stack/
- https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/dual-stack-support/

Each platform network can be associated to two pools (one IPv4 and another IPv6). The order it is done defines the primary and secondary pool for that network.

The Kubernetes network can also receive dual-stack properties, allowing the pods to use IPv4 and/or IPv6 on their operations. It becomes available when the OAM, cluster-host, cluster-pod, and cluster-service networks are configured as dual-stack.

## Bootstrap

The dual-stack service requires that OAM, cluster-host, cluster-pod, and cluster-service networks be configured with both address families separated by a comma in the bootstrap's localhost file:
```
pxeboot_subnet: 192.168.202.0/24 
external_oam_subnet: fd00::/64,10.20.2.0/24 
external_oam_gateway_address: fd00::1,10.20.2.1 
external_oam_floating_address: fd00::3,10.20.2.3 
external_oam_node_0_address: fd00::4,10.20.2.4 
external_oam_node_1_address: fd00::5,10.20.2.5 
management_subnet: fd01::/64 
management_start_address: fd01::2 
management_end_address: fd01::ffff 
cluster_host_subnet: aefd:205::/64,192.168.205.0/24 
cluster_pod_subnet: aefd:206::/64,172.16.0.0/16 
cluster_service_subnet: aefd:aaa::/112,10.96.0.0/12 
```

## Runtime with CLI

This example is considering an AIO-DX installed as IPv6 single-stack.

The list of created networks shows the primary pool ID:

```
# system network-list 
+----+------...--+-----------------+-----------------+---------+-----------...--+---------------------+
| id | uuid ...  | name            | type            | dynamic | pool_uuid ...  | primary_pool_family |
+----+------...--+-----------------+-----------------+---------+-----------...--+---------------------+
| 1  | 41eda...e | mgmt            | mgmt            | True    | 0648baa4-2...f | IPv6                |
| 3  | 484d1...6 | oam             | oam             | False   | cf5f9fe3-d...4 | IPv6                |
| 4  | 73fd5...0 | multicast       | multicast       | False   | 499fac20-6...e | IPv6                |
| 2  | 7ce78...5 | pxeboot         | pxeboot         | True    | 765cc97b-b...7 | IPv4                |
| 5  | 82427...7 | cluster-host    | cluster-host    | True    | 1db96471-f...b | IPv6                |
| 7  | b3c0a...f | cluster-service | cluster-service | False   | d6318027-3...5 | IPv6                |
| 6  | f6349...b | cluster-pod     | cluster-pod     | False   | c311c1d6-8...a | IPv6                |
+----+------...--+-----------------+-----------------+---------+-----------...--+---------------------+
```
The relationship between address pool and network is also shown with `network-addrpool-list`:
```
# system network-addrpool-list 
+--------------------------------------+-----------------+-----------------------------+
| uuid                                 | network_name    | addrpool_name               |
+--------------------------------------+-----------------+-----------------------------+
| be3afd5d-ef21-495c-b5a7-1494c7b040fc | cluster-host    | cluster-host-subnet-ipv6    |
| 5530e24c-f868-4cca-9dcc-ba860078a83d | cluster-pod     | cluster-pod-subnet-ipv6     |
| 536ef1c5-a425-4b94-819a-32849703ec69 | cluster-service | cluster-service-subnet-ipv6 |
| a061620b-bc27-443b-a0d6-10dafbaae50e | mgmt            | management-ipv6             |
| 90523d67-6320-4c06-8c45-90dfab4ed3b6 | multicast       | multicast-subnet-ipv6       |
| 26e5cc6f-cfa8-46f4-8432-8f6cab3e1c82 | oam             | oam-ipv6                    |
| dbaea2d7-c22a-48ec-83d3-314ae26f7d30 | pxeboot         | pxeboot                     |
+--------------------------------------+-----------------+-----------------------------+
```
The actual addresses that will be used by the system can be seen with `addrpool-list`:
```
# system addrpool-list 
+------...--+-----------------------------+---------------+--------+--------+---------------------------------------+---...-+
| uuid ...  | name                        | network       | prefix | order  | ranges                                | fl... |
+------...--+-----------------------------+---------------+--------+--------+---------------------------------------+---...-+
| 1db96...b | cluster-host-subnet-ipv6    | fd02::        | 64     | random | ['fd02::1-fd02::ffff:ffff:ffff:fffe'] | fd... |
| c311c...a | cluster-pod-subnet-ipv6     | fd03::        | 64     | random | ['fd03::1-fd03::ffff:ffff:ffff:fffe'] | No... |
| d6318...5 | cluster-service-subnet-ipv6 | fd04::        | 112    | random | ['fd04::1-fd04::fffe']                | No... |
| 0648b...f | management-ipv6             | fd01::        | 64     | random | ['fd01::1-fd01::ffff']                | fd... |
| 499fa...e | multicast-subnet-ipv6       | ff08::1:1:0   | 124    | random | ['ff08::1:1:1-ff08::1:1:e']           | No... |
| cf5f9...4 | oam-ipv6                    | fd00::        | 64     | random | ['fd00::1-fd00::ffff:ffff:ffff:fffe'] | fd... |
| 765cc...7 | pxeboot                     | 169.254.202.0 | 24     | random | ['169.254.202.1-169.254.202.254']     | 16... |
+------...--+-----------------------------+---------------+--------+--------+---------------------------------------+---...-+
```
The first step is to add the secondary OAM address pool and associate it to the network
```
system addrpool-add oam-ipv4 10.10.204.0 24 --order random --ranges 10.10.204.1-10.10.204.253 \
 --floating-address 10.10.204.1 --controller0-address 10.10.204.2 --controller1-address 10.10.204.3 \
 --gateway-address 10.10.204.254

system network-addrpool-assign oam oam-ipv4  
```
Since this system is AIO-DX it will trigger a "Configuration is out-of-date" alarm for both controllers, it will require a lock/unlock cycle.
```
system host-lock controller-1
system host-unlock controller-1
system host-swact controller-0
system host-lock controller-0
system host-unlock controller-0
system host-swact controller-1
```
For AIO-SX systems the step above isn't necessary, as OAM reconfiguration is done at runtime.

The next step is to add the cluster pools and associate them with their networks:
```
system addrpool-add cluster-pod-ipv4 172.16.0.0 16 --order random --ranges 172.16.0.1-172.16.254.254 
system addrpool-add cluster-service-ipv4 10.96.0.0 12 --order random --ranges 10.96.0.1-10.96.254.254
system addrpool-add cluster-host-ipv4 171.168.204.0 24 --order random --ranges 171.168.204.1-171.168.204.254 \
 --floating-address 171.168.204.1 --controller0-address 171.168.204.2 --controller1-address 171.168.204.3

system network-addrpool-assign cluster-service cluster-service-ipv4 
system network-addrpool-assign cluster-pod cluster-pod-ipv4 
system network-addrpool-assign cluster-host cluster-host-ipv4  
```
This operation will trigger a runtime Kubernetes and Calico configuration update to make dual-stack available. This involves a quick restart of the kube-apiserver and kube-controller-manager pods on both controllers. Pods that need to use the new cluster-pod network and already exist prior to this configuration change, will require a restart to gain the new addresses.

To revert back to single-stack, it is necessary to remove the secondary pool from all cluster networks (host, pod, and service).
```
DEL=$(system network-addrpool-list | awk '$6 == "cluster-pod-ipv4" { print $2 }') && system network-addrpool-remove $DEL
DEL=$(system network-addrpool-list | awk '$6 == "cluster-service-ipv4" { print $2 }') && system network-addrpool-remove $DEL
DEL=$(system network-addrpool-list | awk '$6 == "cluster-host-ipv4" { print $2 }') && system network-addrpool-remove $DEL
```
It also involves a quick restart of kube-apiserver and kube-controller-manager and the existing user pods need to be restarted.

## Kubernetes deployment example

Below you can see a small sample to create a deployment to use the dual-stack configuration, there are no special parameters:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  labels:
    app: dualstackpod
  name: dualstackpod
spec:
  replicas: 2
  selector:
    matchLabels:
      app: dualstackpod
  template:
    metadata:
      labels:
        app: dualstackpod
    spec:
      containers:
      - image: centos/tools
        imagePullPolicy: IfNotPresent
        name: dualstackpod
        command: [ "/bin/bash", "-c", "--" ]
        args: [ "while true; do sleep 300000; done;" ]
```
After pod creation it will be possible to see the pod addresses from both cluster-pod pools:
```
# kubectl get pods -o wide 
NAME                            READY   STATUS    RESTARTS   AGE   IP                          NODE           NOMINATED NODE   READINESS GATES
dualstackpod-7f9d746fc4-6k55x   1/1     Running   0          25s   fd03::a4ce:fec1:5423:e311   controller-1   <none>           <none>
dualstackpod-7f9d746fc4-g97jp   1/1     Running   0          25s   fd03::8e22:765f:6121:eb61   controller-0   <none>           <none>

# kubectl exec -it dualstackpod-7f9d746fc4-6k55x -- ip -br -c addr
lo               UNKNOWN        127.0.0.1/8 ::1/128 
eth0@if24        UP             172.16.166.129/32 fd03::a4ce:fec1:5423:e311/128 fe80::c4f:9ff:feb2:46cc/64 

# kubectl exec -it dualstackpod-7f9d746fc4-g97jp -- ip -br -c addr
lo               UNKNOWN        127.0.0.1/8 ::1/128 
eth0@if18        UP             172.16.192.65/32 fd03::8e22:765f:6121:eb61/128 fe80::c024:64ff:fe41:fd3a/64 
```
The service requires the dual-stack information, like the example here:
```yaml
apiVersion: v1
kind: Service
metadata:
  labels:
    app: dualstackpod
  name: dualstackpod-svc
spec:
  ipFamilyPolicy: PreferDualStack
  ipFamilies:
  - IPv6
  - IPv4
  ports:
  - name: dualstackpod-udp
    port: 5201
    protocol: UDP
    targetPort: 35201
  - name: dualstackpod-tcp
    port: 5201
    protocol: TCP
    targetPort: 35201
  selector:
    app: dualstackpod
  type: ClusterIP
```
It will select 2 addresses (IPv4 and IPv6) to make the L4 ports available:
```
# kubectl get service dualstackpod-svc 
NAME               TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)             AGE
dualstackpod-svc   ClusterIP   fd04::4627   <none>        5201/UDP,5201/TCP   9m12s

# kubectl get service dualstackpod-svc -o yaml | grep -A8 "clusterIP:"
  clusterIP: fd04::4627
  clusterIPs:
  - fd04::4627
  - 10.104.245.67
  internalTrafficPolicy: Cluster
  ipFamilies:
  - IPv6
  - IPv4
  ipFamilyPolicy: PreferDualStack
```

# Conclusion

StarlingX's dual-stack support provides enhanced flexibility and scalability for network deployments. By understanding the key features, configuration steps, and considerations outlined in this guide, you can effectively leverage dual-stack capabilities in your StarlingX environment.

For more information please check out the [dual-stack feature section](https://docs.starlingx.io/system_configuration/kubernetes/dual-stack-support-318550fd91b5.html) in the StarlingX project documentation.

# About StarlingX

For the complete list of updates and new features in StarlingX 10.0, check out the [release notes](https://docs.starlingx.io/releasenotes) and the [project documentation](https://docs.starlingx.io).

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.
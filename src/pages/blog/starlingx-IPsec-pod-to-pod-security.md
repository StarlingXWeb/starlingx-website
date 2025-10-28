---
templateKey: blog-post
title: Secure Inter-Host Pod-to-Pod Network Traffic Using IPsec
author: Andy Ning
date: 2025-12-02T01:32:05.627Z
category:
  - label: Features & Updates
    id: category-A7fnZYrE1
---
# Overview
In the 11.0 release of StarlingX, a new feature called IPsec pod-to-pod security has been introduced. With this feature, you can selectively configure inter-host pod-to-pod traffic for a service to be protected by IPsec in tunnel mode over the cluster host network.

This feature strengthens security across the StarlingX platform. It protects selected pod-to-pod network traffic from both passive and active network attackers including those with access to the cluster host network.

- Passive attackers: Defend against traffic snooping and unauthorized data observation.
- Active attackers: Blocked from attempting unauthorized connections to system's cluster-host network.

# How to use it
Configurations for the selected traffic are defined as IPsec policies and managed by the ipsec-policy-operator Kubernetes system application.

Ipsec-policy-operator is an optional platform system application. IPsec policies are Kubernetes custom resources (CRs) complying with ipsecpolicies.starlingx.io Custom Resource Definition (CRD). You can create, update, and delete IPsec policy for services. Based on the user defined IPsec policies, the ipsec-policy-operator system application will configure/reconfigure IPsec on the cluster network to protect (or unprotect) the inter-host pod-to-pod traffic for the services.

You need to install the ipsec-policy-operator system application first in order to protect the inter-host pod-to-pod traffic for services. Once installed, you can then define IPsec policies in a yaml file and apply the yaml file using the "kubectl" command to create IPsec policies for the services.

You can update the existing IPsec polices by updating and re-applying the yaml file, or using the "kubectl edit" command to update existing policy CRs directly.

You can also delete an IPsec policy so that the specific traffic will no longer be protected by IPsec.

# Install IPsec Policy Operator System Application
The ipsec-policy-operator system application is managed by the system application framework and will be automatically uploaded after the system is deployed. You can install it by applying the system application running the following command:
```
~(keystone_admin)$ system application-apply ipsec-policy-operator
```
Once the system application is installed, ipsecpolicies.starlingx.io CRD will be created.

# Configure IPsec for Selected Inter-host Pod-to-pod Traffic using IPsec Policies
## Prerequisites
The ipsec-policy-operator application must be installed and in the 'applied' state before configuring the IPsec policies CRD.

## Procedure
**1. Create an IPsec policy:**
  You can define an IPsec policy in a yaml file. The following is an example of a yaml file that defines IPsec policies to protect kube-dns service in the kube-system namespace, for traffic on the serving ports TCP 53 and 9153, and UDP 53, and to protect cm-cert-manager service in the cert-manager namespace, for traffic on the serving port TCP 9402:

```
apiVersion: starlingx.io/v1
kind: IPsecPolicy
metadata:
  labels:
    app.kubernetes.io/name: ipsec-policy-manager-operator
    app.kubernetes.io/managed-by: kustomize
  name: ipsecpolicy-kube-dns-sample
spec:
  policies:
    - name: kube-dns
      servicename: kube-dns
      servicens: kube-system
      serviceports: udp/53,tcp/53,tcp/9153
    - name: cert-manager
      servicename: cm-cert-manager
      servicens: cert-manager
      serviceports: tcp/9402
```
Create the IPsec policy by applying it with the following command:

```
~(keystone_admin)$ kubectl apply -f <policy yaml file>
```
After the IPsec policy is created, IPsec will be reconfigured to establish tunnels to protect the traffic for the service and ports specified in the policy.
The IPsec policy can be checked by running the following command:

```
~(keystone_admin)$ kubectl get ipsecpolicies
```

**2. Check the IPsec tunnels for the protected services:**
After the policies are created, platform IPsec will be reconfigured and IPsec SAs in tunnel mode will be established among hosts. Inter-host pod-to-pod traffic will then go through these IPsec tunnels.

The IPsec SAs on controller-0 is as follows:

```
[sysadmin@controller-0 ~(keystone_admin)]$ sudo swanctl --list-sa
Password:
k8s-node-controller-1: #2740, ESTABLISHED, IKEv2, 69aa6987b09b40eb_i* 9058f37222979fcd_r
  local  'CN=ipsec-controller-0' @ 192.168.206.2[4500]
  remote 'CN=ipsec-controller-1' @ 192.168.206.3[4500]
  AES_CBC-128/HMAC_SHA2_256_128/PRF_AES128_XCBC/MODP_3072
  established 34s ago, rekeying in 2705s, reauth in 722s
  udp_kube-dns_egress: #232, reqid 2, INSTALLED, TUNNEL, ESP:AES_GCM_16-128
    installed 879s ago, rekeying in 2558s, expires in 3081s
    in  c81f7511,  13558 bytes,    82 packets,    14s ago
    out ca8bfcd7,   7500 bytes,    82 packets,    14s ago
    local  172.16.192.64/26[udp]
    remote 172.16.166.178/32[udp/domain]
  udp_kube-dns_ingress: #233, reqid 3, INSTALLED, TUNNEL, ESP:AES_GCM_16-128
    installed 724s ago, rekeying in 2657s, expires in 3236s
    in  c25b22fc,   1800 bytes,    24 packets,    19s ago
    out c10f8157,   3456 bytes,    24 packets,    19s ago
    local  172.16.192.115/32[udp/domain]
    remote 172.16.166.128/26[udp]
k8s-node-worker-0: #2736, ESTABLISHED, IKEv2, 4c65d0b8a7510d28_i b03433939e605003_r*
  local  'CN=ipsec-controller-0' @ 192.168.206.2[4500]
  remote 'CN=ipsec-worker-0' @ 192.168.206.66[4500]
  AES_CBC-128/HMAC_SHA2_256_128/PRF_AES128_XCBC/MODP_3072
  established 1217s ago, rekeying in 1379s, reauth in 12434s
  udp_kube-dns_ingress: #231, reqid 11, INSTALLED, TUNNEL, ESP:AES_GCM_16-128
    installed 1217s ago, rekeying in 2215s, expires in 2743s
    in  c30805c9,      0 bytes,     0 packets
    out ce3a2304,      0 bytes,     0 packets
    local  172.16.192.115/32[udp/domain]
    remote 172.16.43.0/26[udp]
```
In the above output:

- DNS traffic (that is, DNS queries and responses) between any pods running on controller-0 and UDP port 53 of kube-dns service pods running on controller-1, will go through IPsec SA k8s-node-controller-1.udp_kube-dns_egress.
- DNS traffic (that is, DNS queries and responses) between any pods running on controller-1, and UDP port 53 of kube-dns service pods running on controller-0, will go through IPsec SA k8s-node-controller-1.udp_kube-dns_ingress.
- DNS traffic (that is, DNS queries and responses) between any pods running on worker-0, and UDP port 53 of kube-dns service pods running on controller-0, will go through IPsec SA k8s-node-worker-0.udp_kube-dns_ingress.

Similarly, the IPsec SAs on controller-1 is as follows:

```
sysadmin@controller-1:~$ sudo swanctl --list-sa
Password:
k8s-node-controller-0: #174, ESTABLISHED, IKEv2, 659eb03ee57aa0f2_i bfe4fda94539ae8d_r*
  local  'CN=ipsec-controller-1' @ 192.168.206.3[4500]
  remote 'CN=ipsec-controller-0' @ 192.168.206.2[4500]
  AES_CBC-128/HMAC_SHA2_256_128/PRF_AES128_XCBC/MODP_3072
  established 1323s ago, rekeying in 2181s, reauth in 12993s
  udp_kube-dns_ingress: #205, reqid 3, INSTALLED, TUNNEL, ESP:AES_GCM_16-128
    installed 1323s ago, rekeying in 2016s, expires in 2637s
    in  cb0b1818,  11976 bytes,   128 packets,    23s ago
    out ca5bd520,  21544 bytes,   128 packets,    23s ago
    local  172.16.166.178/32[udp/domain]
    remote 172.16.192.64/26[udp]
  udp_kube-dns_egress: #206, reqid 2, INSTALLED, TUNNEL, ESP:AES_GCM_16-128
    installed 1298s ago, rekeying in 1967s, expires in 2662s
    in  c11916c1,   6912 bytes,    48 packets,    31s ago
    out c1f452cf,   3600 bytes,    48 packets,    31s ago
    local  172.16.166.128/26[udp]
    remote 172.16.192.115/32[udp/domain]
k8s-node-worker-0: #173, ESTABLISHED, IKEv2, 7d2e6d327cb71be2_i 4b0aefe2ed367e48_r*
  local  'CN=ipsec-controller-1' @ 192.168.206.3[4500]
  remote 'CN=ipsec-worker-0' @ 192.168.206.66[4500]
  AES_CBC-128/HMAC_SHA2_256_128/PRF_AES128_XCBC/MODP_3072
  established 1393s ago, rekeying in 1557s, reauth in 11731s
  udp_kube-dns_ingress: #204, reqid 10, INSTALLED, TUNNEL, ESP:AES_GCM_16-128
    installed 1393s ago, rekeying in 2024s, expires in 2567s
    in  c171851d,      0 bytes,     0 packets
    out c04ec9b1,      0 bytes,     0 packets
    local  172.16.166.178/32[udp/domain]
    remote 172.16.43.0/26[udp]
```

And the IPsec SAs on worker-0 is as follows:

```
sysadmin@worker-0:~$ sudo swanctl --list-sa
Password: k8s-node-controller-0: #143, ESTABLISHED, IKEv2, b20390e5aa9880c8_i* 43a431724a5da2b0_r
  local  'CN=ipsec-worker-0' @ 192.168.206.66[4500]
  remote 'CN=ipsec-controller-0' @ 192.168.206.2[4500]
  AES_CBC-128/HMAC_SHA2_256_128/PRF_AES128_XCBC/MODP_3072
  established 1470s ago, rekeying in 854s, reauth in 10706s
  udp_kube-dns_egress: #128, reqid 3, INSTALLED, TUNNEL, ESP:AES_GCM_16-128
    installed 1471s ago, rekeying in 1954s, expires in 2490s
    in  c2db53f4,      0 bytes,     0 packets
    out cf6f85e6,   6148 bytes,   100 packets,    92s ago
    local  172.16.43.0/26[udp]
    remote 172.16.192.115/32[udp/domain]
k8s-node-controller-1: #142, ESTABLISHED, IKEv2, 7d2e6d327cb71be2_i* 4b0aefe2ed367e48_r
  local  'CN=ipsec-worker-0' @ 192.168.206.66[4500]
  remote 'CN=ipsec-controller-1' @ 192.168.206.3[4500]
  AES_CBC-128/HMAC_SHA2_256_128/PRF_AES128_XCBC/MODP_3072
  established 1574s ago, rekeying in 1451s, reauth in 10110s
  udp_kube-dns_egress: #127, reqid 8, INSTALLED, TUNNEL, ESP:AES_GCM_16-128
    installed 1574s ago, rekeying in 1772s, expires in 2386s
    in  c04ec9b1,      0 bytes,     0 packets
    out c171851d,   8957 bytes,   143 packets,    31s ago
    local  172.16.43.0/26[udp]
    remote 172.16.166.178/32[udp/domain]
```

Notes:
  - The IPsec child SA is configured with start_action = trap. This means that the IPsec tunnels will only be established when there is matching traffic. In the above example, policies are defined and created for kube-dns on UDP port 53, TCP port 53 and 9153, and for cert-manager on TCP port 9402. However, as there is only existing traffic that matches the policies for kube-dns on UDP port 53, there are only IPsec tunnels established for kube-dns on UDP port 53.
  - You can create the IPsec policies before or after a service is deployed. You can create the policies as part of the service deployment.

**3. Update the IPsec policy:**
The existing IPsec policies can be updated by running the following command:

```
~(keystone_admin)$ kubectl edit ipsecpolicies <ipsec policy>
```

You can also change the existing policy by updating the original yaml file, then re-applying it.
The following updated yaml file removes UDP port 53 from the policy. When applied, only TCP traffic on port 53 and 9153 are protected by IPsec.

```
apiVersion: starlingx.io/v1
kind: IPsecPolicy
metadata:
  labels:
    app.kubernetes.io/name: ipsec-policy-manager-operator
    app.kubernetes.io/managed-by: kustomize
  name: ipsecpolicy-kube-dns-sample
spec:
  policies:
    - name: kube-dns
      servicename: kube-dns
      servicens: kube-system
      serviceports: tcp/53,tcp/9153
    - name: cert-manager
      servicename: cm-cert-manager
      servicens: cert-manager
      serviceports: tcp/9402
```

**4. Check the IPsec tunnels after the IPsec policies of services are updated:**
After the policies are updated, platform IPsec will be reconfigured and the IPsec SAs in tunnel mode for the removed services’ ports will be removed. Inter-host pod-to-pod traffic on the removed ports will no longer go through IPsec.

You can check the IPsec SAs and tunnels by running the following command:

```
~(keystone_admin)$ sudo swanctl --list-sa
```

**5. Remove an IPsec policy:**
You can remove existing IPsec policies by running the following command:

```
~(keystone_admin)$ kubectl delete ipsecpolicies <ipsec policy>
```

After the IPsec policy is removed, the service’s traffic on the specified ports are no longer protected by IPsec.


# Remove Ipsec-policy-operator System Application
If required, you can remove the ipsec-policy-operator system application by running the following command:

```
~(keystone_admin)$ system application-remove ipsec-policy-operator
```

Once the system application is removed (it will still be uploaded), all the resources created by the system application installation will also be removed including the system application pods, IPsec policy CRD, all the IPsec policies, etc. Also, no inter-host pod-to-pod traffic will be protected by IPsec.

You can reinstall the system application by running the following command:

```
~(keystone_admin)$ system application-apply ipsec-policy-operator
```

To uninstall the ipsec-policy-operator system application from the cluster, run the following command:

```
~(keystone_admin)$system application-delete ipsec-policy-operator
```

# References
Please reference to the following documents for more details:

- [StarlingX Security: Secure Inter-host Pod-to-pod Network Traffic](https://docs.starlingx.io/security/kubernetes/index-security-kub-81153c1254c3.html#secure-inter-host-pod-to-pod-network-traffic)
- [StarlingX UserTasks: Secure Inter-host Pod-to-pod Network Traffic for Services](https://docs.starlingx.io/usertasks/kubernetes/index-usertasks-kub-1291759aa985.html#secure-inter-host-pod-to-pod-network-traffic-for-services)

# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.


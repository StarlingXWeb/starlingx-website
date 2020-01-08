---
title: Introducing StarlingX 3.0 with the new Distributed Cloud Architecture
author: glenn-seiler
date: 2020-01-08T01:32:05.627Z
category: news
---

Today the StarlingX project launched their third release to provide a fully featured cloud for the distributed edge.<!-- more -->

The StarlingX project has recently announced their third release. StarlingX is a pilot project supported by the OpenStack Foundation that provides a complete cloud stack designed specifically for the challenges of deploying clouds at the edge. This includes the far edge or last mile, and such use cases as on premise clouds in factories, Industrial IoT, Multi-access Edge Computing (MEC) and virtualized Radio Access Networks (vRAN), among many others.

The 3.0 release introduces some cool new features that are important for the aforementioned use cases, including an initial implementation of Time Sensitive Networking (TSN); a set of evolving standards developed by IEEE for deterministic packet delivery on Ethernet based LANs, initial support for hardware accelerators such as GPUs and FPGAs.

Continuing with the changes that were introduced in 2.0 for container support the community has been working on to polishing the architecture and further extend functionality in this area as you can see with the Distributed Cloud architecture described below. 

This release integrates the Train version of OpenStack and among other things focuses on improving the so called day-2 operations. As the edge is often a dynamic environment, the 3.0 release introduces more flexibility in managing both floating and pinned workloads on edge sites with allowing maximum flexibility when provisioning containers. Backup and restore of container workloads from a central cloud is another new feature to try out.

The StarlingX 3.0 architecture introduces the distributed cloud concept that is a new configuration option that follows the Distributed Control Plane model of the OSF Edge Computing Group’s MVP Edge [Reference Architectures](https://wiki.openstack.org/wiki/Edge_Computing_Group/Edge_Reference_Architectures). The new functionality provides central management and orchestration for a geographically distributed network of StarlingX Kubernetes edge deployments.

Some highlights from the latest release:
- Centralized orchestration of edge cloud control planes
- Full synchronized control planes at the regional edge clouds (that is, Kubernetes cluster master and nodes), with greater benefits for local services, such as:
  - Reduced network latency
  - Operational availability, even if northbound connectivity to the central cloud is lost

The system supports a scalable number of StarlingX Kubernetes edge clusters, which are centrally managed and synchronized over L3 networks from a central cloud. Each edge location is also highly scalable, from a single node StarlingX Kubernetes deployment to a full standard cloud configuration with controller, worker and storage nodes.

# The StarlingX Distributed Cloud Architecture

A distributed cloud system consists of a central cloud, and one or more subclouds connected to the System Controller , which is a central cloud region, over L3 networks as it is shown on the diagram below.

![alt text](/images/StarlingX_Distributed_Cloud_Architecture.jpg)

## Central cloud
The central cloud provides a region for managing the physical platform of the central cloud. The System Controller component is responsible for managing and orchestrating over the subclouds.  

## System Controller
In the Horizon GUI, System Controller is the name of the access mode, or region, used to manage the subclouds.

You can use it to add subclouds, synchronize select configuration data across all subclouds and monitor subcloud operations and alarms. Software updates for the subclouds are also centrally managed and applied.

DNS, NTP, and other configuration settings are centrally managed at the System Controller and pushed to the subclouds in parallel to maintain synchronization across the distributed cloud infrastructure.

## Edge Subclouds
The subclouds are StarlingX Kubernetes edge systems/clusters used to host containerized applications. Alarms raised at the subclouds are sent to the System Controller for central reporting. Any type of StarlingX Kubernetes configuration, (including single-server, dual-redundant servers, or standard cluster with or without storage nodes), can be used for a subcloud. The two edge clouds shown in Figure 1 are subclouds.

To summarize, StarlingX 3.0 provides a cloud platform that scales from a single compute node at the network edge to enable ultra-low cost deployments, up to thousands of nodes to meet the needs of high value edge applications as they grow. Remote nodes can survive isolation from the control plane and continue to operate and re-synchronize upon reconnection. All control functions can exist at all sites. Remote sites can be zero-touch enrolled and replicated across thousands of sites with fully automated deployment of known-good configurations.

For the complete list of updates and new features in StarlingX 3.0 check out the [release notes](https://docs.starlingx.io/releasenotes/r3_release.html) and further [documentation](https://docs.starlingx.io) of the project.

Visit the StarlingX website today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](http://mirror.starlingx.cengn.ca/mirror/starlingx/release/) to try out the new features.

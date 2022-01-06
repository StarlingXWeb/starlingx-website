---
templateKey: blog-post
title: StarlingX Subcloud Rehoming and Distributed Cloud Scalability Enhancements
author: Yuxing Jiang
date: 2022-01-13T14:26:09.627Z
category:
  - label: Features & Updates
    id: category-A7fnZYrE1
---

Learn more about the new feature Subcloud Rehoming and Distributed Cloud Scalability in StarlingX below. <!-- more -->

When using a StarlingX based distributed cloud (DC) system, there were two use-cases that we previously need to tear down the whole system, and set everything up again (including backup/restore of contents):

- Use-case 1: Consolidation of existing System Controller deployments.
- Use-case 2: Disaster recovery:  the central cloud is not operational due to issues that require hard disk replacement, network adapter replacement, etc., therefore it must be rebuilt or restored from a partial backup.

The whole process of recovering the DC system is a time-consuming activity, meanwhile, the edge clouds would still be operational. So migrating an edge cloud would be a useful capability. To retain an operational edge cloud, I was trying to migrate the edge cloud to another DC system manually without re-installation. This process is quite complicated due to the secure design of StarlingX.

These use cases gave rise to a new capability to ['rehome a subcloud'](https://docs.starlingx.io/dist_cloud/kubernetes/rehoming-a-subcloud.html). It is based on the idea of retaining an operational subcloud and rehoming to a new central cloud system controller. 

![alt text](/img/StarlingX_Subcloud_Rehoming.png)

With this capability, if the central cloud is down, re-installation and deployment of the edge cloud are not needed. Instead, simply restore the central cloud using a backup and “rehome” all the existing edge clouds. In the case of system controller consolidation, it enables rehoming several edge clouds to a new DC without waiting for the re-installation and re-deployment.

As we expand on the system controller consolidation, we see a need to scale its capabilities to manage more edge clouds. Adding more resources to improve scalability is a simple solution. However, there is an upper bound on the physical resources that can be allocated to various services. Beyond adding more hardware resources, we started on a journey to identify various bottlenecks in the software architecture, design, and implementation. And we took the next step to alleviate those bottlenecks by implementing various solutions. This is a continuous evolution, below are some of the notables:

- Scale Distributed Cloud Audit Service  - In a StarlingX based distributed cloud, we are relying on the audit service to monitor the status of the subclouds. Previously, it was running as a single process. With the increase of the number of edge clouds, it was too slow and not capable of auditing a large amount of the edge clouds. The audit service is now refactored from a single service to a multi-worker service so that the target subcloud audit frequency is maintained as the number of edge clouds increases.

- Eliminate Authentication overload - All the distributed cloud services leverage the OpenStack identity (Keystone) based authentication to provide secure and reliable operation. We reduced the authentication load in the central cloud by improving the endpoint cache logic and introducing the usage of the endpoint cache in various distributed cloud components. With this enhancement, the StarlingX based distributed cloud now has a higher capacity to manage more edge clouds.

- Optimize load import disk utilization to scale parallel simplex edge cloud upgrade - Redfish Virtual Media service is used to remotely manage the software on edge clouds. During a simplex edge cloud upgrade, software must be accessible and usable by every edge cloud, and the disk space becomes a bottleneck during the upgrade. To address that, the load import design was reviewed, and functionality was re-implemented to shrink the disk utilization. With the optimized load import strategy, disk space requirement was reduced by 1/3 for each edge cloud.

- Reduce CPU utilization when maintaining edge cloud availability status - Distributed Cloud manager service on the system controller is responsible for maintaining the availability status and endpoint status of all the edge clouds. Under failure conditions (network or power outage), many edge clouds could go offline at the same time. In these situations, there is a considerable workload on the manager service to update the status. This causes extremely high CPU utilization. The implementation algorithm was enhanced to eliminate unnecessary requests from audit workers to the manager service. Furthermore, the manager service was enhanced to update all the statuses of an edge cloud in a single transaction without the need for another audit. This updated algorithm significantly reduced CPU utilization and processing time on the system controller.

- Reduce distributed cloud orchestration deletion time significantly - The strategy deletion implementation algorithm is enhanced to execute in parallel on all the edge clouds. This reduces 90% of the execution time compared to previous serial execution.

With these enhancements, StarlingX can support a much larger distributed cloud with a considerably lower hardware footprint. All these updates will make StarlingX an exceptionally managed highly available solution for a broad range of potential applications.

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform.

If you are already evaluating or using the software and haven't filled out the user survey yet, you can find it [here](https://www.surveymonkey.com/r/StarlingX) to provide information about your plans and activities and help the community improve the project based on your feedback.

In the end, I would like to thank all the contributors of this blog, some key contributors are Ramaswamy Subramanian, Matt Peters, John Kung, and Tee Ngo.

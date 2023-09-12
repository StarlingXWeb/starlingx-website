---
templateKey: blog-post
title: StarlingX Sets Its Sights on the Distributed Cloud 
author: Matt Peters
date: 2023-09-18T01:32:05.627Z
category:
  - label: Features & Updates
    id: category-A7fnZYrE1
---

Learn more about enhancements that StarlingX contributors are discussing to make the platform more versatile. <!-- more -->

We often hear the cloud talked about as if it’s a single thing. Moving applications into the cloud. Managing data in the cloud. With the advent of edge computing, however, it’s clear that a distributed cloud architecture is our future, with each edge site operating as its own subcloud within a broader cloud environment. And this is a scary thought because, if managing one cloud was daunting, managing hundreds or thousands of clouds will be exponentially more costly and complex.

The IT industry has needed and been evolving toward distributed cloud architecture for some time. Kubernetes made it easier to scale applications across clouds and, now, the StarlingX community is making it easier to manage large-scale distributed cloud environments using containerized services. In order to bring more portability, flexibility, and simplicity to distributed clouds, contributors to the StarlingX community are considering several enhancements to how distributed cloud architectures are deployed and managed by the platform.

# Making hybrid cloud manageability a priority

Looking ahead, distributed cloud systems can be expected to run in a hybrid cloud configuration featuring a mix of private (either on-prem or in a hosted data center) and public cloud platforms. Today, hybrid clouds are typically managed independently as “regional” data centers, which isn’t very cost-effective or agile. StarlingX is a decoupled centralized management system that can be used to manage remote installation, configuration, and deployment across all subclouds. One of the enhancements being considered, is to make this portable to public clouds and support hybrid cloud deployments. This way the centralized control system could be deployed in a private or public cloud (e.g., Amazon, Azure, Google) for maximum flexibility and scalability.

![alt text](/img/hybrid-cloud-manageability.png)

Once the control system is centralized and made consumable by public cloud services, other opportunities naturally present themselves. For example, managed services available from cloud providers offer flexible and scalable solutions that can be directly leveraged by the distributed cloud services (e.g., RabbitMQ). And, once we have a distributed cloud architecture that is universally portable between clouds, we can simplify lifecycle management and accelerate edge deployments by using the same configuration across varying cloud platforms, including both public and private clouds.

# Building disaster recovery into distributed cloud management

Another consideration for distributed clouds is reliability. The implication is that distribution will span across different geographies, which raises the importance of reliability in each region and, by extension, geo-redundancy in the centralized control system. It would make it beneficial to add a second layer of failover mechanisms in the centralized management system that could make possible and easier to replicate it in another region, and would provide seamless transfer of control of edge devices in the event of a failure or natural disaster.

![alt text](/img/disaster-recovery.png)

A sneak peak into a potential solution indicates this replication would require organizing the subclouds that host the centralized management services into a subcloud peer group. Each peer group would have some reserved capacity so that, in the event of one of its peers becoming unavailable, the other could pick up the additional workload. In addition to capacity or availability, network topology, network performance or system characteristics could aid in the decision of where to move the subcloud management in the event of a failure.

# Network optimization for scale

Users are always in need of simpler networking and the StarlingX community has identified areas to optimize the network for improved deployment and management. The primary opportunity and requirement are to reduce the network address requirements since mass deployment involves allocating a large number of subnets to the entire distributed edge solution. This reduction can be achieved in large part by employing a shared model for network segments instead of assigning separate subnets for each platform interface and function. However, not every deployment scenario will want a shared address pool—there may be security or partitioning requirements that make it less than ideal—but having the choice means that users can now deploy their control systems in a public cloud, private cloud, fully shared model, or partitioned.

# Summary

Flexibility, portability, and simplicity will be recurring themes as StarlingX evolves to serve a growing number of industries and use cases. These improvements will foster wider adoption of a distributed cloud architecture to support the next generation of edge applications, from smart factories to smart cities.

If you are already evaluating and using the platform, and would like to participate in discussing, designing and implementing the above ideas, get in touch with the community and start participating today! 

# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

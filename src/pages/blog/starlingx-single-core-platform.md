---
templateKey: blog-post
title: StarlingX Single-Core Platform
author: Davi Frossard
date: 2023-05-25T11:14:00.000Z
category: 
  - label: Features & Updates
    id: category-A7fnZYrE1
---
Introducing the Single-Core Platform on StarlingX 8.0, for All-In-One (AIO) deployments. <!-- more -->

The [StarlingX 8.0](https://www.starlingx.io/blog/starlingx-release-8/) release came out recently with a new feature: The single physical core platform for AIO deployments. In this blog post, we will explore the changes made to the system to make this possible, and the benefits it offers.

### What is StarlingX Single-Core Platform?

Platforms that feature multiple cores and processors often consume significant amounts of computational resources. By enabling the single-core platform functionality, the system can allocate more resources to efficiently manage larger workloads. This optimization leads to enhanced resource availability for end-user applications. To prevent process starvation, the feature can only be enabled with two logical cores (Hyper-Threading enabled), ensuring proper overall parallelism and robustness for the system. To better illustrate this concept, see the diagram below:

![StarlingX Single-Core Platform Diagram](/img/single-core-diagram.png)

The use of a single physical core for platform function is only suitable for Intel® 4th Generation Xeon® Scalable Processors or above and should not be configured for previous Intel® Xeon® CPU families. For All-In-One systems with older generation processors, two physical cores (or more) must be configured.

With the introduction of StarlingX 8.0, the default number of platform cores for AIO deployments has been set to 1. This adjustment requires a careful balance to ensure that the performance remains unaffected despite having only one platform core. In the following sections, we will dive into some specific changes made to each service. By examining these modifications, we will gain a comprehensive understanding of how the system can operate in a single-core environment while preserving performance and stability.

### Platform Core Adjustments

## System Inventory

# Periodic and Runtime Tasks

Some of the sysinv-conductor and sysinv-agent periodic tasks have been redesigned. The main changes focused on refactoring legacy code, increasing time intervals, and converting periodic tasks to on-demand tasks, whenever possible.

# Remote Procedure Calls

In previous versions, RPC communication between sysinv-api, sysinv-conductor and sysinv-agent processes are performed using an openstack RPC library, with RabbitMQ as the communication transport layer. To decouple sysinv from RabbitMQ, using a brokerless solution instead, a new backend was developed. This backend was implemented using a library built on top of ZeroMQ for message queuing and MessagePack for data serialization.

## Scale-Down Services

Platform services are typically designed with threads or worker processes that are proportional to the number of available cores on the platform. However, simply reducing the number of cores to just one may not be sufficient, as each service also has a minimum scale requirement. To find a balance between minimum scale and overall performance, a scale-down approach was implemented for certain services.

This scale-down process involves reducing the number of threads and workers assigned to services such as postgres, etcd, containerd, memcached, armada, keystone, barbican, docker-registry, docker-token-server, kube-apiserver, and kubelet. It is important to note that worker allocation rules remain the same, with the changes affecting only applications that run on single core.

Numerous studies have demonstrated that optimal efficiency is achieved when the number of threads aligns with the available cores. This approach also helps to prevent any process from monopolizing the CPU, promoting fair resource allocation across the system.

## Postgres Tuning

Adjustments have been made to certain parameters of Postgres services. These modifications aim to ensure a harmonious balance between system demand and CPU usage. Specifically, changes have been implemented in the number of workers, autovacuum operators, and the frequency of autovacuum operations. By fine-tuning these aspects, the system can achieve optimal performance while efficiently managing database operations.

## Other optimizations

As part of our platform optimization efforts, we investigated services that consumed significant computational resources. This investigation led to merging related services to reduce overall overhead and removing services that were no longer necessary.

### Conclusion

In conclusion, the introduction of the single-core platform feature in StarlingX 8.0 for AIO configurations allows the system to efficiently handle larger workloads, with greater availability of resources for end-user applications. Throughout this blog post, we explored the various changes made to the system, including platform core adjustments, services scale-down, and other enhancements. These modifications ensure that even with a single platform core, the overall performance remains unaffected. With StarlingX continuous development and focus on optimizing system capabilities, it continues to be a robust and reliable platform for a wide range of applications.

For further reading, refer to the article [Single Physical Core for Platform Function in All-In-One Deployments](https://docs.starlingx.io/node_management/kubernetes/single-physical-core-for-platform-function-in-all-in-one-deployments-bec61d5a13f4.html).

For the complete list of updates and new features in StarlingX 8.0, check out the [release notes](https://docs.starlingx.io/releasenotes/r8-0-release-notes-6a6ef57f4d99.html) and the [project documentation](https://docs.starlingx.io).

Visit the StarlingX [website](https://www.starlingx.io) today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](http://mirror.starlingx.cengn.ca/mirror/starlingx/release/) to try out the new features.

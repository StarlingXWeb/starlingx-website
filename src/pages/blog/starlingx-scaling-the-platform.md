---
templateKey: blog-post
title: StarlingX - A Simple Approach to Scaling Distributed Clouds
author: Ram Subramanian, John Kung
date: 2023-10-23T01:32:05.627Z
category:
  - label: Features & Updates
    id: category-A7fnZYrE1
---

StarlingX has rich orchestration functionalities to scale your deployment from one site to many, this article will give a sneak peek into how it works. <!-- more -->

As IT workloads move to the network edge, the traditional center of the data center is changing. The applications of the future—which will leverage technologies such as 5G, artificial intelligence (AI), and the Internet of Things (IoT)—require powerful, real-time processing capabilities and low latency that benefit from placing compute, networking, and storage closer to the user or device. At the same time, cloud architectures and cloud-native and containerized applications have shown us that centralized and shared intelligence is the best way to manage network resources. This mix of localization and centralization is leading to a new kind of network, the distributed cloud.

![StarlingX Distributed Cloud Platform Diagram](/img/StarlingX_scalability.png)

StarlingX is a cross-industry initiative that addresses the need for an open, scalable, secure, and simple-to-deploy/manage distributed cloud architecture. Telecom operators have been among the first to adopt StarlingX as their distributed cloud platform, as it meets many of the needs of a distributed radio access network (RAN). Telecommunications isn’t the only segment to rely on StarlingX by any means, however. Manufacturing, aerospace, healthcare, connected vehicles, and retail are just some of the industries that stand to benefit from a distributed cloud platform.

Regardless of the use case, the questions around StarlingX inevitably turn to that of deployment and scalability. In this blog, we’ll take a closer look at a simple edge cloud deployment with StarlingX as well as some of the improvements being made in scaling these systems.

# A room with a view

In the past, deploying an edge site usually meant spending an entire day (or two) in a windowless room at the site just to set up an initial access point so you could move to a different room—if you were lucky, one with a window—where you spent the next few days provisioning the hardware and software. It was a slow, manual process and your only view, most of the time, was a CLI screen.

StarlingX offers a very different deployment experience. For starters, you don’t even need to leave your office. An entire edge cloud can be turned up and deployed remotely in hours, not days, using zero-touch provisioning. The configuration files and network intelligence needed to create an edge cloud can all reside in a central cloud in the StarlingX architecture, and you can literally “push” that configuration to a subcloud anywhere that you have a secure network connection to. Also, the view is a lot better, as StarlingX uses a real-time dashboard that offers a unified view of all your subclouds including operational status, alarms, events, required updates, and more.

# Stepping up to a simple, distributed cloud

Setting up an edge cloud in StarlingX is as easy as one, two, three… four:

1. Start with an edge server. It’ll need to have a Redfish API to support the network connection to the central cloud controller.
2. In StarlingX, select the 'subcloud add' command. This will send a small (approx. 40 MB) boot image from the central cloud controller to the edge cloud server.
3. Once you’ve bootstrapped the edge server (using the boot image), the server can then pull the complete OStree content from the central cloud’s repository for a full OS installation.
4. The central cloud controller automatically detects when the installation is complete, and sends the container images needed to complete the installation. At that point, your edge cloud is ready to deploy.

![StarlingX Multi-Host Orchestration](/img/StarlingX_multi_host_orchestration.png)

The process described above should take about 90 minutes, depending on network latency. You can even use a prestaged OStree repository and container images at the edge site if you want, which will cut the installation time down to about 30 minutes.
 
Day two operations are also far more efficient in a StarlingX environment. Here again, everything can be done remotely from the central cloud controller. For example, if an edge site requires a firmware upgrade, it can pull the files directly from the central cloud. The StarlingX orchestrator manages the upgrade process to ensure that the files and images are loaded in the correct order. If a network operator wants to orchestrate updates across multiple edge sites, this can be accomplished through StarlingX’s Distributed Cloud Manager (dcmanager) feature. These updates could be performed sequentially or in parallel, depending on the operator’s requirements.

# Looking ahead to a bigger, better future

Today, StarlingX can support distributed clouds consisting of up to one thousand edge clouds. While that’s a pretty big number, the StarlingX community is committed to building an even bigger (and better) version for the future. Just recently, we scaled up the capacity for backup and restore functions to support 250 cloud backups in parallel and 100 edge cloud restores from a single cloud controller. At the same time, we’re constantly looking for ways to simplify and optimize StarlingX for the distributed cloud environments of tomorrow, whether it means architecting high-availability solutions or improving security.

# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

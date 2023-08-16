---
templateKey: blog-post
title: StarlingX Is Setting the Trend to Go Distributed
author: Jeff Gowan
date: 2023-08-28T01:32:05.627Z
category:
  - label: Features & Updates
    id: category-A7fnZYrE1
---

StarlingX is in the forefront of the migration trend that takes cloud and turns it into a distributed system on varying scale. <!-- more -->

In just the last ten years, data centers have undergone a dramatic transformation. First, there was OpenStack, which was built to accommodate the cloud infrastructure of the future, and thanks to the expansive commitment of the community and ecosystem, that future is here now. Building on the success of OpenStack in the open source infrastructure space, it enabled complementary technologies, such as Kubernetes, to emerge to support the growing number of cloud use cases. But then something else happened: the cloud-based data center began to break up into smaller pieces that gravitated toward the network edge in order to be closer to a new generation of 5G-enabled applications. This created a much broader network to manage than OpenStack had originally envisioned.

We now face a future where the data center may not have any center at all. It might have wings instead, as in the case of a modern airplane. Or it may have wheels to support an automated fleet of trucks. Some of these use cases are incubating today via 5G, while many have not even been conceived yet. And if we continue to think of data centers as a giant box, we run the risk of boxing ourselves out of these great opportunities. For example: We’ll miss out on the opportunity to deliver telehealth services to remote areas around the world. We’ll miss out on smart cities that consume less energy and optimize traffic to cut down on commute times. And, perhaps closer to home, we’ll miss out on drone deliveries of cold beer and hot pizza.

# To succeed at the edge, you need to think outside the box

The next generation of use cases will require a next-generation infrastructure that can support a geographically distributed solution with thousands of standalone systems. In addition, this infrastructure will need to support an advanced environment comprised of containerized applets and virtual machines from day one. It may need to deliver ultra-high performance and/or ultra-low latency, depending on the use case. And, ideally, this infrastructure should be easy to deploy and manage by leveraging features such as centralized management, service orchestration, and automation, and more.

Fortunately, you don’t have to build this next-generation infrastructure on your own. StarlingX enables all the above—and delivers many of those capabilities out of the box—to meet the challenges of a distributed system, even on a large scale. StarlingX is a solution that implements the LOKI (Linux, OpenStack, Kubernetes Infrastructure) stack, co-founded five years ago by Wind River and Intel, with a global community and ecosystem around it. The open source project is supported by the Open Infrastructure Foundation, and has grown to has grown to power critical infrastructure around the globe, such as connectivity through Open RAN and 5G systems. By providing the deterministic low latency required by modern applications, and with tools that make a distributed cloud manageable, StarlingX delivers a container-based infrastructure that utilizes the container orchestration capabilities of Kubernetes on the platform layer and supports scalable solutions around the world today.

A distributed cloud architecture is the “data center” of tomorrow, but it’s still a significant jump from where many companies are currently. StarlingX builds on what OpenStack and Kubernetes have achieved by re-envisioning the data center, not just in terms of the cloud, but in terms of clouds and remote sites. In this new data center architecture, each site is its own sub-cloud with unique characteristics based on the type of software installed, software updates and version control mechanisms, availability and uptime requirements, load balancing, disaster recovery, and more. Managing these sub-clouds individually would be an operational nightmare. But managing them collectively through StarlingX allows companies to update and synchronize sub-clouds without impacting services, orchestrate software updates and security patches, and other day-to-day tasks easily through a centralized, automated framework. This can apply to a variety of use cases including managing multiple enterprise network sites, fleet management, and distributed network operations at scale.

If you’re looking for proof that StarlingX works, look no further than the telecommunications industry. While StarlingX is not a telco-specific solution, telcos have been an early adopter of StarlingX and have played an instrumental role in hardening it for the rest of the world. Verizon, for example, has deployed thousands of 5G cell sites over the last two years using StarlingX as the foundation for their energy-efficient, distributed edge infrastructure.
 
So, now that the infrastructure is all sorted out, what do you want to build tomorrow? What kind of applications do you need to support to grow in the future?

To learn more, watch my [StarlingX keynote](https://www.youtube.com/watch?v=sOmoFOLaR7A&list=PLKqaoAnDyfgqsxQDbLj4LVpKiZSDbntuC&index=1&t=1622s) from the OpenInfra Summit in Vancouver, BC, June 13-15, 2023. 

# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

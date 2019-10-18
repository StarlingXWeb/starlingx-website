---
title: News from the StarlingX Deep Dive Meetup in Beijing - Continued
author: hai-tao-wang-yong-hu
date: 2019-10-28T01:32:05.627Z
category: news
---

Continue to read about the recent StarlingX meetup in China. <!-- more -->

If you are interested in reading about the case studies that were presented at the meetup check out the [first blog post]() about the event.

## Demo Showcase
The demo showcase block started with a short introduction to paint the picture of the different use cases and scenarios that StarlingX was featured in. The projects are in different stages, but are all results of joint collaboration between active members of the ecosystem. Hu Wei also emphasized the need and importance of having more individuals and organizations participating in the community to further support innovation, knowledge sharing and the evolution of the software.

**"Demo Showcase #1: AI, Face Recognition applications on StarlingX edge clouds (to showcase Automated Deployment, Data Acquisition, and Model Upgrade)"**
In the AI demo, the central cloud performs the complex model training and then pushes this model out to the edge site. The architecture is based on StarlingX 2.0 which combines OpenStack and Kubernetes to take advantage of containerizing the platform services and enhance application delivery to make the platform a good choice for mission critical systems. To demonstrate this to the audience, the face recognition application is deployed automatically on the edge cloud. By choosing StarlingX to this use case the user has access to a development environment as it is very easy to onboard the machine learning module to the Container as a Service (CaaS) platform where they can focus on the model upgrade and let the platform perform the automation to handle all the components of the application.

**"Demo Showcase #2: Edge Workload Integration for Linked Cloud Services Based on the ACRN hypervisor and StarlingX"**
The second project is built on top of [ACRN](https://projectacrn.org) which is an open source, flexible, lightweight reference hypervisor that runs directly on bare metal and is suitable for a wide range of IoT and embedded device solutions. Using this hypervisor, StarlingX can run virtual machnie instances with different operating systems such as Clear Linux, Preempt-RT Yocto, or Windows. The demo showed how users can control the edge devices remotely to perform lifecycle management operations as well as to collect real-time data from the motor and analyze it in the central cloud. A containerized service with Data Analytics Reference Stack (DARS) was deployed on top of StarlingX for motor data analysis and anomaly detection.

**"Demo Showcase #3: AIC (Android in Container) based on StarlingX"**
The AIC scenario featured another Openstack Foundation project called [Kata Containers](https://katacontainers.io) besides StarlingX. During the demo Andriod was implemented as a guest OS inside a Kata container and was running on top of the StarlingX platform as an application. Kata Containers is an open source project that provides you a container runtime which runs a container inside a lightweight virtual machine to provide both security and performance. Using it with the new StarlingX platform that integrates OpenStack and Kubernetes services you get the perfect combination to deliver Android to the industry in a faster and more securce configuration.

**"Demo Showcase #4: Deploy and apply Time-Sensitive Networking (TSN) applications in StarlingX"**
TSN is a set of standards defined by IEEE to support the transmission of time-sensitive data over Ethernet. It is one of the key technologies in many areas of edge computing such as autonomous driving and industrial. This demo shows how to deploy a TSN application on top of StarlingX and showcases the effect of transmitting time-sensitive video streams using TSN technology based on the Intel 1210 NIC.

There are several other use cases that were mentioned, but were not demonstarted at the meetup this time, like Big Data, Robotics and so forth. During this section Wei highlighted the concept of a demo lab which provides the StarlingX community with access to the aforementioned demo projects for further evaluation and collaboration.

![alt text](/images/stx-beijing-meetup-september-2.png)

## Group Discussion

This section looked into areas of the project that need improvements. Below you can find note from the working sessions including an outline of the discussions as well as gaps that the community is looking into to fix.

Documentation is one of the areas that can always use some work and improvements regardles off it belonging to an open source project or commercial product. Following this pattern one of the first discussion points was documentation during the afternoon sessions of the meetup.

Gaps include user and design documentation to cover architecture, call flows and APIs better especially on services designed and developed by the StarlingX community called Flock Services. 

Further items that came up during the kick-off of the working sessions:

- Being user friendly as well as developer friendly can be challenging for a global community. People in China have difficulties in accessing Kubernetes and Docker registries which makes installing StarlingX harder.
- StarlingX is an Infrastructure as a Service (IaaS) platform. Attendees raised that Platform as a Service capabilities would be favorable for industrial IoT use cases.
- Security, including data privacy is crucial in edge computing use cases. StarlingX already has several features to make the platform more secure and the group was discussing items for further enhancements.
- The last item involving the whole group was discussing asects of reducing the footprint, like supporting small nodes and making the management of on-premise, legacy hosts easier that is important for IoT use cases.

The meetup then spread into three groups to have deeper dive discussions around specific areas such as telecom and industrial IoT.
 
### Telco Group 1

- StarlingX is a fully integrated platform that includes CentOS as operating system and Kubernetes to support containerized applications as first class citizens. The community needs to make sure that all resources are accessible all over the globe and all platform components benefit from the optimizations the community is making on the software.
- The group touched on code comments which can be enhanced to be more descriptive throughout the codebase.
- As it was mentioned below the participants of this group discussion went into a bit more details around how to improve documentation of the StarlingX Flock Services by identifying architecture diagrams, communication and call flows and adding an architecture guide as key areas to focus on.
- The process of how to start a new project under StarlingX also came up as one of the topics.

### Telco Group 2

- This group has also touch on discussing a local registry in the region to make it easier to access all files needed for the platform and with that lowering the bar a user needs to try and evaluate the software.
- The community started to work on the specification to put together a performance test framework which will utilize already existing tests in the open source ecosystem as well as new tests added by the community. The participants discussed the proposal and the importance of focusing on performance for an edge platform.
- Growing and further diversifying the community was also in the focus of this group as they discussed how important it is to have an open and welcoming environment and entry points for new contributors.

### Industrial Manufacturing & IoT group

- As StarlingX is integrating and utilizing Kubernetes on the platform level as well starting from the 2.0 release this group discussed the benefits of going through the CNCF certification process for the project and the importance of this for industrial IoT users.
- The industrial use cases often imply an environment with legacy type of equipment which have been maintained for years and cannot be easily replaced. It is an important topic for these environments to see how the platform can handle these devices.
- This group had a discussion about comparing the scope and features of StarlingX and KubeEdge with the notion of the main difference being the support and focus on far-edge devices which falls more under KubeEdge for now.
- This group would prefer StarlingX to be extended to cover the PaaS space as well.
- As security is in high importance for this industry segment, the participants of this group discussion highlighted that while StarlingX has a lot features to address the challenges in this area the community needs to put more focus on highlighting these and making users and operators aware.
- Support for x86 PCs as well as ARM hosts on a small footprint was highly desireable.
- As resources on the edge can be very limited, the group talked about clarifying and highlighting minimum hardware requirements for StarlingX edge sites and optimize resource utilization (CPU, memory, and storage) as part of the roadmap of the project.
- The group was very interested in learning about the status and plans around multi-tenancy in the mixed OpenStack and Kubernetes platform.
- On a deeper technical detail participants were suggesting to make the "system application-apply" command to support specifying different namespaces.
- Having multiple layers of logging, monitoring and metering, on different types of resources (hardware, OS, containers, VMs, and so forth) is very important for many edge use cases including industrial IoT.
- Upgrades came up as well as a challenge in edge environments with more focus on the Kubernetes pieces.
- The group participants discussed the demo showcases and that they hope to see more demos to learn about how to integrate open source components into a complete edge environment as cross-community collaboration effort.

If you found items above that you would be interested in discussing or contributing don't hesitate to [reach out to the community](https://www.starlingx.io/community/) and participate. Start today!

## Special Thanks to the Organizers

Special thanks to the community members who organized the event: Hu Wei, Hu Yong, Wang Haitao, Wang Yu, Liu Yuan, Wu Xiaowei, Qi Mingyuan, Shane Wang, Ding Jianfeng, Yang Ailin, Jin Yuntong, Suzie Yang, Cindy Xie, and Maggie Liang.

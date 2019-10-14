---
title: News from the StarlingX Deep Dive Meetup in Beijing - Continued
author: hai-tao-wang-yong-hu
date: 2019-10-28T01:32:05.627Z
category: news
---

Continue to read about the recent StarlingX meetup in China. <!-- more -->

Read the [first blog post]() to learn about what speakers were presenting about at the meetup.

## Demo Showcase

Mr. Hu Wei from Intel introduced the edge computing demo application of StarlingX in different stages and scenarios to the participants, and brought StarlingX cooperation and joint demo projects with ecosystem partners. He said that the StarlingX community is looking forward to more partners to join, to accelerate product development through forward-looking interoperation and cooperation.

**"Demo Showcase #1: AI, Face Recognition, Applications on StarlingX Edge Clouds (to showcase Automated Deployment, Data Acquisition, and Model Upgrade usage)"**
In this demo case, the central cloud performs complex model training and then pushes the model to the edge cloud. In addition, StarlingX 2.0 combines Kubernetes and containerized OpenStack to take advantage of the containerized deployment and enhance platform delivery, which is more convenient to mission critical application scenarios. Based on this architecture, a face recognition application is automatically deployed on the edge cloud. At the same time, combined with the container as a service (CaaS) platform, the user is provided with a development environment, the machine learning module can be uploaded to this, and the system is checked and updated to StarlingX to implement the model upgrade.

**"Demo Showcase #2: Edge Workload Integration for Linked Cloud Services Based on ACRN and StarlingX"**
In this demo case, the end user can remotely control the edge devices for lifecycle management and collect real-time data of the motor to the edge server side. 
A containerized service with Data Analytics Reference Stack (DARS) is deployed on top of StarlingX for motor data analysis and anomaly detection. Through StarlingX's orchestration, edge devices can support Clear Linux, Preempt-RT Yocto and Windows systems as virtual machines on top of the ACRN hypervisor, which is a Type 1 hypervisor that runs directly on bare metal hardware and is suitable for a wide range of IoT and embedded device solutions.

**"Demo Showcase #3: AIC (Android in Container) based on StarlingX"**
The AIC scenario demonstrates the implementation of Android as a Guest OS in the Kata secure container and fits the application scenario of StarlingX from the cloud to the edge. A secure, lightweight "virtual machine container" solution from the Kata Secure Container, complemented by the StarlingX Edge Platform, is the perfect combination with Android to bring a faster, more secure solution to the industry.

**"Demo Showcase #4: Deploy and apply TSN applications in StarlingX"**
TSN is a set of standards defined by the IEEE to support the transmission of time-sensitive data over Ethernet. It is one of the key technologies in many areas of edge computing such as autonomous driving and industrial. This demo shows how to deploy a TSN application on top of StarlingX and showcases the effect of transmitting time-sensitive video streams using TSN technology based on the Intel 1210 NIC.
Also, there are other use cases like Big Data, Robotics and etc. They are introduced orally and not brought to onsite demo booth. Wei also introduced the concept of the demo lab which facilitates StarlingX members to get access to those demo projects for further evaluation and interoperation.
In conclusion, StarlingX is a fully open sourced, industry leading software platform, optimized for edge computing and designed for edge deployments. We expect to bring forward more use case demo and cooperation with our ecosystem partners in the future.

## Group Discussion

Documentation still has some gaps about practical HOW-TO steps and design documentations (arch, call flow and APIs) on core components (e.g. flock services).
·        User-friendly and developer-friendly are crucial to make an open-source project prosper. (for instance, Chinese users have difficulty to access k8s or docker registry, can we setup one registry to ease StarlingX installation??) 3. Can we extend StarlingX a bit more than IaaS? Having some PaaS capabilities will help industrial customer/production adoption.
·        Security (including data privacy) is important or even critical for industrial scenarios, what can be done make it one more differentials of StarlingX
·        less footprint, supporting to smaller nodes and manageability on on-premise (or legacy hosts), mandatory to IOT cases.
 
### StarlingX in Telco-group1
·        StarlingX deploys scripts and documents to Centos.K8S needs to overturn the wall when pulling resources. This is un
friendly for the environment that cannot be overturned. It     is expected to have a guiding plan to address domestic solutions.
·        Source comments are too simple, expect to optimize.
·        The core project project architecture diagram, communication, call relationship architecture document, technical framework document used.
·        How to start each individual project and how to publish it.
StarlingX in Telco-group2
·        Building a local registry, and providing an installed version of the minimum feature set which is convenient for initial user evaluation.
·        The performance test framework feature will be integrated and reinforced by incoming StarlingX3.0 to meet the evaluation requirement of the mission critical use case.
·        The vitality of open source organizations is less cultivated in the superb technology than in the friendliness to beginners. This was an insightful perspective that we could count on to define key performance indicators for community development work, to achieve the objective and key results of the growth hacker.

### StarlingX in  Industry & IOT group
·        About making StarlingX pass CNCF certification, is there such a requirement or expectation from industrial users ?
·        Besides establishing a new StarlingX based edge cluster, industrial users do expect StarlingX is also capable to manage legacy hosts, which they have been investing for years.
·        Starling or Kube-edge, under what circumstance, one solution works better than another in IOT user cases? Specifically, StarlingX mainly fits edge server fragment, while Kube-Edge does better on far-end edge devices.
·        Expect StarlingX to have/enable more components (protocols) or services, so in certain sense, it is extending to PaaS.
·        IOT users do care about security, data privacy and regulations. StarlingX has been doing good jobs on this area, though, we need do better job to make users aware of the achievements.
·        Expect StarlingX to support smaller nodes (including X86 PC and ARM hosts) as computing nodes.
·        Suggest StarlingX to show the minimal requirements on Hardware spec and make a roadmap to optimize the footprint (CPU, memory and storage). Can we start this from 4.0 ?
·        What's the status of multi-tenancy, on K8S and OpenStack in StarlingX ?
·        Look forward to seeing more use cases or blueprints which demonstrate the integration of solutions from multiple community projects.
·        Suggest to make "system application-apply" support specifying different namespaces.
·        Expect to see multiple layers of logging, monitoring and metering, on different types of resources: HW, OS, containers, VMs, and so on.
·        What is the strategy of upgrading Kubernetes ?

## Special Thanks to the Organizers

Special thanks to the community members who organized the event: Hu Wei, Hu Yong, Wang Haitao, Wang Yu, Liu Yuan, Wu Xiaowei, Qi Mingyuan, Shane Wang, Ding Jianfeng, Yang Ailin, Jin Yuntong, Suzie Yang, Cindy Xie, and Maggie Liang.

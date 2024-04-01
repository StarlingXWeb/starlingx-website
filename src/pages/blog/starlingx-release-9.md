---
templateKey: blog-post
title: StarlingX R9.0 is here!
author: Ildiko Vancsa
date: 2024-04-09T01:32:05.627Z
category: 
  - label: News & Announcements
    id: category-A7fnZYrE1
---

The StarlingX community is pleased to announce the R9.0 release with new features and enhancements to the platform.

The StarlingX platform provides a foundational building block for distributed infrastructures and is [running in production](https://www.youtube.com/watch?v=sOmoFOLaR7A) at large telecommunication operators around the globe.

StarlingX is an implementation of the LOKI (Linux OpenStack Kubernetes Infrastructure) stack. What is unique about the platform is that it provides you a fully integrated solution that you can deploy in one datacenter or over multiple, geographically distributed sites. StarlingX provides the missing pieces, so you can deploy your distributed infrastructure and then manage it centrally through a single pane of glass. To be able to efficiently operate and maintain infrastructure, especially on a large scale, you need high levels of automation. As StarlingX is being used by large telecom operators, and utilized for other demanding use cases, it needs to be robust, provide enhanced security and support high performance workloads.

Networking is a key function, especially in a distributed system. The StarlingX community focused on this area during the 9.0 release cycle to add new features and enhancements. One of these is the addition of an admin network, which users can configure and reconfigure easily to run management and control operations. This is an optional network, and its function is performed by the management network in the absence of an admin network. In the 9.0 version of the platform, all networks, including the newly introduced admin network also have default L3 firewall rules.

The new release of StarlingX adds support for a newer version of FEC (Forward Error Correction) operator for better configurability. FEC is a method that can locate and correct errors in a bit stream through inserting and assessing extra information. To further enhance the robustness of the platform, the community also added a function that provides error root cause analysis and corrective actions for subcloud deployment and upgrades by collecting more logs when these steps are carried out.

Real-time features are important in various industry segments such as manufacturing or telecommunications. StarlingX has been supporting the [Precision Time Protocol (PTP)](https://www.starlingx.io/blog/starlingx-ptp-part-1/) since the 3.0 release to fulfill the needs of mission-critical workloads. As a reminder, PTP is used to synchronize clocks in a computer network and on a local area network it can reach sub-microsecond-range accuracy, which enables it to synchronize financial transactions or mobile phone tower transmissions. The PTP feature in StarlingX now supports redundant system clocks, which allows for a high availability timing deployment of the platform. This is especially important for real-time and mission-critical workloads.

As StarlingX is a cloud platform that can be deployed in a geographically distributed configuration, the enhanced Geo Redundancy feature in 9.0 provides very important functionality to ensure the continuous operation of the platform, even in cases where subclouds need to be moved under a new system controller, for instance in a disaster recovery scenario. This feature now supports an Active-Active redundancy model.

Sustainability has become a very important aspect of building and operating infrastructure, especially on a large scale. Monitoring how much power the system is using, with the goal of reducing overall consumption is an important goal for the StarlingX community. In the 9.0 release cycle contributors integrated the Kubernetes Power Manager into the platform. This Kubernetes operator allows users to access and utilize power control mechanisms that are supported by CPUs in the cluster. Available power profiles will be created during the deployment of the platform, which can apply specific and individualized power configurations to a group of CPU cores and in cases to each CPU, depending on what the HW resources in the system support.

Security is always a priority for the StarlingX community. One of the related features that was added in the 9.0 release cycle is Partial Disk Encryption Support. This feature uses Linux Unified Key Setup (LUKS) to create a new encrypted filesystem automatically, where users can store sensitive files.

StarlingX 9.0 also includes newer versions of open source projects that the platform integrates. This includes OpenStack Antelope, Kubernetes versions between v1.24 to v1.28 and further upgrades such as FEC operator 2.7.1, cert-manager v1.11.1, istio v1.19.4, and more.

For the complete list of updates and new features in StarlingX R9.0, check out the [release notes](https://docs.starlingx.io/releasenotes/index.html#release-notes) and the [project documentation](https://docs.starlingx.io/).

Visit the StarlingX website today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](https://mirror.starlingx.windriver.com/mirror/starlingx/release/) to try out the new features. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

Stay tuned for the next event where you can meet the StarlingX community!

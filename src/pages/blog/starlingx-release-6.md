---
templateKey: blog-post
title: StarlingX R6.0 is here!
author: Ildiko Vancsa
date: 2022-02-01T01:32:05.627Z
category: 
  - label: News & Announcements
    id: category-A7fnZYrE1
---

The StarlingX community is pleased to announce the R6.0 release with new features and enhancements to the platform.<!-- more -->

StarlingX is already delivering the essential functionality to build out infrastructure from the core to the edge by providing a robust, flexible and scalable foundation with OpenStack that can be used to build your central cloud as well as get installed on the edge to manage a smaller pool of resources.

In addition, the platform also delivers Kubernetes that is a de-facto component for container management and is also very appealing for the edge, where you often battle restrictions of much smaller sites compared to large data centers. Both of these components and other well-known open-source building blocks provide a set of APIs that have become de-facto interfaces.

To further fine tune the project for demanding edge use cases, the community was working tirelessly during the 6.0 release cycle to enhance some existing functionality and also to add new features to further increase the plaform's manageability, robustness and scalablility.

One of the core components of the platform is the Linux kernel. In light of the earlier CentOS announcements, the community decided to move over to Debian in an incremental process. In the 6.0 release, this means to upgrade to the 5.10 version of the kernel. Among other features, this version has some enhancements in the networking space such as providing the user space tooling to configure the routing and forwarding interfaces.

Since edge use cases tend to vary a lot in deployment configurations and how you need to build up your infrastructure and eventually change and evolve it, the community was putting some emphasis on improvements in the area of deployment and re-configuration.

You can install StarlingX in an all-in-one setup from the project's early days, but transitioning over to a different configuration required some workarounds. Starting from the 6.0 release, you can now migrate the deployment to a duplex configuration which includes two controller nodes. The process to move from one subcloud deployment to the other now does not require a fresh installation.

To take this one step further, the community is also preparing the platform to be able to handle disaster recovery scenarios. As part of this effort, you can now move subclouds between Distributed Cloud systems while restoring the System Controller. The process can also be used to consolidate a deployment and shut down some edge sites when they are not utilized.

While implementing the above features the community also looked into enhancing the deployment process itself. When it comes to subclouds, the challenge lies behind the numbers and scale, which calls for the highest level of automation to deploy and manage a large number of edge sites. The 6.0 version of StarlingX supports the local installation of subclouds, when the servers at the site support Redfish. You will need to 'prestage' these servers with a valid installation bundle in order to be able utilize this feature.

Security and trust are crucial in edge scenarios and therefore the community always carves out some time to enhance features and functionality in these areas. The 6.0 cycle was no different.

You can use and manage various certificates with StarlingX, which makes it very important to use very efficient tools and methods to manage them. You can now use cert-manager in the platform which simplifies the process of maintaining platform certificates, including auto-renewals. As part of the enhancements in this area, you can also update the Kubernetes Root CA (Certificate Authority) certificate on a running system by uploading or auto-generating a new one.

Certificates always come with an expiry date which complicates the management process. To address this challenge, the community implemented monitoring and alarming support for them. In the 6.0 version of the platform, it now has different severity levels for certificates that are about to expire and those that passed their due date. In addition, the platform is providing this functionality to support different, including older certificate types and methods that have been available in StarlingX.

Another enhancement in the area of security to highlight is the support of 'auditd'. The Linux Auditing System helps system administrators track security violation events based on preconfigured audit rules. The events are recorded in a log file by the 'auditd' daemon and this information in the log entries help to detect misuse or unauthorized activities and take required actions.

For the complete list of updates and new features in StarlingX R6.0, check out the [release notes](https://docs.starlingx.io/releasenotes/r6-0-release-notes-bc72d0b961e7.html) and the [project documentation](https://docs.starlingx.io/).

Visit the StarlingX website today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](https://mirror.starlingx.windriver.com/mirror/starlingx/release/) to try out the new features.

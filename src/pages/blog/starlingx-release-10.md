---
templateKey: blog-post
title: StarlingX R10.0 is here!
author: Ildiko Vancsa
date: 2024-12-03T01:32:05.627Z
category: 
  - label: News & Announcements
    id: category-A7fnZYrE1
---

The StarlingX community is pleased to announce the 10.0 release with new features and enhancements to the platform.

The StarlingX platform provides a foundational building block for distributed infrastructures and is [running in production](https://www.youtube.com/watch?v=sOmoFOLaR7A) at large telecommunication operators around the globe.

StarlingX’s architecture follows the Open Infrastructure Blueprint. The platform is unique, as it provides a fully integrated solution that you can deploy in one datacenter or over multiple, geographically distributed sites. StarlingX provides the missing pieces, so you can deploy your distributed infrastructure and then manage it centrally through a single pane of glass. To be able to efficiently operate and maintain infrastructure, especially on a large scale, you need high levels of automation. As StarlingX is being used by large telecom operators, and utilized for other demanding use cases, it needs to be robust, provide enhanced security and support high performance workloads.

Networking is a key function, especially in a distributed system. The StarlingX community focused on this area during the 10.0 release cycle to add new features and enhancements. One of these is the addition of IPv4/IPv6 dual-stack support. While IPv6 was originally introduced with the intention to replace the IPv4 address pool, that transition still hasn’t completed. With the existence of both in production use, platforms like StarlingX face the requirement to support both simultaneously. The 10.0 version of the platform now enables to associate both IPv4 and IPv6 pools with networks defined in the platform, and the order of which it is enabled will determine which pool will serve as the primary.

As a distributed cloud platform, security is always an important focus area as the community is working on newer versions of the project. In the 10.0 release cycle, contributors added support to use Harbor as a container registry in StarlingX. Harbor can be deployed as a StarlingX system application. Once configured, users can utilize this service to securely manage artifacts in the cloud-native landscape, such as container images, Helm charts, OPAs, and Singularity, and more. Harbor is an OCI-compliant service, which also allows vulnerability scanning of artifacts, provides role-based access control and the ability to sign container images and artifacts, among other features.

Contributors also added support to enable IPSec on L2 platform networks, to encrypt the traffic between multi-node system, and configured cert-manager as the default certificate manager.  TLS certificate handling was further improved for OpenStack, now users can upload their own certificates that OpenStack will be able to discover and use.

Beyond security, scalability is also an important aspect to keep improving, which the community has been actively working on. Their current goal is to reach the ability to manage 10,000 sites from a system controller, and the 10.0 delivers the milestone of managing up to 5,000.

To increase performance beyond scalability, the 10.0 release delivers a Kubernetes service, called NUMA-aware Memory Manager, and optimizations to reduce worst-case latency of software running on platform cores, which can happen when the system is under high load.

Making it simple to deploy and manage the platform has always been a focal point for the community to put effort into. The 10.0 release delivers an important enhancement in this area with the new Unified Software Management Framework. The ability to patch the platform and carry out upgrades were already available in previous versions, different subsystems carried out these operations that users needed to access separately. The new framework provides a single procedure that is accessible through a single REST API/CLI interface, to carry out updates and upgrades for both a single cloud installation as well as in a distributed cloud deployment.

The new StarlingX release replaces the v5.10 kernel with v6.6. This is the latest LTS release made available by the Yocto project. With the new kernel the StarlingX platform has access to a wider range of supported hardware platforms and in-tree device drivers. This kernel version also offers improved performance and contains bug fixes which were not backported to the previously integrated version.

As StarlingX integrates a wide range of open source projects beyond the Linux kernel, contributors have been integrating newer versions of these components in the 10.0 release cycle to have access to newer features and bug fixes alike. With the current StarlingX release users have access to Kubernetes up to v1.29, and many components of the system got newer versions integrated to work smoothly with these two main building blocks and also to deliver new functionality, bug fixes and enhancements.

Last, but not least, as the platform is gaining new system applications, which are integrated to provide a wide range of functionality to users, there is now a [centralized page](ADD LINK) in the documentation where these services, and information about them, are listed.

For the complete list of updates and new features in StarlingX 10.0, check out the [release notes](https://docs.starlingx.io/releasenotes/index.html#release-notes) and the [project documentation](https://docs.starlingx.io/).

# About StarlingX

Visit the StarlingX website today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](https://mirror.starlingx.windriver.com/mirror/starlingx/release/) to try out the new features. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

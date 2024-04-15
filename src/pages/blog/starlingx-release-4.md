---
templateKey: blog-post
title: StarlingX R4.0 is here!
author: Ildiko Vancsa
date: 2020-08-03T01:32:05.627Z
category: 
  - label: News & Announcements
    id: category-A7fnZYrE1
---

The StarlingX community is pleased to announce the R4.0 release with new features and enhancements to the platform.<!-- more -->

This article will give you some insights about what the contributors were working on during the first half of this year to fulfill the requirements of use cases in areas such as 5G, Industrial IoT and more.

The StarlingX platform is fine tuned for edge computing and IoT use cases and the contributors focused on requirements for performance, robustness and security goals during the 4.0 release cycle. This blog post will give you insights on some of the new features and components that were integrated into the platform.

Security and proper isolation are crucial in an edge environment since the hardware and software components are located outside of the safety of traditional data centers. This can put challenges on traditional container runtimes, as they share the host kernel and use namespaces for separation, which can be problematic if one of the containers is compromised. There are multiple solutions to this, one of which is to use [Kata Containers](https://katacontainers.io) a container runtime that provides a fusion between virtual machines and containers. You can now use this project in StarlingX as a runtime that is run by Kubernetes.

To go a step further, the StarlingX community has also enabled [Time Sensitive Networking (TSN)](https://1.ieee802.org/tsn/#Published_TSN_Standards) for workloads running in Kata Containers. This is an important capability that provides support for determinism in delivering time-sensitive traffic with low and bounded latency, while normal traffic is also carried through the same network. This is used by applications in industrial IoT, video delivery, and other ultra-low latency use cases. As the functionality has dependencies on newer versions of the Linux kernel, you will need to perform some configuration steps that the [relevant documentation](https://docs.starlingx.io/developer_resources/stx_tsn_in_kata.html) can guide you through.

Security is also crucial when you manage your hardware infrastructure, for instance, when you boot or restart the servers that are part of your deployment. Redfish provides well-known standards in this area to provide solutions to this challenge. StarlingX now supports the Redfish Virtual Media Controller that provides you with the option to use a secure BMC-based ISO image boot process.

Automation is highly important in edge computing use cases due to a lot of locations being remote with limited possibility for maintenance. StarlingX now provides a [certification manager](https://docs.starlingx.io/configuration/cert_config.html) that enables automated certification issuance as well as monitoring the expiration dates and giving the possibility to auto-renew.

To provide more flexibility for users, the community is developing support for external systems in areas where tools exist already. An example of this is backends used during authentication and authorization. You can now configure StarlingX to use Windows Active Directory for authentication of the Kubernetes API.

Kubernetes is also supported in the [backup and restore](https://docs.starlingx.io/developer_resources/backup_restore.html) functionality of the StarlingX platform, you can now configure it for containerized workloads.

As you may already know, StarlingX has many components that you can combine in the configuration that best fulfills your needs. In the past, the build process was monolithic and if any changes were needed, you had to rebuild all components to get the updated image. Now there is support for a [layered build](https://docs.starlingx.io/developer_resources/layered_build_guide.html) where the tool decomposes the system into layers, which then can be built independently -- saving you time as well as resources.

As in all release cycles, there are a few components that have new versions available. When you install R4.0, you will have the 4.18 Linux kernel and the Ussuri release of OpenStack.

For the complete list of updates and new features in StarlingX R4.0, check out the [release notes](https://docs.starlingx.io/releasenotes/r4_release.html) and the [project documentation](https://docs.starlingx.io).

Visit the StarlingX website today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](https://mirror.starlingx.windriver.com/mirror/starlingx/release/) to try out the new features.

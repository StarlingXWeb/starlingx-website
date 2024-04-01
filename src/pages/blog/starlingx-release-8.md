---
templateKey: blog-post
title: StarlingX R8.0 is here!
author: Ildiko Vancsa
date: 2023-02-23T01:32:05.627Z
category: 
  - label: News & Announcements
    id: category-A7fnZYrE1
---

The StarlingX community is pleased to announce the R8.0 release with new features and enhancements to the platform.<!-- more -->

The StarlingX platform provides a foundational building block for distributed infrastructures that power use cases for the edge and beyond. The project is currently [running in production](https://youtu.be/Jpu7SPLvjjE?t=3712) at large telecommunication operators around the globe.

With a growing number of edge computing use cases running in production, there is an increased focus on solving the challenges of day-to-day operations and maintenance. The StarlingX project is designed and developed with the goal and mindset of providing high levels of orchestration and automation in the platform, filling the gaps in today's software infrastructure landscape. With these fundamentals built into the DNA of the project, it makes deploying and operating the cloud infrastructure on a large scale much easier and smoother. Beyond enhancing these capabilities, during the recent release cycle, the StarlingX community was also working on features that support applications with high-performance or real-time requirements and increased the platform's compatibility with O-RAN specifications.

The previous, 7.0 release of StarlingX contained a preview of the new, Debian-based platform. That experimental version only contained a limited feature set, but it allowed for a sneak peek into the new platform, as well as to be able to incrementally implement the required changes. During the 8.0 release cycle the community has finished the platform's migration to the Debian operating system, which also got enriched with a Linux 5.10 Yocto-based kernel. With the new, Debian-based platform being available with a full feature set, the community stopped the periodic builds of the previous, CentOS-based version of the project. With the source code being openly available, anyone can still build those images locally.

Some further enhancements to the platform targeted the Telecommunications segment with increasing compliance to O-RAN specifications, such as O-RAN O2 IMS/DMS and O-RAN Precision Time Protocol (PTP) Notification v2 compliant interfaces.

The PTP enhancements include support for workloads to access related events and status updates, which were previously restricted to the infrastructure services. Applications can now access things like the PTP lock state, clock class, GNSS status, OS clock sync status, as well as the overall sync health of a node. This feature is critical for workloads that depend on precise timing and must take immediate action when the synchronization state of their time source changes, for instance 5G workloads.

With edge computing in mind, the community is always looking into enhancing the relevant characteristics of StarlingX to ensure the platform fulfills the strict requirements of some of the use cases. During the 8.0 release cycle, the community was working on reducing the footprint of the infrastructure services, to provide the at most access to the available resources to the applications. The latest release delivers the capability to run the infrastructure services on one CPU core, and reserve the remaining cores to the workloads on the servers in a deployment.

The community also enhanced the Backup & Restore functionality in the 8.0 release cycle. The feature allows for creating a backup of essential system data (and optionally some additional information, such as container registry images, and OpenStack application data) which then can be used to restore the platform to a previously working state. Users of the platform can choose to store the backup locally or on the centralized System Controller. The latter does not support storing the container image backup (from registry.local) in the central location, due to the large sizes of these files, which could put stress on the network as well as the central storage, especially in case of a large-scale deployment.

To further support the low-latency and distributed cloud requirements of edge computing and industrial IoT use cases, the community strengthened StarlingX 8.0 by:
- Upgrading to new versions of platform components, such as Kubernetes and more
- Integrating SSH with remote Windows Active Directory
- Enhancing the Backup & Restore feature
- Adding support for Kubernetes Custom Configuration
- Implementing RBAC enhancements to StarlingX APIs and CLIs

For the complete list of updates and new features in StarlingX R8.0, check out the [release notes](https://docs.starlingx.io/releasenotes/r8-0-release-notes-6a6ef57f4d99.html) and the [project documentation](https://docs.starlingx.io/).

Visit the StarlingX website today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](https://mirror.starlingx.windriver.com/mirror/starlingx/release/ to try out the new features.

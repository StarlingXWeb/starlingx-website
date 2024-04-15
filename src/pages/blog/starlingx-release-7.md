---
templateKey: blog-post
title: StarlingX R7.0 is here!
author: Ildiko Vancsa
date: 2022-09-13T01:32:05.627Z
category: 
  - label: News & Announcements
    id: category-A7fnZYrE1
---

The StarlingX community is pleased to announce the R7.0 release with new features and enhancements to the platform.<!-- more -->

The StarlingX platform provides a foundational building block for edge infrastructures and is [running in production](https://youtu.be/Jpu7SPLvjjE?t=3712) at large telecommunication operators around the globe.

Edge computing use cases are putting high demands on infrastructure, both hardware and software. The massive scale and geographically distributed environments are challenging to operate and maintain, they require high levels of automation and remote manageability. While providing orchestration is crucial, edge use cases also often require high performance and enhanced security. The StarlingX community is working on components and solutions that fill the gap in today's infrastructure software and provide the ideal platform for existing and emerging use cases.

During the recent release cycle the community has been working on some bigger changes to the platform while also adding enhancements to existing features. One of the ongoing work items that spans across multiple releases is the support for the Debian operating system. The community decided to choose Debian as it is a widely known, stable open source Linux distribution with long term maintenance. This is the first release where the Debian operating system is available, so it has some limitations. To provide a real-time kernel the project is also using the Yocto 5.10 kernel as opposed to Debian.

Real-time features are important in various industry segments such as manufacturing or telecommunications. StarlingX has been supporting the [Precision Time Protocol (PTP)](https://www.starlingx.io/blog/starlingx-ptp-part-1/) since the 3.0 release to fulfill the needs of mission-critical workloads. As a reminder, PTP is used to synchronize clocks in a computer network and on a local area network it can reach sub-microsecond-range accuracy, which enables it to synchronize financial transactions or mobile phone tower transmissions.

To utilize this functionality to the fullest extent, the community added new features to make it easier to fine tune PTP for the applications' needs. The platform now has the 3.1.1 version of the base linuxptp package, which allows for new functionality and much more fine grained configuration. It includes both hardware and software time stamping to synchronize the hardware, master and system clocks in the system. You can now also create instances of the PTP services and with that create host-specific configurations. The community also started to add the ability to configure NICs which provide Synchronous Ethernet (SyncE) support to enhance the platform for 5G use cases.

The Distributed Cloud architecture is a fundamental component of StarlingX that provides you with the ability to centrally manage your end-to-end edge infrastructure while still providing autonomy on the edge. The community has been continuously improving the functionality to achieve better manageability and more flexibility.

The latest addition is to support local installation of edge sites. This means that you can deploy an edge site locally with the installation software pre-loaded onto a separate disk partition and with that skip the often lengthy data transfers. You can also use this method to upgrade the site. The community also increased the efficiency of Distributed Cloud by increasing the number of parallel operations that you can perform.

Further improvements to the StarlingX platform include scalability to increase the number of edge sites it can efficiently manage.

The community has also been focusing on security enhancements, such as the support for audit logging. An initial version of Pod Security Admission (PSA) controller is also available in the latest release. This component will replace Pod Security Policies in a future release to enhance the security of Kubernetes.

For the complete list of updates and new features in StarlingX R7.0, check out the [release notes](https://docs.starlingx.io/releasenotes/r7-0-release-notes-85446867da2a.html) and the [project documentation](https://docs.starlingx.io/).

Visit the StarlingX website today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](https://mirror.starlingx.windriver.com/mirror/starlingx/release/) to try out the new features.

---
templateKey: blog-post
title: StarlingX R12.0 is here!
author: Ildiko Vancsa
date: 2026-04-29T01:32:05.627Z
category: 
  - label: News & Announcements
    id: category-A7fnZYrE1
---

The StarlingX community is proud to announce the StarlingX 12.0 release. This milestone represents more than just a version increment; it is the culmination of years of rigorous field-testing in the world’s most demanding environments. While StarlingX has its roots in the high-stakes world of telecommunications, version 12.0 solidifies its position as a general-use distributed cloud platform capable of supporting any enterprise looking to master the deployment and operations of their cloud infrastructure.

# Hardened by Telecom, Built for Everyone
For years, StarlingX has been performing as the backbone of 5G rollouts and ultra-low latency telecommunications infrastructure around the globe. In these environments, "downtime" isn't just an inconvenience—it’s a system failure. By meeting the strict requirements of major telecom providers—including sub-microsecond latency, 99.999% availability (translating to no more than 5 minutes of downtime per year), and automated zero-touch provisioning—StarlingX has undergone a thorough field test and passed.

Release 12.0 delivers further hardening and management capabilities to the platform, further reinforcing its position as a multi-purpose cloud platform. Whether you are managing industrial IoT applications across a factory floor, orchestrating retail systems in thousands of locations, or in need of a cloud platform to deploy and manage your large datacenter, StarlingX 12.0 provides the stability of a carrier-grade system with the flexibility of a modern, open-source cloud stack.

# Highlights from the 12.0 Release

## Authentication Goes to the Next Level
Authentication is an important layer of security, and implementing a strong system is exponentially harder in a complex and often geographically distributed platform. Up until now the platform had a fragmented solution, which is now consolidated by relying on a single OpenID Connect (OIDC) proxy, which now serves all authenticated endpoints.

This task required participation from the entire community, as it touched many parts of the platform, and therefore it is a true testament to open collaboration. And through that, the community has delivered a platform that is more secure, easier to operate and provides a better user experience.

## Networking Excellence: PTP Partial Timing Support (PTS)

Precision Time Protocol (PTP) is an essential piece that the telecommunications sector relies on, but it’s applicable in use cases such as industrial automation, power grid management, high-frequency trading and more. It has always been a priority to the community to maintain and enhance support for further capabilities of the protocol.

The 12.0 release introduces PTS, which allows the use of PTP in a system with components that don’t have PTP capabilities. This allows users to introduce PTP in environments that aren’t fully upgraded yet to have the capability in every node, which adds additional flexibility to the StarlingX platform to be applied in heterogenous environments for various scenarios.

## Marching Forward: Updating Dependencies
The new version of StarlingX is now running on the v6.12.57 kernel, which has been stress tested by the community to ensure stability and robustness for the base layer of the platform. Similarly to previous releases, various components and building blocks were updated to a newer version. StarlingX 12.0 now supports Kubernetes up to v1.34, delivers you OpenStack Epoxy, and contains updates to Intel, Nvidia and Broadcom plugins for continued hardware support, and now offers NetApp support as either a standalone storage backend, or combined with Ceph.

## Striving for Improved Performance and Stability
In any large system, especially in geographically distributed deployments it can be life changing to be able to efficiently operate the entire system through a single pane of glass, which is what the StarlingX System Controller offers its users. With the Unified Software Management (USM) framework, which was introduced in a previous release, user got access to a simpler way to manages updates and upgrades throughout the system. This component got enhancements during the 12.0 release cycle to make this process faster and more reliable. Furthermore, teams have worked on fine tuning the deployment process, along with how you enroll new sub-clouds under a system controller. To make the process more robust, the backup and restore functionality got some touch ups to introduce more automation, and requiring less steps, like avoiding restarts or full reinstalls, for better performance.

For the complete list of updates and new features in StarlingX 12.0, check out the [release notes](https://docs.starlingx.io/releasenotes/index.html#release-notes) and the [project documentation](https://docs.starlingx.io/).

# About StarlingX

Visit the StarlingX website today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](https://mirror.starlingx.windriver.com/mirror/starlingx/release/) to try out the new features. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.


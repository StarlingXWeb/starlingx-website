---
templateKey: blog-post
title: StarlingX R11.0 is here!
author: Ildiko Vancsa
date: 2025-11-12T01:32:05.627Z
category: 
  - label: News & Announcements
    id: category-A7fnZYrE1
---

The StarlingX community is pleased to announce the 11.0 release of the distributed cloud platform, a major milestone that delivers reliability, security, and scalability without sacrificing on performance for edge and telecom environments. StarlingX 11.0 builds on the project’s foundation of high availability and robust lifecycle management with key advancements in upgrade rollback, networking, security hardening, and OpenStack integration.

# Smarter and Faster Upgrade Rollbacks
Software upgrades are mission-critical in distributed systems, especially for telco and industrial edge deployments. It is even more crucial to be able to revert to a stable state in case something goes wrong during the process. In StarlingX 11.0, the community introduced several enhancements that make upgrade rollback faster, more flexible, and more reliable across configurations.

## System Snapshot & Restore for All-in-One Simplex (AIO-SX)
This feature leverages a combination of ‘ostree’ deployment management and LVM volume snapshots to dramatically speed up rollbacks on AIO-SX systems. The new mechanism allows operators to revert to a pre-upgrade state quickly and safely, minimizing downtime and operational risk.

## Rollback After ‘deploy-activate’
Upgrades can now be rolled back even after the “deploy activate” stage—when the containerized environment has already been updated. This enhancement provides a safety net for late-stage failures, ensuring greater control throughout the full upgrade lifecycle.

## Rollback Support for Duplex Configurations
Previously limited to AIO-SX setups, rollback capability is now extended to AIO-DX and Standard duplex configurations, delivering a consistent, reliable upgrade experience across deployment models.

# Streamlined Networking for Edge Deployments and Beyond
Networking efficiency remains a critical focus in distributed cloud environments where subclouds may be deployed at scale. The new Platform Network Address Reduction for AIO-SX feature reduces IP address and subnet usage, improving scalability and simplifying network management. This optimization is particularly valuable in large, distributed edge environments, where address space can be at a premium.

# Enhanced Security from Pod to Platform
Security is a core principle in StarlingX, and the 11.0 release introduces several updates that harden the platform’s protection from the infrastructure to the Kubernetes layer.

## Encrypted Pod-to-Pod Traffic via IPsec
This new feature allows the platform to manage IPsec encryption for pod-to-pod communication across hosts, offloading complexity from individual applications and ensuring data confidentiality by default.

## New Preconfigured Keystone Roles
Two new roles—Configurator and Operator—enhance access control flexibility. The Configurator role mirrors admin privileges except sensitive certificate operations, while the Operator role bridges the gap between reader and admin, allowing essential host operations without full administrative access.

## Intermediate CA Support
The platform now supports external Kubernetes API server certificates signed by the same CA as StarlingX API and web services, improving interoperability and simplifying certificate management.
These enhancements underscore StarlingX’s commitment to defense-in-depth security and fine-grained operational control.

# Expanded OpenStack Integration and Performance
StarlingX 11.0 also advances its integration with OpenStack, providing improved storage, networking, and compute performance for cloud-native workloads.

## OVS-DPDK Support
The platform now supports DPDK-accelerated Open vSwitch (OVS-DPDK) for OpenStack networking, delivering higher packet throughput and lower latency for performance-sensitive applications.

## Rook Ceph Integration
OpenStack services such as Cinder, Glance, and Nova can now leverage the platform’s Rook Ceph storage backend. This unified approach simplifies storage management and enhances scalability across the distributed cloud.

Finally, as StarlingX integrates a wide range of open source projects beyond the Linux kernel, contributors have been integrating newer versions of these components in the 11.0 release cycle to have access to newer features and bug fixes alike. With the current StarlingX release users have access to OpenStack Caracal, Kubernetes up to v1.32. Many further components of the system got newer versions integrated to work smoothly with these two main building blocks and also to deliver new functionality, bug fixes and enhancements.

# Moving Forward
With these enhancements, StarlingX 11.0 strengthens its role as a trusted open source foundation for distributed edge and telecom infrastructure. Faster rollbacks, stronger security, improved networking, and deeper OpenStack integration together mark a significant leap forward in manageability and resilience.

For the complete list of updates and new features in StarlingX 11.0, check out the [release notes](https://docs.starlingx.io/releasenotes/index.html#release-notes) and the [project documentation](https://docs.starlingx.io/).

# About StarlingX

Visit the StarlingX website today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](https://mirror.starlingx.windriver.com/mirror/starlingx/release/) to try out the new features. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.


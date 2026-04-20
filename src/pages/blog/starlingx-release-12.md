---
templateKey: blog-post
title: StarlingX R12.0 is here!
author: Ildiko Vancsa
date: 2026-04-22T01:32:05.627Z
category: 
  - label: News & Announcements
    id: category-A7fnZYrE1
---

The StarlingX community is proud to announce the StarlingX 12.0 release. This milestone represents more than just a version increment; it is the culmination of years of rigorous field-testing in the world’s most demanding environments. While StarlingX has its roots in the high-stakes world of telecommunications, version 12.0 solidifies its position as a general-use distributed cloud platform capable of supporting any enterprise looking to master the complexities of edge computing.

# Hardened by Telecom, Built for Everyone
For years, StarlingX has been the backbone of 5G rollouts and ultra-low latency telecommunications infrastructure. In these environments, "downtime" isn't just an inconvenience—it’s a system failure. By meeting the strict requirements of major telecom providers—including sub-microsecond latency, 99.9999% availability, and automated zero-touch provisioning—StarlingX has undergone a "trial by fire."

Release 12.0 takes this battle-tested foundation and makes it more accessible for a broader range of industries. Whether you are managing industrial IoT across a factory floor, orchestrating retail systems in thousands of locations, or running high-bandwidth video delivery networks, StarlingX 12.0 provides the stability of a carrier-grade system with the flexibility of a modern, open-source cloud stack.

# Security at Scale: OIDC and Beyond
In a distributed cloud environment, security is the primary concern. Managing thousands of remote sites means that identity and access management must be both robust and seamless.

One of the headline features of StarlingX 12.0 is the integration of OpenID Connect (OIDC) authentication across all StarlingX API CLIs. As Kubernetes continues to move toward OIDC as its primary authentication method, this update ensures that StarlingX remains perfectly aligned with the broader cloud-native ecosystem.

Key security enhancements in 12.0 include:
- Multi-Factor Authentication (MFA): We have introduced MFA support within the OIDC DEX identity provider, adding a critical layer of protection for administrative access.
- Keystone Guardrails: User management in Keystone has been improved to prevent the accidental deletion of privileged users and introduces more granular roles like 'operator' and 'configurator.'
- Critical Action Confirmations: To prevent operational errors at scale, the CLI now supports confirmation prompts for commands that perform high-impact or critical actions.
- Pod-to-Pod IPSec: Building on previous releases, 12.0 offers refined IPSec support for pod-to-pod network traffic, allowing users to configure security policies via Custom Resource Definitions (CRDs).

# Modern Performance: Kernel and Hardware Support
The "Distro" team has been hard at work ensuring that StarlingX 12.0 runs on the most modern and stable foundation possible. This release features a refreshed Linux kernel, continuing the transition to the 6.12+ series. This update isn't just about version numbers; it’s about hardware enablement.

Release 12.0 includes expanded driver support for the latest Nvidia and Broadcom devices, which are essential for edge AI and high-speed networking workloads. By pulling in these drivers and performing extensive stress tests, the community ensures that your system can leverage specialized hardware acceleration without compromising stability.

# Networking Excellence: PTP Partial Timing Support (PTS)


# A Complete Cloud-Native Stack: Updated Apps and Plugin Infrastructure


In this release, 

# Join the Community
The 12.0 release is a testament to the power of open collaboration. We want to thank the developers, testers, and users from the OpenInfra Foundation and the O-RAN Software Community who contributed to this milestone.

StarlingX is ready for your most demanding distributed cloud use cases. We invite you to download the 12.0 ISO, explore the updated documentation, and join our community meetings to help shape the future of the edge.

Ready to get started?
Visit our Project Website to download the latest release and join the conversation on the StarlingX mailing lists and Matrix channel.


For the complete list of updates and new features in StarlingX 12.0, check out the [release notes](https://docs.starlingx.io/releasenotes/index.html#release-notes) and the [project documentation](https://docs.starlingx.io/).

# About StarlingX

Visit the StarlingX website today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](https://mirror.starlingx.windriver.com/mirror/starlingx/release/) to try out the new features. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.


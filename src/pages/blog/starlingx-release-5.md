---
templateKey: blog-post
title: StarlingX R5.0 is here!
author: Ildiko Vancsa
date: 2020-06-01T01:32:05.627Z
category: 
  - label: News & Announcements
    id: category-A7fnZYrE1
---

The StarlingX community is pleased to announce the R5.0 release with new features and enhancements to the platform.<!-- more -->

Edge computing has been in the spotlight for years now and while some use cases are running in production already this area is still under exploration with new demands and opportunities.

The StarlingX platform is fine tuned for edge computing and IoT use cases and the community has been working on evolving the platform to fulfill the requirements of use cases in areas such as 5G, Industrial IoT and more. In the recent release cycle the contributors were focusing on areas that are critical for edge such as scalability, performance and security. This article will give you a highlight of some of the new features and enhancements that were added to the platform during the 5.0 release cycle.

One of the emerging use cases is Industrial IoT and the increased automation of factory floors. This use demands solutions that provide the possibility to manage industrial PCs and devices and sensors in these environments. To address this need, the StarlingX community introduced a new feature called ‘edgeworker’ node, that is a new personality distinguished from 'worker' nodes. Edgeworker nodes are usually deployed close to an edge device, such as an I/O device, a camera, a servo motor or a sensor, to manage host-based enrollment. The 'edgeworker' personality is particularly suitable when a lightweight approach is a priority, that is achieved by deploying only a few agents on the nodes.

Hardware acceleration is also becoming increasingly popular to provide high performance and increased computing power for edge use cases with high demands. This area is a priority for the StarlingX community as well with new options introduced in the 5.0 release.

The community added support for Nvidia GPUs, enabling operators to do additional offload for those particular workloads that require GPU interacting, such as machine learning or other image-based processing.

Another key enhancement in this area is the ability to orchestrate FPGA image updates. FPGA and acceleration are important features of edge systems and this new functionality improves operations with supporting automation across the distributed cluster. This gives you the option to deploy FPGA with orchestrations that are automated from end to end.

StarlingX has already added support for the Precision Time Protocol (PTP) in the previous release to support time-sensitive applications. To improve the usability of the feature the community implemented a PTP notification framework as well. You can now receive notifications about the PTP state and take action in case the system time is no longer in sync with the PTP clock source which is critical for time-sensitive applications.

Security is an area that is always on the top of the priority list for edge as well as for the StarlingX community. Among other enhancements, project contributors integrated Vault into the platform for secret management to provide the ability to store and access secrets securely. These secrets can include credentials, encryption keys, API tokens and other data that should not be stored in plain text on a system. Vault, an open source project, provides the ability to encrypt and store secrets with access control via a range of authorization and access policy configurations. This new component improves the platform’s security posture and encryption capabilities while maintaining manageability.

If you install the latest version of the platform you will also get features and enhancements like:
- Improvements to certification management to enhance automation
- Containerized Ceph storage by using Rook
- Support for Net-SNMP v3 for the fault management service
- CephFS for cluster storage 
- Container Image Signature Validation

For the complete list of updates and new features in StarlingX R5.0, check out the [release notes](https://docs.starlingx.io/releasenotes/r5_release.html) and the [project documentation](https://docs.starlingx.io).

Visit the StarlingX website today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](http://mirror.starlingx.cengn.ca/mirror/starlingx/release/) to try out the new features.

---
templateKey: blog-post
title: StarlingX at the virtual Project Teams Gathering in April, 2025
author: Ildiko Vancsa
date: 2025-04-14T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Get the highlights of StarlingX discussions and project updates at the April, 2025 virtual [OpenInfra Project Teams Gathering (PTG)](https://openinfra.org/ptg/) event.

The StarlingX community had sessions on two consecutive days at the event to discuss use cases, go through project team updates, talk about the 11.0 release and further roadmap, and more. This two-article mini series provides a highlight of the conversations the community had at the event.

# Project Team Updates

The main topic area for this PTG session was to go through project team updates, which provided a great opportunity to get an overview of new features that were recently released as part of [10.0](https://www.starlingx.io/blog/starlingx-release-10/), along with a sneak peek into current work items and roadmap.

## OpenStack Distro

The OpenStack Distro team, as the name suggests, maintains and develops further the OpenStack integration in the platform, which includes KVM and QEMU, they also run weekly sanity tests. As the team gained new contributors during more recent release cycles, they have a bigger list of goals and tasks to get through.

StarlingX 10.0 integrates the Antelope version of OpenStack. During the release cycle, contributors added some enhancements to the OpenStack component of the platform and related components, including updating QEMU to v7.2 as a newer version was needed for the Kata Containers integration. The team also made enhancements to TLS certificates as part of security-related work in the platform, which now allow more flexibility to users when configuring things like FQDN and DNS settings. In the Distributed Cloud architecture OpenStack is supported on the sub-clouds, which the team made some updates to for maintenance purposes as well as to increase scalability of the platform.

For the 11.0 release the team is planning enhancements in areas such as manageability and automation. The new release will integrate the Caracal version of OpenStack, and with that will also start following the SLURP upgrade model and allow for an in-place, non-disruptive OpenStack upgrade. The team is also looking into adding support for Rook Ceph deployment and introduce more automation in configure that component, while also planning to add support for OVS-DPDK and OpenStack Telemetry.

## Flock Services

This project team is working on components that are delivering key functionality to the platform, such as fault and software management. Through these services contributors are continuously improving the manageability and performance of the platform.

During the 10.0 release cycle the team made improvements to manageability, upgrades and configuration options for the platform. The biggest work item was the Unified Software Management (USM) Framework, which delivers an elevated user experience through a more straightforward way to manage updates and upgrades. Keep an eye out for a coming blog post to learn more about USM!

The team will keep enhancing the framework and add new functionality to it through upcoming release cycles. Beyond this big work item the team also added the possibility to configure the kernel version (standard vs real-time) during runtime, made further improvements to the upgrade framework to move between major StarlingX versions. Contributors also kept working on the ostree integration to have a faster upgrade and patching process through improved image and package management within the platform.

The team's roadmap contains some further exciting items for the 11.0 cycle, including improvements to scalability and the upgrade process. The team is working with other StarlingX project teams to move the platform to a newer Debian version, which will include upgrading the Python version in the platform.  They are also investigating the idea to add a new package called ‘stalld’, which can help with resource management within the platform and avoid low-priority tasks to suffer from starvation. The release cycle will include more improvements to USM, with a focus on rollbacks during the upgrade process and the backup and restore functionlaity, along with working with other project teams on scalability enhancements.

## Containers

This team is responsible for the containerized application framework and other aspects of containerization and container support in the platform, including Kubernetes integration.

In the 10.0 release cycle, contributors of this team have been working on updating components related to the containerized architecture of the platform, which included Kubernetes up to v1.29, FluxCD, Helm, and KubeVirt. The team also integrated the Kubernetes NUMA-aware Memory Manager component into StarlingX. Furthermore, they made improvements to achieve performance optimizations.

The upcoming release cycle also targets to update Kubernetes up to version 1.33. The team is looking into further enhancing upgrades, like optimizing the Kubernetes upgrade process to reduce the steps in the platform to upgrade this component.

## Networking

The networking team is responsible for the network connectivity between StarlingX components, as well as between the platform and the outside world. To add driver support for devices like network interface cards (NIC), the team collaborates with the Distro team.

The most impactful feature the Networking team added in the 10.0 release cycle is the IPv4/IPv6 dual-stack support, which was requested by users. Keep an eye out for a coming blog post to learn more about how to use this feature! Further updates during the release cycle included upversioning integrated components, such as QAT/GPU plugin, the Intel FEC operator, and more. Contributors also added support to reconfigure the platform management network without the need to redeploy any components of the platform.

Beyond updating the integrated components, in the 11.0 release cycle the team is planning to add some new capabilities to the platform as well. New functionality includes the reduction of network addresses that are required to configure a StarlingX system. Users will also be able to configure network traffic bandwidth on the different platform networks, which includes applying rate limits. Enhancements will be added to the Precision Time Protocol (PTP) components in the platform, along with looking into security related improvements, like file permission adjustments in network config, based on CIS benchmarking results.

## Security

This project team handles vulnerability management and CVE's while also focusing on security related features and hardening of the platform. The team is still doing monthly CVE scans, which is focusing on the ISO and not the container images.

The biggest improvement during the 10.0 release was adding the support for IPSec on the L2 platform networks, which enables encrypted traffic between controllers as well as controllers and worker nodes. This improvement was partially driven by the results of penetration testing, which was carried out by one of the users of the platform. On new StarlingX deployments cert-manager is now enabled by default, and the team added some further enhancements to certificate management as well. Contributors added improvements to password management, and updated many of the relevant integrated components of the platform.

During the 11.0 release cycle the team is planning to further enhance IPSec support, which will include allowing users to enable it on their pod-to-pod network traffic. Configuration will be done through an IPSec policy manager, which will be a new containerized application within the platform. The team is also planning to improve some of the processes, for instance introducing restrictions on actions such as deleting users, to avoid deleting a privileged user from the system, which happened to users before, allow configuring limitations to actions that different user roles can do.

Among other work items, contributors are also replacing Hashicorp Vault in this release cycle with OpenBao, since the platform currently using the last version of Vault that has an OSI-approved open source license.


For further notes of the discussions at the event please refer to the session [etherpad](https://etherpad.opendev.org/p/r.88723cc8246d5717733a438b65ced845) which also contains the link to the recording of the session.

# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

---
templateKey: blog-post
title: StarlingX at the virtual Project Teams Gathering in October, 2025
author: Ildiko Vancsa
date: 2025-11-17T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Get the highlights of StarlingX project team updates at the October, 2025 virtual [OpenInfra Project Teams Gathering (PTG)](https://openinfra.org/ptg/) event.

The StarlingX community held one session at the event to discuss use cases, go through project team updates, talk about the recent 11.0 and upcoming 12.0 releases and further roadmap, and more. This two-article mini series provides a highlight of the conversations the community had at the event.

# Introduction

The PTG session started with an introduction to the StarlingX platform, where it was described as an open source cloud platform that you can use to build your infrastructure with Kubernetes and OpenStack for virtualized and containerized workloads. You can deploy and easily operate and maintain StarlingX in a geographically distributed environment on small or large scale alike by design, which makes the platform unique. If you’re new to StarlingX, make sure to check out the [session recording](https://zoom-lfx.platform.linuxfoundation.org/meeting/93508153858-1761742800000/summaries?password=46b2c3b9-3994-4666-a8ce-e5aeffdf9e6c) to learn more.

# Project Team Updates

This PTG session mainly focused on going through project team updates, which provided a great opportunity to get an overview of new features for the new [11.0 release](https://www.starlingx.io/blog/starlingx-release-11/), along with a sneak peek into current work items and roadmap for 12.0.

## Distro

The Distro team is responsible for integrating the operating system integration into the StarlingX platform, including upgrades, driver integration and more.

During the 11.0 release cycle the team focused on upgrading the kernel to the v6.12 version, along with upversioning some of the out-of-tree drivers, mainly for Nvidia and Broadcom devices. In order to ensure the platform’s stability, contributors performed stress tests and pulled in or implemented fixes as needed.

For the 12.0 release the plans are very similar to the release cycle that just ended. The team will further refresh the kernel and add fixes and enhancements. Contributors will also investigate adding some more drivers to the kernel to support additional hardware options. The jump to Debian Trixie is currently planned for 13.0.

## Security

This project team handles vulnerability management and CVE scanning while also focuses on security related features and hardening of the platform. The team is still doing monthly CVE scans, which is targeting mainly the ISO and not the container images.

During the 11.0 release cycle the team was busy adding new functionality and make the platform more secure through tweaks, benchmarking and CVE fixes. Contributors further enhanced IPSec support, which included allowing users to enable it on their pod-to-pod network traffic. Users can now configure a CRD to specify an IPSec policy for pod-to-pod network traffic within the platform, for both platform and application pods. The team also improved user management in Keystone by adding restrictions on various actions. This included preventing deleting a privileged user from the system by accident, which happened to users before, and added new roles such as ‘operator’ and ‘configurator’. You can now also enable CLI confirmation for commands that perform critical actions. Furthermore updates were made to certification management and secure boot.

The team already has plans for the 12.0 release cycle. They will be adding OIDC authentication to all StarlingX API CLIs, which is needed since Kubernetes is using OIDC. The platform will still support Keystone for backwards compatibility. Contributors will also make improvements to OIDC DEX, which is used as identity provider, to support MFA authentication, and integrate new versions of security-related components within the StarlingX platform. To learn more about the details of how StarlingX is using OIDC make sure to check out the session recording.

## Flock Services

This project team is working on components that are delivering key functionality to the platform, such as fault and software management. Through these services contributors are continuously improving the manageability and performance of the platform.

The team added some new capabilities during the 11.0 cycle, including improvements to scalability and the upgrade process. Contributors worked with other StarlingX project teams to move the platform to the aforementioned newer Debian version. They also added a new package called ‘stalld’, which can help with resource management to avoid low-priority tasks to suffer from starvation and better support real-time workloads. While ‘stalld’ has a lot of advantages it is not always applicable. When using a real-time kernel and applications, you always need to be careful when you put this component to action to get the best results.

Contributors also worked with the OpenStack Distro team to further increase the platform’s scalability and stability, which included fixing issues and limitations. Last but not least, the release cycle included more improvements to Unified Software Management (USM), with a focus on rollbacks during the upgrade process and the backup and restore functionality.

In the 12.0 release cycle the team is looking into some performance optimizations, like further cutting reboot time. Contributors are dedicated to this goal and will benchmark this function throughout the release cycle to measure improvements. Further optimizations include fine-tuning configuration options, including kernel parameters, and improving root-cause analysis, in case of failures during operation. As the Flock services are core components to the platform that are tightly integrated with many other pieces, the team keeps working closely with other project teams to ensure that the StarlingX platform remains easy to manage and maintain.

## Containers

This team is responsible for the containerized application framework and other aspects of containerization and container support in the platform, including Kubernetes integration.

The team updated Kubernetes up to version 1.32 in the recent release cycle, and upversioned further components that are integrated by this team. Maintenance efforts also covered working on FluxCD and KubeVirt. Contributors further enhanced the upgrade procedure for Kubernetes, which now includes a rollback operation after activating ‘software deploy activate’. This makes the upgrade process much more robust than it was before. Beyond that the team also optimized the upgrade process to make it faster and more seamless, for example eliminating some of the steps that required to perform a reboot. Other tweaks included to utilize some Kubernetes features, like the Kubernetes Version Skew Policy.

The team has similar plans for the 12.0 release cycle, which will include moving forward with Kubernetes versions up 1.34, and if possible even up to 1.35 and maintaining containerization-related apps such as KubeVirt and FluxCD.

There are a few more steps to further improve the upgrade process for Kubernetes, which contributors will start to investigate. For example, it would be beneficial to move the etcd upgrade to a later stage in the overall upgrade process to be part of the Kubernetes upgrade piece for more stability. Furthermore the team will check out the new upstream kubernetes-module-manager component, which allows to build and load out-of-tree kernel modules into the running system. This can com handy when someone is relying on specific hardware that is not supported by the currently deployed kernel models in the system. The team hasn’t committed yet to finish these work items in the 12.0 release.

## Networking

The networking team is responsible for the network connectivity between StarlingX components, as well as between the platform and the outside world. To add driver support for devices like network interface cards (NIC), the team collaborates with the Distro team.

During the 11.0 release cycle the team was very busy, as they implemented all the features and functionality they planned for this cycle during the last PTG. Beyond updating the integrated components, the team  added some new capabilities to the platform as well. Contributors reduced the amount of network addresses that are required to configure a StarlingX system. Users can now also configure network traffic bandwidth on the different platform networks, which is carried out through applying rate limits. The Precision Time Protocol (PTP) component also got a lot of improvements, people on the meeting even made a small joke how PTP is always in the center of attention and is constantly getting updates. Further improvements included security, like file permission adjustments in network config, guided by CIS benchmarking results.

The team has big plans for the 12.0 release cycle as well. PTP will get Partial Timing Support (PTS), that allows to have a heterogenous environment where not all devices are PTP-aware. Contributors will integrate the Kubernetes MetalLB component, which is a load balancer that can help with handling incoming traffic. The release cycle will also be used to do maintenance work on already integrated and developed components that are related to networking within the platform.


For further notes of the discussions at the event please refer to the session [etherpad](https://etherpad.opendev.org/p/r.140f090fb9ac95e8507e6e02c0f9b3df) which also contains the link to the recording of the session.

Check out [Part 2](https://www.starlingx.io/blog/starlingx-vptg-october-2025-recap-part-2/) for the remaining project updates.

# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

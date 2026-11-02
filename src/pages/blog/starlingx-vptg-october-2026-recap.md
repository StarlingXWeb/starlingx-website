---
templateKey: blog-post
title: StarlingX at the virtual Project Teams Gathering in October, 2026
author: Ildiko Vancsa
date: 2026-11-02T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Get the highlights of StarlingX project team updates at the October, 2026 virtual [OpenInfra Project Teams Gathering (PTG)](https://openinfra.org/ptg/) event.

The StarlingX community held one session at the event to discuss use cases, go through project team updates, talk about the recent 13.0 and upcoming 14.0 cycles and further roadmap, and more. This two-article mini series provides a highlight of the conversations the community had at the event.

# General updates

The PTG session started with two presentations that described some bigger changes that are coming to both the StarlingX platform and the tooling that community is using.

## Moving to GitLab

The community is currently investigating the option to move hosting and collaboration on the code from Gerrit over to GitLab. The main reason for this move is to consolidate various tasks into one platform, as GitLab supports tracking bugs and new features all in one place. The community is hoping that this change will also improve contributor experience for newcomers and lower the bar for new contributors to join the project.

Contributors still need to figure out how the change would affect tooling around building ISO and container images, along with rendering the project’s documentation to the web page where it’s currently hosted. There is no timeline yet to finish this move, but the community aims at the 14.0 release cycle to move forward with their current plans.

## Re-architecting the StarlingX platform

As the StarlingX platform relies heavily on Kubernetes to manage the containerized services, contributors are planning to take advantage of the native Kubernetes operators, following the Kubernetes operator design patterns. While this change affects mainly the platform architecture, it is still a highly user-facing change as it is hoped to greatly increase usability of the platform and provide CRD-based CLIs.

The new architecture is planned to bring in better domain isolation, which will enable independently developed and tested components. The community is also planning to remove the use of Puppet and with makes the platform configuration more flexible and easy to do, while lowering host reload/reboot times.

This change will likely span across multiple release cycles, with work starting in 14.0.

# Project Team Updates

The rest of PTG session focused on project team updates, which provided a great opportunity to get an overview of new features in the soon to be released 13.0 release, along with a sneak peek into current work items and roadmap for 14.0.

## Distro

The Distro team is responsible for integrating the operating system integration into the StarlingX platform, including upgrades, driver integration and more.

During the 13.0 release cycle the team finalized moving to Debian Trixie, while also upgrading to the v6.18.15 kernel. With increasing focus on security and vulnerabilities across the industry, the team integrated numerous CVE fixes. They also performed maintenance tasks and updates to drivers, including Mellanox and Broadcom.

For the 14.0 release the plans are very similar to the release cycle that just ended. The team will further refresh the kernel and add fixes and enhancements and switch to the vanilla stable upstream kernel.

## Security

This project team handles vulnerability management and CVE scanning while also focuses on security related features and hardening of the platform. The team is still doing CVE scans, which is targeting mainly the ISO and not the container images, and is planning to fine tune their work in this area later this year.

During the 13.0 release cycle the team was busy adding new functionality and make the platform more secure through tweaks, benchmarking and CVE fixes. The team also delivered some bigger features, like EJBCA support, which can learn more about soon in an upcoming blog post.

Further security enhancements include:
- Added flexibility to fine-tune and configure security-related parameters on the StarlingX platform
- OIDC tweaks to improve caching
- Updates to LUKS keyring security

The team already has plans for the 14.0 release cycle. In line with the plans to re-architect the platform, contributors will be adding a new Security Operator, which will introduce some big enhancements to platform certificate management. They will further focus on LUKS filesystem improvements, including TPM devices, and will be moving from the last open source version of Vault to Open Bao.

## Flock Services

This project team is working on components that are delivering key functionality to the platform, such as fault and software management. Through these services contributors are continuously improving the manageability and performance of the platform.

In the 13.0 release cycle the team was busy collaborating with other project teams to get the services under their care ready to run smoothly on Debian Trixie. They also added sub-NUMA clustering support, which currently allow 2 nodes per socket in a cluster. The team worked on the system restore feature to make it easier to go back to system defaults, and the granularity and performance of upgrades was also improved through their efforts on modularizing the services.

In the 14.0 release cycle the team is taking part in the re-architecting the platform by creating a new Flock Operator. Further items on the team’s todo list for the release cycle includes:
- Eventlet deprecation
- sub-NUMA clusters to support more than 2 nodes per socket
- Make progress on enabling a multiplex controller node setup, in addition to the currently supported active/standby configuration

## Containers

This team is responsible for the containerized application framework and other aspects of containerization and container support in the platform, including Kubernetes integration.

The team updated Kubernetes up to version 1.35 in the 13.0 release cycle. The Application Framework got some updates and a new app called app-kubernetes-module-manager. They also added support for cgroups v2, which also means that v1 is now deprecated and will be removed in 14.0.

In the 14.0 release cycle the team will be busy implementing the Kubernetes and Application Operators, as part of the effort to re-architect the platform. Further plans for the cycle include introducing Kubernetes and application pod resource limits and enabling native in-tree Kubernetes gang scheduling for increased AI compliance.

## Networking

The networking team is responsible for the network connectivity between StarlingX components, as well as between the platform and the outside world. To add driver support for devices like network interface cards (NIC), the team collaborates with the Distro team.

Besides the regular maintenance tasks, during the 13.0 release cycle the team added a new Open vSwitch (OVS) L2 Forwarding platform application, which will be introduced in more details in an upcoming blog post. Contributors also added a Calico Network Operator to enable lifecycles management for all Calico components, easier upgrades and more flexibility. The PTP feature also gained new functionality, including:
- Configured UTC Offset as an Authoritative Source
- Enhanced SyncE Support
- Quality Monitoring and Metrics Publication

The team is still planning their work for the 14.0 release cycle. However, they already foresee further PTP features and improvements to floating IP management.


For further notes of the discussions at the event please refer to the session [etherpad](https://etherpad.opendev.org/p/r.89eae0f065928bfea04d45ca96659de5) which also contains the link to the recording of the session.

Check out [Part 2](https://www.starlingx.io/blog/starlingx-vptg-october-2026-recap-part-2/) for the remaining project updates.

# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

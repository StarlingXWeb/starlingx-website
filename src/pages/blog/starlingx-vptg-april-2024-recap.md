---
templateKey: blog-post
title: StarlingX at the virtual Project Teams Gathering in April, 2024 - Part 1
author: Ildiko Vancsa
date: 2024-05-01T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Get the highlights of StarlingX discussions and project updates at the April, 2024 virtual [OpenInfra Project Teams Gathering (PTG)](https://openinfra.dev/ptg/) event.

The StarlingX community had sessions on two consecutive days at the event to discuss use cases, go through project team updates, talk about the 10.0 release and further roadmap, and more. This two-article mini series provides a highlight of the conversations the community had at the event.

# Introductions

The sessions started with a short introduction of both the event as well as the StarlingX project to provide an overview for newcomers. You can check out the [project's website](https://www.starlingx.io) to find the resources that were mentioned.

# Project Team Updates

Following the traditions, the community allocated time to go through project team updates, which provided a great opportunity to get an overview of new features that were recently released as part of [9.0](https://www.starlingx.io/blog/starlingx-release-9/), along with a sneak peek into current work items and roadmap.

## Networking

The networking team is responsible for the network connectivity between StarlingX components, as well as between the platform and the outside world. To add driver support for devices like network interface cards (NIC), the team collaborates with the Distro team. During this segment, the team took the time to go through some of the new functionality and improvements that got introduced during the 9.0 release cycle. Highlights include:

- The PTP feature now has redundant system clocks, which allows for an HA configuration
- Upgrading components such as istio, networking CNI images and plugins, and more

The team also started to work on a couple of features, which they are planning to finalize the implementation for the 10.0 release:

- Ability to change the management network after installation of the All-in-One Simplex setup
- Updating the Intel FEC operator to a current version

Further plans for 10.0 and beyond include:

- Marvell accelerator support
- IPv4/IPv6 dual-stack support

## Flock Services

This project team is working on components that are delivering key functionality to the platform, such as fault and software management. Through these services contributors are continuously improving the manageability and performance of the platform.

During the 9.0 release cycle the team was focusing on key areas, such as to improve scalability, performance efficiency and operability. The initialization phase of sub-cloud deployment is now executed more efficiently, and the platform software upgrade process also got faster.

The team's roadmap contains some other exciting items. Contributors will collaborate with other project teams to implement support for making kernel options configurable, so users can choose between low-latency or standard options. The team is also working on a unified software management framework, which will incorporate the functions to patch components, as well as to upgrade the platform.

## Security

This project team handles vulnerability management and CVE's while also focusing on security related features and hardening of the platform. The team is still doing monthly CVE scans, which is focusing on the ISO and not the container images.

During the 9.0 release cycle the team added support for AppArmor, and updated relevant components, like Vault, cert-manager, OIDC, and more, which are integrated into the platform. The platform now also supports the LUKS filesystem, which can be used for instance to store etcd encryption keys.

During the 10.0 release cycle the team is planning to enable IPSec on L2 platform networks, improve certificate management, and keep the relevant integrated components up to date. 

Further roadmap items include:

- Multi-factor authentication
- Scanning of container images in local registry
- Container image signature validation for trusted pulls

## OpenStack Distro

The OpenStack Distro team, as the name suggests, maintains and develops further the OpenStack integration in the platform, which includes KVM and QEMU.

During the 9.0 release cycle, contributors worked with the build team to further optimize the build process by decoupling the platform and application builds in separate manifests and build jobs and making it more modular. The StarlingX platform has been using some of the OpenStack clients on the base layer. Now all these client services are containerized, which makes it possible to deploy a different OpenStack version with StarlingX than what the platform itself is relying on.

StarlingX 9.0 also integrates the Antelope version of OpenStack, and the plan is to move up to Bobcat in 10.0 and keep closer to the latest release in the future. QEMU and Libvirt will also be updated to newer versions, which will enable integrating new projects, such as Kata Containers, into the platform. Contributors will also work with the Security team to enhance TLS Certificates in the currently ongoing release cycle.


For further notes of the discussions at the event please refer to the session [etherpad](https://etherpad.opendev.org/p/r.bc04598c08f498303b1e8a3cfe913eef) which also contains the link to the recording of the session.

# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

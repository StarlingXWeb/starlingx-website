---
templateKey: blog-post
title: StarlingX at the virtual Project Teams Gathering in April, 2026
author: Ildiko Vancsa
date: 2026-05-04T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Get the highlights of StarlingX discussions and project updates at the April 2026 virtual [OpenInfra Project Teams Gathering (PTG)](https://openinfra.org/ptg/) event.

The StarlingX community held one session at the event to discuss use cases, go through project team updates, reflect on the 12.0 release and talk about 13.0 and further roadmap items, and more. This two-article mini series provides a highlight of the conversations the community had at the event.

# Project Team Updates

The main topic area for this PTG session was to go through project team updates, which provided a great opportunity to get an overview of new features that were recently released as part of [12.0](https://www.starlingx.io/blog/starlingx-release-12/), along with a sneak peek into current work items and roadmap.

## Security

This project team handles vulnerability management and CVE's while also focuses on security related features and hardening of the platform. The team is still doing monthly CVE scans, which is targeting mainly the ISO and not the container images.

The team has been growing, which also resulted in more geographical diversity, and evolving to take on more work and responsibilities.

The most impactful improvement during the 12.0 release cycle was adding the support for [OIDC Auth](https://openid.net/developers/how-connect-works/) in StarlingX APIs and CLIs, which happened in collaboration with many other StarlingX project teams as it affects multiple bits of the platform. OIDC is now the default authentication protocol used in the platform, and the boostrap process is now using the [OIDC DEX](https://github.com/dexidp/dex) identity service. There’s also support for an OIDC Identity Provider (IdP) with Multi-Factor Authentication (MFA) enabled.

During the 13.0 release cycle the team is planning to focus on enhancements in certificate management, including support for X.509 certificate support with different key types and longer key sizes. Furthermore contributors will work on adding more flexible configuration options for security features, further enhancing OIDC support, and using LUKS filesystem as a protection layer for the keyring being used in the platform. The team will also perform usual maintenance actions to ensure compatibility with newer versions of other the system components moving forward.

In addition, during the 13.0 cycle contributors will implement the first steps towards adding support for [EJBCA](https://www.ejbca.org), which is an open source PKI software that will enable replacing the platform’s dependency on using local cert-manager.

## Flock Services

This project team is working on components that are delivering key functionality to the platform, such as fault and software management. Through these services contributors are continuously improving the manageability and performance of the platform.

During the 12.0 release cycle the team made improvements to the upgrade process, including optimizations on reboot time and chimed in on the work item to complete the implementation of OIDC Authentication throughout the platform. Furthermore, contributors were focusing on improving efficiency and keeping up to date with components that the platform services are relying on, and already made preparations for the upcoming Debian Trixie support in StarlingX 13.0.

The team's roadmap contains some further items for the 13.0 cycle that will improve the backup-restore functionality for the Flock services. Plans also include further automation and optimizations to the upgrade process, like modularization and making the process faster, all of which is managed through the Unified Software Management (USM) component in StarlingX.

## Containers

This team is responsible for the containerized application framework and other aspects of containerization and container support in the platform, including Kubernetes integration.

In the 12.0 release cycle, the team has expanded to keep up with the growing amount of work in this area, as the Containers project is another key component in making the upgrade process working throughout the platform.  Contributors introduced a rollback mechanism in the upgrade process, which you can invoke after the step when a newly deployed application gets applied, in case needed. The team also made further enhancements to the upgrade mechanism, including reboot optimization. 12.0 also delivers updates to integrated software components, including Kubernetes support up to v1.34.

In 13.0 the team is planning on moving forward with the Kubernetes version up to v1.35 and optionally v1.36. The team is looking into utilizing more components from Kubernetes to enhance the application framework in StarlingX and improve the upgrade process to make it faster and more efficient. The team is also starting to investigate how they can provide enhanced GPU support in the platform through GPU Operator Apps and features.

## Networking

The networking team is responsible for the network connectivity between StarlingX components, as well as between the platform and the outside world. To add driver support for devices like network interface cards (NIC), the team collaborates with the Distro team.

The most impactful update the Networking team added in the 12.0 release cycle is Partial Timing support in PTP. With this change someone can take advantage of PTP even without all nodes in the system having support for PTP. The team also prioritized updates and upgrades on networking-related components of the platform to keep up with latest versions of dependencies along with maintenance tasks like updating the Intel FEC operator plugin to the latest version.

The 13.0 release cycle will focus on switching, as the team is planning to provide L2 connectivity between containers, and potentially KubeVirt VMs as well, through Open vSwitch (OVS). Calico operator will also provide further enhancements to make network configuration and management easier and more flexible. And, this release cycle wouldn’t be complete without plans to do maintenance and add small improvements to PTP support in StarlingX.

## OpenStack Distro

The OpenStack Distro team, as the name suggests, maintains and develops further the OpenStack integration in the platform, which includes KVM and QEMU, they also run weekly sanity tests that they send out reports to the starlingx-discuss mailing list and the team’s Matrix channel.

StarlingX 12.0 introduces OpenStack Epoxy, which is a jump from the previously supported Caracal release through the SLURP process that the OpenStack community provides to skip the year.2 release versions. The team also added support for NetApp as an external storage option. Users can now choose between having a NetApp-only environment or use OpenStack with a combination of Ceph and NetApp. Furthermore, contributors implemented federated authentication, which relies on OIDC DEX and supports LDAP as well, and worked on enhancing OVS support, including Bond/AE and VLAN interfaces for data networks.

For the 13.0 release the team is planning to jump up to the Gazpacho release of OpenStack. As contributors have been having a good experience with this cadence, the team will likely stick with the SLURP cadence and will only add support for year.1 releases of OpenStack. Other bigger work items will be to support moving the platform to Debian Trixie and integrate the Telemetry stack from OpenStack, along with the OpenStack Prometheus Exporter component, which is to replace Gnocchi with a component that is better maintained upstream.


For further notes of the discussions at the event please refer to the session [etherpad](https://etherpad.opendev.org/p/r.adc3ac0c6383e2ad30e9ebf6477143e4) which also contains the link to the recording of the session.

# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

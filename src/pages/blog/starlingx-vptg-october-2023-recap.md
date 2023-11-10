---
templateKey: blog-post
title: StarlingX at the virtual Project Teams Gathering in October, 2023
author: Ildiko Vancsa
date: 2023-11-13T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Get the highlights of StarlingX discussions and project updates at the virtual [OpenInfra Project Teams Gathering (PTG)](https://www.openstack.org/ptg/) event in October, 2023.

The StarlingX community had sessions on two consecutive days at the event to discuss use cases, go through project team updates, talk about the 9.0 release and further roadmap items, and more. This article provides a highlight of the conversations the community had at the event.

# Use cases

Discussing existing and new use cases is always very exciting, and this conversation at the event was no exception. Session attendees discussed two main use cases, telecommunications and forest fire detection.

## Autonomous Fire Detection

Forest fires have a large impact on the environment as well as human lives due to the large damage they often cause. There are newly forming ideas to build out a sensor-based smart system to detect uncontrolled forest fires early.  StarlingX is an ideal platform for a system like this, since it’s designed to manage a group of geographically distributed sites, including sites with very small footprint. Sensors in the environment can include cameras, temperature sensors, and more. 

## Telecommunications

As part of a commercial distribution, StarlingX is utilized by large telecom operators around the globe as a base for 5G and open RAN systems. These deployments are leveraging StarlingX’s support for container-based workloads orchestrated by Kubernetes that is a fundamental part of the platform. Another highly used feature is the Distributed Cloud architecture model, that gets deployed in most scenarios. Sub-clouds are usually using AIO-Simplex configuration for the Distributed Unit (DU) component of the 5G architecture, due to its small footprint. Open RAN deployments utilize AIO-Duplex or Standard Multi-Server configuration options for bigger sites where more servers are available.

You can find out more about StarlingX's use and features applicable to the telecommunications segment on the [StarlingX blog](https://www.starlingx.io/blog/), including a [blog post](https://www.starlingx.io/blog/starlingx-oran-o2-application/) about the O-RAN O2 application support.

# Project team updates

Similarly to previous PTGs, attendees covered updates from most of the project teams in the community.

## Build

The Build team has been busy with some recent changes, such as moving off of the CENGN environment to a lab that is donated by Wind River to the community. Arm has also donated servers to the community to set up in the lab to support the work to add and test Arm support to the StarlingX platform. The built system is being adjusted as well to detect the architecture the platform ISO is built for.

Another bigger work item has been to jump to the Antelope version of OpenStack in the platform, which needed support from the Build team as well. Contributors have also been working on adding support for a universal software manager and OSTree. Future plans include improving performance through parallelism and scheduling, and further enhancements to the monolithic build.

## Containers

Contributors of this team have been working on upgrade related changes. The is adding optimization to the All-In-One (AIO) Simplex configuration to update Kubernetes components. They also added a dedicated namespace for the containers of the platform services, which improves the CPU isolation capabilities of the platform. Contributors are collaborating with the KubeVirt community on enhancements.

Future work items include enhancements to the HA configuration support and performance, as well as upversioning Kubernetes to 1.28 or 1.29. The latter item is facing some challenges due to Kubernetes constantly pulling in newer versions of Golang.

## Distro & Multi-OS

These two teams have been working on the ISO and container images, including splitting packages between these and keep the size of the images manageable. Contributors are also actively working on the Arm support to add required kernel modules to the platform. The team’s roadmap includes a kernel update to version 6.6, and collaborating with the Build team to further utilize OSTree in StarlingX.

## Docs

The Documentation team has been focusing on enhancing user experience in the platform by improving the terminology for CLI commands, adding a glossary and adding further content to both the bare metal as well as virtual installation guides. The Contributor Guide also got some updates to have a more detailed description of documentation contribution process. To complement documentation, contributors have been recording new videos to demonstrate the installation process on VirtualBox.

## Flock Services

During the 8.0 and 9.0 release cycles the Flock Services team has been working on improving scalability, performance efficiency and operability. The team further optimized the platform backup and restore process by taking advantage of the registry backup. Further enhancements to the Flock services also include multi-version upgrades for AIO-Simplex configuration and more.

The team will further enhance both upgrades as well as backup and restore functions during the 10.0 release cycle. Contributors will also be working with the Build and Distro teams to implement a simplified software management methods and adding OSTree and other changes.

## Networking

The Networking team has been working on a lot of enhancements and new features during the 9.0 release cycle. Highlights of their work items include an L3 firewall for platform interfaces with all limitations removed and a new Intel ethernet operator support, which allows you to update firmware on adapters throughout a cloud without the need to directly log in to each device. The team also improved communication between sub-clouds and central clouds, to allow the user more flexibility to reconfigure the sub-clouds after install.

Contributors integrated a new Wireless FEC operator, which users can now configure through standard Kubernetes APIs, configuration can be applied at cluster level or node level and device level.

Future work items will include further work on PTP and other components. Session attendees noted that there have been a lot of activity targeting PTP overall as it’s critical for RAN and other applications.

## OpenStack-Distro

This team is maintaining the containerized OpenStack services. Their biggest work item during the 9.0 release cycle was to integrate the Antelope version of OpenStack into the StarlingX platform. They started the integration and testing on a feature branch that they now merged back into the master branch. This approach was needed due to tasks such as decoupling the related manifests from the platform manifest, which required changes to the build systems. The builds and sanity testing with the newer OpenStack version are running successfully. The team is now focusing on testing the different StarlingX configurations including AIO-Simplex and AIO-Duplex, along with working on containerizing some client services that they couldn’t finish before.

In the 10.0 release cycle the team is planning to move to OpenStack Bobcat, which should be an easier switch due to all the enhancements they made to the platform and build system. The team is also working on developer documentation to capture what is required for the upgrade work and other tasks, to help the work of established and new contributors alike.

# Release

The community utilized the time at the event to talk about the 9.0 release, for which the development is currently ongoing. Contributors checked on the upcoming milestones to make the new version ready by March, 2024. The team also discussed the scope of the release including highlighting some of the bigger work items that the teams have been working on, such as integrating the Antelope version of OpenStack and updates to further components of the platform, sub-cloud error root-cause analysis, and more. While the community talked about roadmap items further out in the future during the project team segments, they did not cover detailed plans for the 10.0 release cycle this time.

## Security

Security was a hot topic during the community’s PTG sessions during the event.

The security team, which gained new contributors recently, has been working on performing CVE scanning and hardening on the StarlingX codebase, while also handling vulnerability management for the community. The team has also been working on security related features, such as adding the ability to set an AppArmor profile for applications to protect the overall system from untrusted apps. Many security related components are getting an upversion to leverage the new features and bug fixes in the current and upcoming releases.

Contributors also talked about penetration testing, which was performed on a StarlingX based commercial platform. The results triggered new features, such as adding support for the LUX filesystem along with adding encryption capabilities to the platform on multiple levels.

Future work items include certificate management enhancements, signature validation and further work on encryption to be able to provide that for applications as well along with platform services.

The above items are only a few highlights of the full roadmap of the StarlingX project. For further notes of the discussions at the PTG please refer to the session [etherpad](https://etherpad.opendev.org/p/r.dfbbb4f7cbaf07d3934cfb7426c3f52f) or check out the [recordings](https://lists.starlingx.io/archives/list/starlingx-discuss@lists.starlingx.io/thread/3ORWTSHYCGQ4TEE4Y72RNZV2TABOAIK3/) of the discussions.

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

Stay tuned for the next event where you can meet the StarlingX community!

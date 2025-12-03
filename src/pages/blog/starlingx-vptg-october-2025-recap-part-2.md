---
templateKey: blog-post
title: StarlingX at the virtual Project Teams Gathering in October, 2025 - Part 2
author: Ildiko Vancsa
date: 2025-11-25T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Get the highlights of StarlingX project team updates at the October, 2025 virtual [OpenInfra Project Teams Gathering (PTG)](https://openinfra.org/ptg/) event.

The StarlingX community held one session at the event to discuss use cases, go through project team updates, talk about the recent 11.0 and upcoming 12.0 releases and further roadmap, and more. This two-article mini series provides a highlight of the conversations the community had at the event.

# Project Team Updates

The main topic area for this PTG session was to go through project team updates, which provided a great opportunity to get an overview of new features that were recently released as part of [11.0](https://www.starlingx.io/blog/starlingx-release-11/), along with a sneak peek into current work items and roadmap.

## Distributed Cloud

The Distributed Cloud team is responsible for all aspects of central management and orchestration of a geographically distributed network of StarlingX clouds.

Contributors set the main focus on scalability again for the 11.0 cycle, to ensure that the number of sub-clouds per system controller can grow in a stable and reliable manner. Further enhancements covered the O-RAN application and the process to enroll sub-clouds into the system even more flexibly. The latter effort was driven by user feedback, since the adoption of this functionality has been high.

In the 12.0 release contributors will do further maintenance work on the O-RAN O2 interface application. The USM framework assumes that sub-clouds are pre-staged before deploying a distributed cloud infrastructure, as it makes simultaneous upgrades faster, contributors will remove this limitation in the new release cycle. There are also plans to add enhancements when using a virtual Cell Site Router (vCSR) resource, that will affect cloud-init configuration for sub-cloud at the enrollment phase, along with sub-cloud auto-restore. This team is also involved in the ongoing work to move from Keystone to OIDC authentication.

## OpenStack Distro

The OpenStack Distro team, as the name suggests, maintains and develops further the OpenStack integration in the platform, which includes KVM and QEMU, OVS and more, while they also run weekly sanity tests for OpenStack. As the team gained new contributors during the recent release cycles, they have a bigger list of goals and tasks to get through.

For the 11.0 release the team made enhancements in areas such as manageability and automation. The new release integrates the Caracal version of OpenStack, and with that started following the [SLURP upgrade model](https://docs.openstack.org/project-team-guide/release-cadence-adjustment.html) and enabled an in-place, non-disruptive OpenStack upgrade. The team’s experience was good overall with this process, and will keep utilizing the opportunity to jump to newer releases, from Caracal the next available release will be Epoxy in 12.0. Contributors also fixed OVS support, so users can use it now with or without DPDK, and added support for Rook Ceph deployment. Furthermore, the OpenStack application now supports IPv6 dual-stack configuration.

The 12.0 release will bring OpenStack Epoxy, which requires contributors to upversion Libvirt. Further plans include to add the option to access OpenStack through SSO, which means to connect Keystone to OIDC DEX as the identity provider. Contributors will also investigate adding support to use NetApp as external storage.

## Build

This team works on the build system, which turns the source code into a deployable ISO image. The contributors are collaborating closely with the Distro team to ensure a stable and efficient build system and process.

During the 11.0 release cycle the team gained access to a new build server, which helped with adding redundancy to the system and performing builds in a more efficient and stable manner that includes having daily builds for stable and release branches as well. In preparation for the 12.0 release cycle, the team already set up the build process for the OpenStack Epoxy feature branch.

The team is also working on supporting the transition period to Debian Trixie, which includes tweaking concurrent builds, along with updating the URLs to access various packages that are being built by the team.

## Test

The community has always been putting high emphasis on testing to ensure the stability and robustness of the platform, and that was no different in the 11.0 release cycle. Beyond the automated unit and functional testing that is preformed by Zuul, the community is also doing targeted feature testing as well as sanity and regression testing. The test infrastructure for the latter is donated to the community by Wind River Systems.

Some statistics from the 11.0 release cycle, which include numbers for the various testing activities combined:
- Feature testing 
  - 1154 tests executed to cover new features
  - 1629 regression tests
  - 3238 tests executed in total
  - 97.7%  Feature test Pass Rate, same as for 10.0

For the 12.0 cycle the team will keep the same cadence for sanity and regression testing as for previous cycles.

## Docs

The documentation team is working on maintaining and improving the structure and format of the documentation to ensure that users and newcomers have a cohesive experience, and the large amount of documentation that the project has is easy to navigate.

During the 11.0 release cycle the team made sure to have documentation coverage for all new features. Contributors also worked on enhancing existing documentation, which included fixing existing content and remove duplications. To make the documentation easier to follow, the team restructured the following guides:
 - Introduction
 - Deployment Guide
 - Security Guide
 - Storage Documentation

Contributors further enhanced the REST API and Application references.

In the effort of further improving the documentation in the 12.0 release the team is looking into automating the testing of documentation, and will make further fine tuning to the format and content of several guides.

## Release

This team is helping the community to plan the release cycle, which includes milestones, roadmap and overall timeline. Members of this team also track the community's progress with the planned additions, changes and fixes, to coordinate the steps throughout the release.

The 11.0 release in numbers:
- 54 new features and enhancements
- 664 bugs fixed

The 12.0 release cycle is currently ongoing, the community is in the finish line of finalizing the content for the new version of the platform. During the session attendees discussed the timeline for this cycle, and and are currently planning for the new version to come out some time in May 2026.

For further notes of the discussions at the event please refer to the session [etherpad](https://etherpad.opendev.org/p/r.140f090fb9ac95e8507e6e02c0f9b3df) which also contains the link to the recording of the session.

Check out [Part 1](https://www.starlingx.io/blog/starlingx-vptg-october-2025-recap/), if you haven’t yet, for the rest of the project updates.

# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

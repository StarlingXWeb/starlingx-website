---
templateKey: blog-post
title: StarlingX at the virtual Project Teams Gathering in April, 2026 - Part 2
author: Ildiko Vancsa
date: 2026-05-04T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Get the highlights of StarlingX discussions and project updates at the April, 2026 virtual [OpenInfra Project Teams Gathering (PTG)](https://openinfra.org/ptg/) event.

The StarlingX community held one session during the event to discuss use cases, go through project team updates, talk about the 12.0 release and further roadmap, and more. This article is the second piece of a mini-series to provide a highlight of the conversations the community had at the event.

# Project Team Updates

The main topic area for this PTG session was to go through project team updates, which provided a great opportunity to get an overview of new features that were recently released as part of [12.0](https://www.starlingx.io/blog/starlingx-release-12/), along with a sneak peek into current work items and roadmap.

## Multi-OS
The Multi OS team is responsible for looking after the kernel, drivers and base operating system in platform. The team is working closely with other teams as they provide the base layer in the platform that others rely on.

During the 12.0 cycle, the team updated the kernel to the v6.12.57 version. This also included performing stress tests and fixing issues as they appeared to have a stable base for the platform. Contributors also updated drivers to support Nvidia, Intel and Broadcom hardware integration. Some updates and kernel-related fixes touched on timing support and touch ups to PTP support to work seamlessly with the new kernel version.

13.0 will bring more driver updates and an investigation to identify ways to be more efficient with bringing more diverse hardware options into the platform. The kernel will also receive another bump up to the v6.18 version. A next step from there will be to move up to Debian Trixie. Preparations for this step started during the 12.0 release cycle and will be finished in collaboration with the Flock Services and other teams within the project. Last but not least, contributors are planning to preform maintenance and cleanup work to ensure the robustness and stability of the StarlingX platform.

## Distributed Cloud

The Distributed Cloud team is responsible for all aspects of central management and orchestration of a geographically distributed network of StarlingX clouds.

As deployments are getting bigger, the team has been focusing on further increasing scalability and manageability of the distributed cloud architecture model in the platform. Contributors added 5 features and updates during the 12.0 release cycle and performed investigations for another 2. The team made improvements to how sub-clouds get deployed in geographically distributed locations, including the ability to deploy sub-clouds without the need to pre-stage them first. Following user requests, contributors also added support for virtual Cell Site Routers (vCSR), which are software0based routers that are often used in 5G deployments to be able to rely on COTS hardware and keep costs down.

Contributors set the main focus on scalability again for the 13.0 cycle to reach the target number of having 10,000 sub-clouds managed by a single system controller. Further improvements will include making the sub-cloud enrollment process more efficient and re-imagining how the system handles version differences and allow for an up to N-2 gap between the system controller and sub-clouds. This version gap will not be applicable to OpenStack, as with following the SLURP release cadence, that could result in a 4-version difference, which would be too big for the system to handle. The team is also planning to look into the upgrade process and enhance the restore operation, for example by eliminating the need to reinstall sub-clouds.

## Build

This team works on the build system, which turns the source code into a deployable ISO image. The contributors are collaborating closely with the Distro team to ensure a stable and efficient build system and process.

During the 12.0 release cycle the team was working on improving the build process and removed “side branches”. They also added multi-architecture support, in case the work on supporting Arm would restart in the future, and started to introduce changes to image tagging. Some of the preparation steps for moving to Debian Trixie was also performed by this team.

For the 13.0 release cycle, contributors are planning to introduce meta-packages for better dependency management. The build system is being completely re-imagined, and some of that will be introduced in the 13.0 release cycle. Enhancements include introducing more parallelism, and to only build what is needed rather than rebuilding everything when there’s a change in any component of the platform. The full rollout will likely happen in 14.0 to avoid colliding with the last steps of release process to finalize the 13.0 version of the platform. The team is also planning to work on enhancing package downloads and dependency management, along with some other wishlist items.

## Test

The community has always been putting high emphasis on testing to ensure the stability and robustness of the platform, and that was no different in the 12.0 release cycle. Beyond the automated unit and functional testing that is preformed by Zuul, the community is also doing targeted feature testing as well as sanity and regression testing. The test infrastructure for the latter is donated to the community by Wind River Systems.

Some statistics from the 12.0 release cycle: UPDATE numbers
- Feature testing 
  - 1002 test to cover new features
  - 98% overall pass rate

- Release regression testing 
  - 1600 automated tests executed with 98% pass rate
  - 347 manual regression tests executed with 98% pass rate

For the 13.0 cycle the team will keep a similar cadence for sanity and regression testing as for previous cycles. The team will also start relying on AI for some automation and perform daily upgrade testing while monitoring KPIs.

## Docs

The documentation team is working on maintaining and improving the structure and format of the documentation to ensure that users and newcomers have a cohesive experience, and the large amount of documentation that the project has is easy to navigate.

During the 12.0 cycle the team worked hard to deliver the documentation for all the new features that were introduced to the platform in this release. The team has also performed a lot of maintenance work on the different guides, including the Introduction, Installation, Storage, Security and more. Contributors refreshed the API guide as there have been some out of date pieces in that document that needed to be cleaned up. The team recently started to experiment with AI to be able to deliver more enhancements to users in a more automated and efficient way, and is also working on automating documentation testing to ensure an up-to-date hardware-support matrix.

During the 13.0 release cycle, contributors will be working on further improving the navigation and readability of the overall StarlingX documentation. The team will keep working closely with other project teams in the community to ensure accuracy of the guides and covering new features as they become available in the platform.

## Release

This team is helping the community to plan the release cycle, which includes milestones, roadmap and overall timeline. Members of this team also track the community's progress with the planned additions, changes and fixes, to coordinate the steps throughout the release.

The 12.0 release in numbers:
- 54 new features and enhancements
- 387 bugs fixed

The 13.0 release cycle is currently ongoing, the community is still in the phase to finalize the content for the new version of the platform. During the session attendees discussed the timeline for this cycle, and and are currently planning for the new version to come out some time in October 2026.


For further notes of the discussions at the event please refer to the session [etherpad](https://etherpad.opendev.org/p/r.adc3ac0c6383e2ad30e9ebf6477143e4) which also contains the link to the recording of the session.

# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

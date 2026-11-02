---
templateKey: blog-post
title: StarlingX at the virtual Project Teams Gathering in October, 2026 - Part 2
author: Ildiko Vancsa
date: 2026-11-02T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Get the highlights of StarlingX project team updates at the October, 2026 virtual [OpenInfra Project Teams Gathering (PTG)](https://openinfra.org/ptg/) event.

The StarlingX community held one session at the event to discuss use cases, go through project team updates, talk about the recent 13.0 and upcoming 14.0 releases and further roadmap, and more. This two-article mini series provides a highlight of the conversations the community had at the event.

# Project Team Updates

One of the main topic area for this PTG session was to go through project team updates, which provided a great opportunity to get an overview of new features that are coming in 13.0, along with a sneak peek into current work items and roadmap.

## Distributed Cloud

The Distributed Cloud team is responsible for all aspects of central management and orchestration of a geographically distributed network of StarlingX clouds.

Contributors made a lot of enhancements to the distributed cloud architecture in the 13.0 release cycle, to increase the manageability and performance of the platform in geographically distributed configurations. Enhancements included but were not limited to:
- System controllers to support sub-clouds up to version N-2
- Enabling a combined platform and Kubernetes upgrade
- Adding the option to restore sub-clouds without the need to re-install
- Enhancements to the sub-cloud enrollment process

In the 14.0 release contributors will focus on scalability with the target of reaching 10,000 sub-clouds per system controller.

## OpenStack Distro

The OpenStack Distro team, as the name suggests, maintains and develops further the OpenStack integration in the platform, which includes KVM and QEMU, OVS and more, while they also run weekly sanity tests for OpenStack. As the team gained new contributors during the recent release cycles, they have a bigger list of goals and tasks to get through.

By taking advantage of OpenStack’s SLURP release model, the team upgraded the OpenStack version in the platform to 2026.1 (Gazpacho), while they also validated the virtualization stack, including QEMU, Libvirt and OVS following the move to Debian Trixie.

Another big update in 13.0 is the addition of telemetry services, including:
- OpenStack Ceilometer
- OpenStack Aodh
- Support for StarlingX Prometheus (app-prometheus) and adding an OpenStack Prometheus Exporter component

In 13.0 contributors also added a mechanism for user-configured storage backends via Helm chart overrides, enabling external SAN storage integration with upstream OpenStack Cinder across custom protocols like iSCSI, Fibre Channel, and NFS.

The team will further increase the supported OpenStack services by adding OpenStack Masakari and OpenStack Watcher. Contributors will also work together with other project teams to support and validate changes made to the platform, including the preparation for the new Gateway API, removing the assumption that node count equals socket count for NUMA clusters, and working with multiple huge page sizes per host.

## Build

This team works on the build system, which turns the source code into a deployable ISO image. The contributors are collaborating closely with the Distro team to ensure a stable and efficient build system and process.

The build team’s main focus for the 13.0 cycle has been to keep stabilizing the build system and make improvements to its performance. As part of the latter, they have been exploring plans and next steps for a Build 2.0 system to support parallel builds, which would introduce a significant improvement in how much time builds require moving forward.

The 14.0 release cycle will likely be allocated to adjust to the new code hosting platform that the community is planning to move to. While using GitLab might not seem to be a big change, it is a big lift when it comes to system such as build that produces the ISO and container images for the platform.

## Test

The community has always been putting high emphasis on testing to ensure the stability and robustness of the platform, and that was no different in the 11.0 release cycle. Beyond the automated unit and functional testing that is preformed by Zuul, the community is also doing targeted feature testing as well as sanity and regression testing. The test infrastructure for the latter is donated to the community by Wind River Systems.

Some statistics from the 11.0 release cycle, which include numbers for the various testing activities combined:
- Feature testing 
  - 1959 regression  test cases in the weekly automated test runs with a 95% pass rate
  - 1985 test cases to test new features in 13.0, with a 99% pass rate
  - 222 manual regression test cases executed
  - Over 96%  Feature test Pass Rate

For the 14.0 cycle the team will keep the same cadence for sanity and regression testing as for previous cycles, while adjusting the test system to GitLab, once the move to the new hosting platform is completed.

## Docs

The documentation team is working on maintaining and improving the structure and format of the documentation to ensure that users and newcomers have a cohesive experience, and the large amount of documentation that the project has is easy to navigate.

During the 13.0 release cycle the team made sure to have documentation coverage for all new features, which included 95 Kubernetes and OpenStack features. Contributors also worked on enhancing existing documentation, which included fixing existing content, removing duplications and perform regression testing for increased content quality. Updates made to guides included:
- Installation Guide (Kubernetes)
- Planning Guide (Kubernetes)
- Introduction Guide (OpenStack)
- Operations Guide WIP (OpenStack)

Contributors further enhanced the REST API and Application references.

In the effort of further improving the documentation in the 14.0 release the team will continue automating the testing of documentation, and will make further fine tuning to the format and content of several guides where they will utilize AI tools for increased throughput and precision.

## Release

This team is helping the community to plan the release cycle, which includes milestones, roadmap and overall timeline. Members of this team also track the community's progress with the planned additions, changes and fixes, to coordinate the steps throughout the release.

The 13.0 release in numbers:
- 72 new features and enhancements
- 764 bugs fixed

The 13.0 release cycle is just finishing up, and the community is already in the finish line of also finalizing the content for the new version of the platform. During the session attendees discussed the timeline for this cycle, and and are currently planning for the new version to come out some time in April 2027.

For further notes of the discussions at the event please refer to the session [etherpad](https://etherpad.opendev.org/p/r.89eae0f065928bfea04d45ca96659de5) which also contains the link to the recording of the session.

Check out [Part 1](https://www.starlingx.io/blog/starlingx-vptg-october-2026-recap/), if you haven’t yet, for the rest of the project updates.

# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

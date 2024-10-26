---
templateKey: blog-post
title: StarlingX at the virtual Project Teams Gathering in October, 2024
author: Ildiko Vancsa
date: 2024-10-30T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Get the highlights of StarlingX discussions and project updates at the virtual [OpenInfra Project Teams Gathering (PTG)](https://www.openstack.org/ptg/) event in October, 2024.

The StarlingX community had sessions on two consecutive days at the event to go through project team updates, talk about the 10.0 release and plans for the upcoming 11.0 release cycle and further roadmap items, and more. This article provides a highlight of the conversations the community had at the event.

# Project team updates

Similarly to previous PTGs, contributors covered updates from most of the community's project teams.

## Build

The 10.0 release cycle focused on stabilization and maintenance work, as the team had to catch up after switching from CentOS to Debian in the 7.0 and 8.0 release cycles and then changing build infrastructure and test labs in the 9.0 and 10.0 release cycles. Contributors also used this opportunity to work on enhancing the build documentation.

Beyond the stabilization work, the team also added support for using RAM disk for builds. This feature is still under testing and polishing, one of the current challenges they are facing is that some of the packages in the system are quite large. This can lead to serializing the build, which hurts performance on the process side. While the team has the expertise to fine tune the builds locally, they are working on creating a more stable and seamless experience for users as well.

Contributors also spent some time on Arm support during the 10.0 cycle. However, they encountered some issues with hardware while trying to set up the test infrastructure, which has been causing significant delays. They are currently waiting for new servers to arrive to be able to continue and test their work in this area.

Further enhancements the team is planning for the 11.0 release cycle is to tune the build order to take into account the dependency trees within the platform, to further increase stability and performance.

## Containers

In the 10.0 release cycle, contributors of this team have been working on updating components related to the containerized architecture of the platform, which included Kubernetes, FluxCD, Helm, and more. The team also integrated the Kubernetes NUMA-aware Memory Manager component into StarlingX. Furthermore, they made improvements to achieve performance optimizations to reduce latency for software running on platform CPU cores, including Kubernetes API and control plane. This is to ensure that, for instance, the Kubernetes API response times does not spike when platform cores are under heavy load. This work item will continue in the 11.0 release cycle.

The upcoming release cycle also targets to update Kubernetes up to version 1.31, and update dependencies like the one mentioned above, along with Golang and more. The team is looking into streamlining upgrades, like optimizing the Kubernetes upgrade through upstream support of the control plane being able to work with lower versions of kubelet. Neyond that, currently, the kubelet upgrade requires a host lock/unlock operation, which triggers a reboot. By removing the reboot, users will save up to minutes per host during a system upgrade process overall, which matters in case of large deployments.

## Distributed Cloud (DistCloud)

The DisrCloud team is responsible for all aspects of central management and orchestration of a geographically distributed network of StarlingX clouds for various use cases, including edge computing. The project gained a new Project Lead during the recent StarlingX Project and Team Lead elections, and is having contributors from multiple countries around the globe.

As many teams during the 10.0 release cycle, the team was working on up-versioning components the platform is integrating. The Distributed Cloud configuration model is a key feature in StarlingX, and many use cases that depend on it require an underlying infrastructure with a large footprint. To deliver that, contributors always focus on increasing scalability and stability at the same time, while enhancing functionality around high availability, reliability, and more. New capabilities include:
- Support to enroll standalone sub-clouds into a StarlingX deployment, which provides the option to pre-install sites and then connect them to a StarlingX central site to finish deployment
- On the scalability side, previous versions of the platform supported 1,000 sub-clouds per central site. Contributors have been working towards growing that number up to 10,000 over time, with the next milestone being 5,000 in StarlingX 10.0

The content for the 11.0 release is still under planning. The team is set out to make improvements to performance and scalability, which includes the deployment and bootstrapping phase of sub-cloud deployments. Future versions of the platform might also support running system controllers in public clouds, providing further opportunities and flexibility to users.

## Distro & Multi-OS

The Distro and Multi-OS teams have been working together on the ISO and container images, including splitting packages between these and keeping the size of the images manageable. Contributors are also involved in the work on Arm support to add required kernel modules to the platform and working with other contributors to set up the test environment. Patches to implement Arm support already exist, some of the reviews have been delayed due to issues with the lab.

In the StarlingX 10.0 release cycle, the team integrated the v6.6.52 kernel into the platform and together with the Build team they also fixed a related build issue.

## Docs

The documentation team is working on maintaining and improving the structure and format of the documentation to ensure that users and newcomers have a cohesive experience, and the large amount of documentation that the project has is easy to navigate.

The team made a lot of improvements during the 10.0 release cycle:
- There is a new landing page to list system applications, which contain plugins, as well as applications like the PTP Notification app
- Updated references that follow new and enhanced features, ie
  - REST API
  - Ports
  - Hardware support
- Updated Contributor Guide
- Enhanced Security Guide

Keeping the documentation up to date and high quality is important for the team. Contributors are currently working on polishing the documentation and release notes for the upcoming 10.0 release, and will keep updating and extending the documentation in upcoming releases.

## Flock Services

During the 10.0 release cycle the Flock Services team has been focusing on enhancing the mechanisms to carry out patching and upgrades to a StarlingX deployment, to make it a more seamless experience for users. The teams started building an Upgrade and a Unified Software Management Framework, while also worked on cleaning up the codebase and implemented minor improvements to functions like scheduling, monitoring, high availability and more. Contributors worked closely with the Distributed Cloud team on updating and optimizing items around ORAN support. 

In the upcoming 11.0 release cycle the team will further enhance the upgrade function within the platform. Along new features, contributors will also work on implementing and improving automated testing for services in the Flock to keep up the high standard in the platform’s stability and reliability that users are used to, and make it simpler for new contributors to get involved in the Flock Services sub-project.

## Networking

The most impactful feature the Networking team has been working on during the 10.0 release cycle is the IPv4/IPv6 dual-stack support. It is a feature that has been requested by users, and will now be available in the 10.0 version of the StarlingX platform. It is important to note that dual-stack support is available for platform services and public-access APIs as well. Since this feature affects the base architecture and configuration, the feature required changes in a big chunk of the codebase.

Contributors performed some additional testing work in the this recent release cycle on features they added to the platform in 9.0. A prime example to that is the enhancement that enables users to re-configure the management network, once the platform is deployed, which provides additional flexibility to configure the platform.

The team also spent some time on updating and refactoring some components that the platform has already been integrating, for example, the Intel QAT and GPU devices got refreshed with newer plugins and have a more consolidated code structure in the background, and the Intel FEC Operator got up-versioned to 2.9.0 as well. Further components that were updated and received more targeted maintenance efforts included the PTP Notification Application and the Node Interface Metrics Exporter components.

In the upcoming 11.0 release cycle will continue to integrate newer and newer versions of the various networking-related components of the platform, and the team will also focus on adding enhancements to the PTP support and the admin network configuration.

## OpenStack-Distro

This team is maintaining the containerized OpenStack services, and performs related sanity testing on the platform. The team has gained new contributors during the latest release cycle, which allows them to take on more work items and move faster.

The 10.0 version of StarlingX delivers the Antelope version of OpenStack.

In addition, this recent release cycle focused on some maintenance work that was required by both OpenStack and Kata Containers, which included updating QEMU to v7.2 and updating Libvirt packages along the way as well. In case of Libvirt the team was not able to do a full up-version, due to shared dependencies that affect the base layer of the platform and the build process. Contributors improved the TLS certificate handling, now users can upload their own certificates that OpenStack will be able to discover and use, and worked on improving the DNS configuration for OpenStack within StarlingX. The team is also exploring how to enhance the Distributed Cloud configuration for OpenStack over time.

Plans for the next release cycle include integrating a newer version of OpenStack. Taking advantage of the new SLURP release model that OpenStack implemented, the next integrated version will be Caracal. Further work items include re-adding OVS-DPDK support, in a containerized format, and adding external storage support, for instance NetApp, to provide further options beyond using CEPH.

# Release

This team is helping the community to plan the release cycle, which includes milestones, roadmap and overall timeline. Members of this team also track the community's progress with the planned additions, changes and fixes, to coordinate the steps throughout the release.

The current, 10.0 release is now feature complete, the community has achieved all 3 milestones that they usually set for a release cycle. It is now the testing and documentation phase that still need to be finalized before 10.0 comes out in a few weeks.

The 10.0 release in numbers:
- 49 new features and enhancements
- 502 bugs fixed

The 11.0 release cycle will start soon, the community is still ahead of discussing and finalizing the content for the new version of the platform. The release team has set a tentative timeline for this cycle, and planning for the new release to come out in July, 2025.

## Security

The main scope of the security team is CVE Scanning, Vulnerability Management, and adding security-oriented hardening and feature capabilities to the platform. The team has been operating with a stable size for the past couple of release cycles, and has gained a new Technical Lead during the recent elections.

The team has been busy during the 10.0 release cycle with adding features and enhancements to the platform. Bgger features to mention are:
- Enabling IPSec on L2 platform networks, to encrypt the traffic between multi-node system, which was previously unencrypted
- Switching to cert-manager as a default certificate manager on new system deployments

As the platform supports newer versions of Kubernetes in the 10.0 release, the team updated the security-related open source, containerized applications that are integrated into StarlingX.

Planned features for the 11.0 release cycle include extending the IPSEC support to inter-host as well as pod-to-pod network traffic with some level of configuratibility, enhancing user management functions, which includes permission handling and RBAC, updating the aforementioned containerized applications to match the newer Kubernetes versions that the platform will move onto, and more. Contributors will also start working on replacing Vault, as it is not an open source project anymore, and integrate OpenBao into StarlingX. Last, but not least, the team is also set to improve CIS benchmark scores for host and container environments, which will include more secure configuration of the system, where possible.

CVE scanning and fixes will continue to be executed on a monthly basis on the main branch, with the current focus being on Debian and scans performed only for the base ISO.

## Test

 The community has always been putting high emphasis on testing to ensure the stability and robustness of the platform, and that was no different in the 10.0 release cycle. Beyond the automated unit and functional testing that is preformed by Zuul, the community is also doing targeted feature testing as well as sanity and regression testing. The test infrastructure for the latter is donated to the community by Wind River Systems.

The community's testing activities for the 10.0 release by numbers:

- Sanity testing
  - Executed weekly in various configurations
- Feature testing
  - 45 features were explicitly tested
  - 1660 manual test cases were executed
  - 85% Pass Rate at the time of the PTG
- Automated release regression testing
 - Two rounds are planned for both All-in-One (AIO) Simplex and AIO Duplex configurations, before declaring the final release

The community will be running sanity tests on a weekly cadence for 11.0 as well, and planning to have a similar overall test strategy as up until now.

# Collaboration Practices

Beyond discussing the technical and architectural aspects of the StarlingX platform, the community also took the opportunity at the event to discuss how to improve collaboration and some of the processes and workflows they have.

One of the main discussion topics was about code reviews. While reviewing changes is very important work, and also a great way to learn about the platform, it is usually a task that most people don’t like. Most communities in the ecosystem constantly work on finding ways to make this more appealing to both newcomers and established contributors. Project maintainers are a steady group of people who make sure that code and documentation changes are thoroughly reviewed before they get approved. When there are more people who are checking the incoming changes, it lowers the burden on maintainers, while also provides teams with the opportunity to have new people on the maintainer group to avoid burnout. During this PTG session, StarlingX contributors were discussing ideas on how to mentor new contributors and help sub-team members to become maintainers.

During this conversation, it also came up that due to the complexity of the platform, the barrier seems to be higher for newcomers to find their way around. To address that, the community started to consider adding some training material to the project’s documentation over the upcoming release cycles.

Contributors were also brainstorming about ways to improve the coordination process, which the release team has been relying on to be able to keep track of progress and adjust the release timeline, if needed. The release team is currently relying more on the people who propose and implement features, but Project and Technical Leads also play an important role to ensure that the process works as expected.


The above items are only a few highlights of the full roadmap of the StarlingX project. For further notes of the discussions at the PTG please refer to the session [etherpad](https://etherpad.opendev.org/p/r.741debb7f95668789620419ad86a1fb6) or check out the of the discussions, which are also linked from the etherpad.

# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

Stay tuned for the next event where you can meet the StarlingX community!

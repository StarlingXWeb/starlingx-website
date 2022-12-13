---
templateKey: blog-post
title: StarlingX at the virtual Project Teams Gathering in October, 2022
author: Ildiko Vancsa
date: 2022-12-13T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Get the highlights of StarlingX discussions and project updates at the 2022 Fall [OpenInfra Project Teams Gathering (PTG)](https://www.openstack.org/ptg/) event. <!-- more -->

The StarlingX community utilized in the team-collaboration-focused event to discuss current work items, roadmap, challenges and next steps to enhance the platform and improve the community’s processes. The contributors had sessions on two consecutive days and covered topics such as project team updates, ongoing development work for the 8.0 release as well as improving communication and refreshing the project's mission statement.

If you've been using the platform or following the latest developments, you probably heard already that the platform is moving from CentOS to Debian as the base operating system. The changes are not affecting the real-time capabilities of the platform, which will be ported and available with the Debian-based version as well. The 7.0 release already contains a Debian-based experimental version. The migration was one of the main topic areas that was discussed throughout the sessions to discuss challenges and remaining tasks.

The first project session at the event started with a short overview of the project to help newcomers to get more familiar with the platform and be able to better participate in the discussions that followed. The community then transitioned into project team updates to discuss ongoing development work, challenges and priorities for upcoming releases.

# Project team updates

## Build and Distro

The teams are currently focusing on stabilizing and improving the build environment to support the new, Debian-based platform. The community is utilizing hardware infrastructure that is provided by CENGN to host a build system and mirrors and that environment is now updated to use Jenkins pipelines. The community also shares the configuration through OpenDev to make it available to build a similar system locally. The Distro team is focusing on package updates, further improvements on build characteristics and device driver migration and support.

At the same time, the CENGN system is still utilized to build the CentOS-based version. The contributors discussed the way forward to remove that environment and reduce maintenance burden; and have been working towards this goal since the event. After this step is completed, all the source files and required packages will remain available for anyone to build the CentOS-based platform locally.

## Distributed Cloud and Flock Services

Similarly to the build-related discussions, the focus here was also on the changes related to the Debian migration. The conversation covered installation, software updates and testing activities. Beyond these, the Flock team is looking into challenges with RedFish support, since the variety of implementations that vendors supply with their hardware, make it challenging to have a robust system to support zero-touch-provisioning-type functionality.

The Distributed Cloud team is improving the platform by making the sub-cloud rehoming feature more efficient, for instance, you will not need to restart the affected controllers anymore. Scalability and performance are also top priorities. Among other items, there's an ongoing development effort to increase the number of parallel operations to speed up processes like installation, patching and more.

The two teams together are also working on enhancing the backup and restore feature with more optimal storage utilization and faster restore process.

## Docs

Besides code improvements the community has been working hard on adding more content to the documentation as well. You can find all the new guides and information on the [StarlingX Documentation website](https://docs.starlingx.io/contributor/index.html) to learn how to deploy, configure and operate the platform. The team gained new contributors in the recent release cycles and is now working on adding link and spell check functions to the test and build processes to further improve quality.

## Networking

The 7.0 release of the platform added enhancements to important functionality such as:

- CNI plugin updates to keep it up to date with latest developments
- Adding support for bonded container interfaces
- Improvements to the Precision Time Protocol (PTP) implementation
  - Dual-NIC boundary clocks
  - 5G SyncE support
  - Modular configurability throughout a deployment
- Istio service-mesh support
- Improving FEC device configurability

Some of the above work items require multiple releases to get the functionality fully in place. The 8.0 release cycle will include further enhancements to the PTP features, finishing the FEC related tasks along with new functionality such as increasing the platform's compliance to O-RAN specifications and finishing tasks related to the Debian migration. 

## OpenStack Distro

This team shrank during the last release cycle and therefore they are focusing on bug fixes and maintenance-related items to make sure that the OpenStack deployment within the StarlingX platform is stable and robust. They are planning to upgrade the OpenStack version if they can fit that into the 8.0 release cycle. The team is currently looking for help.

If you are using StarlingX and relying on the OpenStack component don't hesitate to get involved in the community and the team to help carry out the development and maintenance related work!

## Security

The Security team is collaborating with the Distro team to frequently run CVE checks on the platform. Beyond that task they are also working on adding relevant features. The 7.0 release included new functionality such as, audit logging and they also used the release cycle for preparation work, like the first steps towards replacing PSP with Pod Security Admission Controller or adding SSH integration support for Windows Active Directory. Beyond finishing these ongoing work items, the 8.0 release is also planned to deliver enhancements to certificate management, introducing a new 'reader' role on the APIs and CLIs and more.

## Test

The community is putting high emphasis on testing to ensure the stability and robustness of the platform. Beyond the automated unit and functional testing that is preformed by Zuul, the community is also running targeted feature testing as well as sanity and regression testing. The test infrastructure for the latter was initially provided by Intel, is now donated to the community by Wind River Systems.

The community's testing activities for the 7.0 release by numbers:

- Sanity testing
  - Executed once a week in various configurations
- Feature testing
  - 22 features were explicitly tested
    - 13 features were covered through existing automated sanity and regression tests 
  - 274 manual test cases were executed
  - 92.1% Pass Rate
- Automated release regression testing
 - 471 automated test cases were executed

The Test team is also heavily affected by the platform's migration to the Debian base operating system. They currently working on setting up the environments to be able to efficiently test the new version of the platform.

## Release

The release team provided an update to summarize the highlights of the 7.0 release cycle. The biggest challenge, as in other areas, was to design and start executing the move to Debian.

The team also outlined the timeframe and some of the roadmap items for 8.0. The release is planned for the end of the first quarter of 2023. You can find the latest information and pointers on the team's [wiki page](https://wiki.openstack.org/wiki/StarlingX/Releases).

# Community-wide topics

After spending the first day with looking into the verticals, the community transitioned over to topics that affect the community at large.

## CentOS-based platform artifacts

As the 8.0 release will solely be based on the Debian operating system, the community discussed plans on how to utilize the available build and test infrastructure the best. The contributors agreed that as soon as all major components of the platform are ported over to the new operating system they will stop the periodic builds for the old platform. On-demand builds will still be available and the old platform artifacts can still be built from source locally. The periodic builds on the CENGN system will be re-configured to produce the artifacts for the Debian-based platform, based on the ongoing development work on the master branch.

## Platform upgrades

Making the upgrades between major releases smoother is a priority for the community. This operation is a challenge for every infrastructure operator and making it less painful is important for every project who's working on related software components. A sub-group is forming within the StarlingX community to tackle the challenges and improve the StarlingX platform in this area. The group is targeting various aspects of the challenge from documentation, testing as well as the process itself by creating patches and improving the mechanism to move from one version of the platform to the best.

## Project mission statement

As the project was launched in 2018 the community felt it's time to revisit their goals and direction and update their mission statement. The session attendees looked into community-wide priorities that were pointing towards the ease of deploying and managing distributed infrastructure at scale. Contributors also mentioned the importance of supporting the onboarding of new applications onto the platform as well as providing functionality for real-time and mission-critical workloads.

The project's marketing team was tasked to organize opportunities to continue the discussion and come up with proposals that the community can vote on and has been making good progress since the event.

## Community communications

Last but not least the community also looked into how to improve processes and communication to make contributor experience better and help newcomers to start participating in the community. Contributors agreed to look into options to have more synchronous communication methods and ensuring to share meeting minutes and utilize the mailing list more extensively in the meantime.

The above items are only a few highlights of the full roadmap of the StarlingX project. For further notes of the discussions at the PTG please refer to the session [etherpad](https://etherpad.opendev.org/p/r.2857014ba5de892cca16c80ffaa4e568) or check out the [recordings](https://lists.starlingx.io/pipermail/starlingx-discuss/2022-December/013672.html) of the discussions.

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

Stay tuned for the next event where you can meet the StarlingX community!

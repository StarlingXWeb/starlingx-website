---
templateKey: blog-post
title: StarlingX at the virtual Project Teams Gathering in October, 2021
author: Ildiko Vancsa
date: 2021-11-08T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Get the highlights of StarlingX discussions and project updates at the recent [Project Teams Gathering (PTG)](https://www.openstack.org/ptg/). <!-- more -->

The second PTG in 2021 was held on October 18-22 in an online format to provide the opportunity for contributors of the Open Infrastructure projects to come together and discuss topics relevant to their projects, such as roadmap, areas to improve and more. StarlingX was one of the projects that participated in the event and had sessions on three consecutive days to discuss the status of the current release cycle, plan for the next one and talk about improvements to community structure, processes and onboarding.

During their sessions the community used some of their time to have a short retrospective to revisit their processes and team structures to find areas to continue with and improve further. The contributors noted that the current release cycle, which is 6.0, has a lot of new features to deliver at the end of 2021 and it is also reflected in the high activity in the StarlingX repositories. The community is also very excited about the new users including T-Systems, Vodafone and Verizon who are using StarlingX in production.

Besides the code improvements the community has been working hard on adding more content to the documentation as well. You can find all the new guides and information on the [StarlingX Documentation website](https://docs.starlingx.io/contributor/index.html) to learn how to deploy, configure and operate the platform.

As there is always room for improvement, the project contributors are looking into a few areas to work on, such as improving the onboarding process and be even more active on IRC and the mailing list to welcome new contributors and discuss topics with established community members. The community is also aware of the complexity of the platform and therefore they are having continuous efforts to enhance the deployment and testing of the software, which includes increasing test coverage and improve the build and deployment tools.

The PTG provided a great opportunity for teams to revisit the team structure to make it easier for everyone to map the activities to the group of active contributors who are workin gon them, as well as the repositories for the code and documentation. Based on the discussions a few teams were merged and these changes already got administered. For the current list of project teams please refer to the [StarlingX Governance documentation](https://docs.starlingx.io/governance/reference/tsc/projects/).

## 6.0 Release Cycle Overview

During the PTG sessions the contributors used a good chunk of the available time to check on the status and progress of the current 6.0 release cycle to ensure that everything is on track for the release that is planned for the end of this year. This section will highlight a few examples of the new functionality that the community has been working on.

There are a few changes in flight that concern the host operating system that the platform is using. One key component of this change is to update the kernel that is the heart of the Linux operating system that the community chose for the platform. The current plan is to move the kernel version up to 5.10. There are still testing activities in progress to ensure that the upgrade happens smoothly without breaking any existing functionality. There are also some performance enhancements that the community is looking into in collaboration with people from the Yocto project to ensure that the platform delivers the performance that edge computing use cases call for.

In light of changes that happened around the CentOS Linux distribution, the community has decided to move the platform over to Debian and the work has been ongoing during the 6.0 release cycle. As it is a big change the work items will not be finalized until the 7.0 release of the project. Majority of the activities is done on a development branch to ensure that the base of the project is always operational and will be merged with the current code base as it is ready. As part of the work the community is also looking into using the Debian Build System and they are utilizing the 5.10 kernel upgrade as well.

The StarlingX platform is highly dependent on certificates and secrets for security and other reasons. While it is a great method to use it can also result in maintenance burden and complications as these certificates expire, especially that not all of them can be renewed automatically. To ease the certificate management process and provide the possibility for users to stay on top of these issues, the community is implementing monitoring and alarming support for certificates. In the 6.0 version of the platform there will be different severity levels for certificates that are about the expire and those that passed their due date. In addition, the platform is providing this functionality to support different, including older types of certificate types and methods that have been available in StarlingX.

One of the main features of StarlingX is the [Distributed Cloud architecture](https://www.starlingx.io/blog/starlingx-release-3/) that allows you to set up StarlingX with central clouds that can manage a large number of edge sites, while the edge sites have autonomy on the edge as well. This feature was introduced in the 3.0 release and has been getting further enhancements ever since. During the 6.0 release cycle the community is adding a functionality that enables you to re-home an edge site from one System Controller to the other within a distributed cloud architecture without any impact on the applications. This feature can be used in case of disaster recovery or if you need to consolidate the management of edge sites in your infrastructure.

The 6.0 release is scheduled for the end of this year, the community is currently finalizing it's third and last milestone to make sure that all code changes are in and will go through a thorough testing cycle before the new version of the platform gets released. Stay tuned!

## 7.0 Release Planning and Roadmap

Since the 6.0 release date is so close now the community also started to look further ahead and discussed features and improvements that are currently planned to start and for most to also land in the 7.0 release.

You may have heard about Secure Device Onboarding (SDO) before, it is a method and protocol to help to onboard small devices into your infrastructure more easily than every before. This protocol is also supported by the FIDO Alliance and hence it will arrive into StarlingX as support for FDO that will stand for FIDO Device Onboarding to follow the standards. As part of this functonality there is a rendezvous service in StarlingX that's already been implemented to be able to onboard these small devices that are equipped with the required token to be able to join the cloud. This functionality provides the possibility to onboard small IoT devices without the need to physically interact with the device after it's plugged in, it all happens out of the box. This work will be an enhancement to the already implemented pieces that got added in the 5.0 release.

StarlingX supports the use of the Precision Time Protocol (PTP). You can find a [blog post series](https://www.starlingx.io/blog/starlingx-ptp-part-1/) that describes what PTP is and how you can use it with StarlingX on the project's blog. But, as always, there is more to add! In an effort to align with O-RAN requirements the community is looking into enhancing PTP support in the platform. As part of this work they will be adding support for dual-NIC boundary clocks which will provide more flexibility and accuracy in the system, since currently the PTP configuration is applied globally. With this change you can have a host- or even port-based setup. Another feature to add is support for GNSS and SyncE to be able to setup local masters where time gets re-distributed compared to the centralized configuration that is implemented in the platform today. Some dependencies on hardware and kernel features will still need to be looked at before the implementation work starts in the next release cycle.

Edge computing use cases tend to grow large when it comes to geographical distribution and the number of sites the underlying infrastructure has to support. For this reason the StarlingX contributors are always looking into increasing the scalability of the project and it's on the radar for the 7.0 release cycle as another improvement to the Distributed Cloud functionality moving the needle up to the thousands when it comes to edge sites connected to one system controller.

There are a few items on the roadmap for future releases including some changes in the area of security. The community is following the direction and guidance of the Kubernetes community as they are working on making the user experience for the Pod Security Policies feature better. Since the current functionality has its challenges there are plans to move to a new solution that is called Pod Security Admission Controller. The StarlingX platform will move over to the new feature as it becomes available in the upcoming releases.

Another item on the roadmap is Mandatory Access Control (MAC). The community is looking into integrating AppArmor, which is a Debian solution for MAC support. The feature still has some performance impacts and it will have documentation impacts to ensure that the users know how to create correct policies to use with the platform before the features gets enabled in 8.0 or later.


The above items are only a few highlights of the full roadmap of the StarlingX project. For further notes of the discussions at the PTG please refer to the session [etherpad](https://etherpad.opendev.org/p/stx-ptg-planning-october-2021) or check out the [recordings](http://lists.starlingx.io/pipermail/starlingx-discuss/2021-October/012286.html) of the discussions.

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://www.surveymonkey.com/r/StarlingX) and help the community improve the project based on your feedback.

Stay tuned for the next event where you can meet the StarlingX community!

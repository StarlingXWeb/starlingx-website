---
templateKey: blog-post
title: StarlingX at the virtual Project Teams Gathering in April, 2022
author: Ildiko Vancsa
date: 2022-04-28T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Get the highlights of StarlingX discussions and project updates at the recent [Project Teams Gathering (PTG)](https://www.openinfra.dev/ptg/). <!-- more -->

The first PTG in 2022 was held on April 4-8 in an online format to provide the opportunity for contributors of the Open Infrastructure projects to come together and discuss topics relevant to their projects, such as roadmap, areas to improve and more. StarlingX was one of the projects that participated in the event and had sessions on two consecutive days to revisit the accomplishments of the 6.0 release and discuss the status of the current release cycle, 7.0. The project contributors also touched on items further down on the roadmap and talked about improvements to community structure and processes.

There are currently two focus areas where the community has been having ongoing activities for multiple release cycles, which are security and the move from CentOS to Debian as base operating system.

The operating system work includes an upgrade to the kernel, the platform is now using the 5.10 version with the relevant drives and vulnerability fixes. One of the key steps during the process of switching out the base operating system is to improve the build system in StarlingX to achieve better performance as well as making it more flexible and efficient. This work has been ongoing and will continue during the 7.0 release cycle and will be further fine tuned onwards.

StarlingX contributors has been putting high emphasis on both security and vulnerability management. For the latter, the community is running monthly CVE scans and applies fixes as needed and this process is now getting extended to Debian as well.

The StarlingX platform is getting new security related features and enhancements to the platform during every release cycle. The 6.0 version of the platform delivered enhancements to certificate management, such as adding cert-manager support and alarms to notify about expiring and expired certificates, integrating ‘auditd' and adding improvements to password management. The 7.0 release will bring updated versions of some of the security related components of StarlingX and add new functionality, such as Security Audit Logging and support for Pod Security Admission Controller among other items.

During the PTG sessions contributors further discussed areas that teams within the project are working on, such as networking, containers, flock services and more.

If you have been following the StarlingX project or using the platform you are aware of the Precision Time Protocol (PTP) protocol that the project added support for a couple release cycles ago. As it is an important area for applications that rely heavily on time and the synchronization of clocks within the system, the contributors are still actively evolving the PTP support in StarlingX. The latest enhancements include Dual NIC Boundary Clock Configuration that allows for configuring multiple subordinate clock sources within a deployment. The recent changes are quite substantial and provide much better configurability both per host as well as per interface. The team has been working on adding the 5G Time SyncE solution as well that contains a reliable Pulse Per Second(PPS) signal for better time synchronization among NICs.

The networking team also implemented enhancements to the Container Network Interface (CNI) in the Kubernetes coponent that is integrated into StarlingX. By adding the new CNI plugin version, it provides support for better configurability and IP address management for network interfaces in a container. The team also added the Bond CNI plugin into StarlingX, as it is currently separate from the basic CNI implementation. With this component you can add additional network interfaces and set them up in a bond for your containers. Next steps in this area include Istio integration and upgrade support for components such as Calico, Multus and more.

There have been further work items in the container area to keep up with the newer Kubernetes versions. The 6.0 release climbed up to use the 1.21 version of Kubernetes, while the 7.0 release will include the 1.23 version. As part of the process the community also added a new upgrade mechanism to replace the previous patching system. During the 7.0 release cycle the contributors are working on adding support for SMT-aware allocation of isolated CPU workloads as well as integrating the Flux Helm Operator from the CNCF ecosystem as a replacement for Armada. Further items on the roadmap include updates to ‘etcd’, control plane monitoring and more.

The StarlingX platform contains a set of services that are designed and developed by the community to add features in areas such as configuration management, infrastructure orchestration, fault management and more, that are essential for an edge cloud platform to provide. During the PTG the community touched on the items that were recently delivered for these services and looked into the current activities and roadmap.

Features the contributors highlighted during the event included improvements to the Distributed Cloud functionality in the areas of orchestration and scalability, and noted that now you can also deploy subclouds with local installation support. Further enhancements to the deployment functions include the migration capability that allows you to convert an All-in-One (AIO) simplex deployment to an AIO duplex configuration. You can read more about the new features in the [6.0 release blog post](https://www.starlingx.io/blog/starlingx-release-6/).

During the 7.0 and 8.0 release cycles a lot of effort is going into ensuring that all the functionality in the Flock works on the Debian base operating system as well. The community is also working on providing a clean upgrade path to move from 6.0 to 7.0 without the need to re-deploy the platform. While the operating system switch is in the focal point of the current release cycle, the community is looking into further enhancements to scalability and parallel operations to further increase the performance and efficiency of the platform.

After covering topics about new features the community discussed activities and updates about testing and documentation to cover quality assurance and usability of the platform.

The StarlingX community has been putting a lot of effort into end-to-end testing of the platform since the inception of the project. For the 6.0 release cycle it translated to the following statistics:

- Feature testing
  - 18 features tested
  - 18396 test cases executed
    - 99.8% Pass Rate
- Automated release regression testing
  - 445 automated test cases executed

During the 7.0 release cycle the community will be performing sanity testing on both the CentOS and Debian based platform versions. In addition to that the contributors are tracking 41 new features that are targeted for this release and need to be thoroughly tested through automated testing, while towards the end of the release cycle the focus will shift to extensive sanity and regression testing.

Last but not least the contributors also touched on documentation, since it is very important to help users and newcomers to get a better understanding about how the platform works, how it can be deployed, configured and troubleshooted as well as how the community works and how thy can contribute. An important update to the documentation website is the addition of a drop-down menu that lets visitors of the website to choose which release they would like to access the documentation of. The team also got a new project lead recently and has gained a few new team members. During the current release cycle they are focusing on improving quality through automation, such as adding automated checks to catch spelling mistakes and broken links.

After discussing topics related to new features and enhancements to the platform the contributors spent a little time to hold a retrospective to evaluate the processes they are using to build and improve StarlingX and work together as a community. The attendees noted that the release process is working well and thinking about content for the blog during a release cycles helps a lot with highlighting new functionality at the time when the release comes out. The session attendees were also discussing ideas to increase diversity in the community including more visible entry points and starting tasks, a more modular platform and even a new mission statement that can help newcomers and potential new contributors to understand the community’s vision and goals better. 

The above items are only a few highlights of the full roadmap of the StarlingX project. For further notes of the discussions at the PTG please refer to the session [etherpad](https://etherpad.opendev.org/p/r.650f19691ba921ad4e8847cbe9f5c278) or check out the [recordings](http://lists.starlingx.io/pipermail/starlingx-discuss/2022-April/012900.html) of the discussions.

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://www.surveymonkey.com/r/StarlingX) and help the community improve the project based on your feedback.

Stay tuned for the next event where you can meet the StarlingX community!

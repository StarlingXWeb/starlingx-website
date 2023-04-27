---
templateKey: blog-post
title: StarlingX at the virtual Project Teams Gathering in March, 2023 - Part 1
author: Ildiko Vancsa
date: 2023-04-25T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Get the highlights of StarlingX discussions and project updates at the 2023 Spring virtual [OpenInfra Project Teams Gathering (PTG)](https://openinfra.dev/ptg/) event. <!-- more -->

The StarlingX community had sessions on two consecutive days at the event to discuss use cases, go through project team updates, talk about the 9.0 release and further roadmap, and more. This article provides a highlight of the first day of conversations the community had at the event.

## Introductions and Use Cases

The first PTG session started with a short introduction of the project to provide an overview for newcomers. You can check out the [project's website](https://www.starlingx.io) to find the resources that were mentioned during the session.

Newcomers to the project introduced a couple of new use cases, that they are evaluating StarlingX for:

- A new railway network project in Europe: StarlingX is one of the candidates to be used as the platform to power the backbone infrastructure for the project, and keep the trains and infrastructure components connected.
- Bringing connectivity to rural areas: This project is challenging, as the underlying network infrastructure is often unreliable or not fully built out yet. StarlingX could be used to overcome the challenges of connecting geographically distributed sites, where it will have to tolerate longer network glitches and outages.
- Acceleration at the edge: This project is building a distributed edge acceleration cloud infrastructure to power various industry verticals such as genome sequencing, video streaming and transcoding, cloud gaming, and more. StarlingX is being evaluated as the base platform for the distributed system, which would be hosting acceleration devices to fulfill requirements around low latency and high performance and computing power.

## Project Team Updates

Following the traditions, in the next segment, the community moved on to project team updates, which provided a great opportunity to get an overview of new features that were recently released, along with a sneak peek current work items and roadmap.

### Distro

This team is working on integrating the underlying operating system into the StarlingX platform, including both the kernel and user space. The StarlingX 8.0 release was the first version on Debian Bullseye, revision 11.3 with full functionality. It also contains the Yocto project kernel, version 5.10, with continuously applying stable updates. In the latest release, the team added support for features such as secure boot, enabling Wireguard in the kernel, and more.

The team is currently working on further improving the integration, and building a closer collaboration with the Debian community moving forward.

### Containers

This project team supports everything that is related to containerization in the platform, like Kubernetes, Helm, FluxCD, and so forth. In the StarlingX 8.0 release, the team upgraded the Kubernetes component to the 1.24 version, which also included extensive validation efforts. As it is a component that changes continuously, the team is making sure that the configuration options stay consistent within the StarlingX platform when upgrading to new releases.

The plan is to move up to Kubernetes 1.26 for the 9.0 release. Along with that contributors are also working on making it rather seamless to skip Kubernetes versions between upgrades and avoid admin action. During this release cycle the team is also looking into upgrading etcd, adding support for an active-active configuration of the control plane, improving certificate handling and adding support for Kata Containers on the Debian operating system.

The community also discussed the aim to get and maintain the platform's Kubernetes certification. One of the options the group discussed was to set up the conformance tests in the OpenDev environment and run them automatically. The community has been looking into next steps since the event.

### Networking

The networking team is responsible for the network connectivity between StarlingX components, as well as between the platform and the outside world. To add driver support for devices like network interface cards (NIC), the team collaborates with the Distro team. During the 8.0 cycle contributors added support for newer technology and broader options for hardware choices through new NICs and drivers. One of the focus areas for the 8.0 release was Radio Access Networks (RAN), which puts high expectations on the system. New functionality in the area included PTP enhancements and FEC Device Configurability support.

During the 9.0 release cycle the team is working on further extending accelerator device support, adding further enhancements to the PTP functionality and improvements to the distributed cloud feature including a new network type. Discussions during this segment touched on PTP in more detail and a call to action on more broadly testing the Wireguard support within the platform.

### Security

This project team handles vulnerability management and CVE's while also focusing on security related features and hardening of the platform. While this is a smaller team, their contributor base is located across Canada, Brazil and India!

The enhancements the team added in the 8.0 release included a new 'reader' role for both APIs and CLIs, and SSH integration with remote Windows Active Directory.

In the current 9.0 release cycle contributors are working on integrating AppArmor and moving to newer versions of existing components like vault or cert-manager. Beyond these, the team is also maintaining a list of wishlist items, which they welcome new contributors to help implement.

### Flock Services

This project team is working on components that are delivering key functionality to the platform, such as fault and software management. Through these services contributors are continuously improving the manageability and performance of the platform.

While migrating to the Debian operating system highly affected the flock services, the team delivered full functionality in the 8.0 release. They also maintained and improved the scalability of the platform to be able to manage up to 1000 sub-clouds efficiently. Starting with the 8.0 release, with the required hardware, you can also run StarlingX on a single CPU core. Further improvements included optimizing the backup & restore feature, and re-homing edge clouds without the need to reboot the controller.

Conversations touched on improvements around the Redfish Virtual Media support, where the community added mechanisms to make the platform more robust towards connectivity issues, as well as the demand for diversifying the available hardware architecture options to use with StarlingX.

During the 9.0 release cycle the team is focusing on new features and improvements such as providing the capability to roll back a failed upgrade on an edge cloud and restore a previous working state. Improvements to the upgrade process are very important to the team. Since the platform is supporting a large number of edge sites to be managed centrally, therefore when the end-to-end infrastructure is going through an upgrade, that process needs to be robust and flexible. Another roadmap item is to prepare the system to tolerate latency and unstable connections better. This higher tolerance will support the use case that we mentioned earlier, which targets to bring connectivity to rural and remote areas, where people currently don't have network access.

### OpenStack Distro

The OpenStack Distro team, as the name suggests, maintains and develops further the OpenStack integration in the platform, which includes KVM and QEMU. All the components have been containerized, which helps to make the platform more flexible and robust overall.

The main achievement of the team in the 8.0 release was to finish the migration from Armada to FluxCD, which is used to deploy the containerized services. Contributors also finalized the migration to the Debian operating system and enhanced test automation of the OpenStack components.

As the team is currently very small, they are focusing on bug fixes and updating OpenStack to a newer version. For the latter, people on the call preferred Antelope. Attendees identified areas in the documentation to improve. The team also received new interest from newcomers to participate in the team's activities onwards.

If you are interested in contributing to StarlingX, the OpenStack Distro team would welcome your help! Check out the team's meetings and keep an eye on the [starlingx-discuss mailing list](https://lists.starlingx.io/cgi-bin/mailman/listinfo) for updates.

## All-community Business

### ARM Support in StarlingX

Supporting multiple hardware architectures has been in the interest of the project for a little while now. During the PTG session, contributors got the opportunity to discuss options and preferences in a bit more detail.

Session attendees discussed a proof of concept, which was implemented for Mobile World Congress (MWC) earlier this year, to showcase StarlingX running on AMR64 servers. Contributors from the companies involved in the effort are now looking into how they can implement ARM support in StarlingX with full functionality.

The experimental configuration included the AIO-SX version of the platform running on a native ARM64 server. To make the demo work, the StarlingX ISO image had to be rebuilt, and there were packages, including real-time kernel modules, QEMU, and more, that were removed to ensure compatibility between the hardware and software pieces. As a next step, the community is looking for support to ensure proper test coverage on more diverse hardware configurations.

### Kernel & Hardware Compatibility

The previous topic of supporting ARM64 architecture opened up a broader conversation about how to make the platform more flexible in terms of kernel and hardware choices. These can be challenging with dependencies on real-time features and different hardware accelerators with incompatibilities in feature sets and driver support. Beyond compromises, the build system also needs to be prepared for being able to produce the ISO images to run on the various hardware configurations. The good news is that the current system is very flexible, and should not have any fundamental challenges that would be impossible to address.

The discussions about the kernel highlighted how the real-time capabilities tend to make things more complicated. One way forward could be to support the capability to swap out the kernel to variants that are less restricting. While it is not in the scope for the community currently, if you are interested in these types of topics, please reach out to the Distro and Build teams on the [starlingx-discuss mailing list](https://lists.starlingx.io/cgi-bin/mailman/listinfo) or the teams' weekly meetings.

Further conversations explored requirements of the new use cases that we touched on at the beginning of the session. For instance, the railway project has components with strict safety requirements, to comply with regulations. The community concluded that the requirements for safety-critical systems are currently out of the scope of the open source project.


This concludes the highlights of the first day of discussions at the PTG. Stay tuned for the recap of Day 2!

For further notes of the discussions at the event please refer to the session [etherpad](https://etherpad.opendev.org/p/r.a1706afa3252f8b2e6e6650a2f785002) or check out the [recordings](https://lists.starlingx.io/pipermail/starlingx-discuss/2023-April/013941.html) of the discussions.

## About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

Meet the community at the upcoming [Open Infrastructure Summit](https://openinfra.dev/summit/vancouver-2023) on June 13-15, in Vancouver, Canada! The event features presentations and a hands-on workshop where you can learn more about the platform. You can also meet StarlingX contributors face-to-face throughout the event as well as during the co-located, in-person [PTG](https://openinfra.dev/ptg/)!

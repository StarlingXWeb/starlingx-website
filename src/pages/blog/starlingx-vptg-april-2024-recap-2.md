---
templateKey: blog-post
title: StarlingX at the virtual Project Teams Gathering in April, 2024 - Part 2
author: Ildiko Vancsa
date: 2024-05-08T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Get the highlights of StarlingX discussions and project updates at the April, 2024 virtual [OpenInfra Project Teams Gathering (PTG)](https://openinfra.dev/ptg/) event.

The StarlingX community had sessions on two consecutive days at the event to discuss use cases, go through project team updates, talk about the 10.0 release and further roadmap, and more. This article continues to share highlights of the conversations the community had at the event. To learn about further project team updates check out the [article about the first day](https://www.starlingx.io/blog/starlingx-vptg-april-2024-recap/) of StarlingX sessions.

# Project Team Updates Continued

## Distributed Cloud

The Distributed Cloud team is responsible for all aspects of central management and orchestration of geographically distributed network of StarlingX clouds.

The team worked on very important improvements during the 9.0 release cycle. New functionality includes geo-redundancy for System Controllers, which makes it faster and simpler to re-home sub-clouds in cases like disaster recovery scenarios. The platform also supports long latency between a System Controller and remote sites. This improvement is critical in rural and developing areas, where the backbone networks are less reliable.

During the 10.0 release cycle contributors are working together with other teams within the project to develop all the pieces of a unified software management framework, so it works in both the central cloud and across remote sites. Further roadmap items include optimizing sub-cloud deployment, including a phased approach for better control over the operation and any failover scenarios.

 ## Test
 
 The community is putting high emphasis on testing to ensure the stability and robustness of the platform. Beyond the automated unit and functional testing that is preformed by Zuul, the community is also doing targeted feature testing as well as sanity and regression testing. The test infrastructure for the latter is donated to the community by Wind River Systems.

The community's testing activities for the 9.0 release by numbers:

- Sanity testing
  - Executed weekly in various configurations
- Feature testing
  - 22 features were explicitly tested
    - 9 features were covered through existing automated sanity and regression tests 
  - 683 manual test cases were executed
  - 97.4% Pass Rate
- Automated release regression testing
 - Executed for both All-in-One (AIO) Simplex and AIO Duplex configurations

The community will be running sanity tests on a weekly cadence for 10.0 as well, and planning to have a similar overall test strategy as up until now.

## Docs

The documentation team is working on maintaining and improving the structure and format of the documentation to ensure that users and newcomers have a cohesive experience, and the large amount of documentation that the project has is easy to navigate.

The team made a lot of improvements during the 9.0 release cycle. Contributors introduced new sections to detail out the installation process even further, including both bare metal and virtual methods, and also added more content to the Contributor Guide. The team also started to go through the existing documentation and removed duplicated and out of date information to maintain high quality of information available in the guides.

One of the focus areas that is already identified for the current release cycle is to document the build process and move it from the wiki to make it part of the overall project documentation. 

If you are using or evaluating StarlingX, make sure to check out the project's [documentation](https://docs.starlingx.io) and give the team feedback on their [weekly meetings](https://wiki.openstack.org/wiki/Starlingx/Meetings#6:00am_Pacific_-_Docs_Team_Call) or the  [starlingx-discuss](https://lists.starlingx.io/mailman3/lists/starlingx-discuss.lists.starlingx.io/) mailing list.

## Distro & Multi-OS

This team is working on integrating the underlying operating system into the StarlingX platform, including both the kernel and user space layers.

During the PTG the team was focusing on items that they are working on during the current, 10.0, release cycle. These include upgrading the kernel to version 6.6, along with moving to Debian v12. Contributors are also looking into increasing hardware diversity for the platform, which includes Arm support.

Arm donated 6 serves, which are currently being installed in the community's test lab that is maintained by Wind River Systems, so the community can continuously run their tests on a diverse set of HW platforms.

The community has a lot of open reviews to implement Arm support, and also need to build packages to make available on the project's mirror site. If you are interested in participating in this effort, please look at the proposed patches on Gerrit, or reach out to the team on the starlingx-discuss mailing list.

## Containers

This project team supports everything that is related to containerization in the platform, like Kubernetes, Helm, FluxCD, and so forth.

During the 9.0 release cycle, the team added support for a range of Kubernetes versions between v1.24 and v1.27. Users can perform a multi-version upgrade either as a manual or as an orchestrated process. Users can also schedule pods based on hardware features that are available on a node, with the new Node Feature Discovery component.

In the current, 10.0, release cycle the team is working on keeping up to date with Kubernetes versions, which currently includes v1.28 and v1.29, and to further optimize the multi-version upgrade process.

## Release

This team is helping the community to plan the release cycle, which includes milestones, roadmap and overall timeline. Members of this team also track the community's progress with the planned additions, changes and fixes, to coordinate the steps throughout the release.

The 9.0 release in numbers:
- 33 new features and enhancements
- 783 bugs fixed

The 10.0 release cycle has just started, the community is still discussing and finalizing the content for the new version of the platform. The release team has set an initial timeline for this cycle, and planning for the new release to come out in September, 2024.

# All-community Topics

## Use cases

During previous PTGs the community reserved some time for discussions with users and people who are evaluating the platform for their use cases, and this event was no exception.

One of the StarlingX use cases the attendees discussed was telecommunications networks, where the project serves as the software platform on top of the hardware infrastructure, to provide connectivity.

During the session on the second day of the event, a new user was talking about their use case to provide connectivity in rural areas, where they face with unreliable networks between sites, power outages, and further challenges. Their deployments are often relying on satellite communication, which comes with higher latency. The company's target market is Africa, with plans to deploy 10,000 sites. Key StarlingX functionality they are relying on are Distributed Cloud, and reliability-related features that support HA configurations.

Another user was briefly describing their use case, which was providing infrastructure for Internet Service Providers (ISPs). This user is located in Germany, and in that region an IPv4/IPv6 dual stack is a requirement, so they will work with the community during the 10.0 release cycle to move the implementation of that feature forward.

## Testing

The community had a conversation around improving testing, and making some parts of it more available to the wider ecosystem. Currently the sanity testing is done by contributors from Wind River Systems, as they have more direct access to the test lab and infrastructure, and for further historical reasons. During the PTG session attendees were discussing about options and steps that it would require to make the test cases and framework available upstream, so others in the ecosystem could execute the test suits as well.

If you're interested in following and participating in the testing-related discussions and activities, join the [Test team meetings](https://wiki.openstack.org/wiki/Starlingx/Meetings#8:00am_Pacific_-_Test_Team_Call) or reach out to contributors on the starlingx-discuss mailing list.

## Improving the Review Process

Reviewing patches, that can include new code, documentation, test, etc, is a process that communities, like StarlingX, often revisit to make it more efficient. Review bandwidth often doesn't match up with the volume of new proposals that come from both new and established contributors. During the session, the StarlingX community had a lively conversation about options to consider, like whether or not it is a good practice to implement requirements, such as reviewing every new patch within 24 hours, require a minimum number of '+2' votes on a review before it gets merged, and more.

There were no decisions made during the PTG, the community will keep discussing options to make the processes, including reviews, better and more efficient.


For further notes of the discussions at the event please refer to the session [etherpad](https://etherpad.opendev.org/p/r.bc04598c08f498303b1e8a3cfe913eef) which also contains the link to the recording of the session.

# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

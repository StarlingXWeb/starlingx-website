---
templateKey: blog-post
title: StarlingX at the virtual Project Teams Gathering in March, 2023 - Part 2
author: Ildiko Vancsa
date: 2023-05-08T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Get the highlights of StarlingX discussions and project updates at the 2023 Spring virtual [OpenInfra Project Teams Gathering (PTG)](https://openinfra.dev/ptg/) event. <!-- more -->

The StarlingX community continued their lively discussions on the second day of the event. The sessions were focusing on the remaining project team updates and dived into topics like community building, preparing for the upcoming [OpenInfra Summit (June 13-15)](https://openinfra.dev/summit/vancouver-2023), and more. To learn about new use cases, further project team updates and other technical deep dives, check out the [article about the first day](https://www.starlingx.io/blog/starlingx-vptg-march-2023-recap/) of StarlingX sessions.

# Project Team Updates Continued

## Build

This team works on the build system, which turns the source code into a deployable ISO image. The contributors are collaborating closely with the Distro team to ensure a stable and efficient build system and process.

As contributors mentioned how the Debian migration was a key element of the 8.0 release in earlier discussions, finalizing and fine tuning the build system was crucial to the success of this process. In parallel to this change, the community also made the decision to phase out the CentOS image builds. This only means that the CentOS-based images are not getting built automatically by the community's tools anymore, however, the source code to build them locally is still accessible in the [StarlingX git repositories](https://opendev.org/starlingx).

During the 8.0 release cycle, the team also improved the stability and efficiency of the build system, which included the support of parallel builds. The team has been putting more effort into utilizing OSTree more to help with future operating system updates. While improving the centralized build mechanism was in the spotlight for 8.0, moving forward the contributors are also looking into implementing a distributed build mechanism.

There are further changes coming in 2023 that affect the mirrors and build system that has been donated by CENGN since the early days of the project. As the organization is reconfiguring their footprint, they will unfortunately unable to provide the hardware infrastructure donation moving forward. Wind River offered to provide resources to take over the build system and keep the mirrors available. New members of the community also offered help to make additional resources available and provide more redundancy to the community and overall ecosystem. While the preparations have already started, changes will take affect later in the year.

The discussions during the first day touched on the aim to support ARM-based architectures. In order to do that, the build system also needs to be prepared. As the community has fine tuned the kernel within the StarlingX platform, to provide real-time capabilities and support high-performance applications, they need to evaluate how to ensure that all the tweaks work on different hardware architectures. One example is to avoid rebuilding Debian packages, and rather reuse as many of them as possible.

A bigger part of the conversation was also exploring pros and cons to native builds and cross-compiling. The conclusion during session was favoring to start with the latter and move over to native build on ARM incrementally. Contributors will keep discussing this topic and other items on the [team meetings](https://wiki.openstack.org/wiki/Starlingx/Meetings).

Last, but not least, the team also touched on the challenges of testing, since access to hardware is not trivial. The community's test infrastructure allows to collect test results from external systems, which can make it easier for organizations to help out with testing on different hardware configurations, without the need of extending existing labs. Please get in touch with the community, if you would like to participate in this effort!

## Test

This team is looking after defining and executing tests suits against the platform, including sanity and regression tests. The contributors are also performing manual tests beyond implementing and maintaining the automated test suits.

The migration to the Debian operating system in the 8.0 release cycle made the team busy to ensure that the new platform is thoroughly validated and verified. As part of that, they had to make sure that they have full test coverage for the Debian-based platform. Improvements included increased sanity testing, which are now running once a week and covering both the AIO-Simplex and AIO-Duplex configurations.

Some test statistics from the 8.0 release cycle include:
- Feature tests
  - 506 manual test cases were executed
  - Features were tested both explicitly as well as through automated testing
  - 96.9% pass rate
- Release regression tests
  - 516 automated test cases were executed on StarlingX AIO-Simplex configuration
  - 497 automated test cases were executed on StarlingX AIO-Duplex configuration

During the 9.0 release cycle the community will keep running the weekly sanity tests. Test execution will also keep including both the AOI-SX and AIO-DX configurations. As the community is still finalizing the list of features that will be included in this release, the feature test plans are yet to get finalized.

The community briefly discussed improving the unit and functional test coverage that is executed by the [Zuul platform](https://zuul-ci.org) on the [OpenDev](https://opendev.org) community infrastructure.

## Docs

The documentation team is working on maintaining and improving the structure and format of the documentation to ensure that users and newcomers have a cohesive experience, and the large amount of documentation that the project has is easy to navigate. Team members are also reviewing new content and fixes, to guide contributors on how to use a consistent writing style throughout the guides. Enhancing and maintaining the Contributor Guide, which is a resource for newcomers to learn more about the community's tools and processes, is also under the responsibility of this team.

The team gained new contributors during the 8.0 release cycle. Beyond guiding the community through the manual process of creating and enhancing content, team members have been working on setting up some automations where possible. An example to that is the alarm list, which gets populated through the events.yaml file. The structure of the documentation was also improved in the 8.0 release cycle, to improve navigation and help people to find information easier.

## Release

This team is helping the community to plan the release cycle, which includes milestones, roadmap and overall timeline. Members of this team also track the community's progress with the planned additions, changes and fixes, to coordinate the steps throughout the release.

During the session, we revisited the steps and timelines of the 8.0 release cycle to help attendees better understand the overall structure and criteria for each milestone. Typical release cycles have three milestones to allow time for planning, implementation and testing. Towards the end of the cycle the community creates a new stable branch for the new release. That branch serves as a base for testing release candidates, until all critical issues are fixed and the final release is cut.

During the 8.0 release cycle contributors implemented 27 new features and enhancements to the project and fixed over 470 bugs.

At the time of the PTG the community was evaluating the status of milestone 1 of the 9.0 cycle, which they have declared since. There are over 20 new features proposed for this release, that is forecasted to be available in the Fall of 2023.

# All Community Business

## StarlingX Hands-on Workshop Planning

The community will be running a [hands-on workshop](https://openinfra.dev/summit-schedule#event=25866&view=list) at the OpenInfra Summit to provide the opportunity to conference attendees to learn more about how to deploy, configure and use the platform. The hardware resources required by the workshop are donated by [Equinix](https://www.equinix.com).

The community used the PTG session to discuss and finalize the content for this interactive, hands-on session. Ideas included:

- Build a distributed cloud environment using the nodes that the attendees are going to deploy
  - Since this requires additional setup in routing, this is a stretch goal for the session
  - Showing a multi-node setup or distributed cloud, might be included in the form of video demo content, if time allows
- Deploy and configure the platform and run a sample application on top it
  - The community brought up FlexRAN as an option for that, although people were more in favor of something simpler and more accessible
- Using an open source project, called 'deployment manager' to show how to do Zero-Touch Provisioning (ZTP)
  - The community concluded to rather go through a more traditional deployment process, where the workshop attendees can see the entire deployment process
  - This is still an option to show during the session, if time allows

To ensure optimal use of time, the aim is to pre-stage the servers and have them installed with the ISO. This way the attendees can just start with the bootstrap to avoid longer idle time. In preparation to the workshop, the community is also revisiting existing project documentation about deployment options, both bare metal and virtual, and makes updates where necessary.

## Community Building

While talking about new features and enhancements to the StarlingX platform is always exciting, it is just as important to revisit the community's tools and practices to ensure efficient collaboration in an open and welcoming environment.

### Communication

Conversations about processes and workflows were mainly focusing on the community's communication channels. It is crucial to reevaluate the mechanisms to communicate, since global communities are working together remotely and these tools and channels are the only for existing and new contributors to discuss ideas, issues and questions.

The community's main communication channel is the [starlingx-discuss](https://lists.starlingx.io/cgi-bin/mailman/listinfo/starlingx-discuss) mailing list. While the list is very active, it is often desired to have more synchronous ways for contributors to talk to each other. To ensure the opportunity for that, the community also runs both team meetings as well as a TSC & Community call over an online conference platform. The teams with active meetings are working on implementing the habit to always send out meeting minutes to the mailing list, as it helps those who cannot attend the calls. As it is a new directive that the community implemented since the previous PTG we also collected feedback, which was overall very positive.

The community also has a channel called #starlingx on the Matrix. There are new contributors who started to hang out in the channel to chat about what they are doing with the platform and ask questions. As many contributors haven't jumped into this channel yet it is still a little quiet overall, which we are working on to change. The Matrix rooms are logged, which makes it easy to catch up on any conversation that happened there while someone was offline.

### User Survey

The community has a continuously running user survey to collect information from users with regard to how they are using the platform, which features they are relying on, and any additional feedback they might have. The user survey was recently updated to include new questions that fit the evolved platform better. During this segment of the PTG session we went through some of the highlights of the new survey responses.

At the time of the PTG we had 5 responses. Below please find highlights of the aggregated results:

- Survey respondents are in different phases of evaluation
  - 60% is looking into deploying Distributed Cloud as opposed to a collection of standalone clouds
- 100% of the respondents said that they will be deploying a full, containerized OpenStack cloud (stx-openstack) as part of your StarlingX environment
- Acceleration & performance
  - 80% listed 'Dedicated CPUs'
  - 60% listed 'Isolated CPUs'
  - 60% listed PTP
- Services and protocols
  - 60% listed 'Metrics server'
  - 60% listed 'SNMP'
  - 40% listed ISTIO
- Docs average score of responses
  - Usage score is 8 out of 10
  - Readability score is 8.5 out of 10
  - Complete descriptions score is 8 out of 10
  - Easy to navigate score is 8.5 out of 10
- Net Promoter Score (NPS): 8.75

If you are currently using or evaluating StarlingX, please fill out the new [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey)!

One of the most important topics that the community keeps discussing at the PTG sessions is how to improve the experience for new users and contributors when they get in touch with the StarlingX project.

### Project Onboarding

Most people reach out on the project's mailing list to ask questions and ask for guidance. While contributors do their best to respond quickly, it is not always the most efficient process. The community was exploring more proactive options to look into. One of those was to create a troubleshooting guide, which can list the solutions to most frequently asked questions that new users reached out with. This can help people to find solutions when they are stuck with deploying or configuring the platform or to onboard a new application. Further improvements to the documentation should also include a hardware-support matrix. This is an important piece, as StarlingX has support for different hardware accelerators, but that information is currently a little scattered throughout the different guides. This can help people to source the required resources where they can deploy the platform easily.

The other idea that came up to help new comers was to run a workshop more frequently, which would cover various topic areas to show how to deploy and use StarlingX. An example to the session is the [hands-on workshop](https://openinfra.dev/summit-schedule#event=25866&view=list) that the community will be running at the [OpenInfra Summit (June 13-15)](https://openinfra.dev/summit/vancouver-2023) in Vancouver. Further occasions can be run online, which will provide better accessibility for people around the globe to tune in and follow. Cadence could be quarterly or following every major release. The community will evaluate the options and make decisions after the OpenInfra Summit occasion.

The last item that we covered was the project's mission statement. The community discussed and set their goals at the project's inception five years ago. As the both the community and the industry have evolved since then, contributors have been discussing where the project is going and how the platform will keep changing to achieve their enhanced mission. This short session was providing a summary of the previous conversations to raise awareness of where the activity was standing at the time of the PTG. As the community was very close to deciding on the updated version, they have concluded on a new statement since: "Empower organizations to deploy and manage high-performance, distributed cloud infrastructure at scale." You can also find the new mission statement on the front page of the project's [website](https://www.starlingx.io).

The above items are only a few highlights of the full roadmap of the StarlingX project. For further notes of the discussions at the PTG please refer to the [session etherpad](https://etherpad.opendev.org/p/r.a1706afa3252f8b2e6e6650a2f785002) or check out the recordings of the discussions.

# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

If you would like to meet the StarlingX community, join us at the upcoming [OpenInfra Summit & PTG (June 13-15)](https://openinfra.dev/summit/vancouver-2023) in Vancouver!

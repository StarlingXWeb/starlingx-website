---
title: StarlingX in Shanghai
author: ildiko-vancsa
date: 2019-12-02T01:32:05.627Z
category: features-and-updates
---

Get the highlights of StarlingX activities at the [Open Infrastructure Summit](https://www.openstack.org/summit) & [Project Teams gathering (PTG)](https://www.openstack.org/ptg/) in Shanghai, November 4-8, 2019. <!-- more -->

The StarlingX Community participated in the Open Infrastructure Summit & PTG in Shanghai at the beginning of November to share news about the project, reach out to the local community and have technical discussions to get feedback and shape the roadmap of the project.

The Open Infrastructure Summit was held the first three days of the week with conference sessions including presentations and panel discussions, a lively Marketplace and the co-located Forum to provide space and time for users, operators and developers to talk about the software pieces the communities are working on.

StarlingX was featured during the keynotes on Monday with a short [project update](https://www.openstack.org/videos/summits/shanghai-2019/osf-project-update-starlingx) slot. There were further 8 sessions during the conference both to introduce the project to newcomers as well as to share further technical details, roadmap and case studies to show use cases where the attendees can utilize the capabilities of the platform.

Similarly to former Summits we had the Forum running in parallel to the conference with  40 minutes long sessions with users, operators and developers in the rooms to discuss feedback, new ideas and next steps. StarlingX and the OSF Edge Computing Group had a [joint session](https://etherpad.openstack.org/p/PVG-edge-wg-forum) to talk about reference architectures and gather new use cases from the attendees. The session discussed use cases related to Content Delivery Networks (CDN) and running workloads on bare metal on the edge and further items such as networking and bare metal provisioning on the solutions side.

The conference sessions were recorded and the slides and videos are being uploaded to the [event website](https://www.openstack.org/videos/search?search=starlingx) as you read this article.

The StarlingX community also participated in the PTG which was overlapping with the Summit this time around. The project had one and a half days to split between [onboarding activities and technical discussions](https://etherpad.openstack.org/p/starlingX-ptg-agenda-shanghai).

The project on-boarding session took place Wednesday morning to welcome newcomers and share information about the software, community and processes that is fundamental to get started. During the session attendees were interested in topics such as scaling, performance testing efforts, GPU and CNI support, and backup and restore functionality.

The next session during the PTG was focusing on community building and contributor experience. It is very important for community members to regularly check the processes they use to make sure the community is a healthy and sustainable ecosystem where they provide entry points for new comers and revisit opportunities for improvements.

The local community described some challenges that they face in China including the issues with the availability of images and mirrors where they are looking for a local contributor who could host local instances. We also discussed the demand for translating documentation and had a join discussion with the OpenStack I18n team to learn about the tools and processes they use to localize content and considered to set those up for the StarlingX community as well.

We touched on communication as well and learned about a WeChat channel for StarlingX where local community members discuss topics relevant to the project as well as work on troubleshooting when someone needs help. We agreed to have liaisons to ensure that the WeChat group is connected to the global community as well.

The attendees also agreed that outreach is a priority and started to discuss plans to run their [hands-on workshop](https://www.starlingx.io/blog/starlingx-openinfra-summit-workshop-2019.html) next year as well as working on adding more content to the StarlingX [blog](https://www.starlingx.io/blog/) with the aim of focusing on case studies. If you have a case study to share you can propose it as new content for the [website on GitHub](https://github.com/StarlingXWeb/starlingx-website/tree/master/site/blog) by creating a pull request.

The community is looking for labs to setup StarlingX in different configurations and run more complex tests including sanity, robustness, and performance testing and connect the test environments as 3rd party testing sites.

The discussions moved over to low level testing as the project needs to improve when it comes to test coverage. The attendees discussed a plan to make sure every project has a test framework in place to run unit and functional tests. For unit tests the community will use the Config project to polish the unit test framework and then apply it to all project teams where it is relevant.

When it comes to functional testing it is a bit more challenging to test the containerized platform therefore the community members are looking into tools and frameworks to use before deciding on an execution plan. One alternative is a cross-community collaboration opportunity to look into a new proposal for the Airship project that is targeting to test the robustness of the deployed platform that the StarlingX community could potentially utilize too as StarlingX is integrating Armada from Airship.

Further [testing activities](https://etherpad.openstack.org/p/ecg-test-plan) are in the plans in collaboration with the [OSF Edge Computing Group](https://wiki.openstack.org/wiki/Edge_Computing_Group).

In the remaining time for the day the community members switched over to discuss the [plans for the 4.0 release](https://etherpad.openstack.org/p/stx.4.0-feature-candidates) that is targeted for some time during the first half of 2020.

The 4.0 release is focusing on containers to finish containerizing all services that StarlingX delivers as well as to add new features and functionality such as adding Kata Containers to the platform as default container runtime or look into FPGA device support in Kubernetes. For industrial use cases the community is looking into adding Time Sensitive Networking (TSN) support to Kata and containerized services.

The community is thinking about items such as upgrades early on and started to look into the options for Kubernetes. They are also planning to integrate the Ussuri release of OpenStack into StarlingX 4.0. There are also some ongoing activities that they check on such as layered builds or supporting multiple operating systems as the base for the StarlingX platform.

For the last session of the PTG the attendees went back to discuss the development process further. They were looking into integrating the documentation process closer into the development workflow to make sure the project has a good coverage when it comes to describing how to build, deploy and run the platform, introduce new functionality, and help people to join the community. The community has new content as part of their [contributor documentation](https://docs.starlingx.io/contributor/index.html) that they are look into improving further.

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform.

Stay tuned for the next event where you can meet the StarlingX community!

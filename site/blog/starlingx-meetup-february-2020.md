---
title: Takeaways from the recent StarlingX Contributor Meetup
author: ildiko-vancsa
date: 2020-03-16T01:32:05.627Z
category: features-and-updates
---

Check out the main discussion topics from the first StarlingX face to face planning meeting of the year. <!-- more -->

The StarlingX community decided to hold another contributor meetup based on the success of the one we had a year ago to start 2020 with a clear focus. The [Contributor Meetup](https://etherpad.openstack.org/p/starlingX-winter-2020-meetup) event was hosted by Intel in Chandler, Arizona on March 3-4.

Community members came together in person as well as participated remotely to discuss ongoing work and talk about new requirements that need enhancements or new solutions. During the two days of the workshop we talked about some important topics for the current release cycle while also started to plan for the upcoming releases and revisited some processes to ensure the community has an efficient way to collaborate.

As the platform is integrating several components from other open source projects moving to newer versions of these services is always in the focus point. One of the larger items is moving to CentOS 8 which the community decided to do in steps due to many RPM packages not yet being available. The first steps include starting with kernel updates and ensure continuous testing to make sure nothing breaks and adding new packages as they become available. The community is also looking into opportunities to make early testing with some packages that are already available in beta version.

On a related topic the meetup participants spent quite some time discussing the support to upgrade from the 3.0 version of StarlingX to 4.0. As edge environments are expected to be massively distributed with some limitations on accessibility to sites being able to perform a smooth upgrade throughout the system is crucial. The community is currently taking steps towards supporting the process and making sure that the communication between parts of the system that might run different versions of the platform services can communicate to each other without issues.

With every upcoming new release the community is continuously searching for ways to enhance the platform and add new functionality to support edge and IoT type use cases better. The two main areas the attendees explored at this meetup were automation and security.

There are new technologies appearing constantly and the community is keeping a close eye on further components to integrate into the platform to get new functionalities or enhance manageability. One of the examples is called [Retail Node Installer  (RNI)](https://github.com/intel/retail-node-installer). By looking into this service the community is targeting to make the system installation process simpler as well as faster.

We also touch based on [ACRN](https://projectacrn.org/) which is an open source type-1 hypervisor. The community will look into how to grab and deploy an image with ACRN and enable its APIs to allow users to utilize its functionality as well as to be able to monitor these resources.

The discussions in this block also covered use cases in the industrial domain where you have several devices that may not need to be or cannot be orchestrated by the StarlingX platform, but you would still like to be able to monitor these and be aware of their state. The community will take a step-by-step approach towards realizing these plans and ideas and setup demo environments as well to show features in action and test them.

There are a couple of [StoryBoard](https://storyboard.openstack.org/#!/project_group/86) stories in place for security related enhancements that we briefly glanced through during the meetup to make sure that everyone is on the same page and the community can progress with implementing these items:

- [Secure Management Internal Endpoints](https://storyboard.openstack.org/#!/story/2007347)
- [Pod Security Policy](https://storyboard.openstack.org/#!/story/2007351)
- [Container Image Signature Validation](https://storyboard.openstack.org/#!/story/2007348)
- [Encryption of K8s Secret Data](https://storyboard.openstack.org/#!/story/2007243)
- [Helm v3](https://storyboard.openstack.org/#!/story/2007000)

During the afternoon of the first day the attendees discussed some more forward looking items to keep in mind for the community to work on. Some of these are feature development items while others are needed to make the platform more stable and robust.

One of the most important discussion items was about stability and upgradeability. It is crucial for an edge platform to be able to run stable for a long time and provide as much automation and remote manageability as possible as physical access to the sites isn't always guaranteed. The workshop participants were discussing platform behaviors that they have experienced during ongoing testing activities as well as plans for improving test plans and activities to get an even better view. So far the platform has good results when it comes to sanity and robustness testing and the plan is to increase testing activities to be able to keep up quality while improving features.

We also looked into efforts around supporting further operating systems integrated into the platform than CentOS. This task has several steps and is not easy to achieve with the current platform due to some dependencies. As the community has put focus into other areas this is a part where we are looking for new contributors who would be interested in helping out with this work item.

As you may already know StarlingX is utilizing container technologies to run the platform services starting from the 2.0 release. While it is already showing a lot of advantages when it comes to deploy and manage these components there is still some work left towards finishing the containerization work as well as adding enhancements to what is already done. As in case of edge environments you may run into resource constraints one of the main focus areas for the community in the future is to further reduce the footprint of the platform and remove some dependencies deployed with the containers where it is possible.

Towards the end of the meetup we got back to testing which is a topic that is always in focus. The community has been working hard on increasing test coverage and as I mentioned earlier to bring more automation into the current processes to reduce the required time and be able to run more tests in multiple environments at the same time. When it comes to increasing test coverage it is an area where new comers can easily join in and help out. If you’re interested in participating in the community and work on development related items it is a good entry point for you regardless of which sub-project you have the most ineterst in.

Last but not least the StarlingX community is continuously looking into improving their ways of working and providing more ways for newcomers to start participating. One of our findings during the discussions at the meetup was to work more on documentation based on questions popping up on the mailing list about the installation and deployment of the platform. We are also looking into identifying low hanging fruit type of bugs and further items for new developers to pick up and start to work on.

That's all for my summary. While it may seem like a long list, we had even more discussions and brainstorming sessions over the two days of the meetup. If you have any questions to the above items or if you're interested in trying out the software or getting involved in the community please [reach out](https://www.starlingx.io/community/) on the mailing list or IRC or join one of the weekly community meetings. You can find further details and pointers on the [StarlingX website](https://www.starlingx.io).

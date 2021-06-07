---
templateKey: blog-post
title: Takeaways from the first StarlingX Contributor Meetup
author: Ildiko Vancsa
date: 2019-01-29T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Check out the main discussion topics from the first StarlingX face to face planning meeting of the year. <!-- more -->

As the StarlingX project is still in its infancy, it's crucial to have face time that developers as well as leaders can use to discuss both technical and process related matters to ensure the community has a balanced ecosystem and clear roadmap to execute on. To start the year with a clear focus, the community held its first [Contributor Meetup](https://etherpad.openstack.org/p/stx-chandler-meetup) event hosted by Intel in Chandler, Arizona on January 15-16.

![alt text](/img/StarlingX_Contributor_Meetup_January_2019.jpg)

During the two-day event the attendees discussed - both in person and remotely -  a wide range of topics from release planning through documentation and testing to onboarding. I'd like to give you a short summary of the main topics (as I remember them!) so that you can get up to speed and get involved.

## Release Planning

The StarlingX community is switching to two releases per year, with the next one targeted for the end of May, 2019 -- closer than you think. With this in mind, it's very important to keep both the release timelines and goals under review as well as careful planning to keep the roadmap on track.

 Hereby I would like to note that the upcoming release will include the Stein version of the integrated OpenStack services. Along with this move the release cadence will also align with OpenStack from there onwards to ensure that the StarlingX platform incorporates the latest features, fixes, and enhancements of the upstream projects.

During the meetup, we went through the items planned for the release and also checked the milestone plans to see if there's anything to fine tune. A few of the bigger items under discussion for the upcoming releases were containerization both for control plane services as well as supporting mixed workloads, multi-operating system (multi-OS) support, and the status of upstream work items. You can find more details about the planned items on the [StarlingX Release Plan wiki page]([https://wiki.openstack.org/wiki/StarlingX/Release_Plan]).

## Documentation

For most people, this is one one of the least interesting topics but it's crucial to have good documentation for StarlingX to guide users as well as contributors about how the software and the community operates.

Here's the team’s near-term priority list:

- API Guide
- Build Guide
- Install Guide
- Deployment Guide

Longer-term plans include documents such as an Operations Guide. Most of the above documents already exist but there's always room for improvement and they also need to be kept up to date with regard to the feature development activity. Meetup attendees discussed review culture and ways to ensure documentation coverage along with the code changes. You can find existing guides on the [StarlingX documentation web page](https://docs.starlingx.io) and open tasks to work on in [StoryBoard](https://storyboard.openstack.org/#!/project/1046).

## Compiler flags

This came up last year in connection to security hardening activities. The community agreed to decide on a per-item basis while also working on testing the performance impact of changes in compiler flag and similar settings.

## Testing

The community is actively working on testing the software on function-level as well as an integrated package. While unit testing is a more straightforward activity to cover, some of the new sub-projects still need the framework to be set up. Functional and integration testing falls into a similar bucket with some further DevStack integration in flight to ensure a flexible framework that provides the possibility to test the APIs and the integration points between the different services. Similarly to activities in the area of documentation, the community is working on integrating testing into the design and development process to avoid it becoming an afterthought in culture.

Besides the code-level coverage, the [Test team](https://wiki.openstack.org/wiki/StarlingX/Test) is also working on plans for sanity, stability, regression and performance testing. Because StarlingX provides a full-stack platform it's very important to perform tests beyond checking the basic functionality which only ensures the expected behavior of the APIs. Having the full platform under test can be challenging from the point of view of available hardware resources as well as making sure that the pipeline feeds the information back to the development process as a continuous feedback loop.

One of the biggest challenges is running performance tests in an open environment reliably since those tests are usually tied to specific hardware configurations and so forth. As high performance is in high demand for many edge computing use cases, we need to know if a change affects the platform's performance significantly which is why this is one of the priorities to put together a test plan to cover this path.

## Onboarding

While StarlingX is still a young community, it already has a large code base, many integrated services and established processes to follow. Providing easy entry-points for newcomers who are interested in participating in the sub-teams’ activities is a high priority for the project. We discussed different ways to boost these onboarding efforts.

Documentation came up during this section as a base criteria to help people understand how StarlingX works both as software as well as a community. Furthermore, we talked about visualizing easy tasks or bugs to fix as potential [starting points](http://lists.starlingx.io/pipermail/starlingx-discuss/2019-January/002647.html) to contribute.

Beyond documenting better how to get started with the software and the community, we also discussed providing office hours where experts could answer any questions that newcomers have in a more synchronous way. The attendees voted for IRC as a platform to experiment with this idea by using the #starlingx channel on OFTC for the purpose. Stay tuned for further information on this while the community works out the hours.

For a more hands-on experience, the community is planning to provide a workshop during the Open Infrastructure Summit in Denver to show you how to deploy StarlingX and introduce a few of its features. Stay tuned for further information on the [Denver Summit schedule](https://www.openstack.org/summit/denver-2019/).

## Outreach

It's a high priority item for the community to reach out to new users as well as adjacent communities in edge computing to understand better the needs and provide better integration points. You'll find community members participating in relevant industry events, workshops and meetups where you can ask questions about StarlingX and how to become part of the community.

## Elections

As the community is setting up the governance models, members decided to choose leaders through an election process. The first election is scheduled for the second quarter of 2019 where five of the Technical Steering Committee (TSC) seats will be up for election. If you're interested in running for the TSC elections, make sure that you are actively participating so the community gets to know you. We're still working on the election process and exact dates, you can check the [governance web page](https://docs.starlingx.io/governance/reference/tsc/index.html) for updates.

That's all for my summary. While it may seem like a long list, we had even more discussions and brainstorming sessions over the two days of the meetup. If you have any questions to the above items or if you're interested in trying out the software or getting involved in the community please [reach out](https://www.starlingx.io/community/) on the mailing list or IRC or join one of the weekly community meetings. You can find further details and pointers on the [StarlingX website](https://www.starlingx.io).

In addition to other events, you'll find the StarlingX Community at the [Open Infrastructure Summit](https://www.openstack.org/summit/denver-2019/) and Project Teams Gathering (PTG) this April in Denver to either get started with the software and learn more about the community or participate in the next round of design and planning discussions.

Don’t miss it!

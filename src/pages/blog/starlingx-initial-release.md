---
templateKey: blog-post
title: Introducing StarlingX
author: Glenn Seiler
date: 2018-10-25T01:32:05.627Z
category: 
  - label: News & Announcements
    id: category-A7fnZYrE1
---

Today the StarlingX project launched their first release to provide a fully featured cloud for the distributed edge.<!-- more -->

## But what is edge?

Edge computing emerged to be the latest trend in cloud technologies that is becoming evident by the second to every IT professional as well as to industries leveraging computers and automation for their daily businesses. When it comes to defining the term individuals, open and corporate organizations and standards bodies all have their versions which are overlapping, sometimes aligning but are never the same.

Not to take on the burden to provide a new definition here, we are working with the [OSF Edge Computing Group](https://wiki.openstack.org/wiki/Edge_Computing_Group) to define the base terms and identify use cases and requirements to fulfill. The group published a whitepaper [Cloud Edge Computing: Beyond the Data Center](https://www.openstack.org/edge-computing/cloud-edge-computing-beyond-the-data-center?lang=en_US) earlier this year, and in their definition “the most mature view of edge computing is that it is offering application developers and service providers cloud computing capabilities, as well as an IT service environment at the edge of a network”.

## So where is that edge?

While there’s no one answer everyone agrees with, there is an on point quote from IHS Market, an analyst firm to provide one: “The Edge is anywhere where there is 20 milliseconds or less between the edge compute services and the end user, device or machine”. [Watch on YouTube](https://www.youtube.com/watch?v=Ckx-lmjZ72U)

We can argue on the exact number and we often do, the above view is inclusive without going into the argument on what is an ‘device edge’, ‘far edge’, ‘telecom edge’ or ‘aggregation edge’. It is agnostic to the different terms as well as market segments and can equally be applied to areas from Radio Access Networks (RAN) through IoT to Industrial manufacturing.

And as well as definitions, the software stack also needs to be equally applicable to where it is used and how the workloads are being delivered to the edge.

Does it exist yet?

## Let me introduce StarlingX

While edge is climbing its hype curve and numerous groups are forming in the open source and standardization space to ask and answer questions there are not many solutions out there yet to choose from.

StarlingX is an open source project that offers you the services you need for your distributed edge cloud either to choose from or to deploy it as one package. The project builds on existing services in the open source ecosystem by taking components of cutting edge projects such as Ceph, OpenStack and Kubernetes and complementing them with new services like configuration and fault management with focus on key requirements as high availability (HA), quality of service (QoS), performance and low latency.

When it comes to edge the debates on applicable technologies are endless and to give answers it is crucial to be able to blend together and manage all the virtual machine (VM) and container based workloads and bare metal environment which is exactly what you get from StarlingX.

Beyond being an integration project, StarlingX also delivers new services to fill the gaps in the open source ecosystem to fulfill the strict requirements of edge use cases and scenarios throughout all the segments of the industry.

![Image from alias](/img/StarlingX_Diagram_SimplifiedArchitecture.jpg "StarlingX architecture")

### Configuration Management

In a nutshell you get node configuration and inventory management services with highlight on supporting auto-discovery and configuration of new nodes, which are key when it comes to deploy and manage large number of remote sites some of which might be in areas that are hard to access. This component comes with a Horizon GUI and a CLI to manage the inventory of CPUs, GPUs, memory, huge pages, crypto/compression hardware and so forth.

### Fault Management

This framework allows you to set, clear and query custom alarms and logs for significant events for both infrastructure nodes as well as virtual resources such as VMs and networks. You can access the Active Alarm List and Active Alarm Counts Banner on the Horizon GUI.

### Host Management

The service provides lifecycle management functionality to manage host machines via a REST API interface. This vendor-neutral tool detects host failures and initiates automatic recovery by providing monitoring and alarming for cluster connectivity, critical process failures, resource utilization thresholds and H/W faults. The tool also interfaces with the board management controller (BMC) for out of band reset, power-on/off and H/W sensor monitoring and shares host state with other StarlingX components.

### Service Management

The Service Manager provides lifecycle management of services by providing high availability (HA) through redundancy models such as N+M or N across multiple nodes. The service supports to use multiple messaging paths to avoid split-brain communication failures as well as active or passive monitoring and to specify the impact of a service failure with a fully data driven architecture.

### Software Management

This service allows you to deploy software updates for corrective content and also new functionality with a consistent mechanism applicable for all layers of the infrastructure stack – from the kernel all the way up to the OpenStack services. The module can perform rolling upgrades including parallelization and support for host reboot with moving workload off of the node by using live migration. You can access the service in Horizon as well as through a REST API or command line interface.

## What's Next?

The StarlingX community has started some exciting new work towards a Container as a Service (CaaS) concept that containerizes the OpenStack services and delivers both VMs and containers as equal citizens in a mixed workload environment.

Beyond this we have new sub-project teams focusing on optimizing the services to support multiple different Linux operating systems and to enhance functionality to enable a fully distributed Edge Cloud.

Get involved with StarlingX now to participate in these new sub-projects to create innovative solutions for edge!

## How to try out and get involved with StarlingX

StarlingX is more than just a set of services, it also provides you the build tools and environment to construct the services and further upstream components like Ceph, Kubernetes, or DPDK, into a complete edge-cloud-software-stack to deploy and test already today.

Get the first release of StarlingX from:

- Git repositories: [https://git.openstack.org/cgit/?q=stx](https://git.openstack.org/cgit/?q=stx)
- StarlingX space on Matrix: [#starlingx:opendev.org](https://matrix.to/#/#starlingx:opendev.org)
- Mailing list: [http://lists.starlingx.io](http://lists.starlingx.io/cgi-bin/mailman/listinfo)

You can meet the community in person at the next [OpenStack Open Infrastructure Summit](https://www.openstack.org/summit/berlin-2018/) in Berlin, November 13-15.

The [edge computing track](https://www.openstack.org/summit/berlin-2018/summit-schedule/#day=2018-11-13&tracks=248) will provide you with presentations and panel discussions to learn more about StarlingX and further edge related topics.

You can also [participate in working sessions](https://www.openstack.org/summit/berlin-2018/summit-schedule/#day=2018-11-13&recorded=false&track_groups=86) as part of the Forum.

Planning to contribute to StarlingX but don’t know where to start, the StarlingX team can guide you through in person on [their project on-boarding session](https://www.openstack.org/summit/berlin-2018/summit-schedule/events/22851/starlingx-project-onboarding).

---

Interested in learning more? [Watch the OSF Community Webinar dedicated to StarlingX onboarding](https://www.youtube.com/watch?v=G9uwGnKD6tM&t) recorded on October 24th.

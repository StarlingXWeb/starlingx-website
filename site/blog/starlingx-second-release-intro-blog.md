---
title:  StarlingX Release 2.0 - Turning everything up side down
author: ian-jolliffe
date: 2019-09-03T01:32:05.627Z
category: news
---
Learn more about the new StarlingX 2.0 release. <!-- more -->


The StarlingX is a relatively new open source project - announced in May of 2018 and things have changed, grown and evolved very quickly. It is a very different project now than when we started for sure.

In the past year we have made a tremendous amount of progress as a community. We have fully operationalized community governance, attracted new contributors from around the world, and elected a diverse set of members to the Technical Steering Committee from four different companies. There are a wide range of opportunities for people to contribute to the project; please reach out to us if you are looking to learn more. We have a group of people in our First Contact SIG working to improve the on boarding experience.

At the same time the community has made huge strides in evolving the architecture of the project. In the first release, the platform services ran on bare metal. In this release, the platform has evolved to a Kubernetes-based Cloud Native platform, integrating Kubernetes with the StarlingX services. OpenStack components are also leveraged, such as Keystone, Barbican, and Horizon. The containers are deployed via a local docker registry. We now have an ecosystem of components with the StarlingX services ready to drive the convergence of the 5G world. This is a great example of the power of open infrastructure components coming together to solve real problems.

As new technologies emerge it is important to adapt and change to take advantage of the possibilities they bring to the table. At the edge, the solutions are power and space constrained, latency and timing are critical. StarlingX now gives users choice to deploy containers or VM’s or both. OpenStack services are deployed in containers and can be deployed as required for the particular environment. We can now provide an edge optimized solution that brings together Kubernetes and OpenStack.

StarlingX is a project that develops and integrates technologies that brings together a curated solution for Edge use cases. 

The project brings together:
1.    Growing documentation suite   
2.    Security
3.    Ease of deployment
4.    High performance networking
5.    Support for highly accurate synchronous timing 

Below are some of the StarlingX 2.0 updates in these areas:

- We have added significantly to our [documentation](https://docs.starlingx.io) suite and completely refreshed our [wiki](https://wiki.openstack.org/wiki/StarlingX). We have made good progress, and this is an area of continued focus for the project.
- Support for TPM devices to store secrets, and UEFI secure boot are some examples of the easy ways to leverage security capabilities that are critical at the edge.
- Deployment is realized by a fully declarative model that leverages Ansible to configure and deploy the initial host environment and software services. We have contributed to and are leveraging Armada and OpenStack Helm to deploy and configure the OpenStack services.
- From a networking perspective the solution is brought together with either IPv4 or IPv6 full stack support. Calico is the primary CNI, along with Multus and SRIOV to provide high performance (low latency and high throughput) networking capabilities needed at the edge.
- In this release we have added support for Precision Time Protocol (PTP). This is a great way to source, and distribute a highly accurate clock source to all servers in the cloud. This provides a way to distribute and align a highly accurate clock around a factory or a telecom network, areas where NTP is not accurate enough. 
- At the same time as the above architectural changes, we have refreshed many components of the stack such as aligning 100% with OpenStack Stein, and updating to Ceph Mimic. In the OpenStack Train release we have contributed to Nova and Neutron and eliminated all out of tree patches.

The StarlingX community has worked tirelessly over the past several months on this exciting transformation. The code and release notes are available here: 

In future blogs, we will go deeper into each of these areas. I hope you find the work we are doing in the community interesting. Your feedback is appreciated, so please join us in this exciting journey transforming computing at the edge and enabling exciting new use cases, in transportation, automation, medical and telecommunications.

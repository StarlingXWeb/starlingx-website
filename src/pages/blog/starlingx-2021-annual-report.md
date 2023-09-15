---
templateKey: blog-post
title: StarlingX 2021 Annual Report
author: Ildiko Vancsa    
date: 2022-01-26T16:23:52.741Z
category: 
  - label: Annual Report
    id: category-ONbhvyhgs
---
StarlingX is an open source community that is supported by the Open Infrastructure Foundation. The project integrates together well-known open source projects such as Ceph, Kubernetes, the Linux kernel, OpenStack, and more to create a a fully integrated cloud platform that is optimized for edge and IoT use cases.

The project was launched in 2018 and since then the community has put out 5 releases. StarlingX 5.0 was released in June 2021. This version of the platform included new features in areas such as security and hardware acceleration as well as some new functionality that was targeting factory automation.

Security related features included integrating Vault into the platform for secret management to provide the ability to store and access secrets securely. These secrets can include credentials, encryption keys, API tokens and other data that should not be stored in plain text on a system. This new component improves the platform’s security posture and encryption capabilities while maintaining manageability. Beyond this the community also made improvements to certification management to enhance automation in this area.

Hardware acceleration is becoming an enabler for various edge computing use cases and is in focus for StarlingX as well. The community added support for Nvidia GPUs, enabling operators to do additional offload for workloads that require GPU power, such as machine learning or other image-based processing applications.

Another key enhancement in this area was to add the ability to orchestrate FPGA image updates that provides the option to deploy FPGA with orchestrations that are automated from end to end.

In the 5.0 release the StarlingX community introduced a new feature called ‘edgeworker’ node, that is a new personality distinguished from 'worker' nodes. Edgeworker nodes are usually deployed close to an edge device, such as an I/O device, a camera, a servo motor or a sensor, to manage host-based enrollment to provide the possibility to manage industrial PCs and devices and sensors in these environments from StarlingX.

Beyond the above, the release also contained features and enhancements like:

- Improvements to certification management to enhance automation
- Precision Time Protocol (PTP) Notification Framework
- Containerized Ceph storage by using Rook
- Support for Net-SNMP v3 for the Fault Management service
- CephFS for cluster storage
- Container Image Signature Validation

During 2021 the community also started working on to enable using Debian as the base operating system for the plaform. Along with that change the build system is also getting improved. As these changes do not fit into one release cycle they will become available incrementally in later releases.

The community held two election cycles in 2021 to give opportunities for new leaders to arise. Both the Technical Steering Committee seats and Project and Technical Lead positions were up for re-election over the course of the year to extend and refresh the whole leadership of the project.

The community was participating in industry events to spread the word about the progress the contributors are making as well as to provide the opportunity for the contributors and new comers to come together and discuss project related matters, such as design, development and testing related topics. There were presentations about the project at virtual events such as the Open Infrastructure Summit, OpenInfra Live and Edge Computing World and contributors discussed technical details about the project at the two Project Teams Gathering (PTG) events.

The project had 3,150 changes committed by 148 authors from 5 organizations during the year.

2021 increased the commercial adoption of StarlingX. Besides T-Systems and Verizon, Vodafone is now deploying StarlingX as part of their infrastructure to utilize the platform's capabilities to power their ORAN rollout, which is the first official ORAN deployment in Europe.

The StarlingX code is hosted on Github under the Apache 2 license. Learn about the project, how to contribute and support the community at starlingx.io. Join these channels to get involved:

* [Source code](opendev.org/starlingx)
* [StarlingX space on Matrix](https://matrix.to/#/#starlingx:opendev.org)
* [Mailing list](https://lists.starlingx.io/)

The Open Infrastructure Foundation just published its [2021 annual report](https://openinfra.dev/annual-report/2021). Learn more about other OpenInfra projects and how you can get involved.

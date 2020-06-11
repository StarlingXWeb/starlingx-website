---
templateKey: blog-post
title: The Road Towards Confirmation
author: Ian Jolliffe
date: 2020-06-11T01:32:05.627Z
category: 
  - label: News & Announcements
    id: category-A7fnZYrE1
---

Learn about how StarlingX has shaped during the community's journey towards confirmation. <!-- more -->

StarlingX is a [newly confirmed top-level Open Infrastructure project](https://www.openstack.org/news/view/454/starlingx-confirmed-as-toplevel-osf-project) supported by the [OpenStack Foundation (OSF)](https://osf.dev), and you may also know it as a fully integrated, continuously evolving open source cloud platform that supports virtual, containerized, or bare metal workloads alike and is optimized for edge and IoT use cases. The project was announced in May 2018 and has had three releases since. Both the code and the community have changed a lot in the past two years.

The initial code base was brought to the open by Intel and Wind River Systems. The cloud platform was composed of an enhanced version of the [OpenStack project](https://www.openstack.org/) and new components which the community is calling the Flock services: fault, configuration, host, service and software management. All of the components are running on bare metal. The community has been working together with the relevant OpenStack project teams to fix issues and add new functionality to the services to make them a better fit to fulfill edge requirements. The StarlingX community is actively collaborating with several other groups as well such as the he [OSF Edge Computing Group](https://wiki.openstack.org/wiki/Edge_Computing_Group?_ga=2.95113439.2133490747.1591635131-61533541.1515512744), [ONAP](https://www.onap.org/), [Akraino](https://www.lfedge.org/projects/akraino/), [Airship](https://www.airshipit.org/), [Kata Containers](https://katacontainers.io/), and more.

During the 2.0 release cycle the community started to leverage containers for the platform services for additional flexibility, robustness, and increased manageability within the system. The community turned the platform into a fusion between OpenStack and [Kubernetes](https://kubernetes.io/) services with additional open source components integrated into it like [Ceph](https://ceph.io/) and [Libvirt](https://libvirt.org/). Besides architectural changes, community members were also focusing on features to improve security and performance including to start work on creating a performance testing framework to ensure maintaining high standards on an ongoing basis.

The [latest release of the project is 3.0](https://www.starlingx.io/blog/starlingx-release-3/) which introduces a crucial component called Distributed Cloud architecture to provide synchronization across edge sites. The feature is in line with the Distributed Control Plane model of the OSF Edge Computing Group’s Reference Architecture models. This release is integrating the Train release of OpenStack and Kubernetes v1.16 and is also CNCF conformant.

Highlights of the features and improvements the community has been working on during the past two years:
- Significant additions to the [documentation suite](https://docs.starlingx.io/) and the [wiki](https://wiki.openstack.org/wiki/StarlingX). This is a continued focus area for the project.
- Deployment is realized by a fully declarative model that leverages Ansible to configure and deploy the initial host environment and software services. The community contributed to and is leveraging Armada and OpenStack Helm to deploy and configure the OpenStack services.
- From a networking perspective the solution is brought together with either IPv4 or IPv6 full stack support. Calico is the primary CNI, along with Multus and SRIOV to provide high performance (low latency and high throughput) networking capabilities needed at the edge.
- Support for Precision Time Protocol (PTP). This is a great way to source, and distribute a highly accurate clock source to all servers in the cloud. This provides a way to distribute and align a highly accurate clock around a factory or a telecom network, areas where NTP is not accurate enough.

The key approaches start with security enabled at the lowest level of the stack and build up from there. The key challenges the community tackled so far are:
- **UEFI secure boot**: Can be used to securely boot from the lowest levels of the stack such that the operating system can be booted from BIOS to GRUB in a secure way.
- **TPM device enablement**: StarlingX provides the ability to leverage a TPM device when it is available on a server. TPM devices can be used to store secrets, such as private keys for HTTPS. Once they are in the TPM device, the secret can only be read by authorized users and can never be modified. Another important use of TPM devices is to leverage entropy built into the device to ensure more randomness of any generated keys.
- **Certificate management**: In a Kubernetes environment the number of certificates can easily explode. We have some initial capabilities with StarlingX Release 2.0 where these certificates are managed more manually than we would like. In future releases, we are looking to collaborate with other projects to make it easier to manage these certificates.
- **Container isolation**: Fundamentally, with containers we are sharing a kernel. Cgroups and namespaces are the key enablers of containers and great capabilities to provide isolation of these workloads. However; there are some situations that require technologies that can help address the risks of a shared kernel. Kata Containers, another project supported by the OSF provides an excellent way to provide additional isolation and many of the benefits of containers. This community is making great strides with adoption by providing a solution that is a fusion between virtualization and container technologies. In StarlingX, we already have a specification to add support for Kata Containers and we expect this capability to land in a future release.

The current release cycle is 4.0 where the community is adding support for Kata Containers as a container runtime, integrating the Ussuri version of OpenStack, containerizing remaining platform services to list a few of the enhancements to the software. The community is settling on a 6 month release cadence with continued focus on improving documentation and test capabilities. For new technologies, they are exploring new ways to support smaller devices to be managed, exciting new hardware acceleration technologies and containerizing more infrastructure components.

If you found items above that you would be interested in discussing or contributing don't hesitate to [reach out to the community](https://www.starlingx.io/community/) and participate. Also look out for virtual meetups and hackathons during the second half of the year to learn more about the software, the ongoing development activities and start contributing.

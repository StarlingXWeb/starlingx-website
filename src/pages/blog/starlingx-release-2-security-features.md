---
templateKey: blog-post
title: Securing the Edge with StarlingX
author: Ian Jolliffe
date: 2019-10-19T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---
Security on the edge is crucial. Learn more about how the StarlingX 2.0 release helps addressing this challenge. <!-- more -->


As we drive compute to the edge of the network many things change and become more interesting and new problems need to be solved. At a minimum you need to face with space and power limitations. Further challenges include balancing server costs while enabling emerging applications and new transformational use cases at the edge when you take the next steps. However; even though the way compute is delivered at the edge is different, the need for security remains constant or even more critical.

Security is always an important consideration in any deployment. It gets more interesting when we no longer have the high level of physical security in the data center where there are retinal scanners at the doors. As we move to the edge we have an environment where there may be less physical security and nodes that are geographically distributed also make maintenance activities difficult.

Within the StarlingX community, these are challenges we have recognized and have been working on solutions. The key approaches start with security enabled at the lowest level of the stack and build up from there. The key challenges we have tackled so far are:

- **UEFI secure boot**: Can be used to securely boot from the lowest levels of the stack such that the operating system can be booted from BIOS to GRUB in a secure way.
- **TPM device enablement**: StarlingX provides the ability to leverage a TPM device when it is available on a server. TPM devices can be used to store secrets, such as private keys for HTTPS. Once they are in the TPM device, the secret can only be read by authorized users and can never be modified. Another important use of TPM devices is to leverage entropy built into the device to ensure more randomness of any generated keys. 
- **Certificate management**: In a Kubernetes environment the number of certificates can easily explode. We have some initial capabilities with StarlingX Release 2.0 where these certificates are managed more manually than we would like. In future releases, we are looking to collaborate with other projects to make it easier to manage these certificates.
- **Container isolation**:Fundamentally, with containers we are sharing a kernel. Cgroups and namespaces are the key enablers of containers and great capabilities to provide isolation of these workloads. However; there are some situations that require technologies that can help address the risks of a shared kernel. [Kata Containers](https://katacontainers.io), another project supported by the OpenStack Foundation provides an excellent way to provide additional isolation and many of the benefits of containers. This community is making great strides with adoption by providing a solution that is a fusion between virtualization and container technologies. In StarlingX, we already have a specification to add support for Kata Containers and we expect this capability to land in a future release.

As you can see there are many complementary technologies that work together to address the security posture required at the edge. Other techniques and technologies people in the community are exploring are network policy enforcement, ease of use of certificates and additional ways to leverage TPM modules. There are many interesting [security related items in StoryBoard](https://storyboard.openstack.org/#!/story/list?status=active&project_group_id=86), our task tracker tool, where you can follow and join the tasks people are working on in the community. Come join us, there are many ways to engage on the mailing list, meetings or IRC. You can find information about all this and more on the [StarlingX website](www.starlingx.io).

Security is critical to all projects and technologies to ensure privacy is respected and information is securely preserved. An edge focused approach to defence in depth is required to ensure the reality of less physical security doesn’t put the services and data at risk of malicious exploits.

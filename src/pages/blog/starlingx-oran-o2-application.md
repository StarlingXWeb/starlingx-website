---
templateKey: blog-post
title: O-RAN O2 Application in StarlingX
author: Litao Gao
date: 2023-05-01T16:58:05.627Z
category: 
  - label: Features & Updates
    id: category-A7fnZYrE1
---
Learn more about O-RAN O2 Application in the StarlingX 8.0 release. <!-- more -->

The [StarlingX 8.0](https://www.starlingx.io/blog/starlingx-release-8/) release came out recently with many new features providing new functionality while also increasing compliance to O-RAN specifications. In this blog post, we will explore the O-RAN specification compliant O2 Interfaces feature in StarlingX.

### What is Open RAN?

Open Radio Access Network (Open RAN) is a global initiative that aims to create an open and interoperable radio access network for the next generation of wireless technologies. It promotes the use of software-defined networking (SDN), network functions virtualization (NFV), and cloud-native architectures to enable a more flexible, scalable, and efficient network infrastructure.

An open RAN ecosystem gives network operators more choices in RAN elements. With a multi-vendor catalog of technologies, network operators have the flexibility to tailor the functionality of their RANs to the operators' needs. Total vendor lock-in is no longer an issue when organizations are able to go outside of one RAN vendor's equipment and software stack.

### What are O-RAN O2 Interfaces?

O-RAN, a term introduced by the [O-RAN Alliance](https://www.o-ran.org), a global community of network operators, vendors, and research institutions that are collaborating to develop open standards for the RAN. O-RAN Alliance is one of top two organizations working on Open RAN. The [O-RAN specifications](https://orandownloadsweb.azurewebsites.net/specifications) define a set of open and modular interfaces between different elements of the RAN, allowing for interoperability and flexibility in building RAN solutions.

O-RAN-compliant interfaces are critical for enabling interoperability between different network elements from different vendors. This interoperability is essential for creating a flexible and scalable network infrastructure that can support the requirements of 5G and beyond.

The O2 interface is a key component of the O-RAN architecture, providing a standard interface between Service Management and Orchestration (SMO) Framework and Infrastructure Management (O-Cloud) Framework supporting O-RAN virtual network functions.

As depicted in the diagram below, the O2 interface is an open, logical interface within O-RAN architecture providing secured communication between the SMO Framework and O-Cloud. The role of StarlingX in this setup is to enable the management of O-Cloud infrastructures and the deployment lifecycle management of O-RAN "cloudified" NFs that run on O-Cloud. The O2 interface is defined in an extensible way that enables new information or functions to be added without necessarily needing to change the protocol or the procedures. This interface enables a multi-vendor environment and is independent of specific implementations of the SMO and O-Cloud.

![ORAN Diagram](/img/blog-oran-diagram.png)

O-Cloud can consist of multiple Deployment Management Services (DMS). Each DMS can manage leased resources from multiple resource pools and span multiple locations. There is a single Infrastructure Management Service (IMS) for O-Cloud that manages all resources of DMSs, as well as resources that are not allocated to any DMS in the O-Cloud.

SMO can utilize blueprints or other pre-configuration templates to assign resources to resource pools and  DMSs. Once the O-Cloud is operational, following functions can be performed over the O2 interfaces as:

- O-Cloud Infrastructure Resource Management
  - O-Cloud infrastructure Discovery and administration
  - O-Cloud infrastructure Scale-In, Scale-Out
  - O-Cloud infrastructure FCAPS
      - Fault management involves detecting and diagnosing issues within the infrastructure and quickly resolving them to minimize downtime and disruptions.
      - Configuration management involves managing the various configurations of the infrastructure, ensuring that it is properly configured to meet the needs of its users.
      - Accounting management involves tracking resource usage and allocating costs to users based on their usage.
      - Performance management involves monitoring the performance of the infrastructure and optimizing it to ensure that it is meeting its performance targets.
      - Security management involves implementing and monitoring security measures to protect the infrastructure and its users from potential security threats.
  - O-Cloud infrastructure Platform Software Management
- Managing Abstract Resources and DMSs
  - Creation, Scale-In, Scale-Out of assigned O-Cloud infrastructure resources
  - Deployment of FCAPS components for O-Cloud infrastructure resources
  - Deployment of DMS (Creation, Deletion and Lease of O-Cloud infrastructure)
- NF & Services Deployment Orchestration
  - Deployment Software Management
  - Deployment, Termination, Scaling, and Healing of NF & Services resources
  - FCAPS, for instance PM and FM, for NF & Services deployment resources

### How Does StarlingX Enable O-RAN Specification Compliant O2 Interfaces?

The O-RAN specification compliant O2 Interfaces feature in StarlingX is designed to support the O-RAN standard and enable telecom providers to easily integrate their 5G network functions into a cloud infrastructure. This is achieved through the use of standardized O2 interfaces, which provide a common language for different network functions to communicate with each other.

With this new feature, telecom providers can leverage StarlingX's powerful cloud infrastructure capabilities while maintaining the flexibility to choose their preferred network functions from different vendors. This allows them to easily customize their 5G network to meet their specific needs and requirements, without being locked into a single vendor's solution.

StarlingX's O-RAN specification compliant O2 interfaces feature is built on top of the [O2 Service in G release](https://docs.o-ran-sc.org/projects/o-ran-sc-pti-o2/en/g-release/overview.html) of Open RAN Software Community (ORAN-SC) INF project. At the time of publishing this blog post, the latest version of the compliant specifications are *O-RAN O2ims Interface Specification 3.0* and *O-RAN O2dms Interface Specification: Kubernetes Native API Profile for Containerized NFs 2.0*.

The O-RAN O2 service includes a set of software components that enable the functionality of O-RAN compliant O2 interfaces:

* O2API: This component provides O2 IMS interfaces servicing external requests.
* Database: This component stores the O2 infrastructure inventory Information.
* MessageQueue: This component is used to exchange asynchronous messages.
* Watcher: This component provides the capability of O-Cloud resource audit.
* PubSub: This component handles notification related logics, like subscribe and notify.

The O-RAN O2 service is integrated into StarlingX as a system application. With the [StarlingX Application Package Manager](https://docs.starlingx.io/system_configuration/kubernetes/system-configuration-starlingx-application-package-manager.html), the O-RAN O2 service application's lifecycle can be managed easily, including managing overrides to the helm charts within the application.

A StarlingX application package is a compressed tarball containing a metadata.yaml file, a manifest.yaml FluxCD manifest file, and a charts directory containing helm charts and a checksum.md5 file. The metadata.yaml file contains the application name, version, and optional helm repository and disabled charts information.

The O-RAN O2 application package is saved in StarlingX during system installation, but it is not applied by default. When system administrators plan to integrate StarlingX with a SMO application that performs management of O-Cloud infrastructure and the deployment lifecycle management of O-RAN cloudified NFs, they can just apply and put O-RAN O2 application into service by using a small number of `system` CLI commands.

Please refer to the detailed [procedure for how to install and uninstall the O-RAN O2 application in StarlingX](https://docs.starlingx.io/admintasks/kubernetes/oran-o2-application-b50a0c899e66.html).

### Conclusion

As 5G networks continue to evolve, O-RAN compliant interfaces will play a critical role in enabling a more open, interoperable, and efficient network infrastructure. The availability of O-RAN specification compliant O2 interfaces in StarlingX is a significant move in the development of 5G networks. By enabling interoperability between network elements from different vendors, StarlingX is providing its users with the flexibility and scalability needed to create a modern network infrastructure that can support the growing demand for high-speed data transfer and low latency.

The O-RAN specification compliant O2 Interfaces feature is just one example of StarlingX's commitment to supporting open standards and enabling interoperability between different technologies. This is crucial in the fast-paced world of telecommunications, where new technologies and standards are constantly emerging.

For the complete list of updates and new features in StarlingX 8.0, check out the [release notes](https://docs.starlingx.io/releasenotes/r8-0-release-notes-6a6ef57f4d99.html) and the [project documentation](https://docs.starlingx.io).

Visit the StarlingX [website](https://www.starlingx.io) today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](http://mirror.starlingx.cengn.ca/mirror/starlingx/release/) to try out the new features.

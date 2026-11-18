---
templateKey: blog-post
title: StarlingX R13.0 is here!
author: Ildiko Vancsa
date: 2026-11-18T01:32:05.627Z
category: 
  - label: News & Announcements
    id: category-A7fnZYrE1
---

The StarlingX community is proud to announce the StarlingX 13.0 release. The platform has been hardened and enriched with new features to make it more robust and flexible to enable use cases for various industry segments beyond telecommunications, where the platform is already a favored choice.

# Highlights from the 13.0 Release

## Improved Distributed Cloud Experience
Whether you’re looking for a platform for retail, healthcare, a telecom backbone network, or other use case that runs in a geographically distributed environment, StarlingX just became a better fit for your requirements. The 13.0 release introduced improvements to increase the manageability and performance of the platform in geographically distributed configurations.

Building, extending and maintaining a distributed system is any condition is not a simple task, which is why contributors made enhancements to the process of enrolling sub-clouds to make it shorter and easier to orchestrate. You can now also restore sub-clouds without the need to re-install, to make disaster recovery a little less painful.

The community understands that upgrading a system gets much more complicated as the size of the deployment grows, let alone when pieces are in different geographical locations. This is why they have been prioritizing to make enhancements to how upgrades work. System controllers now support sub-clouds up to version N-2, which gives you more flexibility when performing a rolling upgrade at your own pace.

## Networking Excellence: PTP 
The platform now has a new platform app to manage Open vSwitch (OVS) L2 Forwarding. The new version also delivers a Calico Network Operator, which is is an important component in light of the retirement of Ingress NGINX Controller in Kubernetes.

PTP is still one of the focus areas for the networking team, as timing and synchronization is a critical feature for use cases such as telecom networks, industrial IoT, and more. The feature got the following new functionality in the 13.0 release:
- Configured UTC Offset as an Authoritative Source
- Enhanced SyncE Support
- Quality Monitoring and Metrics Publication

## Marching Forward through Big Upgrades
The new version of StarlingX is delivering you Debian Trixie v13.7 on the v6.18.15 kernel. The end-to-end platform is fine tuned for the new base operating system, which also delivers you numerous CVE and bug fixes.

### OpenStack
The new release also gives you OpenStack 2026.1 (Gazpacho), but that is not all. You also get a suite of telemetry services, since you can only be sure things are running ok if you’re able to check on them. The new StarlingX platform now integrates OpenStack Aodh and OpenStack Ceilometer for alarms and metrics of your deployment.

For a simplified experience the team has also added a Prometheus platform application and an OpenStack Prometheus Exporter, so you can access all your metrics in the same tool.

For storage, you can now also rely on external storage backends supported by OpenStack Cinder, leveraging Helm overrides for configuring this option. You can also set protocol-specific configurations through Helm for iSCSI, Fiber Channel and NFS.

### Kubernetes
Kubernetes is now up-versioned to v1.35, along with further components of the container ecosystem integrated into the platform, with which you also get cgroups v2. The v1 version is now deprecated and will be removed in the next release. For more flexibility in deploying and configuring applications, the Application Framework received some updates as well.

When it comes to upgrading Kubernetes in your deployment, you can now upgrade the Kubernetes control plane before the platform upgrade happens, while the kubelet upgrade can happen as part of the platform upgrade's host-lock / deploy host / host-unlock operation.

And as always, the community thoroughly tested and verified all updates to the platform.

## Security
The StarlingX community has been actively working on making the platform more secure, which includes CVE scanning along with integrating newer versions and CVE fixes of components the platform delivers.

Security-related features are also one of the focal points of the ongoing development of the platform. For example, the new platform brings enterprise-grade Certificate Authority (CA) capabilities by adding a new EJBCA system application. Operators of the platform can now deploy and manage a dedicated Certificate Authority directly on the platform, enabling centralized certificate lifecycle management.

For the complete list of updates and new features in StarlingX 13.0, check out the [release notes](https://docs.starlingx.io/releasenotes/index.html#release-notes) and the [project documentation](https://docs.starlingx.io/).

# About StarlingX

Visit the StarlingX website today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](https://mirror.starlingx.windriver.com/mirror/starlingx/release/) to try out the new features. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.


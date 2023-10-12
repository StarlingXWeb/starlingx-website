---
templateKey: blog-post
title: 4<sup>th</sup> Gen Intel Xeon Scalable Processor with Intel vRAN Boost support in StarlingX
author: Balendu Mouli Burla
category: 
  - label: Features & Updates
---
Learn more about Intel vRAN Boost Kubernetes operator support in StarlingX 8.0. <!-- more -->

The [StarlingX 8.0](https://www.starlingx.io/blog/starlingx-release-8/) release includes a new Kubernetes Operator to manage and configure the integrated Intel vRAN Boost accelerator in 4<sup>th</sup> Gen Intel Xeon Scalable processors. In this blog post, we will learn about Intel vRAN Boost Kubernetes Operator functionality in StarlingX.

### Integrated Acceleration for High-Performance, Energy-Efficient vRANs

4<sup>th</sup> Gen Intel Xeon Scalable processors provide outstanding energy-efficient performance across networking use cases, including vRAN deployments. The platform delivers up to twice the capacity for vRAN workloads versus the prior generation<sup>[1]</sup>. It is optimized for high throughput and low latency, with built-in acceleration for packet and signal processing, load balancing and AI. It also provides higher memory bandwidth compared to the previous generation, with I/O capacity to meet the highest capacity requirements for next generation vRAN deployments.

Building on that foundation, 4<sup>th</sup> Gen Intel Xeon Scalable processors with Intel vRAN Boost integrate vRAN acceleration directly into the CPU. By eliminating the need for external accelerator cards, this integration helps reduce the complexity and bill-of-materials cost of vRAN deployments for CoSPs. It is also power-efficient, providing approximately 20% additional compute power saving versus the prior generation<sup>[1]</sup>.

### Intel vRAN Boost Kubernetes Operator 

Intel vRAN Boost Operator provides the ability to orchestrate, configure and manage the Intel vRAN Boost integrated accelerator in latest 4<sup>th</sup> Generation Intel Xeon Scalable processors when deployed with StarlingX 8.0 Kubernetes cluster(s). The Operator is backward compatible includes support for previous Intel vRAN Accelerator ACC100 Adapter cards. The Operator is a state machine which configures the resources, monitors them and acts autonomously based on the user interaction. Operators perform the functionality of

-	Detects and labels the Kubernetes worker nodes which has accelerators.
-	Configures the accelerators as per vRAN deployment requirements.
-	Creates the Virtual Functions (VFs) from accelerator. 
-	Maintain VFs as resources and manage the resource allocations to vRAN applications.
-	Provides user/admin interface access to the accelerator through K8s Custom Resource (CRs) APIs.


 ### Intel vRAN Boost Kubernetes Operator integrated with StarlingX 8.0

The Intel vRAN Boost Kubernetes Operator is integrated to StarlingX as a system application. With the [StarlingX Application Package Manager](https://docs.starlingx.io/system_configuration/kubernetes/system-configuration-starlingx-application-package-manager.html), the Intel vRAN Boost Kubernetes Operator application’s lifecycle can be managed, including managing over-rides to the helm charts for controlling the operator behavior.

A StarlingX application package is a compressed tarball containing a metadata.yaml file, a manifest.yaml, FluxCD manifest file, and a charts directory containing helm charts and a checksum.md5 file. The metadata.yaml file contains reference to the application name, version, references to StarlingX maintained docker images for Intel vRAN Boost Kubernetes Operator.

The Intel vRAN Boost Kubernetes Operator application package is saved in StarlingX during system installation, but not applied by default. When system administrators plan to configure StarlingX Cloud Platform for vRAN application deployments, they can deploy the Intel vRAN Boost Kubernetes Operator system application by using `system` CLI commands. 

Please refer to the detailed [procedure for how to deploy Intel vRAN Boost Kubernetes Operator](https://docs.starlingx.io/node_management/kubernetes/hardware_acceleration_devices/configure-sriov-fec-operator-to-enable-hw-accelerators-for-hosted-vran-containarized-workloads.html).

### Conclusion

The integration of Intel vRAN Boost Kubernetes Operator in StarlingX provides a ready-made solution for vRAN deployments based on StarlingX Cloud Platform and 4<sup>th</sup> Gen Intel Xeon Scalable processors with Intel vRAN Boost. System administrators can manage the configurability of Intel vRAN Boost accelerator through Kubernetes native CRD APIs and can manage the accelerator’s virtual resource allocation to the vRAN DU application workloads in container platform.

For the complete list of updates and new features in StarlingX 8.0, check out the [release notes](https://docs.starlingx.io/releasenotes/r8-0-release-notes-6a6ef57f4d99.html) and the [project documentation](https://docs.starlingx.io/).

Visit the StarlingX [website](https://www.starlingx.io/) today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](https://mirror.starlingx.cengn.ca/mirror/starlingx/release/) to try out the new features.

[1]: For workloads and configurations visit www.Intel.com/PerformanceIndex. Results may vary.

>Intel, the Intel logo, and other Intel marks are trademarks of Intel Corporation or its subsidiaries.


---
templateKey: blog-post
title: 4<sup>th</sup> Gen Intel Xeon Scalable Processor with Intel vRAN Boost support in StarlingX
author: Balendu Mouli Burla
category: 
  - label: Features & Updates
---
Learn more about Intel vRAN Boost Kubernetes operator support in StarlingX 9.0. <!-- more -->

The [StarlingX 9.0](https://www.starlingx.io/blog/starlingx-release-9/) release includes a new Kubernetes Operator to manage and configure the integrated Intel vRAN Boost accelerator in 4<sup>th</sup> Gen Intel Xeon Scalable processors. In this blog post, you will learn about Intel vRAN Boost Kubernetes Operator functionality in StarlingX.

As communications service providers move from 4G to 5G networks, many Telecommunication providers developing virtualized Radio Access Network (vRAN) architecture for higher channel capacity and easier deployment of Edge based services and applications. vRAN solutions are ideally located to deliver low latency services with flexibility to increase or decrease capacity based on the volume of real time traffic and demand on the network with a great support from Operating System and underlying hardware platform.

Intel vRAN Boost is an integrated vRAN Accelerator in [4<sup>th</sup> Gen Intel Xeon Scalable processors](https://www.intel.com/content/www/us/en/products/docs/processors/xeon-accelerated/4th-gen-xeon-scalable-processors-product-brief.html) to provide outstanding energy-efficient performance across networking use cases, including vRAN deployments. 

### Intel vRAN Boost Kubernetes Operator 

Intel vRAN Boost Kubernetes Operator provides the ability to orchestrate, configure and manage the Intel vRAN Boost integrated accelerator in latest 4<sup>th</sup> Generation Intel Xeon Scalable processors when deployed on a Kubernetes cluster(s). The Operator is backward compatible, it includes support for previous generations of Intel vRAN Accelerator ACC100 Adapter cards as well. The Operator is a state machine which configures the resources, monitors them, and acts autonomously based on the user interaction. Operators perform the functionality of

- Detecting and labeling the worker nodes which has accelerators within the Kubernetes cluster.
- Configuring the accelerators as per vRAN deployment requirements.
- Creating the Virtual Functions (VFs) from accelerator. 
- Maintaining VFs as Kubernetes resources and manage the resource allocations to vRAN applications.
-	Provides user/admin interface access to the accelerator through Kubernetes Custom Resource (CRs) APIs.
- Operator is capable of managing the Accelerator resource in Secure boot environments as well.


 ### Intel vRAN Boost Kubernetes Operator integrated with StarlingX 9.0

The Intel vRAN Boost Kubernetes Operator is integrated to StarlingX as a system application. With the [StarlingX Application Package Manager](https://docs.starlingx.io/system_configuration/kubernetes/system-configuration-starlingx-application-package-manager.html), the Intel vRAN Boost Kubernetes Operator application’s lifecycle can be managed, including managing over-rides to the helm charts for controlling the operator behavior. The latest version of the Operator integrated to StarlingX is v2.9.0.

A StarlingX application package is a compressed tarball containing a metadata.yaml file, a manifest.yaml, FluxCD manifest files, and a charts directory containing helm charts and a checksum.md5 file. The metadata.yaml file contains reference to the application name, version, references to StarlingX maintained docker images for Intel vRAN Boost Kubernetes Operator.

The Intel vRAN Boost Kubernetes Operator application package is saved in StarlingX Operating System during system installation, but not applied by default. When system administrators plan to configure StarlingX Cloud Platform for vRAN application deployments, they can deploy the Intel vRAN Boost Kubernetes Operator system application by using `system` CLI commands. 

Please refer to the detailed [procedure for how to deploy and validate Intel vRAN Boost Kubernetes Operator](https://docs.starlingx.io/node_management/kubernetes/hardware_acceleration_devices/configure-sriov-fec-operator-to-enable-hw-accelerators-for-hosted-vran-containarized-workloads.html) in StarilngX documentation.

### Conclusion

The integration of Intel vRAN Boost Kubernetes Operator in StarlingX provides a ready-made solution for vRAN deployments based on StarlingX Cloud Platform and 4<sup>th</sup> Gen Intel Xeon Scalable processors with Intel vRAN Boost. System administrators can manage the configurability of Intel vRAN Boost accelerator through Kubernetes native CRD APIs and can manage the accelerator’s resource allocation to the vRAN DU application workloads in container platform.

For the complete list of updates and new features in StarlingX 9.0, check out the [release notes](https://docs.starlingx.io/releasenotes/index.html#release-notes) and the [project documentation](https://docs.starlingx.io/).

Visit the StarlingX [website](https://www.starlingx.io/) today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](https://mirror.starlingx.cengn.ca/mirror/starlingx/release/) to try out the new features.

>Intel, the Intel logo, and other Intel marks are trademarks of Intel Corporation or its subsidiaries.


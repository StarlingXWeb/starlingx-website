---
templateKey: blog-post
title: Certificate Lifecycle Management in StarlingX
author: Sabeel Ansari
date: 2022-01-09T01:32:05.627Z
category: 
  - label: Features & Updates
    id: category-A7fnZYrE1
---

Learn more about certificate management in the StarlingX 6.0 release. <!-- more -->

The [StarlingX 6.0](ADD LINK TO THE OVERVIEW BLOG POST) release came out recently with many new features providing new functionality while also increasing manageability and automation in the platform. This blog post will guide you through the new lifecycle management support to manage your certificates in an automated fashion.

Certificate management is often set up as a manual procedure that is  prone to configuration errors and it was no different in StarlingX either. To create a better user experience and avoid unintentional configuration mistakes, the StarlingX community added new platform services in the 6.0 release of the platform to automate the process for [certificate lifecycle management](LINK TO DOCS?!).

# The Challenge
When you install certificates such as ssl, docker_registry or other platform/user-applications, the workflow you use involves the following series of steps:

- Generate a certificate off-platform signed by a trusted CA (Certificate Authority)
- Copy the PEM formatted certificate to the StarlingX platform
- Install the certificate using a ‘system certificate-install’ command
- Monitor the expiry date regularly to avoid certificates to expire and repeat the process close to the expiration date

This is a manual, cumbersome and error-prone process that can be improved and automated. To take steps towards that, one of the options you have is to use a service called Cert-Manager, that is using Kubernetes-native resources to provide support for the lifecycle management of your certificates. In addition, StarlingX 6.0 introduced new platform services to automate this process and monitor your certificates for expiry.

# Cert-Manager
[Cert-Manager](https://cert-manager.io/docs/) is an open-source Kubernetes-native application that is pre-installed on all StarlingX systems (introduced in StarlingX 4.0). When using this component, you will need to create a manifest file specifying the Issuer CRD (Custom Resource Definition) and Certificate CRD; and from there Cert-Manager will take over the responsibility of requesting new certificates from the issuer (as specified in the Certificate/Issuer CRD specification), monitoring the expiry dates and automatically renewing the certificates before they expire.

The Issuer can be configured to be a self-signed issuer to generate a CA certificate. Alternatively, you can also use an external Root CA to generate a CA certificate for the platform, thus functioning as an Intermediate CA (ICA). StarlingX now supports both modes.

# Monitoring Platform Certificates for Expiry
Cert-Manager automates the process of monitoring the certificate expiry date and auto-renews the certificates. However, there are still a few certificates that exist on the platform that are not managed by this component. Examples to these include older certificates that are installed using the ‘system certificate-install’ command (and have not been migrated to using Cert-Manager), or Kubernetes Root CA or Etcd certificates. This also means, that there can be configuration errors in the Issuer/Certificate CRDs or communication issues that can block renewal of these certificates.

In order to avoid such potential issues, StarlingX 6.0 introduced a monitoring service. This service regularly monitors all certificates on the platform and raises alarms using the existing [Fault Management (FM)](https://docs.starlingx.io/fault-mgmt/index.html) service if any certificates approach or pass the certificate’s expiry date.

StarlingX 6.0 adds two new alarm types to the FM service to support the certificate lifecycle management process:

- Certificate Expiring Soon (alarm ID: 500.200)
- Certificate Expired (alarm ID: 500.210)

With the new workflow you have options to override the default settings using Kubernetes annotations. The supported annotations are automatically added to the corresponding Certificate CRD (or Secret if certificate is created by a non-Cert-Manager application/user). Supported annotations include:

- Enable/disable the certificate alarm (default is enabled)
- Number of days before expiry that an alarm should be raised (default is 30 days)
- Change default severity of the certificate alarm
- Custom pre-text for the alarm description

You still need to monitor the alarms closely and take corrective action before your certificates expire.

# Renewal of Kubernetes Root CA Certificate
The Kubernetes Root CA has a long validity period (10 years by default). The Root CA certificate is either generated or you can also provide it during the initial cluster installation. The process to manually rotate this certificate is complex and error-prone and requires restarting all Kubernetes core components and application pods, thus making this procedure a service impacting routine. While the service-impact cannot be fully eliminated, the StarlingX community developed a procedure with simple CLI interfaces to minimize the impact and reduce potential errors.

Before starting this procedure, you need to generate or upload a new certificate to the platform.

The StarlingX Kubernetes Root CA update procedure involves three phases:

1. Add the new Root CA certificate as a trusted CA.
2. Update the existing certificates (and corresponding private keys if applicable) for various services and components.
3. Remove the old Root CA certificate from the trusted CAs.

During the whole procedure, Kubernetes services such as kube-apiserver, schedulers, controller-managers, kubelets and Kubernetes applications pods will be restarted in a rolling fashion to minimize the impact on services.

As you progress through this update procedure, preferably in a maintenance window, the system will raise and clear related alarms (900 series from 900.511 to 900.521).

StarlingX now also supports the orchestration of the Kubernetes Root CA certificate update on large scale distributed cloud (DC) systems. You can choose to update the Root CA certificates for all subclouds in a DC deployment by using only three simple and straightforward DC orchestration commands.

For the complete list of updates and new features in StarlingX 6.0, check out the [release notes](https://docs.starlingx.io/releasenotes/r6_release.html) and the [project documentation](https://docs.starlingx.io).

Visit the StarlingX website today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](http://mirror.starlingx.cengn.ca/mirror/starlingx/release/) to try out the new features.

---
templateKey: blog-post
title: Securing Secrets in a StarlingX World 
author: Luis Huapaya
date: 2024-29-01T16:58:05.627Z
category: 
  - label: Features & Updates
    id: category-A7fnZYrE1
---

TLS encryption keys, digital certificates, and authorization tokens all depend upon a root of trust. But what happens when that root is rotten? While a “root of trust” sounds impressive, it’s really no more than a glorified password, often stored as a plain-text file on a hard disk. Even if the file itself is encrypted, it’s still vulnerable to insider attacks or code injection threats. (And, no, using an encryption service like HashiCorp Vault doesn’t automatically protect you, since the passphrase for that service is just as likely to reside in a plain-text file somewhere.)
 
The fact that so many businesses store security passphrases in plain-text files underscores just how much we, as human beings, struggle with keeping security best practices. For example, we don’t rotate our TLS keys as often as we should (e.g., every 20 minutes). Instead, we use long-lived keys that may last for a year or more, giving hackers plenty of time to mount an attack with their stolen keys. We use self-signed certificates rather than more secure third-party digital certificates. We don’t do certificate pinning and, when we do, we don’t do it well. Put all our bad security habits together, and it’s no wonder that cybersecurity services are predicted to grow to a [trillion-dollar business](https://www.mckinsey.com/capabilities/risk-and-resilience/our-insights/cybersecurity/new-survey-reveals-2-trillion-dollar-market-opportunity-for-cybersecurity-technology-and-service-providers).

# From data stealing to data sealing

StarlingX is vulnerable to these security issues, not because of how it works but where it works. The large, geographically distributed networks that StarlingX is built for exist primarily at the edge in small, empty buildings or ruggedized cabinets. Telecommunications operators, for example, use StarlingX to run their radio access networks (RANs), which are often literally outstanding in a field with little more than a padlocked door between would-be attackers and a rack of servers. Storing TLS keys on an encrypted hard disk doesn’t mean so much when the entire disk can be copied or stolen outright.

Fortunately, StarlingX users have a number of better alternatives to storing passphrases and other roots of trust in plain-text files on a hard disk. Perhaps the best of these is Intel’s Software Guard Extensions (SGX), which allow encryption keys and other data to be stored directly on the central processing unit (CPU) in an encrypted area known as an enclave. SGX enclaves can host shared object (.so) files such as a shared library for roots of trust, and seal that data with a cryptographic key.

# An SGX enclave example

Let’s consider a common example in a StarlingX implementation using cert-manager and Kubernetes. Cert-manager can manage the TLS certification process and even act as a local issuer of X.509 certificates using the PKCS11 (Cryptoki) standard, but it still uses plain text for its root of trust. With Intel SGX, you can store that root of trust in an encrypted enclave and data-seal it. And, with cert-manager, you can rotate keys frequently—something that Kubernetes struggles to do well on its own.

Of course, an SGX enclave is still vulnerable to an insider attack, so we need to restrict who can access the enclave and load the SGX library containing the key. A good tool to have in this case is AppArmor, which allows you to set access controls for which users and programs can access the .so files in the library. Note that you can also use SGX enclaves to store the passphrase for an encryption service such as Vault, effectively providing you with the same level of protection as if you were using cert-manager.

# Beyond SGX: Alternative approaches

Intel SGX is just one approach to securing StarlingX encryption keys, albeit a very good one. AMD’s Secure Encrypted Virtualization-Secure Nested Paging (SEV-SNP) provides a layer of security by encrypting virtual machine memory in Linux KVM environments. AMD SEV-SNP is particularly effective against side-channel attacks, although it doesn’t provide the data-sealing capabilities of Intel SGX. Also, because AMD SEV-SNP only works on virtual machines, it doesn’t protect against insider or code injection attacks. Arm TrustZone, Intel QuickAssist (which uses PCI cards), and Trusted Platform Module (TPM) chips are additional options, each with their own strengths and weaknesses.
 
Beyond what’s available today, the StarlingX community is looking at new security mechanisms for the future and if you are a security expert, the team needs your help. There’s already a prototype in the works to add a local issuer capability to StarlingX using Intel SGX. And we’re in the process of adding automatically generated certificate chains and partial disk encryption to StarlingX as well. As security threats continue to evolve, StarlingX will evolve with them to ensure that users can deploy the next generation of distributed networks quickly and securely.

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

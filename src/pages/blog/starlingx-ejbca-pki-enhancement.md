---
templateKey: blog-post
title: PKI Enhancement - EJBCA System Application for Enterprise Certificate Management
author: Andy Ning
date: 2026-11-10T01:00:00.000Z
category:
  - label: Features & Updates
    id: category-A7fnZYrE1
---
# Overview
In the 13.0 release of StarlingX, a new PKI enhancement has been introduced: the **EJBCA system application** (`app-ejbca`). This feature brings enterprise-grade Certificate Authority (CA) capabilities to the StarlingX platform by packaging [EJBCA Community Edition](https://github.com/Keyfactor/ejbca-ce) — an open-source, full-featured PKI solution — as an optional platform application.

With this enhancement, StarlingX operators can deploy and manage a dedicated Certificate Authority directly on the platform, enabling centralized certificate lifecycle management including issuance, renewal, and revocation of X.509 certificates at scale.

# Why EJBCA on StarlingX?
StarlingX already uses cert-manager for internal platform certificate management. The EJBCA application extends this by providing:

- **A dedicated CA for custom certificates** — Issue certificates for workloads, services, and external systems beyond the platform's internal needs.
- **Multiple enrollment protocols** — CMP (RFC 4210), REST API, Admin Web UI, and CLI for flexible integration with different automation workflows.
- **cert-manager integration** — EJBCA can serve as a cert-manager ClusterIssuer, enabling Kubernetes-native certificate issuance using standard `Certificate` resources.
- **Enterprise PKI features** — Certificate profiles, end entity profiles, OCSP responder, and CRL support.
- **Full certificate lifecycle** — Enroll, renew, revoke, and check certificate status through the supported protocols.

# What's Included
The `app-ejbca` application deploys the following components:

- **EJBCA Community Edition** — The core PKI engine
- **CloudNativePG** — PostgreSQL operator that manages database cluster lifecycle
- **ejbca-pg-cluster** — CloudNativePG database `Cluster` providing HA PostgreSQL persistence of EJBCA data
- **ejbca-cert-manager-issuer** — cert-manager integration for Kubernetes-native certificate issuance
- **cert-manager-approver-policy** — Policy controller for CertificateRequest approval as part of cert-manager integration
- **Apache httpd sidecar** — Reverse proxy providing mTLS termination for the EJBCA service

The platform is reconfigured to allow external access:

- **HAProxy integration** — SSL passthrough for external traffic to EJBCA
- **OAM GlobalNetworkPolicy** — Opens port 7443 to allow external access to EJBCA service

A companion application, **Stakater Reloader** (`app-reloader`), automatically restarts EJBCA pods when the server TLS certificate is renewed — no manual intervention is required.

The application is deployed in the `ejbca` namespace and exposes services through the platform HAProxy load balancer on OAM port 7443.

# How to Use It

## Install the EJBCA Application

```
# Upload the application
~(keystone_admin)$ system application-upload /path/to/ejbca-<version>.tgz

# Set the mandatory EJBCA hostname (FQDN for external access)
~(keystone_admin)$ system helm-override-update ejbca ejbca ejbca \
    --set ejbca.hostname=ejbca.example.com

# Apply the application
~(keystone_admin)$ system application-apply ejbca
```

Once applied, EJBCA is accessible externally at `https://<ejbca-hostname>:7443`.

## Manage CAs and Certificates via CLI

The EJBCA CLI runs inside the application's container and provides operations including some that are only available through the CLI, such as creating CAs, importing external CA certificates, and configuring CMP aliases:

```
# Create a CA
~(keystone_admin)$ kubectl exec -it ejbca-0 -n ejbca -c ejbca -- /opt/keyfactor/bin/ejbca.sh ca init \
    --caname my-ca --dn "CN=my-ca" --tokenType soft --tokenPass changeit \
    --keytype RSA --keyspec 4096 -v 3650 --policy null -s SHA256WithRSA --signedby 1

# Import an external CA certificate (CLI-only)
~(keystone_admin)$ kubectl exec -it ejbca-0 -n ejbca -c ejbca -- /opt/keyfactor/bin/ejbca.sh ca importcacert \
    --caname external-ca --certfile /tmp/external-ca.pem

# Configure a CMP alias for automated enrollment (CLI-only)
~(keystone_admin)$ kubectl exec ejbca-0 -c ejbca -n ejbca -- /opt/keyfactor/bin/ejbca.sh config cmp addalias \
    --alias cmp-test-alias
```

## Certificate Lifecycle Management

Once CAs and profiles are configured, the full certificate lifecycle is available through multiple protocols:

**Enroll**
- CMP: `openssl cmp -cmd ir`
- REST API: `POST /v1/certificate/pkcs10enroll`
- cert-manager: `Certificate` resource
- Admin Web UI: RA Web → Make New Request

**Renew**
- CMP: Re-enroll with new key
- REST API: Re-enroll with new CSR
- cert-manager: Automatic (`renewBefore`)
- Admin Web UI: Re-issue from UI

**Revoke**
- CMP: `openssl cmp -cmd rr`
- REST API: `PUT /v1/certificate/.../revoke`
- Admin Web UI: Search → Revoke

**Status**
- REST API: `GET /v1/certificate/.../revocationstatus`
- Admin Web UI: Search → View
- OCSP: `openssl ocsp`

### Choosing the Protocol That's Right for You

- **CMP (RFC 4210)** — Best for automated workflows. Uses OpenSSL's built-in CMP client with HMAC shared-secret authentication. Supports enrollment, renewal, and revocation.
- **REST API** — Best for programmatic integration. Requires mTLS with the superadmin client certificate. Supports enrollment, renewal, revocation, and status queries.
- **cert-manager ClusterIssuer** — Best for Kubernetes-native workloads. Create an EJBCA `ClusterIssuer` and use standard `Certificate` resources with automatic renewal. Does not support revocation.
- **Admin Web UI** — Best for interactive management. Accessed at `https://<ejbca-hostname>:7443/ejbca/adminweb/` with mTLS client certificate authentication.
- **OCSP (RFC 6960)** — For certificate status checking. Query the EJBCA OCSP responder to verify if a certificate is valid or revoked.

## Update the EJBCA Application

To update to a new version:

```
~(keystone_admin)$ system application-update /path/to/ejbca-<new-version>.tgz
```

The update preserves all user helm overrides and PKI data (CAs, keys, certificates). Platform upgrades may also trigger automatic app updates if configured.

## Backup and Restore

All EJBCA data (CAs, keys, profiles, certificates) is backed up and restored via provided Ansible playbooks:

```
# Backup
$ sudo ansible-playbook /usr/share/ansible/stx-ansible/playbooks/ejbca_backup.yml \
    -e "initial_backup_dir=/opt/platform-backup"

# Restore
$ sudo ansible-playbook /usr/share/ansible/stx-ansible/playbooks/ejbca_restore.yml \
    -e "initial_backup_dir=/opt/platform-backup" \
    -e "backup_filename=<filename>.tgz"
```

# References

- [EJBCA Official Documentation](https://docs.keyfactor.com/ejbca/latest)
- [EJBCA Community Edition (GitHub)](https://github.com/Keyfactor/ejbca-ce)
- [Stakater Reloader (GitHub)](https://github.com/stakater/Reloader)
- [StarlingX Documentation](https://docs.starlingx.io)

# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

---
templateKey: blog-post
title: Consolidating StarlingX Authentication on OIDC
author: Greg Waines
date: 2025-03-18T01:32:05.627Z
category: 
  - label: Features & Updates
    id: category-A7fnZYrE1
---
One of the biggest improvements the StarlingX platform brings you in the 12.0 release is consolidating _all_ authenticated endpoints to rely on a single OIDC identity provider (IDP) proxy - improving operational simplicity, security, and the end-user experience.

# Background

Up until 12.0, StarlingX shipped a lightweight OIDC proxy based on DEX to provide OIDC support where needed.

The advantages of that solution relying on DEX is that it can federate multiple backends - commonly the StarlingX local LDAP (OpenLDAP/slapd) and one or more remote directory services (for example Microsoft Active Directory or other LDAPs). Furthermore, Kubernetes can be configured to accept OIDC tokens from that proxy, making kubectl-based access possible with OIDC if the cluster admin enables it.

# Reaching the consolidation goal - single OIDC IDP for everything

In starlingX 12.0 authentication standardizes on a single DEX-backed OIDC flow, which becomes the canonical authentication method for StarlingX-managed endpoints. With that improvement administrators are now able to manage users and groups in one place (the configured backend for DEX) while still choosing the backend type that fits their environment.

OIDC authentication is supported for:

- Kubernetes APIs / kubectl
- StarlingX REST APIs and CLIs
- the StarlingX web UI (Horizon-based)
- SSH access
- registry.local (container registry flows)

This reduces duplicated identity configuration, eliminates many special-case auth integrations, and centralizes audit and policy where it makes sense.

## What this means in practice

STX 12.0 enables administrators to start using OIDC out of the box:

- **Automatic DEX installation and configuration at install time.** DEX is deployed and pointed to the StarlingX Local LDAP backend by default so that OIDC tokens work for Local LDAP users immediately.
- **Kubernetes automatically configured to use OIDC.** Your cluster is now prewired to accept tokens issued by the DEX proxy so kubectl-based workflows can use OIDC immediately after install.
- **APIs / CLIs optionally OIDC-capable.** StarlingX command-line clients and REST APIs (system, software, fm, sw-manager, dcmanager, etc.) keep Keystone as the default auth method but gain optional OIDC support. Clients can select OIDC using an environment variable or argument (for example: STX_AUTH_TYPE=oidc).
  - StarlingX API/CLI clients now use the OIDC Token from the K8S KUBECONFIG file when generating the StarlingX request
    - where the OIDC Token in the KUBECONFIG is populated by the user using the 'oidc-auth' CLI tool to OIDC authenticate with StarlingX's DEX OIDC IDP
  - StarlingX API/CLI servers now consult the Kubernetes OIDC configuration to find the configured OIDC IDP details (i.e. for StarlingX's DEX OIDC IDP) which the server's will use for OIDC Token validation.
- **Role bindings and mappings.** StarlingX role bindings of roles (i.e., admin, configurator, operator, reader) to OIDC users/groups will be configurable via a new system service-parameter.
- **Validated remote OIDC IDP backends (with MFA).** Documentation and validation have been produced for using a remote OIDC IDP backend for DEX - including MFA-capable OIDC IDPs. As an example, StarlingX validated Keycloak as an OIDC backend and walked through browser-based login with MFA for the admin flows.
- **Support for the kubectl OIDC helper.** OIDC Authentication is fundamentally a browser-based authentication flow. The oidc-login (kubelogin) plugin for kubectl provides improved integration between kubectl CLI flows and the OIDC Authentication Browser flows. This is absolutely required in the case of remote OIDC IDP backends supporting MFA. This plugin will launch the browser/OIDC flow, populate KUBECONFIG with the token, and then execute the requested kubectl command.  
   The user experience would look like:
  - KUBECONFIG=oidc-login-kubeconfig.yml
  - kubectl get pods
  - Please visit the following URL in your browser: &lt;URL&gt;
    - _In remote cli case, with local browser, the browser will pop up automatically._
      - _In local cli case, with no browser, kubectl will simply wait for browser/OIDC Auth flow to be completed on any device._
    - _User completes the OIDC Auth flow on the browser, completes MFA if required, the OIDC Token is stored in the KUBECONFIG file and then the kubectl command executes._
    - _Subsequent kubectl calls will re-use the OIDC Token until it expires, when it will launch the browser/OIDC flow again._
  - _NAME READY STATUS RESTARTS AGE_
  - nodeinfo-c776b9474-qrz74 1/1 Running 0 12h
  - nodeinfo-c776b9474-vl5s6 1/1 Running 0 12h
  - nodeinfo-c776b9474-zb7bs 1/1 Running 0 12h

**What's planned for STX 13.0 (polish and broader endpoints)**

STX 13.0 will continue the consolidation and widen OIDC coverage:

- **Horizon (Web UI) will support OIDC via federated Keystone.** The default remains Keystone username/password, but for OIDC flows the Horizon dashboard will accept logins backed by the DEX proxy and will map OIDC users/groups into Keystone roles automatically (driven by the system service-parameters used for role bindings).
- **OIDC plugin support for API/CLI clients.** Improved client-side plugins will make it easier for StarlingX APIs/CLIs to use browser-based OIDC flows and tokens consistently; similar to what was done in STX 12.0 for kubectl.
- **SSH via OIDC (optional).** OIDC authentication for SSH sessions will be introduced using a PAM module (such as pam-ssh-oidc) that implements browser-based flows to authenticate users.  
   The user experience would look like:
  - ssh alice@host  
     OIDC authentication required.  
     To continue, open the following URL in a browser: &lt;URL&gt;  
     And enter this code: &lt;CODE&gt;
    - _User completes the flow on a browser on any device (laptop/phone/tablet), completes MFA if required, and the SSH session starts._
  - alice@host:~\$ \_

The SSH PAM solution would default to the OIDC IDP configuration used by Kubernetes (i.e., the DEX OIDC IDP proxy).

- **registry.local token flow to accept OIDC tokens.** Registry access will still support Keystone tokens, but optional OIDC authentication will be introduced. A common approach used in industry to extend existing simple Registry Token Servers to support OIDC, is to let users provide an OIDC token as the "password" for a special-case 'oidc' username. This is the planned approach in short term for StarlingX. Again, the Registry Token Service will default to use DEX OIDC IDP configuration specified in K8S configuration.

**IDP flexibility: DEX as the federation point**

A key advantage of this consolidation is the flexibility of the IDP backend. DEX acts as a proxy/federation layer and can connect to a variety of backends:

- local directory service (e.g., OpenLDAP)
- remote LDAP or Microsoft AD (Active Directory) domains (for example, Microsoft's AD)
- OIDC providers such as Keycloak, or other cloud IDPs that support OIDC

This gives operators freedom to choose the backend that meets their organizational requirements while keeping a consistent authentication surface across the platform.

**User experience improvements**

A few concrete UX wins from this consolidation:

- **Single place to manage users & groups.** Admins can centralize identity management in the chosen DEX backend (LDAP/AD/Keycloak/etc.) and have those identities honored across kubectl, StarlingX REST APIs / CLIs, Horizon, SSH, and registry access.
- **MFA-capable flows for stronger security.** Because DEX can delegate to remote OIDC providers with MFA, the platform can adopt stronger authentication without re-engineering every component.
- **Better CLI/browser interoperability.** The oidc-login/kubelogin plugin provides a smooth browser-based flow for CLI users - it handles the redirect, token acquisition, and KUBECONFIG update automatically, including MFA steps.
- **Reduced configuration drift.** With one canonical OIDC proxy and a single source of IDP configuration, fewer ad-hoc auth integrations are required and auditing is simpler.

**Practical notes for administrators**

- During STX 12.0 install, expect the DEX proxy and Kubernetes OIDC wiring to be present and configured for Local LDAP users by default.
- If you rely on API/CLI automation that uses Keystone tokens today, those workflows will remain functional; OIDC is opt-in for StarlingX APIs/CLIs initially (STX_AUTH_TYPE=oidc when you want OIDC).
- If you need MFA, plan to use a remote OIDC backend that enforces MFA (for example Keycloak or an enterprise IdP) and configure DEX to delegate to it.

**Short summary - why this matters**

- **Easier user & group management:** Consolidating on OIDC (via a single DEX proxy) lets admins manage identities in one place and have those identities honored across all authenticated StarlingX endpoints.
- **Stronger security (MFA):** Delegation to MFA-capable remote OIDC IDPs raises the bar for authentication without reworking individual services.
- **Better CLI usability:** The oidc-login (kubelogin) flow gives a pleasant browser-backed experience for CLI users, including MFA, and works well even in headless scenarios with redirect URLs.
- **IDP flexibility through DEX:** DEX supports many backend types (LDAP, AD, OIDC providers like Keycloak) so you can choose the backend that fits your environment while keeping a consistent auth surface.

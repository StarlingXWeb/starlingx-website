---
templateKey: blog-post
title: Securing Applications Using AppArmor
author: Jagatguru Mishra
date: 2024-05-20T01:32:05.627Z

category: 
  - label: Features & Updates
    id: category-A7fnZYrE1
---
Learn about securing end user’s hosted containers using AppArmor in the StarlingX 9.0. <!-- more -->

# About AppArmor
[AppArmor](https://apparmor.net) is a Linux kernel security module that confines programs to a limited set of resources. AppArmor restricts application pods run by the end users by limiting programs’ capabilities with per-program profiles. AppArmor plays a crucial role in mitigating container escape vulnerabilities by confining the actions of containerized processes within predefined security profiles. Further details can be found [here](https://docs.starlingx.io/security/kubernetes/about-apparmor-ebdab8f1ed87.html)


# What can you do with AppArmor

As an administrator, use AppArmor if you want to make sure that your application (pod/container) is using only intended host resources:

* Isolation and containment: Containers aim to isolate applications from each other and from the host system. AppArmor adds an extra layer of security by further isolating the containerized processes. It restricts the actions that containerized applications can perform, reducing the potential impact of security breaches or malicious activities within the container.
* Defense-in-depth strategy: Security experts often recommend using multiple layers of security controls to protect systems and applications. By combining containerization with AppArmor, you create a defense-in-depth strategy that makes it more difficult for attackers to compromise your containerized applications. Even if a container escapes its confinement, AppArmor can prevent it from accessing sensitive resources on the host system.
* Risk mitigation: No system is immune to security vulnerabilities or attacks. By proactively using security mechanisms like AppArmor in containers, you mitigate the risk of security breaches and minimize the potential impact of successful attacks. AppArmor adds an additional layer of defense, making it harder for attackers to exploit vulnerabilities in containerized applications.

# How can you utilize AppArmor in StarlingX

By default, AppArmor is disabled on a host. You need to enable it using the following commands:


```
~(keystone_admin)]$ system host-lock controller-0
~(keystone_admin)]$ system host-update controller-0 apparmor=enabled
~(keystone_admin)]$ system host-unlock controller-0
```
This blog post will use All-in-one Simplex (AIO-SX) deployment. On a multi-host configuration, AppArmor should be enabled on all hosts to ensure that the AppArmor profiles are loaded on any host where a pod may be scheduled by kubernetes.


Now that you got AppArmor enabled on the host, how do you get the correct profile for a container?

There are multiple ways to achieve this as described in the [AppArmor Profiles](https://docs.starlingx.io/security/kubernetes/author-apparmor-profiles-b02de0a22771.html) section of the StarlingX documentation.

Here you are going to use a tool (aa-logprof) to generate it for you.


## Generate a profile for a container

**Note**  You need to enable auditd logging on the host. Check the [related StarlingX documentation](https://docs.starlingx.io/security/kubernetes/enable-apparmor-log-bb600560d794.html) to learn how.



You need to run the command below to enable it.


```
~(keystone_admin)]$ system service-parameter-modify platform kernel audit=1
~(keystone_admin)]$ system service-parameter-apply platform
~(keystone_admin)$ system host-lock controller-0
~(keystone_admin)$ system host-unlock controller-0
```

This blog post uses nginx image as an example.:


1. Create a file (nginx-profile) with the content below. As the mode is set to 'complain', it will log the request but doesn't actually deny.


```
#include <tunables/global>

profile nginx-profile flags=(attach_disconnected, complain) {
    #include <abstractions/base>

}
```

2. Apply the profile on the host using apparmor_parser

```
sudo apparmor_parser -q /etc/apparmor.d/nginx-profile
```

3. Change the permission so that the tool can update the profile

```
sudo setfacl -m g:sys_protected:rwx /etc/apparmor.d/
```

4. Launch the pod and perform the pod’s allowed operations.
For your application, you should access and use it so that it generates all the access logs.

```yaml
apiVersion: v1
kind: Pod

metadata:
  name: webserver
  annotations: 
    container.apparmor.security.beta.kubernetes.io/webserver: localhost/nginx-profile
spec:
  containers:
  - name: webserver
    image: nginx:latest
    ports:
    - containerPort: 80
```


5. Use aa-logprof now to update the profile

```
aa-logprof -f <(sed 's/kernel: notice/kernel:/' < /var/log/kern.log)
```
you will get prompts for the denied entries to update the profile, please accept,

this will update the profile under '/etc/apparmor.d'. Below is an example profile

generated for the above webserver pod.

```
#include <tunables/global>

profile nginx-profile flags=(attach_disconnected, complain) {
  #include <abstractions/base>

  /usr/bin/find mrix,
  owner /docker-entrypoint.sh r,
  owner /run/nginx.pid w,

}
```
## Use Security Profiles operator (SPO) to manage the AppArmor profiles

The updated profile will be used by the pods in enforced mode. Security Profiles operator (SPO) is a profile manager, which can be used to manage the profiles accross the hosts. AppArmor profiles can be managed using SPO CRD, a user can load, update and delete a profile. SPO is an optional system application and you can install it by following [Install Security Profiles Operator](https://docs.starlingx.io/security/kubernetes/install-security-profiles-operator-1b2f9a0f0108.html)


1. Apply the above created profile in enforce mode. 
```yaml
vi nginxProfile.yaml
---
apiVersion: security-profiles-operator.x-k8s.io/v1alpha1
kind: AppArmorProfile
metadata:
  name: nginx-profile
  annotations:
    description: Sample nginx profile.
spec:
  policy: |
    #include <tunables/global>

    profile nginx-profile flags=(attach_disconnected) {
      #include <abstractions/base>

      /usr/bin/find mrix,
      owner /docker-entrypoint.sh r,
      owner /run/nginx.pid w,

    }
```
2. Apply the profile 
```
kubectl apply -f nginxProfile.yaml
```
3. Verify if AppArmor profile is loaded in enforce mode.

```
sysadmin@controller-0:~$ aa-status
apparmor module is loaded.
20 profiles are loaded.
14 profiles are in enforce mode.
   /usr/bin/man
   ...
   nginx-profile
   ...

```
 A detailed explanation about how to load a profile is available in the [Load a profile in enforce mode across all hosts using SPO](https://docs.starlingx.io/security/kubernetes/profile-management-a8df19c86a5d.html#load-a-profile-in-enforce-mode-across-all-hosts-using-spo) section of the StarlingX project documentation.



## Where to see the denied logs
  Any access by the container, which is not mentioned in the AppArmor profile, will be denied and logged in '/var/log/kern.log'.



For further information about the features, check out the [AppArmor](https://docs.starlingx.io/security/kubernetes/index-security-kub-81153c1254c3.html#apparmor) section in the StarlingX documentation.


# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.


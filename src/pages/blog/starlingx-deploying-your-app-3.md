---
templateKey: blog-post
title: Deploying your application as a StarlingX Application
author: Tomás N. P. Barros
date: 
category:
  - label: Features & Updates
---

Deploying your application as a StarlingX application is the highest level of integration you can achieve with the platform. It is a step up from deploying an app via [Helm](https://www.starlingx.io/blog/starlingx-deploying-your-app-1/) or [FluxCD](https://www.starlingx.io/blog/starlingx-deploying-your-app-2/). In this post, I will guide you through the process of deploying the [demo app](https://github.com/bmuniz-daitan/poc-starlingx-messages) used in previous deployment posts, along with some basic management commands <!- more ->.

It is worth noting that while deploying a containerized app as a StarlingX app has its advantages and is easy to do, transforming a containerized application into a StarlingX app might not be. Therefore, Helm and FluxCD options are more beginner-friendly and are the typical choice for developers and users who don't plan to create an application that will be officially bundled into the StarlingX project.
 
## Prerequisites

This tutorial expects that your application will be containerized and with ready helm-charts. If this is not your case, please read the blog post already mentioned about Helm.

## Integration with StarlingX System

Some of the advantages of installing an app via system are:

* Once the application tar is built and validated, a user can install and use the application with just two commands, without the need for previous Kubernetes knowledge
* The FluxCD orchestrates the application of helm charts in a specified order, thus guaranteeing the pods are available before continuing to apply the next helm charts. If you did this by hand, you'd need to verify manually that each pod was correctly applied before proceeding.
* You can do the helm-overrides easily and the system will guarantee the disponibility of the images in other hosts (ex: controller, worker and storage), in case they also need to deploy pods of your application.
* The ApplicationFramework takes care of the needed validations to guarantee that an application is fully compatible with StarlingX.
* An application can schedule specific Kubernetes commands to execute even before it is installed via the LifeCycle hooks.
* My favourite advantage may be that you can upgrade a StarlingX application via system with an updated tar package of that application, and the system will distribute the new version to the other hosts it is associated with.

## Building the app

For transforming the application from its helm-chart to a tar package that can be installed in a StarlingX Cluster, I'll use the [app-gen-tool](https://opendev.org/starlingx/app-gen-tool) terminal application.

First I'll create a python venv and install the app-gen-tool via pip

```
python3 -m venv venv
source ./venv/bin/activate
pip install git+https://opendev.org/starlingx/app-gen-tool.git#subdirectory=./stx-app-generator/stx-app-generator
```

Next. I'll copy the "helm-chart" folder from the poc-starlingx to the directory I'm currently working on and create an empty file called `app_manifest.yaml`. Here's the folder structure till now: 

```
.
├── app_manifest.yaml
├── helm-chart
│   ├── Chart.yaml
│   ├── templates
│   └── values.yaml
└── venv
``` 

Here's a look at the helm-chart Chart.yaml file:

```sh
(venv)~$: cat helm-chart/Chart.yaml

apiVersion: v2
name: poc-starlingx
description: A very very very basic messaging exchange app
appVersion: 1.5.2
```

and here's a look at the ```app_manifest.yaml``` after its configuration

```sh
(venv)~$: cat app_manifest.yaml

---
## App Manifest Configuration
appManifestFile-config:
  appName:  poc-starlingx-app
  appVersion:  1.0.0
  namespace:  default
  chart:
    - name:  poc-starlingx
      appVersion:  1.5.2
      path: ./helm-chart
      chartGroup: poc-starlingx-chartGroup

metadataFile-config:

setupFile-config:
  metadata:
    author: Tomás Barros
    url: https://dummy.com
    classifier:
      - "Operating System :: OS Independent"
      - "License :: OSI Approved :: MIT License"
      - "Programming Language :: Python :: 3"
```

Do you see how the helm-chart name and the appVersion in `Chart.yaml` matches the chart name in the `app_manifest.yaml`? This is no coincidence! They need to be matching exactly for the app-gen tool to work! If you want more details about this app-manifest configuration, please visit the app-gen-tool repository linked above.

Now lets' run the app-gen-tool:

```sh
(venv)~$: stx-app-generator -i app_manifest.yaml -o ./output

...
Plugin wheels generated!
Checksum generated!
```

There will be a bunch of information printed when this command is run, but if the last lines are as the ones above, the command was successful!

Now, let's check what is inside the generated folder:

```
output
└── poc-starlingx-app
    ├── charts
    │   └── poc-starlingx-1.5.2.tgz
    ├── checksum.sha256
    ├── fluxcd-manifests
    │   ├── base
    │   │   ├── helmrepository.yaml
    │   │   ├── kustomization.yaml
    │   │   └── namespace.yaml
    │   ├── kustomization.yaml
    │   └── poc-starlingx
    │       ├── helmrelease.yaml
    │       ├── kustomization.yaml
    │       ├── poc-starlingx-static-overrides.yaml
    │       └── poc-starlingx-system-overrides.yaml
    ├── metadata.yaml
    ├── plugins
    │   ├── __init__.py
    │   ├── k8sapp_poc_starlingx_app
    │   │   ├── common
    │   │   │   ├── constants.py
    │   │   │   └── __init__.py
    │   │   ├── helm
    │   │   │   ├── __init__.py
    │   │   │   └── poc_starlingx.py
    │   │   ├── __init__.py
    │   │   ├── kustomize
    │   │   │   ├── __init__.py
    │   │   │   └── kustomie_poc_starlingx_app.py
    │   │   └── lifecycle
    │   │       ├── __init__.py
    │   │       └── lifecycle_poc_starlingx_app.py
    │   ├── k8sapp_poc_starlingx_app-0.0.0-py2.py3-none-any.whl
    │   ├── setup.cfg
    │   └── setup.py
    └── poc-starlingx-app-1.0.0.tgz
``` 

As you can see, the helm chart package was packed under the charts subdirectory. The next step would be to configure the plugins, since this is a complicated process and is application-dependent, we recommend you to read the README.MD of the app-gen-tool and reaching for help with the community in the StarlingX mail lists or in the matrix chat.

Please, pay attention to correctly configure the files in `./output/poc-starlingx-app/plugins/k8sapp_poc_starlingx_app`:
* **helm/poc_starlingx.py**: this file is responsible for integrating the application with the StarlingX system.
* **kustomize/kustomize_poc_starlingx_app.py**: this file is responsible for updating top-level kustomization resource list.
* **lifecycle/lifecycle_poc_starlingx_app.py**: this file configures how StarlingX will perform the lifecycle actions for the application opperator.

After the plugin files are configured, I'll run the app-gen-tool command again, but now with the --package-only parameter.

```sh
(venv)~$: stx-app-generator -i app_manifest.yaml -o ./output --package-only

...
Plugin wheels generated!
Checksum generated!
FluxCD App tarball generated at /home/tomas-barros/blog-post-3/output/poc-starlingx-app/poc-starlingx-app-1.0.0.tgz
```

Alright! We can see the `poc-starlingx-app-1.0.0.tgz`. Now we only have to send this .tgz to a StarlingX cluster to install it.

## Installing the App

After copying your app package to your StarlingX cluster(in my case a virtual AIO-SX, we can now proceed to install it. But before installing it, please guarantee that your platform-integ-apps application is installed.

```
source /etc/platform/openrc
system application-show platform-integ-apps | grep applied 
```
if the following output is:
```
| status        | applied                              |
```
proceed. Otherwise, you must need to wait unti it finishes applying.

```
sysadmin@controller-0:~$ ls
admin-login.yaml  dashboard-values.yaml  poc-starlingx-app-1.0.0.tgz
ansible.log       localhost.yml          token.txt

```

```
sysadmin@controller-0:~$ system application-upload poc-starlingx-app-1.0.0.tgz
```
now, check that application was successfully uploaded:
```
system application-show poc-starlingx-app | grep uploaded
```
if the output is:
```
| status        | uploaded                           |
```
then it was successfully uploaded. Otherwise, wait for it to finish uploading or wait check common troubleshooting commands.

Now, let's apply the app:
```
[sysadmin@controller-0 ~(keystone_admin)]$ system application-apply poc-starlingx-app
``` 

If you never installed a StarlingX app before, know that it is normal to take some minutes before finishing the applying command. We can check that the application was successfuly applied:

```
[sysadmin@controller-0 ~(keystone_admin)]$ system application-show poc-starlingx-app | grep applied
| status        | applied
```

If you followed me until here, and your application was successfully applied, then we're done! In case you run into any problems, please check the troubleshooting section.

## Troubleshooting
### sysinv log

Usually, after seeing the application has failed, this is problably the best first place for you to check out and find out more about what has gone wrong.
The sysinv log is located on:
```
/var/log/sysinv.log
```
It may be useful using:
```
cat /var/log/sysinv.log | grep "application name"
```

### system application commands
these commands may be beneficial for finding out about the state of an application when it did not deploy correctly and you want to reinstall or manage them. Some commands are:  
* ```system application-list ```
	- this command shows the list of applications uploaded or applied to the cluster and some top-level informations. Particularly, status and progress are useful for debbuging.
* ```system application-show "application_name"```
	- this command provides a most of the information provided in the _application-list_, but with extra rows: ["Active", "created_at", "name", "updated_at"].
* ```system application-remove```
	- this command removes an application from service. Removing an application will clean up related Kubernetes resources and delete all of its installed helm charts
* ```system application-delete```
	- we can use the following command to completely delete an application from the system **after running the system application-remove**

more useful [system application commands](https://docs.starlingx.io/system_configuration/kubernetes/application-commands-and-helm-overrides.html)

[bug when trying to remove and delete an application](https://wiki.openstack.org/wiki/StarlingX/Containers/FAQ#What_to_I_do_if_I_can.27t_re-run_an_application_action.3F)
### kubernetes pod logs

In some cases, You'll in the sysinv.log that the application of a pod got created but for some reason It is not working properly. In those cases It is useful checking the kubernetes log of that pod. Basic command is:
```
kubectl logs podname -n namespace
```
also note that the infos like the prefix of the pod and the namespace where It will be created and running are written in the helm chart of the application.
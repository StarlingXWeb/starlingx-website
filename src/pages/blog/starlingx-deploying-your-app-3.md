---
templateKey: blog-post
title: Deploying your application as a StarlingX Application
author: Tomás N. P. Barros
date: 
category:
  - label: Features & Updates
---
The article is part of a [blog post series](https://www.starlingx.io/blog/starlingx-deploying-your-app-1) that guides you through the various ways of deploying a containerized application on top of the StarlingX platform. As a reminder, the methods are the following:

- [Plain Kubernetes](https://kubernetes.io/docs/tutorials/kubernetes-basics/deploy-app/deploy-intro/) methods;
- [Helm](https://helm.sh/docs/intro/using_helm/#helm-install-installing-a-package);
- [FluxCD](https://fluxcd.io/); and finally
- As a StarlingX Application, which benefits from tight integration with the [StarlingX system](https://docs.starlingx.io/system_configuration/kubernetes/system-configuration-starlingx-application-package-manager.html).

In this example, I will be using StarlingX **9.0** in a virtual All-In-One Simplex (AIO-SX) configuration.

Deploying your application as a StarlingX Application is the highest level of integration you can achieve with the platform. It is a "step up" from deploying an app via Helm or FluxCD. In this post, I will guide you through the process of deploying the [demo app](https://github.com/bmuniz-daitan/poc-starlingx-messages) used in the previous deployment posts, along with some basic management commands <!- more ->.

It is worth noting that while deploying a containerized app as a StarlingX App has its advantages and is easy to do, transforming a containerized application into a StarlingX App might not be. Thus, the Helm and FluxCD options represent the standard approaches and are the typical choices for developers and users who do not intend to create an application officially bundled into the StarlingX project.

## Prerequisites

This tutorial expects that your application will be containerized with helm-charts already available. If this is not your case, please consult the helm documentation.

## Integration with the StarlingX System

Some of the advantages of installing an app via StarlingX Application Package Manager are:

* Once the application tar is built and validated, you can install and use the application with just two commands, without the need for previous Kubernetes knowledge.
* The FluxCD orchestrates the application of helm charts in a specified order, thus guaranteeing the pods are available before continuing to apply the next helm charts. If you did this without FluxCD (integrated with the StarlingX Application Package Manager), you'd need to verify manually that each pod was correctly applied before proceeding.
* You can do 'helm-override' easily and the system will guarantee the availability of the images on other hosts (ie: controller, worker and storage), in case they also need to deploy pods of your application.
* The Application Framework takes care of the needed validations to guarantee that an application is fully compatible with StarlingX.
* An application can schedule specific Kubernetes commands to execute even before it is installed via the LifeCycle hooks.
* My favorite advantage may be that you can upgrade a StarlingX application with an updated tar package, and the system will distribute the new version to the other hosts it is associated with.

## Building the App

For transforming the application from its Helm chart to a tar package that can be installed in a StarlingX cluster, I'll use the [app-gen-tool](https://opendev.org/starlingx/app-gen-tool) terminal application (now included in the StarlingX 9.0).

First, I'll create a python venv and install the app-gen-tool via pip

```
python3 -m venv venv
source ./venv/bin/activate
pip install git+https://opendev.org/starlingx/app-gen-tool.git#subdirectory=./stx-app-generator/stx-app-generator
```

Next. I'll copy the "helm-chart" folder from the poc-starlingx repository(alias to the application that we are building) to the directory I'm currently working on and create an empty file called `app_manifest.yaml`. Here's the folder structure as of now:

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

Here’s a look at the `app_manifest.yaml` after its configuration. This file contains information about how the app will be named in the StarlingX Application Package Manager, its version for the package manager, the Kubernetes namespace where it will be deployed, and the Helm charts it requires for installation. In this example, only one Helm chart was added, but other applications may contain more. The metadata section provides basic information about the purpose of the application. The content below is just an example for the purposes of this tutorial, please replace that information to fit for your application.

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
      version:  1.5.2
      path: ./helm-chart
      chartGroup: poc-starlingx-chartGroup

metadataFile-config:

setupFile-config:
  metadata:
    author: Tomás Barros
    author_email: starlingx-discuss@lists.starlingx.io
    url: https://www.starlingx.io/
    classifier:
      - "Operating System :: OS Independent"
      - "License :: OSI Approved :: MIT License"
      - "Programming Language :: Python :: 3"
```

Do you see how the Helm chart name and the appVersion in `Chart.yaml` matches the chart name and the version respectively in the `app_manifest.yaml`? This is no coincidence! They need to be matching exactly for the app-gen tool to work! If you want more details about this app-manifest configuration, please visit the app-gen-tool repository linked above.

Now let's run the app-gen-tool:

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

As you can see, the Helm chart package was packed under the charts subdirectory. The next step is to configure the plugins and change the static overrides. Since configuring the plugins is very application-dependent, I will not go through those steps here. The community is still working on documenting the process in the official project documentation, you can find information in the below wiki pages in the meantime:

* [How to add a new Armada app](https://wiki.openstack.org/wiki/StarlingX/Containers/Application/Archive/ConvertingArmadaAppsToFluxCD)
* [Armada app code structure](https://wiki.openstack.org/wiki/StarlingX/Containers/Application/Archive/ArmadaAppCodeStructure)
* [Converting from Armada apps to FluxCD](https://wiki.openstack.org/wiki/StarlingX/Containers/Application/Archive/ConvertingArmadaAppsToFluxCD)

It is important to configure the below files in `./output/poc-starlingx-app/plugins/k8sapp_poc_starlingx_app` correctly:

* **helm/poc_starlingx.py**: this file is responsible for integrating the application with the StarlingX system.
* **kustomize/kustomize_poc_starlingx_app.py**: this file is responsible for updating the top-level kustomization resource list.
* **lifecycle/lifecycle_poc_starlingx_app.py**: this file configures how StarlingX will perform the lifecycle actions for the application operator.

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

After copying your app package to your StarlingX cluster, we can now proceed to install it. But before installing it, please make sure that your platform-integ-apps application is installed.

```
source /etc/platform/openrc
system application-show platform-integ-apps | grep applied 
```

If the following output is:

```
| status        | applied                              |
```

Proceed. Otherwise, you will need to wait until it finishes applying.

```
sysadmin@controller-0:~$ ls
admin-login.yaml  dashboard-values.yaml  poc-starlingx-app-1.0.0.tgz
ansible.log       localhost.yml          token.txt

```

```
sysadmin@controller-0:~$ system application-upload poc-starlingx-app-1.0.0.tgz
```

Now, check if the application was successfully uploaded:

```
system application-show poc-starlingx-app | grep uploaded
```

The output in case of success is:

```
| status        | uploaded                           |
```

Otherwise, wait for it to finish uploading or wait to check common troubleshooting commands.

And here's a look at what the command should show without the grep:

```
+---------------+------------------------------------+
| Property      | Value                              |
+---------------+------------------------------------+
| active        | False                              |
| app_version   | 1.0.0                              |
| created_at    | 2024-05-22T16:47:03.093041+00:00   |
| manifest_file | fluxcd-manifests                   |
| manifest_name | poc-starlingx-app-fluxcd-manifests |
| name          | poc-starlingx-app                  |
| progress      | None                               |
| status        | uploading                          |
| updated_at    | None                               |
+---------------+------------------------------------+
```

Now, let's apply the app:

```
[sysadmin@controller-0 ~(keystone_admin)]$ system application-apply poc-starlingx-app
```

If you never installed a StarlingX app before, please note that it normally takes a few minutes before finishing the applying command. We can check that the application was successfully applied:

```
[sysadmin@controller-0 ~(keystone_admin)]$ system application-show poc-starlingx-app | grep applied
| status        | applied
```

And here's a look at what the command should show without the grep:

```
+---------------+------------------------------------+
| Property      | Value                              |
+---------------+------------------------------------+
| active        | True                               |
| app_version   | 1.0.0                              |
| created_at    | 2024-05-22T17:17:35.632056+00:00   |
| manifest_file | fluxcd-manifests                   |
| manifest_name | poc-starlingx-app-fluxcd-manifests |
| name          | poc-starlingx-app                  |
| progress      | completed                          |
| status        | applied                            |
| updated_at    | 2024-05-22T17:19:20.319842+00:00   |
+---------------+------------------------------------+

```

If you followed me until here, and your application was successfully applied, then we're done! In case you run into any problems, please check the troubleshooting section.

## Troubleshooting

Troubleshooting a large system like StarlingX can be complex and may require various approaches. This section provides a brief overview of useful commands I used to address common problems that arose during the installation of StarlingX applications.

### sysinv log

After seeing that the application has failed, this is probably the best place to look first and find out more about what has gone wrong.
The sysinv log is located here:

```
/var/log/sysinv.log
```

A useful command to filter information in the file:

```
cat /var/log/sysinv.log | grep "application name"
```

### system application commands

These commands can be helpful for find out more about the state of an application when it did not deploy correctly, as well as if you want to remove the application and try to install it again later:

* ``system application-list ``
  - This command shows the list of applications uploaded or applied to the cluster and some top-level informations. Particularly, status and progress are useful for debbuging.
* ``system application-show "application_name"``
  - This command provides a most of the information provided in the _application-list_, but with extra rows: ["Active", "created_at", "name", "updated_at"].
* ``system application-remove``
  - This command removes an application from service. Removing an application will clean up related Kubernetes resources and delete all of its installed helm charts
* ``system application-delete``
  - We can use the following command to completely delete an application from the system **after running the system application-remove**

You can find more useful [system application commands](https://docs.starlingx.io/system_configuration/kubernetes/application-commands-and-helm-overrides.html) in the StarlingX documentation.

Please be aware of a [known issue](https://wiki.openstack.org/wiki/StarlingX/Containers/FAQ#What_to_I_do_if_I_can.27t_re-run_an_application_action.3F), when trying to remove and delete an application.

### kubernetes pod logs

In some cases, you'll find in the sysinv.log that the application of a pod was created, but for some reason it is not working properly. In those cases, it is useful to check the Kubernetes log of that pod. The basic command is:

```
kubectl logs podname -n namespace
```

Also note that the information like the prefix of the pod and the namespace where It will be created and running are written in the helm chart of the application.

**Please note** that the above, brief troubleshooting guide only lists common installation problems but it is not comprehensive, the overall process can become more complicated.

# Conclusion

This post concludes the StarlingX Application Deployment [series](https://www.starlingx.io/blog/starlingx-deploying-your-app-1) consisting of three articles. If you have any questions, or need help with StarlingX, please reach out to the community on the [starlingx-discuss mailing list](https://lists.starlingx.io/mailman3/lists/starlingx-discuss.lists.starlingx.io/).

# About StarlingX

If you would like to learn more about the project and get involved, check the [website](https://www.starlingx.io/) for more information or download the code and start to experiment with the platform. If you are already evaluating or using the software, please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.

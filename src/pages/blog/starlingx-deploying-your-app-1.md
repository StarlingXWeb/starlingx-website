---
templateKey: blog-post
title: Deploying your application to StarlingX
author: Bruno Muniz
date: 2023-11-28T12:00:00.042Z
category:
  - label: Features & Updates
---

Deploying your own application to StarlingX is as easy as in any other Kubernetes
deployment out there. In this blog post I will show you the process with a
simple demo app.<!- more ->

It's important to understand that an application can be deployed in many ways
on the [Kubernetes cluster(s) that StarlingX manages](https://docs.starlingx.io/operations/k8s_cluster.html)
:

- [with plain Kubernetes](https://kubernetes.io/docs/tutorials/kubernetes-basics/deploy-app/deploy-intro/) methods;
- with [Helm](https://helm.sh/docs/intro/using_helm/#helm-install-installing-a-package);
- with [Flux](https://fluxcd.io/); and finally
- as a StarlingX Application, which benefits from tight integration with the
  [StarlingX system](https://opendev.org/starlingx/config).

In this article I will focus on [Helm](https://helm.sh/),
which is the most popular package manager for Kubernetes. Future blog posts
will address other deployment types and their characteristics.

I will use a virtual All-In-One Simplex (AIO-SX) setup of StarlingX. If you
want to follow along, you can install your own by following the related 
[StarlingX install guide](https://docs.starlingx.io/deploy_install_guides/release/virtual/automated_install.html#dashboards).

Anyone who already packages their application with
[Helm](https://helm.sh/) will be able to deploy it on StarlingX without additional hassle.

## The Demo App

I will use a simple demo app for this blog post, which simulates tasks, like
antivirus scanning and threat monitoring. If you would like to learn more
about the app and use it to follow the below deployment steps, please check
out the documentation and source in the app's [GitHub repo](https://github.com/brunomuniz-encora/poc-starlingx-messages/blob/v1.5.2/Demo.md#application-demo).

## Deploying the Demo App

### Via a Helm Package file

You can simply use the packaged Helm chart from your own source code, and
use the [Helm CLI](https://helm.sh/docs/intro/install/) to install the package.

#### Package the Helm chart

The following commands will checkout the demo app, `cd` into the downloaded
source code and finally use `helm` to generate a Helm chart file.

```shell
git clone https://github.com/brunomuniz-encora/poc-starlingx-messages.git
cd poc-starlingx-messages
helm package helm-chart/
```

The `poc-starlingx-<version>.tgz` file can be found on the root folder of the
downloaded repo:

```shell
...
Successfully packaged chart and saved it to: .../poc-starlingx-messages/poc-starlingx-1.5.2.tgz
```

#### Install the Helm package directly on StarlingX

Once the package is made available on a StarlingX instance, the below command
will deploy the application to the StarlingX-managed Kubernetes cluster:

```shell
helm install poc-starlingx-messages-node poc-starlingx-1.5.2.tgz
```

This is the expected output:

```shell
NAME: poc-starlingx-messages
LAST DEPLOYED: <date> <time>
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
[sysadmin@controller-0 ~(keystone_admin)]$ 
```

This is the stage when you can log into your application and configure it, in
order to have it fully functional. The demo app I use does not require
any additional setup and is currently up and running. You can verify
this by using the `kubectl get all` command, which should provide the output
below:

```shell
sysadmin@controller-0:~$ kubectl get all
NAME                                       READY   STATUS    RESTARTS   AGE
pod/poc-starlingx-85d766894b-dmw4v         1/1     Running   0          40s

NAME                           TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
service/poc-starlingx          NodePort    10.97.156.62    <none>        8100:31234/TCP   40s

NAME                                   READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/poc-starlingx          1/1     1            1           40s

NAME                                             DESIRED   CURRENT   READY   AGE
replicaset.apps/poc-starlingx-85d766894b         1         1         1       40s
```

You can also use `helm list` and other Helm commands to check the status of
the deployment:

```shell
sysadmin@controller-0:~$ helm list
NAME                    NAMESPACE       REVISION        UPDATED         STATUS     CHART                            APP VERSION
poc-starlingx-messages  default         1               <date> <time>   deployed   poc-starlingx-1.5.2              1.5.2
[sysadmin@controller-0 ~(keystone_admin)]$
```

#### Modify the app configuration via Helm 

Of course, applications might (and should) [be configurable through the
environment](https://12factor.net/config) where they are running on. The
demo app is no different and exposes several configuration options
via [Helm values](https://helm.sh/docs/chart_best_practices/values/).

The demo application has multiple components which are deployed as multiple
instances that are configured differently. One of these components is called
`central`, which I will deploy now by creating a user-supplied values file
that will override a few default values:

```shell
cat <<EOF > central-overrides.yml
env:
  # Set application to act as a `central`
  - name: MODE
    value: central

kube:
  # Set the NodePort to be configured within the Kubernetes Service resource
  port: 32767
  # Set a different name for the Kubernetes resources (helper to allow multiple instances run in the same cluster)
  name: poc-starlingx-central

EOF
```

Now I will use the `central-overrides.yml` file, that I just created, to deploy a new version of the
application with the command:

```shell
helm install -f central-overrides.yml poc-starlingx-messages-central poc-starlingx-1.5.2.tgz
```

This is the expected output:

```shell
NAME: poc-starlingx-messages-central
LAST DEPLOYED: <date> <time>
NAMESPACE: default
STATUS: deployed
REVISION: 1
TEST SUITE: None
```

Again, the app is readily available in the Kubernetes cluster:

```shell
sysadmin@controller-0:~$ kubectl get all
NAME                                         READY   STATUS    RESTARTS   AGE
pod/poc-starlingx-85d766894b-dmw4v           1/1     Running   0          3h51m
pod/poc-starlingx-central-5588f46ccb-2s8g2   1/1     Running   0          38s

NAME                            TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
service/poc-starlingx           NodePort    10.97.156.62    <none>        8100:31234/TCP   3h51m
service/poc-starlingx-central   NodePort    10.103.215.65   <none>        8100:32767/TCP   38s

NAME                                    READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/poc-starlingx           1/1     1            1           3h51m
deployment.apps/poc-starlingx-central   1/1     1            1           38s

NAME                                               DESIRED   CURRENT   READY   AGE
replicaset.apps/poc-starlingx-85d766894b           1         1         1       3h51m
replicaset.apps/poc-starlingx-central-5588f46ccb   1         1         1       38s

[sysadmin@controller-0 ~(keystone_admin)]$ helm list
NAME                            NAMESPACE       REVISION        UPDATED                                 STATUS   CHART                           APP VERSION
poc-starlingx-messages          default         1               2023-10-02 19:54:09.609324422 +0000 UTC deployed poc-starlingx-1.5.2             1.5.2
poc-starlingx-messages-central  default         1               2023-10-02 23:45:23.724816272 +0000 UTC deployed poc-starlingx-1.5.2             1.5.2
```

### Via a Helm Repository

Of course, you can make it even easier to deploy an application by using a
[Helm charts repository](https://helm.sh/docs/helm/helm_repo/). To demonstrate this, I will deploy a different app, the Kubernetes
dashboard application, which is distributed under a public chart repository. You
can add this application to StarlingX by following the steps below :

```shell
helm repo add kubernetes-dashboard https://kubernetes.github.io/dashboard/
```

And then use it to install the Kubernetes Dashboard:

```shell
cat <<EOF >dashboard-values.yaml
service:
  type: NodePort
  nodePort: 32000

rbac:
  create: true
  clusterAdminRole: true

serviceAccount:
  create: true
  name: kubernetes-dashboard

EOF
helm install kubernetes-dashboard \
 kubernetes-dashboard/kubernetes-dashboard \
 -f dashboard-values.yaml \
 --version 6.0.8
```

These instructions are based on the Kubernetes Dashboard [official
installation guide](https://github.com/kubernetes/dashboard?tab=readme-ov-file#installation)
. The [automated virtual installation](https://docs.starlingx.io/deploy_install_guides/release/virtual/automated_install.html#dashboards)
installs and sets up the Kubernetes Dashboard for you. The procedure is also
covered on the [bare metal installation guides](https://docs.starlingx.io/deploy_install_guides/release/kubernetes_access.html#gui).

## Conclusion

In less than 5 minutes you learned how easy it is to deploy your existing
Helm-packaged application to StarlingX. No surprises there!

This is what the StarlingX cluster looks like after everything that I covered:
on this blog post:

```shell
sysadmin@controller-0:~$ kubectl get all
NAME                                         READY   STATUS    RESTARTS   AGE
pod/kubernetes-dashboard-d4df5796b-km2jh     1/1     Running   0          6h43m
pod/poc-starlingx-7775bb7864-sf544           1/1     Running   0          46m
pod/poc-starlingx-central-5588f46ccb-2s8g2   1/1     Running   0          100m

NAME                            TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
service/kubernetes              ClusterIP   10.96.0.1       <none>        443/TCP          7h16m
service/kubernetes-dashboard    NodePort    10.111.41.251   <none>        443:32000/TCP    6h43m
service/poc-starlingx           NodePort    10.97.156.62    <none>        8100:31234/TCP   5h32m
service/poc-starlingx-central   NodePort    10.103.215.65   <none>        8100:32767/TCP   100m

NAME                                    READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/kubernetes-dashboard    1/1     1            1           6h43m
deployment.apps/poc-starlingx           1/1     1            1           5h32m
deployment.apps/poc-starlingx-central   1/1     1            1           100m

NAME                                               DESIRED   CURRENT   READY   AGE
replicaset.apps/kubernetes-dashboard-d4df5796b     1         1         1       6h43m
replicaset.apps/poc-starlingx-7775bb7864           1         1         1       46m
replicaset.apps/poc-starlingx-central-5588f46ccb   1         1         1       100m
```

We will talk about Flux and StarlingX Apps in the next installments of this series.

# About StarlingX

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.


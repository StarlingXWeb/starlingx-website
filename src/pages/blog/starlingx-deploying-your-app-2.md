---
templateKey: blog-post
title: Deploying your application to StarlingX with FluxCD
author: Daniel Caires
date: 2024-02-20T12:00:00.042Z
category:
  - label: Features & Updates
---

You as a StarlingX user can deploy your application in many ways on the
[Kubernetes cluster(s) that StarlingX manages](https://docs.starlingx.io/operations/k8s_cluster.html)
:

- [with plain Kubernetes](https://kubernetes.io/docs/tutorials/kubernetes-basics/deploy-app/deploy-intro/) methods;
- with [Helm](https://helm.sh/docs/intro/using_helm/#helm-install-installing-a-package);
- with [Flux](https://fluxcd.io/); and finally
- as a StarlingX Application, which benefits from tight integration with the
  [StarlingX system](https://opendev.org/starlingx/config).

In the first installment of this series, you learned how to deploy an application
on StarlingX using Helm. If you missed our first demonstration, I suggest you
take a look at the [blog post](https://www.starlingx.io/blog/starlingx-deploying-your-app-1/).

In this article, I will continue demonstrating application deployment options, this time with
focus on [FluxCD](https://fluxcd.io/), which is a continuous delivery tool that
is used to keep Kubernetes clusters in sync with configuration sources.

In this example, I will be using StarlingX in a virtual All-In-One Simplex (AIO-SX) configuration.
If you want to follow along, you can set up your environment by following
the [Starlingx automated install guide](https://docs.starlingx.io/deploy_install_guides/release/virtual/automated_install.html).


## The Demo App

For consistency, I will use the same application as in the previous post. To learn
more about the demo app, check out the
[demo app repository](https://github.com/bmuniz-daitan/poc-starlingx-messages)


## GitOps and FluxCD

One of the greatest benefits of using FluxCD resources is the possibility to
apply GitOps to your deployments. GitOps is a set of practices, such as version
control, collaboration, compliance and continuous delivery, and apply them to
your infrastructure to achieve a certain level of automation. GitOps uses a Git
Repository as a single source of truth for all of your configurations regarding
infrastructure and applications.

With the use of GitOps through FluxCD you have a set of tools that allows you to
enable a reliable and automated approach of deploying and managing infrastructure
and applications, improving reproducibility and facilitating maintenance and
scalability of your systems

To know more about FluxCD visit the [official website](https://fluxcd.io).

## Deploying the Demo App

### Via FluxCD resources

While the StarlingX platform does not have the FluxCD CLI, it does have its
resources. An application can be easily deployed and managed by means of the
resources made available by Flux. For a list of all available Flux resources,
refer to the [official documentation](https://fluxcd.io/flux/components/).

There are many ways of deploying an application using Flux. In this demonstration,
I will deploy the demo app by creating a Source Controller and a Helm Controller.

#### Source Controller

The Source Controller is a FluxCD component responsible for providing a common
interface for the artifact acquisition.

FluxCD offers 5 types of Source Controllers:

- GitRepository
- OCIRepository
- HelmRepository
- HelmChart
- Bucket

For this demonstration, I will create a GitRepository. Make sure to choose the
best type of source controller for your specific use case.

To create my GitRepository that will contain the Helm Chart, I simply run the
following code:

```shell
~$ cat <<EOF > gitrepository.yaml
apiVersion: source.toolkit.fluxcd.io/v1beta1
kind: GitRepository
metadata:
  name: poc-starlingx
spec:
  interval: 2m
  url: https://github.com/bmuniz-daitan/poc-starlingx-messages.git
  ref:
    branch: main

EOF

~$ kubectl apply -f gitrepository.yaml
```

The command above will create a GitRepository resource called poc-starlingx that
contains the contents of https://github.com/bmuniz-daitan/poc-starlingx-messages.git

```shell
~$ kubectl get gitrepositories

NAME            URL                                                           AGE   READY
poc-starlingx   https://github.com/bmuniz-daitan/poc-starlingx-messages.git   49s   True
```

#### Helm Controller

The Helm Controller is an operator that allows the management of Helm Chart
releases in a declarative way. The resource HelmRelease will define the desired
state of a Helm release, and based on actions upon this resource (creation,
deletion or mutation) the controller will perform Helm actions.

To deploy the demo app, I will execute the following commands:

```shell
~$ cat <<EOF > helmrelease.yaml
apiVersion: "helm.toolkit.fluxcd.io/v2beta1"
kind: HelmRelease
metadata:
  name: poc-starlingx
spec:
  releaseName: poc-starlingx
  interval: 2m
  chart:
    spec:
      chart: ./helm-chart  # Relative path of the Helm chart inside the repository.
      version: 1.5.2
      sourceRef:
        kind: GitRepository
        name: poc-starlingx
  values: # Override values for the Helm chart
    env:
      - name: MODE
        value: node
      - name: SERVER
        value: 127.0.0.1:8100
      - name: PORT
        value: "8000"

    image:
      tag: latest
      containerPort: 8000

    kube:
      port: 31234
      replicas: 1
      name: poc-starlingx

EOF

~$ kubectl apply -f helmrelease.yaml
```

The `kubectl` command above will create two resources. First, it will create a
HelmChart resource that will hold the Helm Chart itself that will be loaded from
the GitRepository.

```shell
~$ kubectl get helmcharts

NAME                    CHART          VERSION   SOURCE KIND     SOURCE NAME     AGE     READY   STATUS
default-poc-starlingx   ./helm-chart   1.5.2     GitRepository   poc-starlingx   2m41s   True    packaged 'poc-starlingx' chart with version '1.5.2'

```

After the HelmChart resource is successfully created, it will create the
HelmRelease for the deployment of the application with the values informed
inside the helmrelease.yaml file.

```shell
~$ kubectl get helmreleases

NAME            AGE     READY   STATUS
poc-starlingx   3m20s   True    Release reconciliation succeeded
```

With the success of the reconciliation, you can see that the application was
deployed.

```shell
~$ kubectl get all

NAME                                 READY   STATUS    RESTARTS   AGE
pod/poc-starlingx-5df9c9947f-7qdss   1/1     Running   0          4m15s

NAME                    TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)          AGE
service/poc-starlingx   NodePort    10.101.7.175   <none>        8100:31234/TCP   4m15s

NAME                            READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/poc-starlingx   1/1     1            1           4m15s

NAME                                       DESIRED   CURRENT   READY   AGE
replicaset.apps/poc-starlingx-5df9c9947f   1         1         1       4m15s

```

#### Modifying the HelmRelease

As I said before, actions upon the HelmRelease will cause the controller to
perform Helm actions on the deployment. So you can see these type of actions
let's modify a value on the HelmRelease file and see what happens.

I will change the value of `replicas` from 1 to 5, this value can be found in
`spec.values.kube.replicas` inside the `helmrelease.yaml` file:

```shell

kube:
  port: 31234
  replicas: 5
  name: poc-starlingx

```

I will, then, run `kubectl apply -f helmrelease.yaml`. A message saying that the
HelmRelease was configured will be given.

```shell
~$ kubectl apply -f helmrelease.yaml

helmrelease.helm.toolkit.fluxcd.io/poc-starlingx configured
```

If you run `kubectl get pods`, you can see that 4 additional pods were created.

```shell
~$ kubectl get pods

NAME                             READY   STATUS    RESTARTS   AGE
poc-starlingx-5df9c9947f-7qdss   1/1     Running   0          29m
poc-starlingx-5df9c9947f-97lqw   1/1     Running   0          17s
poc-starlingx-5df9c9947f-nzh6b   1/1     Running   0          17s
poc-starlingx-5df9c9947f-r2xj9   1/1     Running   0          17s
poc-starlingx-5df9c9947f-rhjjs   1/1     Running   0          17s

```

#### Additional resources

On the [FluxCD official documentation](https://fluxcd.io/flux/) you can find
some others resources that Flux provides, that may be better suited for your
specific use case. For example, another resource available in flux that can be used
is the `kustomization`. This resource is responsible for defining a pipeline
for fetching, decrypting, building, validating and applying kustomize overlays
or plain Kubernetes manifests.

As I said before, FluxCD allows your application to be deployed in many different
ways. It is up to you to evaluate the best resources and how to structure them
so your application can make the most of what FluxCD has to offer.

## Conclusion

You have just learned how to make use of the resources from FluxCD, made
available on the StarlingX platform, to deploy, manage and keep the release in
sync with the source. FluxCD offers much more than it was shown here, make sure
to visit the [official website](https://fluxcd.io) to learn more about all the
solutions that FluxCD offers.

Next in this series, you will learn how to package and deploy your application
as a StarlingX app and the benefits that this type of deployment offers.
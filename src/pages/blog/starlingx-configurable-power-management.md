---
templateKey: blog-post
title: New Power Metrics and Power Management capabilities on StarlingX
author: Davi Frossard
date: 2024-04-22T11:14:00.000Z
category: 
  - label: Features & Updates
    id: category-A7fnZYrE1
---
Introducing Power Metrics and Power Manager apps on StarlingX 9.0 <!-- more -->

# Introduction

StarlingX has made significant strides in enhancing its power metrics and power management capabilities. While previous versions had some limitations in this area, the latest updates have introduced more comprehensive features, allowing the collection of power data and individualized control of CPUs/cores power profiles. 

Understanding how and how much energy is being used by the platform and applications is a key factor. In StarlingX, we're introducing a new app called *power-metrics* that collects and sends power data. Another app, called *kubernetes-power-manager*, encapsulates [Kubernetes Power Manager](https://github.com/intel/kubernetes-power-manager), a Kubernetes Operator designed to expose and utilize the power control technologies present in Intel processors within a Kubernetes cluster.

# Power Metrics

The StarlingX app *power-metrics* encapsulates tools like *Telegraf* and *cAdvisor* to help users measure and understand their energy use. Container Advisor is an open source agent that exposes resource usage and performance data of containers. InfluxData Telegraf is also an open source agent for collecting and sending metrics from diverse sources such as systems, databases and sensors. Data collection is performed through *Intel Powerstat (intel_powerstat)* and *Linux CPU (linux_cpu)* input plugins. Both agents publish metrics in *Prometheus* format.

## Available Metrics

With the Power Metrics application, we have access to system and hardware level raw power data.

- Thermal Design Power: The maximum power available, in watts, for the processor.
- Current Power Consumption: The current power usage of the system in watts.
- Current DRAM Power Consumption: The current power usage of dram in the system in watts.
- CPU Base Frequency: The base frequency (non-turbo) of the processor (default speed of the processor).
- Uncore Frequency: The uncore frequency can be described as the frequency on a processor that is not actually part of processor core, like memory controller and cache controller.
- Per-cpu minimum and maximum frequency: The minimum and maximum frequency that each core of the processor can achieve.
- Per-cpu busy frequency: Busy frequency is the frequency of a core that has a high utilization.
- Per-cpu percentage in C-State: The time, in percent, that a core of the processor spent in each C-State.
- Per-cpu current temperature: The current temperature of each individual core from the processor.
- Container perf events total: The number of performance events that occurred in a container.
- Container perf events scaling ratio: The scaling ratio, which calculates the ratio of performance events in a container.
- Container CPU Power usage: By gathering the number of instructions in each container running on the cluster with the corresponding core that they are using, and the total number of instructions per core, it's possible to estimate the power usage by each container.
- Per Core CPU Power usage: By considering the frequency of each core, it's possible to estimate the total amount of power, in watts, used by each core.

The raw data can be better visualized with a dashboard, as the example below.

![Available Power Metrics Example](/img/power-metrics-example.png)

# Kubernetes Power Manager 

Users' power management needs are increasing with greater scope and higher granularity, using power profiles individually by core and/or application. Among users' needs, we can highlight the control of acceptable frequency ranges (minimum and maximum frequency) per core, the behavior of the core in this range (governor), which power levels (C-States) a given core can access, as well as the behavior of the system in the face of workloads with known intervals/demands.

By controlling CPU performance states (P-States) and CPU idle states (C-States), the tool allows each core to be individually controlled according to the needs of each application's workload. Below, there is a deep dive Kubernetes Power Manager requirements, components, use cases, operation and impacts on StarlingX Platform.

## Components

- Power Manager: controls the nodes, serves as a manager, or source of truth gathering information on the power profiles applied to each node.

  - Power Config Controller:  part of the power manager, is responsible for evaluating the presence of a default power configuration for the node and, when present, starting the Power Node Agent.
  - Power Config: describes the power configuration of a given node indicating one or more profiles that can be used.

- Power Node Agent:  per-node pod managed by a DaemonSet, responsible for managing the power profiles applied. Communicates with Power Manager to establish power policies to be applied to the node.

  - Power Profile: establishes CPU operating frequency ranges, Energy Performance Preference (EPP), and governor. The profile has a generic aspect, that is, it only describes a possible style of power control, and its application is the responsibility of Power Workload. The pods' deployment files, or Power Config files, can indicate the profiles they want to use by including the device power.intel.com/<POWERPROFILE>. It is also important to note that all CPUs not assigned to a specific power profile are pooled in a profile known as the *Shared*. This profile must be created manually by the user.
  - Power Workload: responsible for applying a Power Profile. Its scope is set automatically when a pod requests a default power profile or via a configuration file that describes the affected CPUs. Preset profiles have workloads created automatically. The Shared Power Profile, and other personalized profiles, does not have an automatically assigned workload (needs to be created manually).

## Use Cases

After installing and enabling the Kubernetes Power Manager, the user will be able to indicate which power settings will be assigned to the cores of a given application. Below, 3 examples are presented, describing common situations of use.

- Example A: The user wants the application to have high performance. Fragment of *pod_spec.yaml* to be deployed:

```yaml
  # (...)
  resources:
    requests:
      cpu: "4"
      memory: "1G"
      power.intel.com/performance: "4"
    limits:
      cpu: "4"
      memory: "1G"
      power.intel.com/performance: "4"
  # (...)
```

- Example B: On a server with only two C-State levels available (C3 and C4), the user wants the high-performance profiled cores to be kept at higher throughput and low latency levels (C3 and C4 disabled) while the idle cores at maximum energy efficiency (C3 and C4 enabled). Fragment of the *C-State.yaml* profile configuration file via helm override:

```yaml
  cstatesProfile:
    controller-0:
      sharedPoolCStates:
        C3: true
        C4: true
      exclusivePoolCStates:
        performance:
          C3: false
          C4: false
```

- Example C: User wants to create a profile specific to their needs. First step: deploy *custom-profile.yaml*. In this case the profile has the name *one-profile*. The min, max, epp, and governor can be set by the user.

```yaml
  apiVersion: power.intel.com/v1
  kind: PowerProfile
  metadata:
    name: one-profile
    namespace: intel-power
  spec:
    name: one-profile
    max: 2200
    min: 2000
    epp: power
    governor: powersave
```

Second step: deploy the *pod_spec.yaml*. Fragment to be deployed:

```yaml
  # (...)
  resources:
    requests:
      cpu: "1"
      memory: "1G"
      power.intel.com/one-profile: "1"
    limits:
      cpu: "1"
      memory: "1G"
      power.intel.com/one-profile: "1"
  # (...)
```

## Operation

The Kubernetes Power Manager StarlingX app, when disabled, does not affect the StarlingX standard behavior (keeping the system running at maximum performance the entire time). When activated, however, the power management system allows the user to apply power settings as needed under conditions described below.

The power manager system is based on four standard power profiles and possible user-defined profiles. The default profiles *performance*, *balanced-performance*, *balanced-power* and *power* are automatically configured during the installation process. Whenever a certain application needs high performance, for example, the power profile *performance* must be declared in its deployment file. The power manager, in turn, configures the profile on the CPU(s) assigned by Kubernetes to the Pod. It is up to the user to create new profiles as needed. All cores not assigned to a Pod, or idle, will have their power profile set to wide frequency (minimum equals the minimum supported by the processor and maximum equals the maximum supported), as currently occurs in the system without power control.

The user is free to change the C-States individually, indicating which states a certain core can assume, or by group, indicating which states the cores of a certain power profile can assume. All the functionalities accessible to the user can be controlled by applying appropriate yaml files. It is important to note that the user is free to modify the power settings of the cores intended for system support (platform cores), but all these settings are overwritten during the lock/unlock process, to maintain the integrity of the system.

After installing the Kubernetes Power Manager StarlingX app, it is necessary to enable it on the desired hosts by setting the label *power-management=enabled*, which triggers the removal of the limitation of C-State C0 on nodes where the worker function is present.

## Usage Impact

With integrating Kubernetes Power Manager some SysInv/Horizon commands got deprecated starting with the 9.0 release of StarlingX (see all user configurable parameters on [Host CPU MHz Parameters Configuration](https://docs.starlingx.io/node_management/kubernetes/host-cpu-mhz-parameters-configuration-d9ccf907ede0.html)).

## Performance Impact

Enabling Kubernetes Power Manager can impact performance in terms of power consumption, latency, and throughput. Here are some considerations for these aspects:

- Power Consumption: By actively monitoring and controlling power usage through policies, Kubernetes Power Manager can optimize power consumption based on workload demands, potentially reducing overall power consumption in the cluster. On the other hand, incorrect or inconsistent configuration can lead to degraded performance or increased power consumption.
- Latency: C-States range from C0 to Cn. C0 indicates an active state. All other C-States (C1-Cn) represent idle sleep states with different parts of the processor powered down. As the C-States get deeper, the exit latency duration becomes longer (the time to transition to C0) and the power savings becomes greater. This could slightly increase the time required for resource management operations, such as scaling, scheduling, as well as platform and end-user tasks. However, the appropriate configuration of Power Manager can reduce the magnitude of this impact.
- Throughput: The impact on throughput depends on how well Kubernetes Power Manager is configured to handle resource allocation while considering power constraints, potentially optimizing the cluster's performance and increasing throughput. However, if Power Manager makes suboptimal decisions, it may impact throughput negatively.

The exact performance impact will depend on several factors such as workload characteristics, cluster configuration, and the specific configuration of Power Manager. Conducting thorough testing in the end-user environment is recommended to understand the precise effects on power consumption, latency, throughput, and other aspects.

# Conclusion

Throughout this blog post, we've explored common use cases where the Kubernetes Power Manager can be advantageous, along with considerations regarding its operation and impacts on the platform.

In conclusion, with the ability to collect and publish power data and metrics, StarlingX takes a significant step forward in providing users with valuable insights into their energy usage patterns, contributing to more informed decision making. The introduction of the Kubernetes Power Manager feature enables the system to optimize power usage according to user needs and workload characteristics. This feature offers various capabilities, including the ability to assign power profiles on a per-core or per-application basis, control frequency ranges for individual cores, govern core behavior within these ranges, specify which power levels (C-States) a particular core can access, and determine system behavior in response to workloads with known intervals or demands.

For further information about the features, check out the project documentation:

- [Kubernetes Power Manager](https://github.com/intel/kubernetes-power-manager)
- [Configurable Power Manager](https://docs.starlingx.io/node_management/kubernetes/configurable-power-manager-04c24b536696.html)
- [Technology Preview - Install Power Metrics Application](https://docs.starlingx.io/node_management/kubernetes/install-power-metrics-application-a12de3db7478.html)

For the complete list of updates and new features in StarlingX 9.0, check out the [release notes](https://docs.starlingx.io/releasenotes) and the [project documentation](https://docs.starlingx.io).

Visit the StarlingX [website](https://www.starlingx.io) today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](http://mirror.starlingx.cengn.ca/mirror/starlingx/release/) to try out the new features.

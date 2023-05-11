---
templateKey: blog-post
title: A Deep Dive Into the Precision Time Protocol Configuration Enhancements

author: Cole Walker
date: 2022-06-05

category:
  - label: Features & Updates

    id: category-A7fnZYrE1
---
Learn more about the continuously evolving Precision Time Protocol (PTP) support in StarlingX. <!-- more -->

Precise timing in a system is crucial, especially for use cases such as 5G and industrial automation. The StarlingX community has been adding functionality, like Time Sensitive Networking (TSN) and PTP, since the 4.0 release to fulfill strict requirements.  If you're interested in learning more about the initial use cases and implementation, you check out an earlier [blog post series](https://www.starlingx.io/blog/starlingx-ptp-part-1/) about the topic.





Starting with the StarlingX 7.0 release, the community has worked on broadening the PTP configuration options 

and introduced several features that extend PTP deployment types. In this blog 

post, we will examine the following enhancements to PTP support:

- Multi-instance PTP configurations

- Support for local GNSS time sources

- Basic Synchronous Ethernet (SyncE) support

- Compatibility with several Intel E810 NIC variants


# Multi-instance PTP Configurations
There are two applications used when a StarlingX host is configured as a PTP node. The first is 
ptp4l, which is responsible for running the Best Master Clock Algorithm (BMCA). BMC selects the highest 

quality incoming time source and determines the role of each configured port (timeTransmitter vs 

timeReceiver). In addition, ptp4l is also disciplining the oscillator on the NIC according to the incoming PTP 

timestamps. The second application is phc2sys, which reads the time from a disciplined NIC and 

synchronize the system clock with it. Both of these applications are part of the [linuxptp project](https://linuxptp.sourceforge.net/).


StarlingX provides the ability to configure multiple instances of ptp4l in support of several 

use cases:

- Systems with multiple PTP-capable NICs can see timing accuracy improvements by running a dedicated
ptp4l instance per-NIC rather than a single instance spanning multiple NICs

- Multiple PTP instances can be deployed to serve separate logical domains with different
configuration requirements

- Systems with mixed NIC types can run separate ptp4l instances with configurations tuned for each 

NIC

If you're interested in learning more, check out the [documentation](https://docs.starlingx.io/system_configuration/kubernetes/configuring-ptp-service-using-the-cli.html#ptp-instance-configuration) the describes the multi-instance configuration.



# Local GNSS Time Sources

For performant PTP operation, the Grand Master clock requires a highly accurate timing source, which 

it can use to distribute time across the network. The StarlingX platform integrates the ts2phc application, 

which takes the timestamps from an incoming GNSS signal and synchronizes the configured NICs with 
that timing information. This means that a StarlingX node with a compatible NIC and connected GNSS 
antenna can serve as a reliable Grand Master clock without the need for a dedicated external 
appliance. This functionality is desirable for edge nodes as it can reduce the complexity of 
delivering the time source across disparate locations, and instead, it allows each edge site to have easy 

access to a reliable clock source. A node with a GNSS time source can then be configured with ptp4l
to distribute that timing information to other local nodes.


The diagram below depicts an example PTP topology which uses a GNSS time source to provide accurate 
timing to several local nodes:

![alt text](/img/ptp-t-gm.png)

1. The incoming GNSS signal from an antenna is connected to a compatible NIC. This serves to provide 

frequency information to the local PHC on the NIC
2. Time of Day information is extracted from the GNSS signal using ts2phc and is replicated to the
secondary NIC
3. The system clock is synchronized to the primary NIC PHC using phc2sys
4. A ptp4l instance is configured per-NIC, allowing timing information to be transmitted through each 

port
5. Bi-directional SMA ports are connecting the primary and secondary NICs to transmit the Pulse Per Second

frequency information from the GNSS signal to the secondary NIC, ensuring that both NICs are locked
to the same frequency
6. Time of day information is transmitted through each port by ptp4l. Frequency information is

transmitted via syncE

# Basic Synchronous Ethernet Support
Synchronous Ethernet (syncE) can be deployed alongside PTP to improve the timing accuracy of the 
network. SyncE accomplishes this by distributing physical layer frequency synchronization across the
network, which is traceable to the primary reference clock (PRC). This means that each physical layer

segment is going “tick tock tick tock” at the same frequency as distributed from the PRC source. 

The effect of deploying syncE alongside PTP serves to improve the time synchronization performance by 

reducing jitter and wander, improving holdover performance, and enabling accurate time 
synchronization across a longer chain of nodes.

Please note that the SyncE functionality requires the use of NICs with syncE capable hardware and drivers.


You can configure syncE in StarlingX by using the [“clock”](https://docs.starlingx.io/system_configuration/kubernetes/instance-specific-considerations-d9d9509c79dd.html#clock) ptp-instance type on a 

downstream system in order to enable frequency recovery from an upstream source. Stay tuned for 
additional functionality in future releases which will support syncE features like 

Best Source Selection and advertising the Quality Level of the syncE source.



# Supported NICs
PTP features in StarlingX rely on hardware and driver support. As of StarlingX 8.0, there are 
several variants of the Intel E810 series of NICs that the community validated for use with PTP.


Below are a selection of NIC models with various PTP, GNSS and SyncE capabilities that are currently
supported by StarlingX.

| Product                             | Model                 | Supported Features                                                  |
|-------------------------------------|-----------------------|---------------------------------------------------------------------|
| Intel Columbiaville - Salem Channel | E810-CAM2/CAM1/XXVAM2 | IEEE 1588 Precision Time Protocol                                   |
| Intel Logan Beach                   | E810-CQDA2T           | IEEE 1588 Precision Time Protocol<br>Local GNSS Connection<br>SyncE |
| Intel Westport Channel              | E810-XXVDA4T          | IEEE 1588 Precision Time Protocol<br>Local GNSS Connection<br>SyncE |


The StarlingX community is continuously woking on enhancements to the PTP support in the platform. Stay tuned for an upcoming blog post describing 

enhancements made to the PTP Notificiation application which allows applications running on 
StarlingX to query the status of PTP timing components and receive notifications when the system's 
synchronization state changes.

If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform.
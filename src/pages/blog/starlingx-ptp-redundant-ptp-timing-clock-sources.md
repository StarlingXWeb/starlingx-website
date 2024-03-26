---
templateKey: blog-post
title: Redundant PTP timing clock sources
author: Andre Mauricio Zelak
date: 2024-03-25
category:
  - label: Features & Updates
    id: category-A7fnZYrE1
---
In the rapidly evolving telecommunications landscape, 5G stands as a beacon of innovation, promising unparalleled connectivity and transformative capabilities. With its potential to revolutionize industries ranging from healthcare to manufacturing, the rollout of 5G networks has accumulated immense attention and anticipation. Beneath the surface of this technology lies an indispensable element, the Precision Time Protocol (PTP).

And as part of the constant effort to meet the evolving needs of telecommunications industry and to provide a more robust Precision Time Protocol (PTP) deployment, the StarlingX 9.0 introduces the High Availability feature, providing a way to sync multiple Physical Hardware Clock (PHC) in a N+1 redundancy configuration.

The feature allows, in a t-GM application, multiple GPS clock sources connected, and in a t-BC application, multiple PTP sources connected to redundant NICs, provinding protection against failtures.

In the N+1 redundancy configuration, the available clock is selected active and commands the system clock and the downstream PTP clock reference. The remaining clock sources are kept ready to become active when required.

This article will speak about the new HA feature configuration, clock selection algorithm, and new alarms.

If you're interested in learning more about the initial use cases and implementation, you check out an earlier [blog post series](https://www.starlingx.io/blog/starlingx-ptp-part-1/) and ["A Deep Dive Into the Precision Time Protocol Configuration Enhancements"](https://www.starlingx.io/blog/starlingx-ptp-multi-instance-features/).

# Configuration

As pointed out in ["A Deep Dive Into the Precision Time Protocol Configuration Enhancements"](https://www.starlingx.io/blog/starlingx-ptp-multi-instance-features/), when a StarlingX host is configured as a PTP node,  there are two applications used: ptp4l and phc2sys. The ptp4l is responsible for running the Best Master Clock Algorithm (BMCA) and to desciplin the oscilator on the NIC according to the incomming PTP timestamps. And the phc2sys reads the time from a disciplined NIC and synchronizes the system clock with it.

Up to StarlingX version 8.0, the Linux real-time system clock was synchronized to only a single time source (PHC) through static configuration of the phc2sys instance. From release 9.0 and up, when the HA feature enabled, the phc2sys configuration will accept association to multiple ptp4l instances, providing redundancy protection to the clock sources.

When the HA feature enabled, the real-time system clock is synchronized with the best time source available. The operator configure the following clock status values to control the source selection algorithm:
* GM clock class
* GM clock accuracy
* GM offset scaled log variance
* Local clock class
* Local clock accuracy
* Local offset scaled log variance
* Frequency traceable
* Time traceable

These parameters set the threshold for a source to be eligible for use in setting the system real-time clock. For example, in a t-GM application, configuring 6 in the maximum local class makes only locked sources eligible for selection.

The operator can also configure a clock priority to indicate a precedence, which is usefull when the sources are not equal in reliability. The clock priority is a tiebreaker for sources of equal quality. The higher priority clock is selected active over the lower one when both meet the requirements.

In addition, the HA feature enables the phc2sys to accept multiple PTP domains. Every ptp4l can be associate to a different PTP domain. See 'ha_domainNumber' interface parameter in the documentation.

The ["StarlingX Documentation"](https://docs.starlingx.io/system_configuration/kubernetes/configuring-ptp-service-using-the-cli.html#ptp-instance-configuration) contains details about the new configuration fields, their default values and ranges.

# Clock selection

At start, the best available clock is selected active. When the active clock degrades and doesn't meet the requirements,  another eligible clock is selected active. And when a clock recovers and meets the requirement, it becomes elible again.

Depending on the clock priorities, the clock switch behavior is different. There are two broad scenarios: equal or different priorities.

In a scenario where all clocks are equal priority, when the active clock deteriorate and another clock satisfies the requirements, this other clock is set active. Than, when the degraded clock recovers, it becomes eligible, but in stand by.

Now, in case of different priorities. The higher priority clock has precedence over the lower one. If both are good, the higher priority one is selected active. After an outage, when the higher priority clock heal, it becomes active.

The administrator can configure a stability timer to prevent multiple and consecutive clock switches, when the higher priority clock fail and come back. When the selected clock degrade, another clock takes place quickly. But, when the higher priority recovers, it will only become active after the stability time expiration.

During an outage event, when all the sources fail to satisfy the requirements, one of the sources is set active as fallback. The clock with the lowest clock class is selected. As a tiebreaker, if more than one source present the same lowest local clock class, the one configured first is selected.

# Applications

The HA feature is totally transparent for applications using the system real-time clock source. Neither the clock selection nor the clock switching should be a concern. And no application change is required.

# ptp-notification registration and reporting application

The ptp-notification registration and reporting applications support multiple clock sources in compliance to O-RAN O-Cloud Notification API Specification. An aggregated clock status is also supported. The user application may need enhancements to accomodate a list of clock sources.

# New alarms

New alarms and events have been added to StarlingX to report the HA state.

The "no source clock" alarm raises when phc2sys does not have sources that meet the specified threshold in the user configuration.

The "source clock is not locked to a PRC" alarm raises when one of the HA phc2sys interfaces presents a clockClass of lesser quality than the specfied maximum clockClass in the user config. The alarm indicates the degraded interface.

The "selected lower priority clock source" alarm raises when phc2sys is configured with multiple sources, and the active is not the highest priority. It indicates the highest priority clock has degraded.

The "automatic source selection disabled" alarm raises when an operator locks the system real-time clock to an interface. See "status & debuging" below.

The "selected new active source" event raises when phc2sys switches between sources for any reason.

The ["StarlingX Documentation"](https://docs.starlingx.io/system_configuration/kubernetes/configuring-ptp-service-using-the-cli.html#ptp-instance-configuration) contains additional information about these alarms and also how to investigate them.

# status & debuging

The HA feature provides an interface for maintenance, deemed for the host admin to retrieve status and control the clock list and selection. The admin can:
* Display the current clock status, including all the values used by the clock selection algorithm;
* List the eligible for selection clocks;
* Disable and re-enable a clock source;
* Lock to a single clock source and unlock.

You can find more information about this feature in the ["StarlingX Documentation"](https://docs.starlingx.io/system_configuration/kubernetes/configuring-ptp-service-using-the-cli.html#ptp-instance-configuration).
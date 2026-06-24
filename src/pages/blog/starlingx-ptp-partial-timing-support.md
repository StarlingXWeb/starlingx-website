---
templateKey: blog-post
title: Partial Timing Support - Unicast PTP in StarlingX
author: Cole Walker
date: 2026-06-24
category:
  - label: Features & Updates
    id: category-A7fnZYrE1
---

Learn about the new Partial Timing Support (PTS) feature in StarlingX, enabling unicast PTP 
synchronization over Layer 3 networks.<!-- more -->

The StarlingX community continues to expand the platform's precision timing capabilities. Following 
the introduction of [multi-instance PTP configurations](https://www.starlingx.io/blog/starlingx-ptp-multi-instance-features/), 
[redundant timing sources](https://www.starlingx.io/blog/starlingx-ptp-redundant-ptp-timing-clock-sources/), 
and [O-RAN PTP notifications](https://www.starlingx.io/blog/starlingx-oran-notification-for-ptp/), 
the StarlingX 12.0 release introduces Partial Timing Support (PTS) to enable unicast 
PTP time distribution over Layer 3 IP networks.

# What is Partial Timing Support?

In the earlier StarlingX PTP blog posts, we explored configurations based on the ITU-T G.8275.1 
telecom profile. G.8275.1 uses Layer 2 multicast PTP, meaning that every node in the timing path 
must directly participate in PTP and be connected at the Ethernet layer. This is referred to as 
Full Timing Support (FTS) because the entire network is timing-aware.

However, not all network deployments have this luxury. In many real-world scenarios, PTP nodes need 
to synchronize across Layer 3 boundaries via routers, across VLANs, or over wide area 
networks where intermediate nodes do not participate in timing. This is where Partial Timing Support 
comes in.

PTS corresponds to the ITU-T G.8275.2 telecom profile. Instead of relying on L2 multicast, 
G.8275.2 uses unicast PTP messages transported over IPv4 or IPv6. A PTP node configured for PTS 
establishes direct unicast sessions with specific grandmaster clocks, requesting timing information 
through unicast negotiation. This allows timing distribution across networks where not all 
intermediate nodes are PTP-aware.

# Why Does PTS Matter?

PTS addresses several important deployment scenarios:

- **Geographically distributed sites**: Edge nodes at remote locations can synchronize with a 
centralized grandmaster over an IP network without requiring PTP-aware switches along the path
- **Mixed network environments**: In networks where only certain segments support PTP, PTS allows 
timing to traverse non-PTP segments via standard IP routing
- **Flexible transport options**: PTS supports both IPv4 and IPv6, making it adaptable to a wide 
range of network architectures
- **Hybrid topologies**: A single StarlingX node can receive time via unicast PTS on one interface 
while distributing time via L2 multicast (G.8275.1) on another, bridging the two timing domains

# PTS Deployments in StarlingX

StarlingX supports two primary PTS deployment models: Telecom Boundary Clock (T-BC) and Telecom 
Grandmaster (T-GM).

## T-BC PTS Deployment

In this configuration, a StarlingX node acts as a boundary clock that receives time from a remote 
grandmaster over unicast IPv6 (G.8275.2) and distributes it to local downstream nodes over L2 
(G.8275.1).

![T-BC Partial Timing Support Deployment](/img/ptp-pts-t-bc.svg)

The upstream NIC receives timing from the remote grandmaster via unicast and passes a 1PPS signal 
to the downstream NIC, which then distributes time to local nodes using the traditional L2 
multicast profile. This hybrid approach is particularly useful for edge sites that need to 
synchronize with a central timing source but distribute time locally using G.8275.1.

## T-GM PTS Deployment

In this configuration, a StarlingX node with a local GNSS receiver acts as a grandmaster, serving 
time to remote clients over unicast IPv6.

![T-GM Partial Timing Support Deployment](/img/ptp-pts-t-gm.svg)

In this topology, the node derives its timing from a connected GNSS antenna and advertises time 
over unicast to remote clients. The remote clients configure their own unicast master tables 
pointing to this node's address. This enables a centralized grandmaster to serve accurate time to 
geographically distributed nodes without requiring PTP support on the intermediate network 
infrastructure.

# Key Configuration Concepts

## Unicast Master Tables

The central concept in PTS configuration is the unicast master table. A unicast master table 
defines the set of upstream grandmaster addresses that a PTP client node will contact to request 
time. Each table specifies:

- A unique table ID
- The query interval for unicast grant requests
- One or more grandmaster addresses (IPv4 or IPv6)

Multiple grandmaster entries within a single table provide redundancy — if one grandmaster becomes 
unreachable, the node can acquire time from another.

## G.8275.2 Profile Parameters

PTS deployments use a distinct set of PTP profile parameters compared to G.8275.1. The most 
notable differences include:

- **Domain 44**: The G.8275.2 profile typically uses PTP domain 44, compared to domain 24 used by 
G.8275.1
- **UDP transport**: The network transport is set to UDPv4 or UDPv6 instead of L2
- **Dataset comparison**: Uses G.8275.x dataset comparison for clock selection
- **Unicast negotiation**: Client ports use `inhibit_announce` to suppress multicast announce 
messages, and master ports use `unicast_listen` to accept incoming unicast requests

## Mixed-Transport Interfaces

One of the strengths of StarlingX's PTS implementation is the ability to configure mixed transport 
modes within a single ptp4l instance. An upstream interface can operate over unicast IPv6 while a 
downstream interface operates over L2 within the same instance. This simplifies the 
deployment of boundary clocks that bridge PTS and FTS network segments.

# Integration with Existing PTP Features

PTS builds on the multi-instance PTP framework that has been available since StarlingX 7.0. 
It integrates with:

- **phc2sys**: System clock synchronization works the same way, reading from the ptp4l-disciplined 
PHC
- **ts2phc**: For T-GM deployments, ts2phc provides the GNSS-to-PHC synchronization that feeds the 
unicast grandmaster
- **Clock instances**: NIC-level pin configuration (SDP pins, 1PPS routing) is used to relay timing 
between NICs in multi-NIC topologies
- **PTP monitoring**: The existing collectd-based monitoring and O-RAN notification framework 
continues to report timing state for PTS instances

# Getting Started

If you're interested in deploying PTS in your StarlingX environment, the 
[official documentation](https://docs.starlingx.io/system_configuration/kubernetes/ptp-partial-timing-support-4159a540.html) 
provides step-by-step configuration procedures for both T-BC and T-GM deployments, including 
complete CLI examples and generated configuration file references.

**Prerequisites** for a PTS deployment include:

- Layer 3 IP connectivity between your node and the remote grandmaster
- UDP ports 319 and 320 open for PTP event and general messages
- A NIC that supports hardware timestamping
- At least one configured ptp4l instance using UDP transport

# Looking Ahead

Partial Timing Support is a significant addition to StarlingX's timing portfolio. By enabling 
unicast PTP over IP networks, it opens up deployment scenarios that were previously only achievable 
with dedicated timing appliances or fully PTP-aware network infrastructure. Whether you're 
connecting remote edge sites to a central timing source or distributing time across a routed 
network, PTS provides the flexibility to deploy precise timing where it's needed.

The StarlingX community continues to advance the platform's timing capabilities. Stay tuned for 
future enhancements to PTP support, including improvements to servo tuning for PTS networks and 
expanded monitoring capabilities.

If you would like to learn more about the project and get involved check the 
[website](https://www.starlingx.io) for more information or 
[download the code](https://opendev.org/starlingx) and start to experiment with the platform.

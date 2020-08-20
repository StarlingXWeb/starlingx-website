---
templateKey: blog-post
title: Taking timing to the Edge with PTP and TSN – Part 1
author: Ian Jolliffe    
date: 2020-08-24T01:32:05.627Z
category:
  - label: Features & Updates
    value: category-A7fnZYrE1
---

Learn more about what Precision Time Protocol (PTP) and Time Sensitive Networking (TSN) are and how to use them with StarlingX.<!-- more -->

Synchronous timing, latency, and accuracy are critical to supporting high performance applications in any environment. But what about the implications for timing in clouds at the edge (which I would argue is essential)? Timing problems exist in many industries: telecommunications, industrial processes, and distributed systems, in general. 

So, when we combine the challenges of cloud, edge, and these exciting use cases, what technologies do we have at our disposal to overcome the timing challenges? I think [Precision Time Protocol (PTP)](https://www.openstack.org/videos/summits/denver-2019/precision-time-protocol-ptp-on-starlingx) is a great technology to explore.

Internet protocols have made it much easier to distribute, manage, and synchronize time across a network by leveraging NTP. Telecom networks used BITS timing systems, but this was very hardware centric and costly to implement. However, as we move more and more applications to the edge of the network by combining networking and cloud technologies, new critical timing requirements are emerging. Certainly, this is important to 5G networks as well as industrial applications, be it automation or process control. 

As a result of the technology innovations, PTP and Time Sensitive Networking (TSN) have become more important and their rate of adoption is increasing. Of course, TSN and PTP require an ecosystem to successfully address timing concerns. The switches and all elements in the solution need to support the protocols and must be correctly configured to meet the extremely tight timing requirements these applications demand. To make this ecosystem a reality, the StarlingX Community has been working to bring the critical pieces of the solution together and provide a real-world solution.

Many StarlingX users provided input to the community that PTP and TSN support were needed for their applications, and the community is interested in figuring out how to leverage these technologies in an edge-focused way. 

In this two-part blog series, I will focus on PTP. In Part 1, I will explore the background of PTP, and in Part 2, I will walk-through how to configure and leverage PTP in StarlingX.

First, let’s put time and timing in context. Admiral Grace Hopper has a great talk to a class at MIT where she provides context for what a nanosecond is. She was one of the early thought leaders of computer science, and her ideas still hold true today. You can find a clip of her “nanosecond talk” [here](https://www.youtube.com/watch?v=ZR0ujwlvbkQ) (at the 45-minute mark). She uses a section of wire to show how far electrons can travel in a nanosecond. Spoiler alert—it is 1 foot. 

Context is always important and with PTP we are working with timing accuracy in hundreds of nanoseconds—incredibly tight timing requirements. This is particularly important when you are operating a distributed system at scale, where various operations need to remain synchronous, such as in a 5G network. It’s even more important when these are critical processes that are operating critical infrastructure—like in a refinery where critical processes need to be monitored to ensure public safety.

NTP can provide accuracy of 10’s of milliseconds across the internet, which is pretty good when you consider the scale of today’s internet. However, some networks require PTP accuracy of 10’s of microseconds or less (i.e., 1000X more stringent). The good news is that, with the right hardware, PTP can provide sub-microsecond accuracy, and more and more NICs are supporting PTP. The ecosystem is coming together nicely, and we now have the hardware and the software to make these solutions possible.

GPS is a great source for common timing; however, how do you distribute this highly accurate timing source without incurring drift? Well, this is where PTP comes in. You can have a GPS signal come into a server on an interface and distribute this signal across all other nodes to ensure that the timing is accurate to within 100ns. This is essentially what the PTP software does: takes in a highly accurate timing source and distributes it out on the various network interfaces on the box.

As discussed, time is a resource that must be closely managed. In a factory, this can enable various pieces of physical automation to remain in sync, such as a robot with other equipment on an assembly line. And, when time is not closely managed in a wireless network, for example, this can lead to dropped calls or the inability to initiate new calls. 

Who thought time could be so interesting? We all see how time can pass us by quickly in our lives. And, time is also so critical to our increasingly automated future to ensure these complex solutions can be delivered reliably and with the needed performance. 

Stay tuned for part 2 where I will walk you through how to use PTP in StarlingX.

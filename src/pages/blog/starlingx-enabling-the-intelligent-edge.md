---
templateKey: blog-post
title: Enabling the Intelligent Edge with StarlingX
author: Warren Bayek
date: 2024-08-01T16:58:05.627Z
category: 
  - label: Features & Updates
    id: category-A7fnZYrE1
---

The previous wave of digital transformation focused on the cloud and connecting people to information. The next wave will usher in the age of the Machine Economy as the emphasis shifts to machines connecting to other machines. As an enabler, the cloud still has an important role to play in this new wave of digital transformation, but the main focus areas will be artificial intelligence (AI), automation, and 5G or the hyper-connected edge. In fact, by 2030, analysts expect AI, automation, and autonomous machines to drive [seventy percent of the world’s GDP growth](https://www.forbes.com/sites/windriver/2021/05/01/a-critical-piece-of-the-machine-economy-the-people/?sh=25582fce742b).

The vast majority of that growth will take place not in traditional data centers, but in a new environment known as the intelligent edge. Here, the data processing and storage that typically takes place in a centralized data center or cloud will instead be distributed across dozens or even thousands of geo-distributed cloud instances. This distributed model enables the intelligent edge to deliver ultra-low latency and high-connectivity/performance characteristics that next-generation applications such as autonomous vehicles, automated manufacturing floors, and smart cities will require.
 
The intelligent edge calls for a new, enhanced solution that embraces the   distributed nature of these environments and supports large numbers of geographically distributed cloud instances. It needs to be simple to manage and simple to scale, and, it should be an open-source solution. The StarlingX platform was designed with these requirements in mind, and you will learn more below about how it addresses them.

# The Beginnings of StarlingX

The development of StarlingX dates to five years ago, when distributed and edge cloud notions appeared on the horizon. It became clear that traditional OpenStack cloud architecture was designed for large data centers, and it needed something to take it outside of the walls of one large building and meet the needs of the distributed cloud/edge of the future. StarlingX was designed specifically as a Kubernetes-based platform that supports containers and containerized OpenStack to address the challenge of distance: cloud controllers managing remote sites in different locations that may be hundreds and thousands of miles apart.

In this new, geographically distributed environment, issues such as scalability, reliability, and security must be handled differently. For example, four nines of reliability may be acceptable for a videoconferencing application, but not for autonomous guided vehicles. The same applies to latency as you begin to build applications where microseconds make a critical difference.

Likewise, size and security take on added significance at the edge. Unlike climate-controlled data centers, the edge is characterized by tight spaces and inhospitable environments. Consolidating computer, storage, and networking into the smallest possible footprint allows edge applications to be closer to the action, which may be four feet underground or forty thousand feet in the air depending on the use case. Securing the edge also requires additional consideration, from physical security to unsecured network backhaul connections.

# StarlingX in action

So, which kind of businesses can benefit from StarlingX? Telecommunications is the most obvious example, because telco networks are geographically distributed. In fact, some of the world’s largest telco networks have been using StarlingX for years. In that time, the StarlingX community has hardened StarlingX to the point where it can now serve a variety of industry use cases including the automotive industry, manufacturing, smart cities, and transportation.
 
One new use case that is particularly interesting is the software-defined vehicle. As cars become more intelligent and autonomous, car companies are becoming more like software companies. Tesla may be the poster child for this, but they’re not alone. [General Motors expects to generate $20-25 billion this year](https://gmauthority.com/blog/2022/08/gm-ultifi-to-generate-20-to-25-billion-in-annual-software-and-services-revenue-by-2023/) just from its Ultifi software platform. With cars acting effectually as rolling data centers, StarlingX can play a critical role in vehicle-to-everything (V2X) communications, whether it’s enabling a car to “talk” with street signs, our homes, or another vehicle.
 
StarlingX is designed for applications where critical systems need to co-exist with non-critical systems as found in automobile software platforms. For example, the ability to detect movement in front of or behind your car, such as a moving pedestrian, is a critical capability. The ability to control the audio system in your car is not as critical. StarlingX is designed to manage these applications independently so that resources can be prioritized accordingly.
 
From connecting smartphones to connecting cars, StarlingX has a bright future in front of it. If you have an industry use case that you believe could benefit from StarlingX or if you just want to be part of a growing developer community that’s helping to build a better future, reach out on the [starlingx-discuss mailing list](https://lists.starlingx.io/mailman3/lists/starlingx-discuss.lists.starlingx.io/), or the [StarlingX General chat room on Matrix](https://matrix.to/#/#starlingx:opendev.org).

Visit the StarlingX [website](https://www.starlingx.io) today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](http://mirror.starlingx.cengn.ca/mirror/starlingx/release/) to try out the new features.

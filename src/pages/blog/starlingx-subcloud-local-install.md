---
templateKey: blog-post
title: StarlingX Subcloud Local Install Enhancements
author: Shrikumar Sharma
date: 2022-04-11T14:26:09.627Z
category:
  - label: Features & Updates
    id: category-A7fnZYrE1
---

Learn more about the new feature in StarlingX called Subcloud Local Install. <!-- more -->
The Distributed Cloud architecture in StarlingX supports a scalable number of geographically distributed systems or in other words, edge sites, centrally managed and synchronized over L3 networks from a central region. Each edge site is also highly scalable, from a single StarlingX Simplex deployment to a full standard cloud configuration with storage nodes.

[StarlingX Cloud Deployment](/img/StarlingX_CloudDeployment.png)

Figure 1 illustrates an example where the network is distributed over a vast area. Each region is a geographical grouping, or an area on a map. The edge clouds provide computing power closer to the users, who can be located in cities or more rural areas, to try and decrease latency. The network connecting the different edge sites often suffer from delays and losses over most links in the deployment.
This naturally brings up the question of how to deploy the end-to-end infrastructure on a predictable schedule. We would like to deploy the edge clouds as quick as possible, but we need to keep in mind that data will be transmitted over possibly low-bandwidth, unreliable and unpredictable networks. 

A typical deployment will involve the transfer of a few gigabytes of data, which will be used in the installation process. Transmitting a few gigabytes over a possibly low-bandwidth network will consume a significant amount of time.
A typical edge cloud deployment may consist of multiple controllers and potentially compute and storage nodes, connected over a network that is designed per the user’s specifications. This implicitly means that there are potential multiple points of delay and latency for network traffic.
When there are packet losses during this data transfer, as may be the case depending on the network conditions at deployment time, then the system attempts to correct the losses through retransmissions, thereby increasing the deployment duration. If the data transfer is interrupted, for some reason, then the deployment may fail, and the server might require manual intervention.

Now imagine a system where there are over a thousand edge clouds and multiple system controllers. It is obvious, therefore, that the cost of deployment failures is high, especially since the entire process must be restarted after a failure, and network issues are very difficult to debug. 
The Subcloud Local Install feature aims to mitigate these issues and improve the deployment success rate.

## What Happens when edge clouds are deployed

To deploy an edge cloud, the installation artifacts must be made available to the physical machine. The most optimal way to do this is to provide them over the network. However, the size of these artifacts is over 3 GBs. This is not a problem for a very small system.

However, , StarlingX supports larger numbers of edge clouds, as illustrated in Figure 2.

[StarlingX Edge Cloud Improvements](/img/StarlingX_EdgeCloud_Improvements)

As mentioned earlier, transferring huge amounts of data simultaneously to numerous remote machines in one go will stress the network and potentially quality compromise network quality of service. This forms the motivation for an enhancement in the way we approach the problem of deployment.

## What if?
What if the artifacts could be made available on the edge cloud already, when the System Controller begins deployment? In other words, can we avoid downloading artifacts at the time of deployment?
The answer is yes.
Deployment over the edge clouds can be enhanced, if the artifacts for installation were already present on the physical machines that make up the edge clouds, prior to the deployment operations, in persistent storage. This, in essence, is local install.
Local Install consists of three scenarios. The first is where a physical machine comes “prestaged” with installation artifacts right from the factory; the second is when the user wants to upgrade an edge cloud, and the third, when the user wants to reinstall.

### Factory Installation:
The artifacts for installation are copied to a persistent storage location on the machine at the factory. When adding an edge cloud, the system utilizes the prestaged artifacts instead of downloading them.
The artifacts can also be used by an in-field technician in the form of an ISO image to enable prestaging on the edge cloud. 
Upgrade
In this case, the edge cloud is already up and running with a release version of StarlingX that is older than the one on the System Controller. A new version of StarlingX must be installed on the edge cloud, essentially an upgrade.
Reinstall
This is the case when both the System Controller and the edge cloud have the same version of StarlingX, and the user wants to re-install the edge cloud. At the end of the procedure, the edge cloud will have the same version as prior to the operation.

In the case of Factory install, the installer identifies the prestaged artifacts at the prestage location and avoids downloading the artifacts when the edge cloud installation procedures are invoked. This is instrumental in managing network bandwidth use, as data transfers happen only when required. Since data transfer requirements still exist for upgrades/reinstall, this will reduce the installation time during the maintenance window, potentially reducing server downtime.
In the remaining two cases, the artifacts can be transferred to the edge cloud servers through an out-of-band mechanism prior to scheduled maintenance times to prestage the system for install. Additionally, only new software versions can be transferred to reduce the amount of data transfer required. To avoid disrupting current network traffic, the data transfer can limit the bandwidth utilization during the transfer to the live system. 

Once the artifacts are prestaged at the appropriate location, the upgrade and reinstall API can be invoked to complete the procedure while availing of the benefits of prestaging.

With this enhancement, the efficiency of installing, upgrading or re-installing is vastly improved.

## Conclusion
Subcloud Local Install offers a very powerful mechanism to optimally deploy edge clouds, efficiently using network bandwidth and minimizing the load on the network. 

## Credits
I would like to thank Matt Peters, Ramaswamy Subramanian, Kyle MacLeod and Tee Ngo for their inputs, comments and suggestions.

## Get Involved
If you would like to learn more about the project and get involved check the [website](https://www.starlingx.io) for more information or [download the code](https://opendev.org/starlingx) and start to experiment with the platform. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.




---
title: News from the StarlingX Deep Dive Meetup in Beijing
author: hai-tao-wang-yong-hu
date: 2019-10-21T01:32:05.627Z
category: news
---

Learn more about the recent StarlingX meetup in China. <!-- more -->

The community had the first StarlingX meetup held in China in Beijing on September 20, 2019.

More than 80 participants from 22 companies enrolled in this gathering with representatives from all major telecom operators, Cloud Service Providers and edge computing solution providers from the region. Experts from Intel, China Unicom, FiberHome, Wind River, 99Cloud, China UnionPay and China Mobile shared their use case of edge computing, and their experiences of the deploying and testing the software the community has been working on.

And there is more! 4 demo showcases were performed to highlight different use cases, while the participants also engaged in an enthusiastic group discussion that turned the meetup into a collaborative environment to share current demands and challenges in the area of edge computing.

![alt text](/images/stx-beijing-meetup-september.png)

## Case Studies

In the morning, the meetup began with a joint presentation by four organizations (WindRiver, Intel, Fiberhome and 99Cloud), who are active contributors to StarlingX. This overall introduction painted a full picture from multiple viewpoints, from project history to community ecosystem nowadays, from use case scenarios to technical evolution on architecture, from the current 2.0 feature highlights to the outlook into the next and following releases.

After the opening further presenters shared their tech solutions or product practices with StarlingX on the infrastructure layer.

### Presentations

**“StarlingX Practice in Industrial Manufacturing Edge Cloud”:**
Besides being a traditional telecom operator, China Unicom is also pursuing CSP business opportunities on certain market segments, like industrial manufacturing on the edge. These environments demand platforms to connect the industrial fields with the cloud data centers with using edge and IOT technologies. The presentation outlined how IaaS, PaaS and SaaS solutions can provide a layered architecture to fulfill the needs of this use case.

StarlingX is one of the favorable solutions on the IaaS layer, benefiting from its dedicated optimizations for edge, such as, low latency, real-time, security and high availability, in addition to the orchestration capabilities inherited from Kubernetes and OpenStack. The speaker also highlighted an example how the Distributed Cloud feature can be used to deploy a cross-regional platform to fulfill the needs of the industrial manufacturing use case.

**"Multi-cloud and edge platform convergence":**
The second presenter from FiberHome was sharing information about their product history and plans and activities with StarlingX. Over the years the company has been creating a full portfolio for cloud (FitCloud) and edge (FitEC) use cases for different cloud models including public, private and hybrid solutions. To support the technology evolution and remain innovative in the field FiberHome has decided to move to the direction of converging multi-cloud and edge platform solutions to improve resource utilization and efficiency. For the edge piece they have evaluated several projects available in the open soure space and selected StarlingX for the infrastructure layer. Since 2018 they have been actively contributing to the community and also have a member in the StarlingX Technical Steering Committee (TSC).

**"Edge platform for smart agriculture":**
This case study was quite interesting and attracted a big portion of the audience, not only because of its vivid example (of cultivating shrimp), but more about the realistic difficulties of landing the edge platform in fields (around shrimp ponds). The presenters from 99Cloud were explaining how they took advantage of StarlingX capabilities to address these challenges. Several features were highlighted during the talk, like 'All-in-One Simplex' which is a deployment scenario that StarlingX supports which lets you install the platform only on one server. StarlingX can easily scale from that deployment to a multi-server platform depending on the needs of the use case. The Distributed Cloud feature was also highlighted that they used to manage dozens of hosts with great experience.

**"MEC (Multi-access Edge Computing) platform and implementation by China Unicom Research Institute":**
The definition of MEC environments has been driven by standards bodies such as 3GPP and ETSI. Following the guidelines of the ETSI MEC architectural framework, China Unicom proposed their reference design on several layers: OSS/BSS, MEAO(MEC Application Orchestrator)/NFVO, VNFM, and MEPM(Multi-access Edge Platform Manager)/MEP(Multi-access Edge Platform). China Unicom chose StarlingX as infrastructure solution for the virtualization layer for its Edge Business Platform to fulfill the requirements on high bandwidth, low latency and massive scale of connections. The presenter also mentioned the importance of StarlingX being fully aligned with ETSI NFV guidelines besides the characteristics that were designed with full dedication to edge use cases. 

**"Edge computing research to empower financial applications by China UnionPay and Topic":**
By nature, financial applications (for instance, payment use cases) have special requirements, such as increased security and privacy, dynamic and fragmented workloads, and so forth. During this session, the audience could learn about China UnionPay's official designated vendor to Chinese banks vision and technical approaches how they would utilize edge computing platform to empower typical financial applications. StarlingX was used in a proof of concept deployment of a contactless payment system for electronic-vehicle charging stations as the secure and scalable edge platform to host video surveillance workloads, charge metering and secure payment modules. In the context of deploying financial applications on the edge, StarlingX is an outstanding solution benefiting from its hardened security design (specifically with the well integrated TPM framework) that is backed by security technologies like Intel SGX on Intel platforms.

You can learn more about the contactless payment system use case and deployment work at a [presentation](https://www.openstack.org/summit/shanghai-2019/summit-schedule/events/23945/secured-edge-infrastructure-for-contactless-payment-system) at the Open Infrastructure Summit in Shanghai.

**"Heterogeneous and Collaborative Management Requirements on Cloud and Edge China Mobile Research Institute":**
Such as other carriers, China Mobile is also aligning their edge platform with the ESTI MEC framework and reference architecture, though there is a certain level of difference in implementation details. Facing the natural complexity of edge clouds, in terms of multiple locations (cross regions), heterogeneousness, collaboration, and autonomy, the audience could learn about China Mobile's experience about working with these challenges that they learned from their practice. StarlingX was presented on the the infrastructure layer covering the NFVI and VIM components with integrating services from open source projects such as OpenStack and Kubernetes to fulfill edge requrements.

In summary, the 6 case studies above covered several typical edge computing scenarios. StarlingX fits well in the designs mentioned due to the highlighted features, such as low latency, high availability and hardened security, dedicated for edge computing use cases. However, during the afternoon sessions the participants started deeper discussions and analysis where they collected a lot of feedback, comments, and recommendations on several aspects, like smaller footprint and system overhead and better usability (easy-to-use) and some items that are more relevant to the community's structure and way of working.

## Special Thanks to the Organizers

Special thanks to the community members who organized the event: Hu Wei, Hu Yong, Wang Haitao, Wang Yu, Liu Yuan, Wu Xiaowei, Qi Mingyuan, Shane Wang, Ding Jianfeng, Yang Ailin, Jin Yuntong, Suzie Yang, Cindy Xie, and Maggie Liang.

Learn more about the details of these discussions in a follow up blog post!

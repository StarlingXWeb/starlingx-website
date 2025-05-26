---
templateKey: blog-post
title: StarlingX Test Automation Framework
author: Christian Roy
date: 2025-05-21T01:32:05.627Z
category: 
  - label: Features & Updates
    id: category-A7fnZYrE1
---

# Announcing the New StarlingX Automation Framework: Powering Robust and Reliable Testing!

We're thrilled to announce the new StarlingX Automation Framework, a significant leap forward in our commitment to robust and reliable testing! This framework is designed to empower developers and testers with the tools and guidelines needed to create high-quality, maintainable, and efficient automation for StarlingX.

We've focused on key design principles to guarantee that our automation is truly effective:
- Object-Oriented Structure: Keywords are written using an object-oriented structure. The commands are stored in keyword classes, their outputs are parsed and handled in output classes and objects are used to model the returned data.
- Clear Logging: Detailed and informative logs clearly indicate the pass/fail status of each step, providing immediate insight into any issues and their root causes.
- Independence: Each test case is self-contained and operates without reliance on other tests, leading to faster execution and easier debugging.


# What's Under the Hood?

The framework's organized structure makes it easy to navigate and contribute. You'll find distinct folders for:

Config: Centralized input configurations with sensible default values.
Framework: Low-level functions for interacting with the system under test.
Keywords: Reusable functions representing common actions, promoting efficiency and consistency.
Tests: Comprehensive test cases, grouped by product area, that validate StarlingX functionality.

For more detailed information on contributing, setting up your environment, and diving into the framework's structure, refer to the official [StarlingX test repository](https://opendev.org/starlingx/test/src/branch/master).

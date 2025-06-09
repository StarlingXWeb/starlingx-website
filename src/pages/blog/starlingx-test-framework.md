---
templateKey: blog-post
title: StarlingX Test Automation Framework
author: Christian Roy
date: 2025-06-09T01:32:05.627Z
category: 
  - label: Features & Updates
    id: category-A7fnZYrE1
---

# Announcing the New StarlingX Automation Framework: Powering Robust and Reliable Testing!

The StarlingX Test team is excited to announce the new StarlingX Automation Framework, a significant leap forward in our commitment to robust and reliable testing! This framework is designed to empower developers and testers with the tools and guidelines needed to create high-quality, maintainable, and efficient test automation for StarlingX.
While the framework is already utilized in the community's test infrastructure, we also encourage everyone who is using the StarlingX platform and/or working on it upstream, to try it out and rely on it in their local environments.

We've focused on key design principles to ensure that our test automation framework is robust and easy to use and maintain:
- **Object-Oriented Structure:** Keywords are written using an object-oriented structure. The commands are stored in keyword classes, their outputs are parsed and handled in output classes, and objects are used to model the returned data.
- **Clear Logging:** Any keyword called will generate detailed logs of passed parameters as well as the SSH output of the command (For CLI keywords). The simplified error stack traces will also provide clear insight into the point of failure.
- **Independence:** Each test case is self-contained and operates without reliance on other tests, leading to faster execution and easier debugging.


# What's Under the Hood?

The framework structure is designed with separation of concerns in mind.

## Framework Layer
This layer isn't specific to StarlingX. It provides the tools and functionality to reliably interact with software and report results. Our SSH library, based on [Paramiko](https://www.paramiko.org), has built-in recovery for when the system under test goes offline, or there is a temporary network blip. We also have a strengthened web framework based on Selenium that handles timing issues and stale elements seamlessly. The framework layer also contains the base class for keywords which enables the automatic logging, and the validation class which allows for more verbose asserts which support retries.

## Keywords
These files are used to encapsulate StarlingX operations. The enforced object-oriented structure means that we have strong typing and can evaluate objects through an IDE to see their complete structure.

## Tests
Test cases are sequences of keywords and validations that leverage the robustness and reusability of the layers below. Test cases are written to be easy to read and understand. Specific StarlingX configuration requirements are also tagged to the test cases.

## Test Executor
Given a StarlingX lab, we can use the Capability Scanner to identify its properties and capabilities. We can then leverage the Test Executor to match those capabilities with the requirements of test cases to find an appropriate test suite for that lab. Here are some capabilities that can be identified by the capability scanner: "lab_has_standby_controller", "lab_has_sriov", "lab_has_processor_min_2".

## Config
The config files allow users to specify overrides to run test cases in their environments. The configurations are set up to have meaningful default values where possible (e.g. Default log level is set to DEBUG, rest api ports are set to documented default, web testing is defaulted to be run in headless mode).

You can download the framework and find detailed documentation about its structure and how to set up your environment in the [StarlingX test repository](https://opendev.org/starlingx/test/src/branch/master).

# About StarlingX
Visit the StarlingX website today for further information about the project, check out the [code](https://opendev.org/starlingx), or download the [latest image](https://mirror.starlingx.windriver.com/mirror/starlingx/release/) to try out the new features. If you are already evaluating or using the software please fill out the [user survey](https://openinfrafoundation.formstack.com/forms/starlingx_user_survey) and help the community improve the project based on your feedback.
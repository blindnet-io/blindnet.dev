---
title: BigId
sidebar_position: 7
---

# blindnet DevKit for BigId

| **Author(s)** | [milstan](https://github.com/milstan) (milstan@blindnet.io) |
| :------------ | :---------------------------------------------------------- |
| **Version**   | 1.1                                                         |
| **Updated**   | 2022-07-21                                                  |

## About BigId

[BigID](https://bigid.com) offers a set of solutions allowing their clients to automate privacy and compliance.

## Context

Companies are under pressure from privacy regulations. They must now offer users a certain degree of transparency and control over how their data is processed. BigID offers advanced solutions for [cataloging legacy data](https://bigid.com/discovery-in-depth/), intake of [Privacy Requests](https://bigid.com/privacy/privacy-portal-app/) and [workflow automation of Privacy Request fulfillment](https://bigid.com/privacy/data-rights-automation-app/).

## A Step Beyond

BigID can offer an even more advanced service by offering an out-of-the box automation of Privacy Request fulfillment.

blindnet has developed [PRIV (Privacy Request Interchange Vocabulary)](https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md). It is an easy-to-use taxonomy of tags - entry point to the whole world of automation.
It allows to connect an existing system with blindnet's knowledge base and rule engines in order to deliver the ultimate privacy experience.

PRIV associates simple tags with rich semantics.
As such they enable next-generation artificial intelligence.
Thanks to PRIV tags, blindnet's Privacy Computation engine can leverage regulation-specific rule bases in order to decide, given a Privacy Request, if it is legal to decline it or not.

## Using blindnet DevKit

It takes three easy steps for BigID to include the most advanced privacy automation from blindnet DevKit in its existing software:

### Step 1 - Mappings to PRIV

Several of BigID's components should be given mappings of the data structures they use to [PRIV](https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md) terms:

- Categories coming out of [BigID's Data Classifier](https://bigid.com/data-classification/) should be mapped to PRIV Data Categories
- [BigID's RoPA Mapping App](https://bigid.com/privacy/ropa-mapping-app/) should export the RoPA using PRIV's Processing Categories and Purposes
- [BigID's Consent Governance App](https://bigid.com/privacy/consent-governance-app/) should be able to export consent data as PRIV Consents
- [BigID's Data Rights Automation App](https://bigid.com/privacy/data-rights-automation-app/) should be able to express privacy requests as PRIV Privacy Request and read response suggestions in format of PRIV Privacy Request Response

### Step 2 - Report Settings/Configuration and key events

RoPA and similar general information should be fed to blindnet DevKit. Then, on an ongoing basis, all important events (in format of PRIV Events, such as PRIV Consent, PRIV Legal Base Event) should be fed to blindnet DevKit too.

A chain of events is constructed and updated whenever an important thing happens. blindnet's Privacy Compiler (part of Privacy Computation Engine) processes the chain of events and updates a state of allowed processing.

<img height="300" src="/img/PCEexplained.gif" />

When a user makes a Privacy Request, the Privacy Computation Engine is able to resolve it against that state and deliver Privacy Request Response recommendations.

Those responses too, become a part of the chain of immutable PRIV events - a solid ground for history review and proof of compliance.

### Step 3 - Offer Out-of-the-box Automation and Response Recommendations

Mapping between BigID's data structures and PRIV terms done once, the advanced automation offered by blindnet can be offered consistently to all BigID's customers.

BigID's Data Rights Automation App can act upon blindnet's Privacy Computation Engine response recommendations either by directly following them or by submitting them for human validation.

## Need more?

blindnet DevKit does much more. It is a complete solution for [privacy-enabled connectedness](/docs/references/notions-of-privacy), allowing developers to quickly gain ground on all the three pillars of privacy: [Transparency, Confidentiality and Control](/docs/references/priv-eng-principles).

- _Working with sensitive data?_ Offer end-to-end encryption using [blindnet's encryption services](https://github.com/blindnet-io/api-scala)
- _Sharing Data with partners?_ Propagate users' Privacy Requests using blindnet's [Privacy Request Multicast Protocol](https://github.com/blindnet-io/product-management/blob/b7d2bd0aab509a5d83ed42822b0ba19e27bef905/refs/schemas/protocols/RFC-PRMP.md)

## See also

- [blindnet DevKit Feature Roadmap Q3 & Q4 2022](https://github.com/blindnet-io/devrel-management/blob/main/docs/roadmap/q3-2022.md)
- [blindnet's White Paper: The Mixed Feelings of Privacy. May 2022](/pdf/white-papers/202205-the-mixed-feelings-of-privacy.pdf)

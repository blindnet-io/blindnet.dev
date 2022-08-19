---
title: Doctolib
sidebar_position: 9
---

# blindnet DevKit for Doctolib

| **Author(s)** | [milstan](https://github.com/milstan) (milstan@blindnet.io) |
| :------------ | :---------------------------------------------------------- |
| **Version**   | 1.1                                                         |
| **Updated**   | 2022-07-21                                                  |

## About Doctolib

Doctolib is a medical appointment management system trusted by more than 100 000 doctors who use it a primary means of communication with their patients.

Doctolib takes patient privacy very seriously. End-to-end encrypted file exchange (powered by Tanker, a startup that Doctolib acquired) is at the heart of this strategy.

## Context

Gaining users' trust is a key factor of success in commercialization of digital services.
Where a human salesman is absent, trust is achieved through technology.

Privacy, giving users control over their data, and compliance with regulations are key drivers of trust online (cf. [research](#references)).

## Current Situation

Currently, if users what to take control over their data, restrict its processing or exercise their rights (granted by GDPR, CCPA or other regulations) they are expected to write an e-mail to **contact.dataprivacy@doctolib.com** (or write paper mail to Doctolib's DPO).

This poses several difficulties:

- **E-mail is not secure.**
  Users might end-up disclosing confidential or health-related information over e-mail which would be a direct violation of [Article 32 of GDPR](https://gdpr-info.eu/art-32-gdpr/), heavily sanctioned by most countries in the EU.

- **Requests are difficult to automate**.
  Expressed in the form of free text of an e-mail, Privacy Request must be read and processed by a human, which is cost-intense and slow.
  Linking the Requests and the responses to the actual data that Doctolib has is very cumbersome and requires software development involving many components of the Doctolib backend system.

- **It is out of sync with the values of the brand**.
  Doctolib is perceived as secure, modern, and efficient. In other words: everything this experience is not.

## Using blindnet devkit

blindnet devkit is a complete solution for [privacy-enabled connectedness](/docs/references/notions-of-privacy), allowing developers to quickly gain ground on all of the three pillars of privacy: [Transparency, Confidentiality and Control](/docs/references/priv-eng-principles).

It takes three easy steps for Doctolib to include the most advanced privacy features in its existing software:

### Step 1 - Configuration

Doctolib should feed blindnet devkit with general information (Privacy Policy, server locations, retention policies) and provides a mapping between data categories in its database and [PRIV](https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md) terms.

blindnet's PRIV (Privacy Request Interchange Vocabulary) is an easy-to-use taxonomy of tags - an entry point to the whole world of automation. It allows to connect an existing system with blindnet's knowledge base and rule engines in order to deliver the ultimate privacy experience.

### Step 2 - Report key events

Whenever an important thing happens - a user opens an account, gives consent, or deletes an account - Doctolib should let blindnet devkit know. A chain of events is constructed. With every new event the blindnet's Privacy Compiler (part of Privacy Computation Engine) updates a state of allowed processing.

<img height="300" src="/img/PCEexplained.gif" />

When a user makes a Privacy Request, the Privacy Computation Engine is able to resolve it against that state and deliver response recommendations or automatically issue responses.

Even regardless of any user action, Privacy Computation Engine can spot data the retention policies of which have expired.

### Step 3 - Replace the e-mail with Privacy Request Builder

<img align="right" height="200" src="/img/loglolessPRbuilder.png" />

Finally, Doctolib can replace the **contact.dataprivacy@doctolib.com** with a convenient interface allowing users to make privacy requests.
Many requests can be replied to immediately with no human intervention (e.g. Transparency requests).
In some cases Privacy Computation Engine can be configured to only deliver response recommendations, subject to human validation.

Only requests not falling into any of the PRIV categories still require human intervention.

## Result

Thanks to blindnet devkit Doctolib can lower the costs of processing Privacy Requests and improve user experience.

Complying with privacy regulation mandates becomes an opportunity to build trust and offer superior user experience consistent with the brand's values.

## See also

- [blindnet DevKit Feature Roadmap Q3 & Q4 2022](https://github.com/blindnet-io/devrel-management/blob/main/docs/roadmap/q3-2022.md)

## References

- [Cisco 2022 Data Privacy Benchmark Study](https://www.cisco.com/c/en/us/about/trust-center/data-privacy-benchmark-study.html)
- [Blindnet's White Paper: The Mixed Feelings of Privacy. May 2022](/pdf/white-papers/202205-the-mixed-feelings-of-privacy.pdf)

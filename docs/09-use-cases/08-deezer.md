---
title: Deezer
sidebar_position: 8
---

# blindnet DevKit for Deezer

| **Author(s)** | [milstan](https://github.com/milstan) (milstan@blindnet.io) |
| :------------ | :---------------------------------------------------------- |
| **Version**   | 1.1                                                         |
| **Updated**   | 2022-07-21                                                  |

## About Deezer

Deezer is a music-streaming service loved by millions of active users.

## Context

Deezer collects and generates data about its users. As the service is a part of its users' daily life, it has access to highly granular taste, preference and behavioral data. Users' ability to trust Deezer is a key factor of Deezer's commercial success.

Privacy, giving users control over their data, and compliance with regulations are key drivers of trust online.

## Current Situation

Currently, if users what to take control over their data, restrict its processing or exercise their rights (granted by GDPR, CCPA or other regulations) they are expected to fill out [this online form](https://support.deezer.com/hc/fr/requests/new?ticket_form_id=360000057869&_gl=1*1k9nnls*_ga*MTUxMjAxMDg4My4xNjU4MjM5ODUz*_ga_71WQ7Y8JLG*MTY1ODIzOTg1Mi4xLjEuMTY1ODI0MDE2Ni4w).

Within that form, the user is expected to describe their demand in their own words in the field "Description de la demande" and are encouraged to give as much detail as possible (fr. "Veuillez donner un maximum d'informations à propos de votre problème. Cela nous aidera à le résoudre plus rapidement.")

This poses several difficulties:

- **It is difficult to automate responses to Privacy Requests**.
  Expressed in the form of free text, a Privacy Request must be read and processed by a human, which is cost-intense and slow.

- **When Data is Shared with 3rd Parties, Privacy Requests Must be Too**.
  Yet collecting Privacy Requests in free text form makes it difficult to transfer them. Deezer does share data (according to its Privacy Policy and Consents), and can be subject to Privacy Requests that must be transferred to any data recipient according to [Article 19 of GDPR](https://gdpr-info.eu/art-19-gdpr/).

## Using blindnet devkit

It takes three easy steps for Deezer to include the most advanced privacy features in its existing software:

### Step 1 - Configuration

Deezer should feed blidnet devkit with general information (Privacy Policy, server locations, retention policies) and provides a mapping between data categories in its database and [PRIV](https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md) terms.

blindnet's PRIV (Privacy Request Interchange Vocabulary) is an easy-to-use taxonomy of tags - an entry point to the whole world of automation. It allows to connect an existing system with blindnet's knowledge base and rule engines in order to deliver the ultimate privacy experience.

### Step 2 - Report key events

Whenever an important thing happens - a user opens an account, gives consent, closes an account, etc. - Deezer should let blindnet devkit know. A chain of events is constructed. With every new event the blindnet's Privacy Compiler (part of Privacy Computation Engine) updates a state of allowed processing.

<img height="300" src="/img/PCEexplained.gif" />

When a user makes a Privacy Request, the Privacy Computation Engine is able to resolve it against that state and deliver response recommendations or automatically issue responses.

### Step 3 - Replace the current web form with Privacy Request Builder

<img align="right" height="200" src="/img/loglolessPRbuilder.png" />

Finally, Deezer can replace the current text-field in the contact form, with a convenient interface (part of blindnet DevKit) allowing users to make Privacy Requests.

Many requests can be replied to immediately with no human intervention (e.g. Transparency requests).
In some cases Privacy Computation Engine can be configured to only deliver response recommendations, subject to human validation within the existing Deezer support ticket workflow (with less work for the human).

## Result

Thanks to blindnet devkit Deezer can lower the costs of processing Privacy Requests and improve the user experience and further solidify users' trust.

Captured using PRIV Terms, Privacy Request can be processed automatically - certain yielding immediate answer.

They can also be transferred to partners in data exchange for easier, more automated, cross-system compliance.

Complying with privacy regulation mandates becomes an opportunity to build trust and offer superior user experience consistent with the brand's values.

## Need more?

blindnet DevKit does much more. It is a complete solution for [privacy-enabled connectedness](/docs/references/notions-of-privacy), allowing developers to quickly gain ground on all the three pillars of privacy: [Transparency, Confidentiality and Control](/docs/references/priv-eng-principles).

- _Working with sensitive data?_ Offer end-to-end encryption using [blidnent's encryption services](https://github.com/blindnet-io/api-scala)
- _Sharing Data with partners?_ Propagate users' Privacy Requests using blindnet's [Privacy Request Multicast Protocol](https://github.com/blindnet-io/product-management/blob/b7d2bd0aab509a5d83ed42822b0ba19e27bef905/refs/schemas/protocols/RFC-PRMP.md)

## See also

- [blindnet DevKit Feature Roadmap Q3 & Q4 2022](https://github.com/blindnet-io/devrel-management/blob/main/docs/roadmap/q3-2022.md)
- [Blindnet's White Paper: The Mixed Feelings of Privacy. May 2022](/pdf/white-papers/202205-the-mixed-feelings-of-privacy.pdf)

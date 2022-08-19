---
title: Web Forms
sidebar_position: 1
---

# blindnet devkit for Web Forms

| **Author(s)** | [milstan](https://github.com/milstan) (milstan@blindnet.io) |
| :------------ | :---------------------------------------------------------- |
| **Version**   | 1.1                                                         |
| **Updated**   | 2022-07-21                                                  |

## Client Profile : FormType

FormType is an online service allowing anyone to make user-friendly web forms. It is loved for the aesthetics and the simplicity of its user experience.

Many clients do not have internal IT teams and fully rely on FormType as a primary way to gather data from their users.

## Use-case 1: Confidentiality

### Context

Clients from particularly regulated industries (e.g. Healthcare, Legal and Financial Services) are subject to strict regulatory mandates imposing high standards for data confidentiality.
Those clients can't allow anyone (even a trusted partner) other than qualified personnel, to have access to data, and can't risk a data-breach.
Data Encryption and other security measures are part of their obligations ([Article 32 of GDPR](https://gdpr-info.eu/art-32-gdpr/)).

### Current Situation

- Clients offering healthcare services refrain from using FormType, continue to use paper forms to collect sensitive user data, or consider development of tailor-made encrypted web forms

- Clients offering legal services are concerned with client-attorney privilege and would love to digitalize their data intake workflows but must ensure that nobody, other than the lawyer, can access the data.
  They still hesitate to use FormType.

### Using blindnet devkit

FormType can use blindnet devkit to improve _confidentiality_ by offering end-to-end encrypted web forms.

As explained in [this tutorial](https://medium.com/blindnet/data-minimization-101-b9d8d96fd225), in only a few lines of code, it is possible to add end-to-end encryption to web forms. Blindnet's solution offers the following advantages:

- The user experience remains unchanged (the end-user can stay unaware of any encryption)
- FormType only ever gets to store and process encrypted data, only the clients of FormType being able to decrypt them
- The users submitting data can remain anonymous (only the users reading the data must be authenticated)

## Use-case 2: Privacy Requests

### Context

One of the pillars of privacy in software systems is giving the users control over how their data is being processed.
In addition, multiple privacy-related regulations, including GDPR, impose letting users formulate different requests (access, modification, limitations of processing, etc.).

"It shall be as easy to withdraw as to give consent" (Article 7 of GDPR).

### Current Situation

FormType is a great solution for collecting data. However, clients are left on their own when it comes to letting their users make Privacy Requests related to that data.

Clients often put in place an e-mail for request (e.g. **dpo@example.com**). The practice poses several issues:

- **It involves a lot of human effort.** When requests are made, a human must evaluate whether the user's request can/should be granted with regard to multiple constrains (often data must be kept for compliance with regulation).
- **It only offers limited compliance**. It is clearly much more difficult to revoke consent in this way than it is to give one within the FormType experience.
- **It breaks away from the promise of FormType**. The clients expect FormType to offer a turn-key solution for user-friendly, simple experience around data collection.

### Using blindnet devkit

It takes three easy steps for FormType to include the most advanced privacy features in its existing software:

#### Step 1 - Configuration

FormType should allow their clients, with each form, to specify some general privacy-related information (Privacy Policy, server locations, retention policies) and feed that to blindnet devkit. For every form field, FormType's clients should choose a data category among one of the [PRIV](https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md) Terms.

blindnet's PRIV (Privacy Request Interchange Vocabulary) is an easy-to-use taxonomy of tags - an entry point to the whole world of automation. It allows to connect an existing system with blindnet's knowledge base and rule engines in order to deliver the ultimate privacy experience.

Optionally, FormType can also allow specifying data retention policies.

#### Step 2 - Let users know of their rights

<img align="right" height="200" src="/img/loglolessPRbuilder.png" />

Whenever a form is filled, containing user data, FormType does the following:

- informs blindnet devkit about the Data Subject in question, the form (and the consents granted)
- lets the user know that they can exercise their rights by visiting the _Privacy Request Builder_ - a simple, easy-to-use interface allowing them to formulate their requests.
  This information can be given at a "Thank you" page in the end of the FormType experience or within a form confirmation e-mail.
  The _Privacy Request Builder_ is a component of blindnet devkit that can be customized with FormType's look and feel.

It is no longer needed to have **dpo@example.com** address and deal with free-form ask-me-anything kind of requests. _Privacy Request Builder_ nudges the user to choose from pre-defined request categories so that the request can be processed as quickly (and as automatically) as possible.

#### Step 3 - Process Privacy Requests

For each Data Subject, blindnet devkit constructs a chain of, PRIV objects - events. When a user makes a Privacy Request, the Privacy Computation Engine is able to resolve it against that state and deliver response recommendations or automatically issue responses.

<img height="300" src="/img/PCEexplained.gif" />

FormType can use components from blindnet devkit to allow their clients to view Privacy Requests, and act upon Privacy Request Response recommendations generated by Privacy Computation Engine.

Clients can also choose to the Privacy Computation Engine automatically respond to requests which are unambiguous.

## Result

Thanks to blindnet devkit FormType can offer a turn-key solution for compliant web data collection, and serve even the most demanding industries where sensitive data is being processed.

Complying with privacy regulation mandates becomes an opportunity to build trust and offer superior user experience consistent with the brand's values.

blindnet devkit is a complete solution for [privacy-enabled connectedness](/docs/references/notions-of-privacy), allowing developers to quickly gain ground on all the three pillars of privacy: [Transparency, Confidentiality and Control](/docs/references/priv-eng-principles).

## Real-life example

In addition, its core solution for developers, blindnet has made [PrivateForm](https://blindnet.io/how-it-works) - a tool for end-to-end encrypted web forms with embedded support for Access, Modify and Delete Privacy Requests. It is already used by medical professionals, law firms and business consulting firms.

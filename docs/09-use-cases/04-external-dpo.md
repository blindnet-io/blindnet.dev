---
title: External DPOs
sidebar_position: 4
---

# blindnet DevKit for External DPOs

| **Author(s)** | [milstan](https://github.com/milstan) (milstan@blindnet.io) |
| :------------ | :---------------------------------------------------------- |
| **Version**   | 1.0                                                         |
| **Updated**   | 2022-07-21                                                  |

## Client Profile : ExtDPO

In order to comply with regulations, especially GDPR, many companies hire an external DPO.
ExtDPO offers services of experienced expert DPOs who totally outsource the processing of Privacy Requests.

## Current Situation

Clients of ExtDPO include an e-mail address of type "**dpo@company.com**" in their Privacy Policy, so that any User wishing to exercise their data rights can write to a centralized address.

ExtDPO's experts read the incoming e-mail, and make sure to reply to the user within the legal deadline.
Some requests are easy to answer and only require knowledge about the company's policies.
Others, however, require access or changes to be made to data in the client company's database.
In those cases the work of DPO is more complex and requires interactions with the company's technical personnel.

This workflow is problematic on several levels:

- **E-mail is not secure.**
  Users might end-up disclosing confidential, health-related or sensitive information over e-mail which would be a direct violation of [Article 32 of GDPR](https://gdpr-info.eu/art-32-gdpr/), heavily sanctioned by most countries in the EU.

- **Requests are tedious to process**.
  Expressed in the form of free text of an e-mail, Privacy Request must be read and fully processed by a human, which is cost-intense and slow.

- **Linking request to actual data is cumbersome**.
  - It is very complicated for a user to revoke a particular consent. Yet according to [Art. 7 of GDPR](https://gdpr-info.eu/art-7-gdpr/) _"it shall be as easy to withdraw as to give consent"_.
  - When requests are related to particular data to be modified and deleted, it takes quite an effort for the DPO and for the technical personnel of the client company to actually execute the user's request.
  - When the user wants to restrict processing of their data to only particular purposes, it is very difficult for the DPO to make sure the client's system keeps the data but limits its usage.

## Using blindnet DevKit

It takes three easy steps for ExtDPO to automate some their work, synchronize their efforts with their client's data, and offer a more secure and modern interface for Privacy Request intake :

### Step 1 - Configuration

ExtDPO feeds blindnet DevKit with general information (any Privacy Policy of their client company, server locations, data retention policies) and provides a mapping between data categories in its database and [PRIV](https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md) terms.

blindnet's PRIV (Privacy Request Interchange Vocabulary) is an easy-to-use taxonomy of tags - an entry point to the whole world of automation.
It allows to connect an existing system with blindnet's knowledge base and rule engines in order to deliver the ultimate privacy experience.

### Step 2 - Report key events

Whenever an important thing happens - a user opens an account, gives particular consent, or closes the account - the client company's system lets blindnet DevKit know.
A chain of events is constructed. With every new event the blindnet's Privacy Compiler (part of Privacy Computation Engine) updates a state of allowed processing.

<img height="300" src="/img/PCEexplained.gif" />

When a user makes a Privacy Request, the Privacy Computation Engine is able to resolve it against that state and deliver response recommendations.

### Step 3 - Replace the e-mail with Privacy Request Builder

<img align="right" height="200" src="/img/loglolessPRbuilder.png" />

Finally, ExtDPO can offer a nice user-friendly interface (part of blindnet DevKit) allowing Users to make privacy requests instead of writing to "**dpo@company.com**".
This interface can be customized to match the client's website look and feel.

Many requests can get a reply immediately, with no human intervention (e.g. Transparency requests).
In some cases Privacy Computation Engine can be configured to only deliver response recommendations, subject to human DPO validation.
Expert DPOs can add appropriate messages, or choose answers to be given.
Requested data can be enclosed in the responses, and delivered encrypted (if needed).

In any case, the Response to the Privacy Request becomes a part of the Users' timeline of immutable events.
This timeline serves, at any moment, as a proof of history of compliance.

## Result

Thanks to blindnet DevKit ExtDPO can offer its customers a better, faster and more secure service, and at the same time lower its costs.

For ExtDPO customers, complying with privacy regulation mandates becomes an opportunity to build trust and offer superior user experience.

## Need more?

blindnet DevKit does much more. It is a complete solution for [privacy-enabled connectedness](/docs/references/notions-of-privacy), allowing developers to quickly gain ground on all the three pillars of privacy: [Transparency, Confidentiality and Control](/docs/references/priv-eng-principles).

- _Working with sensitive data?_ Offer end-to-end encryption using [blindnet's encryption services](https://github.com/blindnet-io/api-scala). Perfect for keeping user data secret from ExtDPO and accessible only by its customers.
- _Sharing Data with partners?_ Propagate users' Privacy Requests using blindnet's [Privacy Request Multicast Protocol](https://github.com/blindnet-io/product-management/blob/b7d2bd0aab509a5d83ed42822b0ba19e27bef905/refs/schemas/protocols/RFC-PRMP.md)

## See also

- [blindnet DevKit Feature Roadmap Q3 & Q4 2022](https://github.com/blindnet-io/devrel-management/blob/main/docs/roadmap/q3-2022.md)
- [Blindnet's White Paper: The Mixed Feelings of Privacy. May 2022](/pdf/white-papers/202205-the-mixed-feelings-of-privacy.pdf)

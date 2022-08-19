---
title: Medical Communication solutions
sidebar_position: 3
---


# blindnet DevKit for Medical Communication solutions

| **Author(s)** | [milstan](https://github.com/milstan) (milstan@blindnet.io) |
| :------------ | :---------------------------------------------------------- |
| **Version**   | 1.1                                                         |
| **Updated**   | 2022-07-21                                                  |

## Client Profile : MedCom

MedCom is a software solution for medical communications loved by more than 200 000 healthcare professionals. It allows them to communicate with patients and colleagues in ways both practical and secure (compliant with regulations).

## Context

MedCom plays an important role in the sensitive and confidential relationship between Doctors and Patients.

However, in addition to confidentiality and security, Doctors are also subject to regulation regarding Privacy Requests. Different regulation (GDPR, HIPPA, Country-specific health laws) oblige Doctors to provide copies of medical files to Patients, and respond to other data-related requests.

## Current Situation

MedCom acts as a data processor in the sense of GDPR, collecting, generating and processing data about Patients on behalf of their Doctors (controllers in the sense of GDPR).

Doctors are liable to respond to Privacy Requests related to data stored in MedCom. E.g. a Patient may want to demand data modification, or deletion, or to restrict its processing to only certain purposes.

The interaction around Privacy Requests happens outside MedCom, usually by e-mail to the Doctor or to their DPO (if they have one).

This is problematic on several levels:

- **E-mail is not secure.**
  Patients might end-up disclosing confidential, health-related or sensitive information over e-mail which would be a direct violation of [Article 32 of GDPR](https://gdpr-info.eu/art-32-gdpr/), heavily sanctioned by most countries in the EU.

- **Requests are tedious to process**.
  Expressed in the form of free text of an e-mail, Privacy Request must be read and processed by a human, which is cost-intense and slow.

- **If changes are to be made in MedCom, it must be done manually**.
  Linking the Requests and the responses to the actual data that MedCom has is very cumbersome and requires a human DPO processing a Privacy Request to log-in MedCom and manually apply any changes made necessary by Privacy Request in question.

## Using blindnet DevKit

It takes three easy steps for MedCom to include the most advanced Privacy Request processing features in its existing software, and offer a Privacy Center for Doctors and Patients, in full sync with the data in MedCom:

### Step 1 - Configuration

MedCom feeds blindnet DevKit with general information (any Privacy Policy of the Employer, server locations, data retention policies) and provides a mapping between data categories in its database and [PRIV](https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md) terms.

blindnet's PRIV (Privacy Request Interchange Vocabulary) is an easy-to-use taxonomy of tags - an entry point to the whole world of automation. It allows to connect an existing system with blindnet's knowledge base and rule engines in order to deliver the ultimate privacy experience.

### Step 2 - Report key events

Whenever an important thing happens - a new Patient is known by the system, gives particular consent, or ends a relationship with the Doctor - MedCom lets blindnet DevKit know. A chain of events is constructed. With every new event the blindnet's Privacy Compiler (part of Privacy Computation Engine) updates a state of allowed processing.

<img height="300" src="/img/PCEexplained.gif" />

When a Patient makes a Privacy Request, the Privacy Computation Engine is able to resolve it against that state and deliver response recommendations or automatically issue responses.

### Step 3 - Replace the e-mail with Privacy Request Builder

<img align="right" height="200" src="/img/loglolessPRbuilder.png" />

Finally, MedCom can offer a nice user-friendly interface (provided in blindnet DevKit) allowing Patients to make privacy requests as a part of their MedCom experience.

Many requests can get a reply immediately, with no human intervention (e.g. Transparency requests).
In some cases Privacy Computation Engine can be configured to only deliver response recommendations, subject to human (DPO/Doctor) validation (through an interface provided as a part of blindnet DevKit).

Only requests not falling into any of the PRIV categories still require human intervention.

## Result

Thanks to blindnet DevKit MedCom can offer its customers - Doctors - a smart way to reduce the time and cost of processing Privacy Requests.

Complying with privacy regulation mandates becomes an opportunity to build trust and offer superior user experience consistent with the brand's values.

## Need more?

blindnet DevKit does much more. It is a complete solution for [privacy-enabled connectedness](/docs/references/notions-of-privacy), allowing developers to quickly gain ground on all the three pillars of privacy: [Transparency, Confidentiality and Control](/docs/references/priv-eng-principles).

- _Working with sensitive data?_ Offer end-to-end encryption using [blindnet's encryption services](https://github.com/blindnet-io/api-scala).
- _Sharing Data with partners?_ Propagate users' Privacy Requests using blindnet's [Privacy Request Multicast Protocol](https://github.com/blindnet-io/product-management/blob/b7d2bd0aab509a5d83ed42822b0ba19e27bef905/refs/schemas/protocols/RFC-PRMP.md)

## See also

- [blindnet DevKit Feature Roadmap Q3 & Q4 2022](https://github.com/blindnet-io/devrel-management/blob/main/docs/roadmap/q3-2022.md)

## References

- [Cisco 2022 Data Privacy Benchmark Study](https://www.cisco.com/c/en/us/about/trust-center/data-privacy-benchmark-study.html)
- [Blindnet's White Paper: The Mixed Feelings of Privacy. May 2022](/pdf/white-papers/202205-the-mixed-feelings-of-privacy.pdf)

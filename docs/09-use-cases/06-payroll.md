---
title: Payroll solutions
sidebar_position: 6
---

# blindnet DevKit for Payroll solutions

| **Author(s)** | [milstan](https://github.com/milstan) (milstan@blindnet.io) |
| :------------ | :---------------------------------------------------------- |
| **Version**   | 1.1                                                         |
| **Updated**   | 2022-07-21                                                  |

## Client Profile : FitPay

FitPay is an online payroll management solution loved by digital natives who enjoy its user experience and simplicity.

## Context

FitPay plays an important role in the sensitive and confidential relationship between employers and employees. As such, the service takes data security and privacy very seriously.

Privacy, giving users control over their data, and compliance with regulations are key drivers of trust (cf. [research](#references)).

## Current Situation

FitPay acts as a data processor in the sense of GDPR, collecting, generating and processing data about employees on behalf of their employers (controllers in the sense of GDPR).

Employers are liable to respond to Privacy Requests related to data stored in FitPay. E.g. an employee may want to demand data modification, or deletion, or to restrict its processing to only certain purposes.

Most of the time, such requests will be declined as payroll data is also subject to mandatory keeping for purposes of tax controls. Yet employers must receive and act upon such requests.

The interaction around Privacy Requests happens outside FitPay, usually by e-mail to the Employer's DPO.

This is problematic on several levels:

- **E-mail is not secure.**
  Users might end-up disclosing confidential, health-related or sensitive information over e-mail which would be a direct violation of [Article 32 of GDPR](https://gdpr-info.eu/art-32-gdpr/), heavily sanctioned by most countries in the EU.

- **Requests are tedious to process**.
  Expressed in the form of free text of an e-mail, Privacy Request must be read and processed by a human, which is cost-intense and slow.

- **If changes are to be made in FitPay, it must be done manually**.
  Linking the Requests and the responses to the actual data that FitPay has is very cumbersome and requires a human DPO processing a Privacy Request to log-in FitPay and manually apply any changes made necessary by Privacy Request in question.

## Using blindnet DevKit

It takes three easy steps for FitPay to include the most advanced privacy features in its existing software, and offer a Privacy Center for Employers and Employees, in full sync with the data in FitPay:

### Step 1 - Configuration

FitPay feeds blindnet DevKit with general information (any Privacy Policy of the Employer, server locations, data retention policies) and provides a mapping between data categories in its database and [PRIV](https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md) terms.

blindnet's PRIV (Privacy Request Interchange Vocabulary) is an easy-to-use taxonomy of tags - an entry point to the whole world of automation. It allows to connect an existing system with blindnet's knowledge base and rule engines in order to deliver the ultimate privacy experience.

### Step 2 - Report key events

Whenever an important thing happens - an Employee opens an account, gives particular consent, or loses a job - FitPay lets blindnet DevKit know. A chain of events is constructed. With every new event the blindnet's Privacy Compiler (part of Privacy Computation Engine) updates a state of allowed processing.

<img height="300" src="/img/PCEexplained.gif" />

When an Employee makes a Privacy Request, the Privacy Computation Engine is able to resolve it against that state and deliver response recommendations or automatically issue responses.

### Step 3 - Replace the e-mail with Privacy Request Builder

<img align="right" height="200" src="/img/loglolessPRbuilder.png" />

Finally, FitPay can offer a nice user-friendly interface (part of blindnet DevKit) allowing Employees to make privacy requests as a part of their FitPay experience.

Many requests can get a reply immediately, with no human intervention (e.g. Transparency requests).
In some cases Privacy Computation Engine can be configured to only deliver response recommendations, subject to human (DPO/Employer) validation.

Only requests not falling into any of the PRIV categories still require human intervention.

## Result

Thanks to blindnet DevKit FitPay can offer its customers - Employers - a smart way to lower the costs of processing Privacy Requests.

Complying with privacy regulation mandates becomes an opportunity to build trust and offer superior user experience consistent with the brand's values.

## Need more?

blindnet DevKit does much more. It is a complete solution for [privacy-enabled connectedness](/docs/references/notions-of-privacy), allowing developers to quickly gain ground on all the three pillars of privacy: [Transparency, Confidentiality and Control](/docs/references/priv-eng-principles).

- _Working with sensitive data?_ Offer end-to-end encryption using [blindnet's encryption services](https://github.com/blindnet-io/api-scala). Perfect for keeping employee IDs secret from FitPay and accessible only by its customers.
- _Sharing Data with partners?_ Propagate users' Privacy Requests using blindnet's [Privacy Request Multicast Protocol](https://github.com/blindnet-io/product-management/blob/b7d2bd0aab509a5d83ed42822b0ba19e27bef905/refs/schemas/protocols/RFC-PRMP.md)

## See also

- [blindnet DevKit Feature Roadmap Q3 & Q4 2022](https://github.com/blindnet-io/devrel-management/blob/main/docs/roadmap/q3-2022.md)

## References

- [Cisco 2022 Data Privacy Benchmark Study](https://www.cisco.com/c/en/us/about/trust-center/data-privacy-benchmark-study.html)
- [Blindnet's White Paper: The Mixed Feelings of Privacy. May 2022](/pdf/white-papers/202205-the-mixed-feelings-of-privacy.pdf)

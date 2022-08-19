---
title: Roadmap
sidebar_position: 10
---

# blindnet DevKit Product Roadmap

| Status        | Snapshot                                                        |
| :------------ | :-------------------------------------------------------------- |
| **PR #**      | [#55](https://github.com/blindnet-io/devrel-management/pull/55) |
| **Author(s)** | [milstan](https://github.com/milstan) (milstan@blindnet.io)     |
| **Updated**   | 2022-07-16                                                      |

## Introduction

The purpose of this document is to give blindnet's clients and partners the visibility about what features can be expected when.

## Product Definition

[blindnet devkit](./lexicon#blindnet-devkit) is a set of software components for implementing [privacy-enabled connectedness](./notions-of-privacy#privacy-enabled-connectedness).

[Organizations](./lexicon#organization) use _blindnet devkit_ to build [Trust](./notions-of-privacy#privacy-is-strongly-linked-with-trust) among their Users, by allowing them to regulate [Privacy](./notions-of-privacy#definition) in the relationship they have with the Organization.

## Product Vision

[blindnet devkit](./lexicond#blindnet-devkit) is the _lingua franca_ for [privacy](./notions-of-privacy#definition) on the Web.

## Product Features

Through its components, blindnet devkit offers:

- **Complete Privacy Feature-set**: acts upon the 3 pillars of privacy in software systems [Confidentiality, Control, and Transparency](./priv-eng-principles):
  - **Confidentiality** (delivered by **(Distributed) Encryption Engine**):
    - e2ee - encrypt and decrypt data locally using SDKs and Web Components
    - Manage encryption in the context of multiple systems exchanging data
    - Support user in lost-access situations
    - Compatibility with 3rd-party identity providers
  - **Restitute Control to Data Subjects** (delivered by _Privacy Request Capture Interface_ of the **Privacy Request Manager**):
    - User-friendly interface for making Privacy Requests
    - Privacy Request transfer: Make a request once - reach all corresponding systems having your data
  - **Transparency** (delivered by Data Subject-facing Web Components of the **Metadata Engine** and by _Privacy Request Capture Interface_ of the **Privacy Request Manager**):
    - Inform-as-you-capture: Inform the data subjects about purposes and types of processing being done on their data, legal bases for processing and ways to exercise their rights
    - Collect consents during data capture
    - Single point of access to privacy-related information and controls
    - Transparent Privacy Request Response process and proof of compliance
- **(Out-of-the-box) Automated Privacy Management** (delivered by **Privacy Computation Engine**):
  - Single point of configuration for privacy metadata and workflows
  - Rich Privacy Metadata supporting automated response to most common Privacy Requests
  - Management of retention policies and automatic data expiry
  - Out-of-the box Privacy Requests resolution rule-sets for major regulations (GDPR etc.)
  - Automatically reconcile multiple legal bases for processing (Consents, Contracts, Legitimate Interests, etc.)
  - Configurable level of automation of Privacy Request Responses
  - Centralized interface from DPOs for Privacy Requests oversight and Management
  - Privacy Request history and proof of compliance
- **Interoperability** (delivered by **Interoperability Formats and Protocols**):
  - Shared understanding of privacy metadata and Privacy Request across systems sharing data
  - Coordinated response to Privacy Requests across systems sharing data
  - Consent and other Legal Base resolution in the context of multiple systems sharing data

<img align="right" height="200" caption="Privacy Stack" src="/img/stack.png" />

## Product Components

[blindnet devkit](./lexicon#blindnet-devkit) consists of a set of components, collectively called **Privacy Stack**. Those include:

- **(Distributed) Encryption Engine**: A tool to ensure data confidentiality in a distributed setting. Corresponds to [Encryption and Access Management Engine of HLA](./high-level-architecture#encryption-and-access-management-engine)
- **Metadata Engine**: Allows to create privacy-related metadata that enables cross-system privacy-management. Corresponds to [Capture Component of HLA](./high-level-architecture#capture-component) and handles correspondence between actual data and privacy-metadata
  <img align="right" height="200" caption="Privacy Request Builder" src="/img/prb.png" />
- **Privacy Request Manager**: Single point of communication around Privacy Requests. Allows Data Subjects to make Privacy Request in order to exercise control over their data. Allows DPOs to respond to Privacy Requests and generate proof of compliance. Corresponds to [Privacy Request Builder a.k.a. Privacy Request Capture Interface](./high-level-architecture#privacy-request-capture-interface) and [Data Consumer Interface](./high-level-architecture#data-consumer-interface)
- **Interoperability Formats and Protocols**: Allows Systems and their components to precisely communicate meta-data related to privacy using universally-understood semantics. Corresponds to [Schemas Component of HLA](./high-level-architecture#schemas)
- **Privacy Computation Engine**: Allows to automate the evaluation of compliance, retention date expiry, and the response to Privacy Requests. Corresponds to [Privacy Computation Engine component of HLA](./high-level-architecture#privacy-computation-engine)
- **Privacy-Informed Storage**: A data-base wrapper allowing to store data in a way optimized for maximal automation of privacy-workflows.

On top of **Privacy Stack**, blindnet may (alone, or in collaboration with partners) offer **Privacy Services** such as:

- Privacy Request processing (external DPO)
- Implementation services (Custom software and Privacy Stack integrations)
- Compliance Consulting services around compliance and best practices
- Management Consulting services, helping Organizations approach Privacy as an opportunity rather than as a threat

## Expected Availability of Components

<table>
<thead>
<tr>
<th style={{textAlign:'right'}}>Component</th>
<th style={{textAlign:'left'}}>2022-06-22</th>
<th style={{textAlign:'left'}}>2022-09-23</th>
<th style={{textAlign:'left'}}>2022-12-21</th>
</tr>
</thead>
<tbody>
<tr>
<td style={{textAlign:'right'}}>Encryption Engine</td>
<td colspan="2" style={{textAlign:'left'}}>Available to businesses through Privateform &mdash; cf. <a href="https://blindnet.io">blindnet.io</a>.<br/>Available to developers through libraries and APIs &mdash; cf. <a href="https://blindnet.dev/docs/quickstart">Quick Start</a>.</td>
<td style={{textAlign:'left'}}>Fully available as part of blindnet DevKit</td>
</tr>
<tr>
<td style={{textAlign:'right'}}>Metadata Engine</td>
<td style={{textAlign:'left'}}>NA</td>
<td style={{textAlign:'left'}}>Available with certain limitations. Fully supports Consents, Legal Bases, Privacy Requests and Privacy Request Responses.</td>
<td style={{textAlign:'left'}}>Fully available</td>
</tr>
<tr>
<td style={{textAlign:'right'}}>Privacy Request Manager</td>
<td style={{textAlign:'left'}}>Available to businesses through Privateform &mdash; cf. <a href="https://blindnet.io">blindnet.io</a>.<br/>Supports ACCESS, MODIFY and DELETE Privacy Requests.</td>
<td colspan="2" style={{textAlign:'left'}}>Fully available as part of blindnet DevKit</td>
</tr>
<tr>
<td style={{textAlign:'right'}}>Interoperability Formats and Protocols</td>
<td style={{textAlign:'left'}}>First version of <a href="https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md">PRIV</a> available.</td>
<td colspan="2" style={{textAlign:'left'}}>Stable version of PRIV. First version of Privacy Request Multicast Protocol.</td>
</tr>
<tr>
<td style={{textAlign:'right'}}>Privacy Computation Engine</td>
<td style={{textAlign:'left'}}>NA</td>
<td style={{textAlign:'left'}}>Fully supports Consents, Legal Bases, Privacy Requests and Privacy Request Responses. Limited support for Capture-based retention policies. Full Support for Event-based retention policies &mdash; e.g. end of contract or closed account</td>
<td style={{textAlign:'left'}}>Fully available</td>
</tr>
<tr>
<td style={{textAlign:'right'}}>Privacy-Informed Storage</td>
<td colspan="2" style={{textAlign:'left'}}>Available to businesses through Privateform &mdash; cf. <a href="https://blindnet.io">blindnet.io</a></td>
<td style={{textAlign:'left'}}>Fully available as part of blindnet DevKit. Supports direct storage of Data Captures and Data Capture Fragments for purposes of maximal level of privacy automation</td>
</tr>
</tbody>
</table>

## References

- **[Product Lexicon]**: [RFC Lexicon 2](./lexicon)
- **[Communication Vocabulary]**: [RFC Vocabulary](https://github.com/blindnet-io/communication-management/blob/main/docs/vocabulary/RFC-vocabulary.md)
- **[Notion of Privacy]**: [Definitions from literature](./notions-of-privacy)
- **[HLA]**: [High Level Architecture](./high-level-architecture)

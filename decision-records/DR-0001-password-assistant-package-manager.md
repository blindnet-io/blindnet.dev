# Selecting a package manager for the password assistant monorepo

| Status      | {_draft_ / proposed / rejected / accepted / deprecated / … / superseded by [XXX](XXX.md)} |
| :---------- | :-------------------------------------------------------------------------------------- |
| **PR #**    | [NNN](https://github.com/blindnet-io/PROJECT/pull/NNN) (update when you have PR #)      |
| **Sponsor** | First-name Last-name (email)                                                            |

## Context and Problem Statement

What monorepo package manager should we select for the password assistant repository?

## Decision Drivers <!-- optional -->

1. Must support variety of languages, especially those which we currently or plan to use Typescript, Javascript, Scala
2. Should for equally well for small and large monorepos, i.e. ease of use and scalability
3. Should support publishing to npm 
4. Should support testing on an integration and single package level
5. Should be actively supported, and the larger the community the better

## Considered Options

- Lerna
- Nx
- Pants
- Turborepo

## Decision Outcome

Chosen option: "{option 1}", because {justification. e.g., only option, which meets k.o. criterion decision driver | which resolves force {force} | … | comes out best (see below)}.

### Positive Consequences <!-- optional -->

- {e.g., improvement of quality attribute satisfaction, follow-up decisions required, …}
- …

### Negative Consequences <!-- optional -->

- {e.g., compromising quality attribute, follow-up decisions required, …}
- …

## Pros and Cons of the Options <!-- optional -->

### Lerna

{example | description | pointer to more information | …} <!-- optional -->

#### Fufilment of criteria

1. Somewhat
2. No
3. Yes
4. Yes
5. Somewhat

### Nx

{example | description | pointer to more information | …} <!-- optional -->

- Good, because {argument a}
- Good, because {argument b}
- Bad, because {argument c}
- … <!-- numbers of pros and cons can vary -->

#### Fufilment of criteria

1. Yes
2. Yes
3. Yes
4. Yes
5. Yes

### Pants

{example | description | pointer to more information | …} <!-- optional -->

- Good, because {argument a}
- Good, because {argument b}
- Bad, because {argument c}
- … <!-- numbers of pros and cons can vary -->

#### Fufilment of criteria

1. Yes|No|Somewhat
2. Yes|No|Somewhat
3. Yes|No|Somewhat
4. Yes|No|Somewhat
5. Yes|No|Somewhat

### Turborepo   

{example | description | pointer to more information | …} <!-- optional -->

- Good, because {argument a}
- Good, because {argument b}
- Bad, because {argument c}
- … <!-- numbers of pros and cons can vary -->

#### Fufilment of criteria

1. Yes|No|Somewhat
2. Yes|No|Somewhat
3. Yes|No|Somewhat
4. Yes|No|Somewhat
5. Yes|No|Somewhat

## Links <!-- optional -->

- {Link type} {Link to ADR} <!-- example: Refined by [ADR-0005](0005-example.md) -->
- … <!-- numbers of links can vary -->

<!-- markdownlint-disable-file MD013 -->
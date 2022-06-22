# Selecting a package manager for the password assistant monorepo

| Status      | {draft}                                                                                  |
|:------------|:-----------------------------------------------------------------------------------------|
| **PR #**    | [22](https://github.com/blindnet-io/blindnet.dev/pull/22) (update when you have PR #)    |
| **Sponsor** | First-name Last-name (email)                                                             |

## Context and Problem Statement

What monorepo package manager should we select for the password assistant repository?

## Decision Drivers / Criteria <!-- optional -->

1. Must support languages which we plan to use in this monorepo: Typescript and 
   Javascript
2. The password assistant project will be relatively small, so we don't need 
   a tool built for large monorepos. Or at least it should not be cumbersome 
   to use the tool with a smaller monorepo.
3. Should support publishing to npm 
4. Should support testing on an integration and single package level
5. Should be actively supported

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

### [Lerna](https://lerna.js.org/)

- Ownership and development was recently transferred to Nrwl, the company 
  that created Nx.

#### Fufilment of criteria

1. No - does not natively support ts. However it's not to configure the build script to first compile ts.
2. Yes - very lightweight
3. Yes
4. Yes
5. Somewhat - it is unclear what the future plan for Lerna is now that Nrwl 
   has taken over.

### [Nx](https://nx.dev/)


#### Fufilment of criteria

1. Yes
2. Somewhat
3. Yes
4. Yes
5. Yes

### [Pants](https://v1.pantsbuild.org/index.html)

Lack of support for ts and seems overall less polished, essentially a worse 
turborepo for our use case.

#### Fufilment of criteria

1. No - Doesn't natively support ts
2. -
3. -
4. -
5. -

### [Turborepo](https://turborepo.org/)

{example | description | pointer to more information | …} <!-- optional -->

- Good, because {argument a}
- Good, because {argument b}
- Bad, because {argument c}
- … <!-- numbers of pros and cons can vary -->

#### Fufilment of criteria

1. Yes - only supports js/ts, but this is all we plan to use
2. Yes - ideal for small-medium monorepos, lightweight 
3. Yes
4. Yes
5. Yes

## Links <!-- optional -->

- [Turborepo + Lerna](https://turborepo.org/docs/guides/migrate-from-lerna)
- [Nx vs turborepo comparison](https://blog.theodo.com/2022/02/architecting-a-modern-monorepo/)

<!-- markdownlint-disable-file MD013 -->

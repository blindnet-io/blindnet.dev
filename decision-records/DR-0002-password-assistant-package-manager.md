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

Lightweight tool for managing multiple js/ts packages in the same repository. Ownership and development was recently transferred to Nrwl, the company that created Nx.
Works very well for building, testing, and publishing libraries. If we end up needing added functionality for the web component portion of the password assistant we could consider adding turborepo on top of Lerna.

#### Fufilment of criteria

1. Somewhat - Must configure build scripts to first compile ts.
2. Yes - very lightweight
3. Yes
4. Yes
5. Somewhat - It appears that Lerna will continue to be developed and supported by Nrwl, so we don't have to worry about it being depricated in favour of Nx.

### [Nx](https://nx.dev/)

Meets all criteria, however it's likely more than we need and may add 
unnecessary overhead. 

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
2. Yes
3. Yes
4. Yes
5. Yes

### [Turborepo](https://turborepo.org/)

A monorepo tool mainly for js/ts projects. It is geared equally towards web 
deployment as it is package publishing. Can also be used in tandem with 
Lerna, so we could use lerna to manage the js/ts package portion and then 
move to Turborepo once we start doing more web component stuff.

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

# Selecting a package manager for the password assistant monorepo

| Status      | {draft}                                                                                  |
|:------------|:-----------------------------------------------------------------------------------------|
| **PR #**    | [22](https://github.com/blindnet-io/blindnet.dev/pull/22)   |
| **Sponsor** | First-name Last-name (email)                                                             |

## Context and Problem Statement

What monorepo package manager should we select for the password assistant repository?

## Decision Drivers / Criteria <!-- optional -->

1. Must support languages which we plan to use in this monorepo: Typescript and 
   Javascript
2. The password assistant project will be relatively small, so we don't need 
   a tool built for large monorepos. It should not be cumbersome to use the 
   tool with a small monorepo.
3. Should support publishing to npm 
4. Should support testing on an integration and single package level
5. Should be actively supported

## Considered Options

- Lerna
- Nx
- Pants
- Turborepo

## Decision Outcome

Chosen option: **Lerna**, for the following reasons:
- Meets all criteria
- Lightweight
- Easiest to use
- Excellent documentation
- Leaves door open to transition to a more feature rich tool in the future, 
  such as Nx or Turborepo

## Pros and Cons of the Options <!-- optional -->

### [Lerna](https://lerna.js.org/)

Lightweight tool for managing multiple js/ts packages in the same repository. Ownership and development was recently transferred to Nrwl, the company that created Nx.
Works very well for building, testing, and publishing libraries. If we end up needing added functionality for the web component portion of the password assistant we could consider adding turborepo on top of Lerna.

#### Fufilment of criteria

**1. Must support languages which we plan to use in this monorepo: 
Typescript and Javascript**
    
Technically Typescript support is not built in however it is simple to configure
the build script to compile typescript.

**2. The password assistant project will be relatively small, so we don't need
   a tool built for large monorepos. It should not be cumbersome to use the
   tool with a small monorepo.**

Yes - very lightweight

**3. Should support publishing to npm**

Yes

**4. Should support testing on an integration and single package level**

Yes

**5. Should be actively maintained/supported**

Somewhat - it is unclear what the future plan for Lerna is now that Nrwl
has taken over but there is no indication that it is going away. If anything 
this may be a benefit if we ever need to switch to nx, as there will likely be
more support for making that transition as both tools are developed by the 
same company.

### [Nx](https://nx.dev/)

Meets all criteria, however it's likely more than we need and may add 
unnecessary overhead. For a much larger monorepo with multiple different languages, apps, and frameworks, nx warrants consideration.

#### Fufilment of criteria

**1. Must support languages which we plan to use in this monorepo:
Typescript and Javascript**

Like Lerna, can be configured to build Typescript.

**2. The password assistant project will be relatively small, so we don't need
a tool built for large monorepos. It should not be cumbersome to use the
tool with a small monorepo.**

Intended more for large projects, which may make it cumbersome for our use case.

**3. Should support publishing to npm**

Yes

**4. Should support testing on an integration and single package level**

Yes

**5. Should be actively maintained/supported**

Yes

### [Pants](https://v1.pantsbuild.org/index.html)

Seems overall less polished, and offers no additional useful functionality 
when compared to the other options, specifically Lerna.

#### Fufilment of criteria

**1. Must support languages which we plan to use in this monorepo:
Typescript and Javascript**

Same as previous two, can be configured to compile typescript.

**2. Should not be cumbersome to use the tool with a small monorepo.**

Intended more for large projects, which may make it cumbersome for our use case.

**3. Should support publishing to npm**

Yes

**4. Should support testing on an integration and single package level**

Yes

**5. Should be actively maintained/supported**

Yes

### [Turborepo](https://turborepo.org/)

A monorepo tool mainly for js/ts projects. It is geared equally towards web 
deployment as it is package publishing. Can also be used in tandem with 
Lerna, so we could use lerna to manage the js/ts package portion and then 
move to Turborepo once we start doing more web component work, if needed.

#### Fufilment of criteria

1. Yes - only supports js/ts, but this is all we plan to use
2. Yes - ideal for small-medium monorepos, lightweight 
3. Yes
4. Yes
5. Yes

## Links <!-- optional -->

- [Monorepo tool comparison](https://monorepo.tools/)
- [Turborepo + Lerna](https://turborepo.org/docs/guides/migrate-from-lerna)
- [Nx vs turborepo comparison](https://blog.theodo.com/2022/02/architecting-a-modern-monorepo/)

<!-- markdownlint-disable-file MD013 -->

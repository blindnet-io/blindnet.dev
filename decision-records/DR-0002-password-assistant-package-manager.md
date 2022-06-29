# Selecting a package manager for the password assistant monorepo

| Status      | {draft}                                                                                  |
|:------------|:-----------------------------------------------------------------------------------------|
| **PR #**    | [22](https://github.com/blindnet-io/blindnet.dev/pull/22)   |
| **Sponsor** | First-name Last-name (email)                                                             |

## Context and Problem Statement

What monorepo package manager should we select for the password assistant repository?

## Decision Drivers / Criteria <!-- optional -->

1. Must support languages and technologies which we plan to use in this monorepo: Javascript, Typescript, Web Components
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
  such as Nx or Turborepo.
  
Initially, I was concerned that Lerna would not be suitable to developing web components. However
further research has alleviated this concern and I believe it is the best choice. If our requirements change
down the road, there is support from both Nx and Turborepo to transition to their tools from Lerna.

## Pros and Cons of the Options <!-- optional -->

### [Lerna](https://lerna.js.org/)

Lightweight tool for managing multiple js/ts packages in the same repository. Ownership and development was recently transferred to Nrwl, the company that created Nx.
Works very well for building, testing, and publishing libraries. If we end up needing added functionality for the web component portion of the password assistant we could consider adding turborepo on top of Lerna.

#### Fufilment of criteria

**1. Must support languages which we plan to use in this monorepo: Typescript, Javascript, Web Components**
    
Technically Typescript support is not built in however it is simple to configure
the build script to compile typescript.

Lerna can also be used for developing web components ([example](https://javascript.plainenglish.io/building-a-npm-library-with-web-components-using-lerna-rollup-and-jest-9f76f59348ba)).

**2. Should not be cumbersome to use the tool with a small monorepo.** - Fulfilled

Very lightweight and easy to use.

**3. Should support publishing to npm** - Fulfilled

**4. Should support testing on an integration and single package level** - Fulfilled

**5. Should be actively maintained/supported** - Fulfilled

Somewhat - it is unclear what the future plan for Lerna is now that Nrwl
has taken over but there is no indication that it is going away. If anything 
this may be a benefit if we ever need to switch to nx, as there will likely be
more support for making that transition as both tools are developed by the 
same company.

### [Nx](https://nx.dev/)

Meets all criteria, however it's likely more than we need and may add 
unnecessary overhead. For a much larger monorepo with multiple different languages, apps, and frameworks, 
nx warrants consideration.

#### Fufilment of criteria

**1. Must support languages which we plan to use in this monorepo: Typescript, Javascript, Web Components**

Like Lerna, can be configured to build Typescript.

**2. Should not be cumbersome to use the tool with a small monorepo.** - Not fulfilled

Intended more for large projects, which may make it cumbersome for our use case.

**3. Should support publishing to npm** - Fufilled

**4. Should support testing on an integration and single package level** - Fulfilled

**5. Should be actively maintained/supported** - Fulfilled

### [Pants](https://v1.pantsbuild.org/index.html)

While it does fulfill all criteria, Pants feels overall less polished. It offers no additional useful functionality 
when compared to the other options, specifically Lerna.

#### Fufilment of criteria

**1. Must support languages which we plan to use in this monorepo: Typescript, Javascript, Web Components** - Fulfilled

Same as previous two, can be configured to compile typescript.

**2. Should not be cumbersome to use the tool with a small monorepo.** - Fulfilled

**3. Should support publishing to npm** - Fulfilled

**4. Should support testing on an integration and single package level** - Fulfilled

**5. Should be actively maintained/supported** - Fulfilled

### [Turborepo](https://turborepo.org/)

A monorepo tool mainly for js/ts projects. It is geared equally towards web 
development/components as it is package publishing. Can also be used in tandem with 
Lerna, so we could use lerna to manage the js/ts package portion and then 
move to Turborepo once we start doing more web component work, if needed.

The documentation and examples available are not as good as Lerna or Nx, likely because it is a newer tool.
It being new could also lead to more bugs, so it may be best to give this tool a few years to mature
before considering it.

#### Fufilment of criteria

**1. Must support languages which we plan to use in this monorepo: Typescript, Javascript, Web Components** - Fulfilled

Same as previous two, can be configured to compile typescript.

**2. Should not be cumbersome to use the tool with a small monorepo.** - Fulfilled

Ideal for small-medium monorepos, fairly lightweight.

**3. Should support publishing to npm** - Fulfilled

**4. Should support testing on an integration and single package level** - Fulfilled

**5. Should be actively maintained/supported** - Fulfilled

## Links <!-- optional -->

- [Monorepo tool comparison](https://monorepo.tools/)
- [Turborepo + Lerna](https://turborepo.org/docs/guides/migrate-from-lerna)
- [Nx vs turborepo comparison](https://blog.theodo.com/2022/02/architecting-a-modern-monorepo/)

<!-- markdownlint-disable-file MD013 -->

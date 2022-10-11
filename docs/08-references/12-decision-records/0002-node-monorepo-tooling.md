# Selecting a tool to manage multiple JS/TS packages in the same repository

| Status      | draft                                                     |
| :---------- | :-------------------------------------------------------- |
| **PR #**    | [22](https://github.com/blindnet-io/blindnet.dev/pull/22) |
| **Author**  | Justin Boileau (justin@blindnet.io)                       |
| **Sponsor** | Noël Macé (noel@blindnet.io)                              |

## Context and Problem Statement

What tooling should we use to manage several JS/TS packages in the same repository?

## Decision Drivers / Criteria

1. Must support languages and technologies which we plan to use in this monorepo: Javascript, Typescript, Web Components
2. Must be as simple to use and configure as possible.
3. Should support publishing to npm
4. Should support testing on an integration and single package level
5. Should be actively supported by an active and large community.

## Considered Options

- [Lerna](https://lerna.js.org/)
- [Nx](https://nx.dev/)
- [Pants](https://v1.pantsbuild.org/index.html)
- [Turborepo](https://turborepo.org/)
- custom npm run scripts with [npm-run-all](https://github.com/mysticatea/npm-run-all) and/or [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) (see [modern-web](https://github.com/modernweb-dev/web) and [open-wc](https://github.com/open-wc/open-wc) for examples)

## Decision Outcome

Chosen option: **Lerna** with **Yarn Workspaces**, for the following reasons:

- Works well together
- Yarn (classic v1) is already used by default for most blindnet Node.js projects
- Meets all criteria
- Lightweight
- Easiest to use
- Excellent documentation
- Leaves door open to transition to a more feature rich tool in the future, such as Nx or Turborepo.

## Pros and Cons of the Options

### [Lerna](https://lerna.js.org/)

Lightweight tool for managing multiple js/ts packages in the same repository.
Lerna can be configured to use npm or yarn workspaces under the hood.
When using Lerna in "yarn mode", it is essentially a wrapper that provides simplified syntax and UI, [computation caching](https://lerna.js.org/docs/core-concepts/computation-caching), and
[distributed task execution](https://lerna.js.org/docs/core-concepts/distributed-task-execution).
Ownership and development was recently transferred to Nrwl, the company that created Nx.
Works very well for building, testing, and publishing libraries.
If we end up needing added functionality for the web component portion of the password assistant we could consider adding turborepo or nx on top of Lerna.

The main con of using Lerna is the burden on developers to install an additional tool to work with our monorepo.

#### Fulfillment of criteria

**1. Must support languages which we plan to use in this monorepo: Typescript, Javascript, Web Components** - Fulfilled

Technically Typescript support is not built in however it is simple to configure the build script to compile typescript.

Lerna can also be used for developing web components ([example](https://javascript.plainenglish.io/building-a-npm-library-with-web-components-using-lerna-rollup-and-jest-9f76f59348ba)).

**2. Must be as simple to use and configure as possible.** - Fulfilled

Very lightweight and easy to use.

**3. Should support publishing to npm** - Fulfilled

**4. Should support testing on an integration and single package level** - Fulfilled

**5. Should be actively maintained/supported** - Fulfilled

Somewhat - it is unclear what the future plan for Lerna is now that Nrwl has taken over but there is no indication that it is going away.
If anything this may be a benefit if we ever need to switch to Nx, as there will likely be more support for making that transition as both tools are developed by the same company.

### [Nx](https://nx.dev/)

Meets all criteria, however it's likely more than we need and may add unnecessary overhead.
For a much larger monorepo with multiple different languages, apps, and frameworks, Nx warrants consideration.

#### Fulfillment of criteria

**1. Must support languages which we plan to use in this monorepo: Typescript, Javascript, Web Components** - Fulfilled

Like Lerna, can be configured to build Typescript.

**2. Must be as simple to use and configure as possible.** - Not fulfilled

Intended more for large projects, which may make it cumbersome for our use case.

**3. Should support publishing to npm** - Fufilled

**4. Should support testing on an integration and single package level** - Fulfilled

**5. Should be actively maintained/supported** - Fulfilled

### [Pants](https://v1.pantsbuild.org/index.html)

While it does fulfill all criteria, Pants feels overall less polished.
It offers no additional useful functionality when compared to the other options, specifically Lerna.

#### Fulfillment of criteria

**1. Must support languages which we plan to use in this monorepo: Typescript, Javascript, Web Components** - Fulfilled

Same as previous two, can be configured to compile typescript.

**2. Must be as simple to use and configure as possible.** - Fulfilled

**3. Should support publishing to npm** - Fulfilled

**4. Should support testing on an integration and single package level** - Fulfilled

**5. Should be actively maintained/supported** - Fulfilled

### [Turborepo](https://turborepo.org/)

A monorepo tool mainly for js/ts projects. It is geared equally towards web development/components as it is package publishing.
Can also be used in tandem with Lerna, so we could use lerna to manage the js/ts package portion and then move to Turborepo once we start doing more web component work, if needed.

The documentation and examples available are not as good as Lerna or Nx, likely because it is a newer tool.
It being new could also lead to more bugs, so it may be best to give this tool a few years to mature before considering it.

#### Fulfillment of criteria

**1. Must support languages which we plan to use in this monorepo: Typescript, Javascript, Web Components** - Fulfilled

Same as previous two, can be configured to compile typescript.

**2. Must be as simple to use and configure as possible.** - Fulfilled

Ideal for small-medium monorepos, fairly lightweight.

**3. Should support publishing to npm** - Fulfilled

**4. Should support testing on an integration and single package level** - Fulfilled

**5. Should be actively maintained/supported** - Fulfilled

### [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/)

Yarn workspaces comes with all Yarn versions >= 1.0.
This is a huge benefit as it allows developers to use our monorepo without installing any additional tools besides Yarn.
Allows executing scripts to build, run, test, and publish some or all packages.

The main con of yarn workspaces is the lack of features which larger monorepos benefit from, such as distributed task execution and computation caching.
However, the packages contained in this monorepo (and the monorepos itself) are quite small, so this con should be irrelevant.

#### Fulfillment of criteria

**1. Must support languages which we plan to use in this monorepo: Typescript, Javascript, Web Components** - Fulfilled

Yes, can configure build script to compile TS.

**2. Must be as simple to use and configure as possible.** - Fulfilled

Comes with all newer versions of yarn, meaning developers don't need to install any additional monorepo tools.

**3. Should support publishing to npm** - Fulfilled

**4. Should support testing on an integration and single package level** - Fulfilled

**5. Should be actively maintained/supported** - Fulfilled

## Links

- [Monorepo tool comparison](https://monorepo.tools/)
- [Turborepo + Lerna](https://turborepo.org/docs/guides/migrate-from-lerna)
- [Nx vs turborepo comparison](https://blog.theodo.com/2022/02/architecting-a-modern-monorepo/)

<!-- markdownlint-disable-file MD013 -->
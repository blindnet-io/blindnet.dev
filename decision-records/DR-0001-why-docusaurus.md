# Why we use Docusaurus

| Status      | implemented                                                                             |
| :---------- | :-------------------------------------------------------------------------------------- |
| **PR #**    | [2](https://github.com/blindnet-io/blindnet-docs/issues/2)                              |
| **Author**  | Marko Stakic (marko@blindnet.io)                                                        |
| **Reviwer** | Noël Macé (noel@blindnet.io)                                                            |

## Context and Problem Statement

Blindnet devkit is a project aimed to developers and needs an appropriate documentation. There are multiple OSS engines to render the static documentation websites and we are exploring the best suited one.

## Decision Drivers

Since the devkit has implementations in multiple programming languages, having content tabs component (tab per language) is crucial.

Other drivers:
- what features are available
- ease of use
- customization capabilities
- look and UX

## Considered Options

- [Docusaurus](https://docusaurus.io)
- [MkDocs](https://www.mkdocs.org)
- [Rocket](https://rocket.modern-web.dev)
- [docsify](https://docsify.js.org)
- [mdBook](https://rust-lang.github.io/mdBook)
- [GitBook](https://www.gitbook.com)
- [Read the Docs](https://readthedocs.org)

## Decision Outcome

Docusaurus is for us the best suited project for rendering documentation. It is superior in terms of easiness of use, feature richness, overall look and has a large community of users and maintainers.

## Pros and Cons of the Options

### Docusaurus

#### pros
- docs can be written in both Markdown and [React](https://reactjs.org)
- large community
- feature rich
- beautiful theme and modern look
- integration with [Algolia](https://www.algolia.com) for searching the docs

#### cons
- only one theme
- not so great plugins for offline search

### MkDocs

#### pros
- feature rich
- lot of themes (e.g. [material](https://squidfunk.github.io/mkdocs-material)
- good community and a lot of plugins

#### cons
- changing the theme and adding custom HTML/CSS is cumbersome
- outdated look

### Rocket

#### cons
- their website didn't work well, some blocks were not rendering in Firefox
- maintenance issues
- general static site builder, not specialised for documentation

### docsify

#### pros
- easily customizable with Markdown and [Vue](https://vuejs.org)

#### cons
- no native content tabs (plugin for content tabs looks awkward)
- less features than other options
- simplistic result

### mdBook

#### pros
- good local search engine
- native executable code blocks for [Rust](https://www.rust-lang.org)

#### cons
- made specifically for Rust
- no content tabs

### GitBook

#### pros
- easy to set-up
- integration with third party services (Slack, Github, etc.)
- feature rich
- beautiful, modern look

#### cons
- premium product

### Read the Docs

#### pros
- easy to use

#### cons
- suited for smaller projects
- outdated look
- lacks features

## Links

- a part of [update docs epic](https://github.com/blindnet-io/communication-management/issues/14)

<!-- markdownlint-disable-file MD013 -->

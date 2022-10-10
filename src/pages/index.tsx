import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import GitHubButton from 'react-github-btn';
import OpenSourceSVG from './illustrations/open-source.svg';
import FilesSentSVG from './illustrations/files-sent.svg';
import ScienceSVG from './illustrations/alien-science.svg';
// @ts-ignore
import DevkitFeaturesList from '@site/docs/_partials/_features-list.mdx';

function Banner() {
  return (
    <div>
      <div className={styles.banner}>
        Want to learn more about the blindnet company?
        <br />
        Go check <a href="https://blindnet.io">blindnet.io</a>&#8202;.
      </div>
    </div>
  );
}

function HeaderHero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)} data-theme="dark">
      <div className={clsx('container', styles.heroBanner__container)}>
        <h1 className={clsx('hero__title', styles.heroBanner__title)}>
          blindnet&#8203;<b>.dev</b>
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="https://join.slack.com/t/blindnet/shared_invite/zt-1arqlhqt3-A8dPYXLbrnqz1ZKsz6ItOg">
            Join Slack
          </Link>
          <Link className="button button--secondary" to="/docs/tutorials/intro">
            Get Started!
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <GitHubButton
              // @ts-ignore
              className={styles.indexCtasGitHubButton}
              href="https://github.com/blindnet-io/blindnet.dev"
              data-size="large"
              aria-label="Star blindnet-io/blindnet.dev on GitHub"
            >
              Star
            </GitHubButton>
          </span>
        </div>
      </div>
    </header>
  );
}

function DevKit() {
  return (
    <section className={styles.explainerSection}>
      <div className={styles.twoColumns}>
        <div className={styles.twoColumns__column}>
          <FilesSentSVG className={styles.twoColumns__illustration} />
        </div>
        <div className={styles.twoColumns__column}>
          <h2>Develop Trustworthy Systems with Ease!</h2>
          <p>
            The blindnet devkit enables secured collection and automated management of sensitive data while helping to develop trustworthy
            applications via premade privacy-management user interfaces.
          </p>
          <p>
            It is made of several independent, yet cohesive Open Source libraries, services and tools together enabling confidentiality,
            control and compliance with regulation, by supporting:
          </p>
          <DevkitFeaturesList />
          <p>
            Follow our <a href="/docs/encryption/quickstart">Quick Start</a> guide to understand how the components plays together, and
            explore the <a href="/docs/">documentation</a> to learn more.
          </p>
          <div className={styles.indexCtas}>
            <Link className="button button--primary" to="/docs/tutorials/intro">
              Get Started!
            </Link>
            <Link className="button button--secondary" to="/docs/">
              Explore the docs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function OpenSource() {
  return (
    <section className={clsx(styles.explainerSection, styles.tint)}>
      <div className={styles.twoColumns}>
        <div className={styles.twoColumns__column}>
          <h2>Always Open</h2>
          <p>At blindnet, we strongly think Openness and Privacy are two sides of the same coin.</p>
          <p>
            We meticulously follow the{' '}
            <a href="https://github.com/blindnet-io/openness-framework/blob/main/principles.md" target="_blank" rel="noopener noreferrer">
              Openness Principles
            </a>{' '}
            in all matters, guided by the{' '}
            <a href="https://github.com/blindnet-io/openness-framework" target="_blank" rel="noopener noreferrer">
              Openness Framework
            </a>{' '}
            we defined and constantly update.
          </p>
          <p>
            Obviously, this means all the core components of blindnet devkit are Open Source, following an Open Core model. But we go
            further than that: except when absolutely needed, all the contents we build and work with are and will always stay available to
            anyone and open to contribution. This includes every important{' '}
            <a
              href="https://github.com/blindnet-io/openness-framework/tree/main/DecisionFramework"
              target="_blank"
              rel="noopener noreferrer"
            >
              decision
            </a>{' '}
            we take and every <a href="https://github.com/blindnet-io/product-management">specification and guiding document</a> we work
            with.
          </p>
          <p>
            Making all matters easily accessible and intelligible to everyone is a top priority at blindnet. If you feel any information is
            missing or is incomplete, please{' '}
            <a
              href="https://github.com/blindnet-io/devrel-management/issues/new?assignees=noelmace&labels=request%2Ctriage&template=request.yml&title=%5BRequest%5D%3A+"
              target="_blank"
              rel="noopener noreferrer"
            >
              let us know
            </a>
            !
          </p>
        </div>
        <div className={styles.twoColumns__column}>
          <OpenSourceSVG className={styles.twoColumns__illustration} />
        </div>
      </div>
    </section>
  );
}

function Construction() {
  return (
    <section className={styles.explainerSection}>
      <div className={styles.twoColumns}>
        <div className={styles.twoColumns__column}>
          <ScienceSVG className={styles.twoColumns__illustration} />
        </div>
        <div className={styles.twoColumns__column}>
          <h2>Constantly Innovating</h2>
          <p>
            Our team of developers, PhDs, security engineers and DevX experts is constantly working on new ways to improve and extend the
            blindnet devkit.
          </p>
          <p>
            We are always open to new ideas and suggestions, especially from <strong>You the developers</strong>, to help us build exactly
            what <strong>You</strong> need in order to make privacy ubiquitous.
          </p>
          <div className={styles.indexCtas}>
            <Link className="button button--primary" to="https://github.com/blindnet-io">
              Watch and Contribute
            </Link>
            <Link
              className="button button--secondary"
              to="https://github.com/blindnet-io/devrel-management/issues/new?assignees=noelmace&labels=request%2Ctriage&template=request.yml&title=%5BRequest%5D%3A+"
            >
              Make a Wish
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title="" description="">
      <Banner />
      <HeaderHero />
      <DevKit />
      <OpenSource />
      <Construction />
    </Layout>
  );
}

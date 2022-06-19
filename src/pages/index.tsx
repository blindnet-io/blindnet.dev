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
        <h1 className={clsx('hero__title', styles.heroBanner__title)}>blindnet&#8203;<b>.dev</b></h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.indexCtas}>
          <Link className="button button--primary" to="https://join.slack.com/t/blindnet/shared_invite/zt-1arqlhqt3-A8dPYXLbrnqz1ZKsz6ItOg">
            Join Slack
          </Link>
          <Link className="button button--secondary" to="/docs/quickstart">
            Start Encrypting!
          </Link>
          <span className={styles.indexCtasGitHubButtonWrapper}>
            <GitHubButton
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

function E2EEncryption() {
  return (
    <section className={styles.explainerSection}>
      <div className={styles.twoColumns}>
        <div className={styles.twoColumns__column}>
          <FilesSentSVG className={styles.twoColumns__illustration} />
        </div>
        <div className={styles.twoColumns__column}>
          <h2>E2E Encryption in a Snap</h2>
          <p>
            Blindnet devkit allows to manage <Link to="docs/extra/qna#what-is-end-to-end-encryption">end-to-end encrypted</Link> data with just a few lines of code, without requirering any complexe set-up or expertise in
            cryptography.
          </p>
          <p>
            Follow our <a href="/docs/quickstart">Quick Start</a> guide to see how in a few minutes, or explore the{' '}
            <a href="/docs/introduction">documentation</a> to learn more.
          </p>
          <div className={styles.indexCtas}>
            <Link className="button button--primary" to="/docs/quickstart">
              Get Started!
            </Link>
            <Link className="button button--secondary" to="/docs/introduction">
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
            Obviously, this mean all the core components of blindnet devkit and privacy stack are Open Source, following an Open Core model. But we go further that that: except when absolutly needed, all the contents we build and work with are and will always stay available to anyone and open to contribution. This include every important <a href="https://github.com/blindnet-io/openness-framework/tree/main/DecisionFramework" target="_blank" rel="noopener noreferrer">decision</a> we take and every <a href="https://github.com/blindnet-io/product-management">specification and guiding documents</a> we work with.
          </p>
          <p>
            Making all matters easily accessible and intelligible to everyone is a top priority at blindnet. If you feek any information is missing or incomplete, please <a href="https://github.com/blindnet-io/devrel-management/issues/new?assignees=noelmace&labels=request%2Ctriage&template=request.yml&title=%5BRequest%5D%3A+" target="_blank" rel="noopener noreferrer">let us know</a>!
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
            Our team of PhDs, engineers, DevX experts and developers is constantly working on new ways to improve and extend the blindnet devkit.
          </p>
          <p>
            We are always open to new ideas and suggestions, especially from <strong>You the developers</strong>, to help us build exactly what <strong>You</strong> need in order to make privacy ubiquitous.
          </p>
          <div className={styles.indexCtas}>
            <Link className="button button--primary" to="https://github.com/blindnet-io">
              Watch and Contribute
            </Link>
            <Link className="button button--secondary" to="https://github.com/blindnet-io/devrel-management/issues/new?assignees=noelmace&labels=request%2Ctriage&template=request.yml&title=%5BRequest%5D%3A+">
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
      <E2EEncryption />
      <OpenSource />
      <Construction />
    </Layout>
  );
}

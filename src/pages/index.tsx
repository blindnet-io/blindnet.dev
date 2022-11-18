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

function PrivacyPortal() {
  return (
    <section className={styles.explainerSection}>
      <div className={styles.twoColumns}>
        <div className={styles.twoColumns__column}>
          <img className={styles.twoColumns__illustration} src="img/product/privacy_portal.png"/>
        </div>
        <div className={styles.twoColumns__column}>
          <h2>Set-up a modern Privacy Portal in minutes</h2>
          <p>Stop using e-mail for processing Privacy Requests (not compliant with GDPR security mandates).</p>
          <p>Privacy Requests are structured at entry for easier processing.</p>
          <p>Built as a configurable Web Component, our tool integrates easily in your web page.</p>
          <div className={styles.indexCtas}>
            <Link className="button button--primary" to="/docs/tutorials/intro">
              Get Started!
            </Link>
            <Link className="button button--secondary" to="https://dogfood.blindnet.io/privacy_portal/index.html">
              See it in action
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivacyPortal() {
  return (
    <section className={styles.explainerSection}>
      <div className={styles.twoColumns}>
        <div className={styles.twoColumns__column}>
          <h2>Manage Requests</h2>
          <p>Review and Manage Data Subject Requests (DSR) a.k.a. Privacy Requests all in one place.</p>
          <p>View past responses and demonstrate compliance in case of control.</p>
          <p>Out component can be integrated in your own customer management tool.</p>
          <div className={styles.indexCtas}>
            <Link className="button button--primary" to="/docs/interfaces/dci">
              Learn how it works
            </Link>
          </div>
        </div>
        <div className={styles.twoColumns__column}>
          <img className={styles.twoColumns__illustration} src="img/product/request_management.png"/>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout title="" description="">
      <HeaderHero />
      <PrivacyPortal />
      <OpenSource />
      <Construction />
    </Layout>
  );
}

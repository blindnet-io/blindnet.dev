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
        </div>
      </div>
    </header>
  );
}

function PrivacyPortal() {
  return (
    <section className={styles.explainerSection, styles.tint}>
      <div className={styles.twoColumns}>
        <div className={styles.twoColumns__column}>
          <img className={styles.twoColumns__illustration} src="img/product/privacy_portal.png"/>
        </div>
        <div className={styles.twoColumns__column}>
          <h2>Set-up a modern Privacy Portal in minutes</h2>
          <p>Stop using e-mail for processing Privacy Requests (not compliant with GDPR security mandates). Privacy Requests are structured at entry for easier processing.</p>
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

function ManageRequests() {
  return (
    <section className={styles.explainerSection}>
      <div className={styles.twoColumns}>
        <div className={styles.twoColumns__column}>
          <h2>Manage Requests</h2>
          <p>Review and Manage Privacy Requests / Data Subject Requests (DSR) all in one place.</p>
          <p>View past requests and responses. Integrate the component in your own customer management tool.</p>
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

function RegisterConsents() {
  return (
    <section className={styles.explainerSection, styles.tint}>
      <div className={styles.twoColumns}>
        <div className={styles.twoColumns__column}>
          <img className={styles.twoColumns__illustration} src="img/product/consent.png"/>
        </div>
        <div className={styles.twoColumns__column}>
          <h2>Keep Track fo Consents</h2>
          <p>Rich consent metadata, and our metadata language <a href="https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md" target="_blank">PRIV</a> enable a whole new world of automation.</p>
          <p>Define Retention Policies using the same metadata language as Consents and other privacy-related Events. They apply them automatically.</p>
          <div className={styles.indexCtas}>
            <Link className="button button--primary" to="/docs/tutorials/intro">
              Get Started!
            </Link>
            <Link className="button button--secondary" to="https://dogfood.blindnet.io/talent_portal/apply.html">
              See it in action
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComplianceTimeline() {
  return (
    <section className={styles.explainerSection}>
      <div className={styles.twoColumns}>
        <div className={styles.twoColumns__column}>
          <h2>Compliance Timeline</h2>
          <p>Quickly review a timeline of privacy-related events before approving a Privacy Request.</p>
          <p>All in one place to demonstrate compliance in case of control</p>
          <div className={styles.indexCtas}>
            <Link className="button button--primary" to="/docs/interfaces/dci">
              Learn more about it
            </Link>
          </div>
        </div>
        <div className={styles.twoColumns__column}>
          <img className={styles.twoColumns__illustration} src="img/product/timeline.png"/>
        </div>
      </div>
    </section>
  );
}

function AutomateResponses() {
  return (
    <section className={styles.explainerSection, styles.tint}>
      <div className={styles.twoColumns}>
        <div className={styles.twoColumns__column}>
          <img className={styles.twoColumns__illustration} src="img/product/auto_delete.png"/>
        </div>
        <div className={styles.twoColumns__column}>
          <h2>Automate Responses</h2>
          <p>Thanks to the <a href="https://github.com/blindnet-io/product-management/blob/main/refs/schemas/priv/RFC-PRIV.md" target="_blank">PRIV</a> metadata language, the <a target="_blank" href="/docs/computation" >Privacy Computation Engine (PCE)</a> can resolve requests automatically.</p>
          <p>PCE operates with rules sourced from privacy regulations such as GDPR and CCPA, as well as with configuration (RoPA - Register of Processing Activities) and Retention Policies specific to your system.</p>
          <div className={styles.indexCtas}>
            <Link className="button button--primary" to="/docs/computation">
              Learn about PCE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectStorage() {
  return (
    <section className={styles.explainerSection}>
      <div className={styles.twoColumns}>
        <div className={styles.twoColumns__column}>
          <h2>Connect Storage</h2>
          <p>With storage connectors, automatically fetch data (from several sources) when your users request access to it.</p>
          <p>Enforce decisions to accept DELETE requests effortlessly.</p>
          <div className={styles.indexCtas}>
            <Link className="button button--primary" to="/docs/storage">
              Learn about Storage Connectors
            </Link>
          </div>
        </div>
        <div className={styles.twoColumns__column}>
          <img className={styles.twoColumns__illustration} src="img/product/auto_access.png"/>
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
      <ManageRequests />
      <RegisterConsents />
      <ComplianceTimeline />
      <AutomateResponses />
      <ConnectStorage />
    </Layout>
  );
}

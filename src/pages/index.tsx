import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import GitHubButton from 'react-github-btn';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="" description="">
      <div>
        <div className={styles.banner}>
          Want to learn more about the blindnet company?<br />
            Go check <a href="https://blindnet.io">blindnet.io</a>
        </div>
      </div>
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.indexCtas}>
            <Link className="button button--primary" to="/docs/quickstart">
              Get Started!
            </Link>
            <Link className="button button--info" to="/docs/guides">
              Follow the Guides
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
      <main style={{ marginTop: '10px', textAlign: 'center' }}></main>
    </Layout>
  );
}

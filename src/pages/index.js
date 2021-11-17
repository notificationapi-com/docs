import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

const FeatureList = [
  {
    title: 'Quick Start Guide',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: <>Easily setup everything in a few minutes</>,
    cta: 'Start - 10 min ⏱️',
    ctaPath: 'docs/intro'
  },
  {
    title: 'Full Reference',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>Learn about the advanced features from the in-depth library docs.</>
    ),
    cta: 'Go to References',
    ctaPath: 'docs/reference/server'
  }
];

function Feature({ Svg, title, description, cta, ctaPath }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="text--center">
        <Link className="button button--secondary button--lg" to={ctaPath}>
          {cta}
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="NotificationAPI Documentation - Send email, push, in-app, text, call notifications in a few lines of code"
    >
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

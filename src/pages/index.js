import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/docs/intro"
          >
            Quick Start - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    window.location.href = "docs/intro";
  });
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="NotificationAPI Documentation - How to programmatically send email, push, in-app, text, sms notifications in a few lines of code"
    >
      {/* <HomepageHeader />
      <main>
        <HomepageFeatures></HomepageFeatures>
      </main> */}
    </Layout>
  );
}

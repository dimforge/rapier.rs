import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Multi-platforms physics simulations</>,
    imageUrl: 'img/undraw_physics_simulation.svg',
    description: (
      <>
          Fast physics for games, animation and robotics. Runs cross-platform,
          including the official support of web platforms.
      </>
    ),
  },
  {
    title: <>Take and restore snapshots</>,
    imageUrl: 'img/undraw_snapshot.svg',
    description: (
      <>
          Use serialization to take or restore a complete snapshot of the
          instantaneous state of the physics simulation.
      </>
    ),
  },
{
    title: <>Cross-platform determinism</>,
    imageUrl: 'img/undraw_determinism.svg',
    description: (
        <>
            Optionally make Rapier cross-platform deterministic on all
            IEEE 754-2008 compliant 32- and 64-bits platforms.
        </>
    ),
},
{
    title: <>WebAssembly and JavaScript</>,
    imageUrl: 'img/undraw_web.svg',
    description: (
        <>
            Use our official NPM packages published behind
            the&nbsp;<a href="https://www.npmjs.com/search?q=%40dimforge">@dimforge</a>&nbsp;namespace and run Rapier
            in any modern browser.
        </>
    ),
},
{
    title: <>Forever free and Open-Source</>,
    imageUrl: 'img/undraw_open_source.svg',
    description: (
        <>
            Built with a FOSS mindset, we aim to empower the Rust and web communities
            with an efficient physics simulation framework.
        </>
    ),
},
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} physics engine`}
      description="Fast and cross-platform physics engine">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
            <div className="">
                <img src="img/rapier_logo_color_textpath.svg" width="70%" alt="Project Logo" />
            </div>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--lg --ifm-color-prim', /*button--secondary*/
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

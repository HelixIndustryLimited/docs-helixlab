import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import DecryptedText from '@site/src/components/DecryptedText/DecryptedText'

import styles from './index.module.css';
import Translate from '@docusaurus/Translate';

import SimpleFluidGlass from '@site/src/components/FluidGlass/SimpleFluidGlass'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs-products/keyboards">
            <Translate>
              选择产品
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
        
      {/* <HomepageHeader /> */}
      <main>
        {/* <HomepageFeatures /> */}
        <div style={{ height: '600px', position: 'relative' }}>
          <SimpleFluidGlass 
            imageSrc="https://cdn.shopify.com/s/files/1/0444/8259/2928/files/index.jpg"
            scale={2.4}
            ior={1.1}
            thickness={4.4}
            chromaticAberration={0.15}
            anisotropy={0.01}
          />
          
          <div style={{
          position: 'absolute',
          top: '0%',
          left: '0%',
          transform: 'translate(7%, 15%)',
          textAlign: 'left',
              fontSize: '4rem',
              fontWeight: 700,
              userSelect: 'none',
              mixBlendMode: 'difference',
              pointerEvents: 'none',
              fontFamily: "Roboto Mono",
              color: 'rgb(210, 210, 210)',
              // color:'#cc9e75'
          }}>
            <DecryptedText
            text="Helix Lab Docs."
            animateOn="view"
            revealDirection="start"
            maxIterations={8}
            speed={70}
          />
          </div>
      </div>
      </main>
    </Layout>
  );
}

import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import styles from './index.module.css'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import { useColorMode } from '@docusaurus/theme-common'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { useLatestVersion } from '@docusaurus/plugin-content-docs/client'
import Translate, { translate } from '@docusaurus/Translate'

import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl, { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

// import Image from '@theme/IdealImage';
import Layout from '@theme/Layout';

import { Redirect } from '@docusaurus/router';

// See translations for label and description

function Cards() {
  const cards = [
    {
      label: translate({ message: 'Simple' }),
      description: translate({
        message:
          "The code is simple, the architecture is clear, easy to understand, easy to expand, and friendly to developers, even beginners.",
      }),
      // link: '/guides/getting-started/setup',
      // isDoc: true,
      // linkText: translate({ message: 'Learn More' }),
      // imageUrl: 'img/index/illustrations/brownfield.svg',
    },
    {
      label: translate({ message: 'Security' }),
      description: translate({
        message:
          'The project is written in the RUST programming language, whose features make the system more stable, robust, and easier to maintain.',
      }),
      // link: '/references/architecture/security',
      // isDoc: true,
      // linkText: translate({ message: 'Learn More' }),
      // imageUrl: 'img/index/illustrations/security.svg',
    },
    {
      label: translate({ message: 'Convenient' }),
      description: translate({
        message:
          'Supporting both command line and configuration file deployment methods for convenience; supporting out-of-the-box RTMP/HLS/HTTP-FLV/RTSP/WHIP/WHEP and other media protocols.',
      }),
      // link: 'about/intro#honest-open-source',
      // linkText: translate({ message: 'Learn More' }),
      //imageUrl: 'img/index/illustrations/floss.svg',
    },
    {
      label: translate({ message: 'Efficient' }),
      description: translate({
        message:
          "The service is built on the powerful asynchronous library Tokio, providing support for high concurrency.",
      }),
      // imageUrl: 'img/index/illustrations/box.svg',
    },
    // {
    //   label: translate({ message: 'Cross Platform' }),
    //   description: translate({
    //     message:
    //       'Bundle binaries for all major desktop platforms (mobile coming soon).',
    //   }),
    //   link: '/guides/building/cross-platform',
    //   isDoc: true,
    //   linkText: translate({ message: 'Learn More' }),
    //   imageUrl: 'img/index/illustrations/cross_platform.svg',
    // },
    // {
    //   label: translate({ message: 'Built on Rust' }),
    //   description: translate({
    //     message:
    //       'With performance and security at the center, Rust is the language for the next generation of apps.',
    //   }),
    //   link: 'https://docs.rs/tauri/1/',
    //   linkText: translate({ message: 'Learn More' }),
    //   imageUrl: 'img/index/illustrations/code.svg',
    // },
  ]

  const cardsStyle = [styles.card, styles.card1, styles.card2, styles.card3]

  const latestVersion = useLatestVersion()

  return (
    <section className={classNames(styles.cardContainer)}>
      {cards.map((card, index) => (

        <div className={classNames(cardsStyle[index], 'card')} key={index}>
          <div className={classNames(styles.cardSide, styles.cardLeading)}>
            <h2>{card.label}</h2>
            <p>{card.description}</p>
            <div className={classNames(styles.cardSpacer)}></div>
            {card.link && <Link
              className={'button button--primary'}
              href={(card.isDoc ? latestVersion.path : '') + card.link}
            >
              {card.linkText}
            </Link>}
          </div>
          {/* <div className={classNames(styles.cardSide, styles.cardImage)}>
            <img src={card.imageUrl} />
          </div> */}
        </div>
      ))}
    </section>
  )
}

function Features() {
  const items = [
    {
      title: translate({ message: 'Desktop Bundler' }),
      description: translate({
        message: 'Bundle for all major desktops from native systems',
      }),
      icon: 'box-seam',
    },
    {
      title: translate({ message: 'Self Updater' }),
      description: translate({
        message: 'Update Tauri Apps from within themselves',
      }),
      icon: 'cloud-arrow-down',
    },
    {
      title: translate({ message: 'Core Plugin System' }),
      description: translate({
        message: 'Build reusable plugins to extend Tauri core',
      }),
      icon: 'puzzle',
    },
    {
      title: translate({ message: 'Scoped Filesystem' }),
      description: translate({
        message: 'Improved security of file interactions',
      }),
      icon: 'safe',
    },
    {
      title: translate({ message: 'App Tray' }),
      description: translate({
        message: 'Cross-platform desktop icon tray',
      }),
      icon: 'menu-app',
    },
    {
      title: translate({ message: 'GitHub Action' }),
      description: translate({
        message: 'Build your Tauri binary for macOS, Linux, and Windows',
      }),
      icon: 'github',
    },
    {
      title: translate({ message: 'Native Notifications' }),
      description: translate({
        message: 'Cross-platform notifications using polyfilled web API',
      }),
      icon: 'app-indicator',
    },
    {
      title: translate({ message: 'Sidecar' }),
      description: translate({
        message: 'Integrate and instrument other binaries',
      }),
      icon: 'code-square',
    },
    {
      title: translate({ message: 'App Storage' }),
      description: translate({
        message: 'Use a canonical location to store user data',
      }),
      icon: 'folder2-open',
    },
  ]

  return (
    <div className={styles.row}>
      {items.map((item, index) => {
        return (
          <FeatureRoadmapEntry
            {...item}
            key={index}
            cname={styles.featureIcon}
          />
        )
      })}
    </div>
  )
}


function FeatureRoadmapEntry(props) {
  return (
    <div className={styles.featureRoadmapEntry}>
      <div className={styles.featureRoadmapIconContainer}>
        <i
          className={classNames(
            styles.featureRoadmapIcon,
            'bi',
            `bi-${props.icon}`,
            props.cname
          )}
        />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}





function Logo(props) {
  const { colorMode } = useColorMode()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const logoDir = '/img/index/partners/'

  // Do not remove this!
  // This is a workaround for incorrect color modes being applied after reloading the page.
  useEffect(() => {
    setIsDarkMode(colorMode === 'dark')
  }, [colorMode])

  // Pre-fetches images
  useEffect(() => {
    const images = []

    const darkImage = (new Image().src = logoDir + props.brand.logoColorDark)
    images.push(darkImage)

    const lightImage = (new Image().src = logoDir + props.brand.logoColorLight)
    images.push(lightImage)
  }, [])

  return (
    <Link href={props.brand.link} className={props.className}>
      <img
        src={useBaseUrl(
          logoDir +
          (isDarkMode
            ? props.brand.logoColorDark
            : props.brand.logoColorLight)
        )}
        alt={props.brand.name}
      />
    </Link>
  )
}

export default function App() {
  const context = useDocusaurusContext()
  const latestVersion = useLatestVersion()
  
  // return (
  //   <Layout
  //     title={`${context.siteConfig.tagline}`}
  //     description={translate({
  //       message:
  //         'Tauri is a framework for building tiny, blazing fast binaries for all major desktop platforms. Developers can integrate any front-end framework that compiles to HTML, JS and CSS for building their user interface.',
  //     })}
  //   >
  //     <header className={classNames('hero', styles.hero)}>
  //       <div className={classNames(styles.heroContainer)}>

  //         <br />
  //         <div className={classNames(styles.heroSubtitle, 'hero__subtitle')}>
  //           <Translate>
  //             Building a Stable, Secure, and Efficient Live Streaming Media Service
  //           </Translate>
  //         </div>

  //         <div className={classNames(styles.heroSubtitle2, 'hero__subtitle')}>
  //           <Translate>
  //             XIU is a simple, secure, convenient and efficient
  //             pure RUST live media framework.
  //           </Translate>
  //         </div>

  //         <br />

  //         <Link
  //           className={classNames('button button--secondary button--lg')}
  //           to={'./docs/getting-started/quickstart'}
  //         >
  //           <Translate>Quick Start</Translate>
  //         </Link>
  //       </div>
  //     </header>

  //     <main>
  //       <section className="container">
  //         <div className={classNames(styles.row)}>
  //           <Cards />
  //         </div>
  //       </section>


  //     </main>
  //   </Layout>)
  return <Redirect to= "ffmpeg" />;

}

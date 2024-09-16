import React from 'react'
import Layout from '@theme-original/Navbar/Layout'
import styles from './styles.module.css'
import classNames from 'classnames'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import IconLanguage from '@theme/Icon/Language'

export default function LayoutWrapper(props) {
  const { siteConfig, i18n } = useDocusaurusContext()
  return (
    <>
      <Layout {...props} />

    </>
  )
}

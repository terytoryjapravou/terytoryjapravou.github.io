import React from 'react'
import styles from './FooterContent.module.css'

import IgLogo from './assets/IgLogo.svg'
import TgLogo from './assets/TgLogo.svg'
import FbLogo from './assets/fbLogo.svg'

import { FB_LINK, IG_LINK, TG_LINK, MAIL_ADDRESS, MAIL_LINK } from '@site/src/constants/socialLinks'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

const translations = {
  be: {
    contacts: 'Кантакты',
    platforms: 'Нашы пляцоўкі'
  },
  en: {
    contacts: 'Contacts',
    platforms: 'Our Platforms'
  }
}

export const FooterContent = () => {
  const { i18n } = useDocusaurusContext()
  const locale = i18n.currentLocale as 'be' | 'en'
  const t = translations[locale]

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>

        <div className={styles.contacts}>
          <div className={styles.title}>
            {t.contacts}
          </div>
          <div className={styles.mailWrapper}>
            <span>Email:</span>
            <a className={styles.link} href={MAIL_LINK}>{MAIL_ADDRESS}</a>
          </div>
        </div>

        <div className={styles.social}>
          <div className={styles.title}>
            {t.platforms}
          </div>
          <div className={styles.socialWrapper}>
            <a className={styles.link} target='_blank' rel="noopener noreferrer" href={IG_LINK}><IgLogo /></a>
            <a className={styles.link} target='_blank' rel="noopener noreferrer" href={TG_LINK}><TgLogo /></a>
            <a className={styles.link} target='_blank' rel="noopener noreferrer" href={FB_LINK}><FbLogo /></a>
          </div>
        </div>

      </div>
    </div>
  )
}

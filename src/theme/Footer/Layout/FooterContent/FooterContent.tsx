import React from 'react'
import styles from './FooterContent.module.css'

import IgLogo from './assets/IgLogo.svg'
import TgLogo from './assets/TgLogo.svg'

export const FooterContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>

        <div className={styles.contacts}>
          <div className={styles.title}>Кантакты</div>
          <div className={styles.mailWrapper}>
            <span>Email:</span>
            <a
              className={styles.link}
              href="mailto:contact@terytoryja-pravou.org"
            >contact@terytoryja-pravou.org</a>
          </div>
        </div>

        <div className={styles.social}>
          <div className={styles.title}>Нашы пляцоўкі</div>
          <div className={styles.socialWrapper}>
            <a className={styles.link} target='_blank' href="https://www.instagram.com/terytoryja_pravou/"><IgLogo /></a>
            <a className={styles.link} target='_blank' href="https://t.me/terytoryja_pravou"><TgLogo /></a>
          </div>
        </div>

      </div>
    </div>
  )
}

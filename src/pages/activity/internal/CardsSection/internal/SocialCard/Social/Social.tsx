import clsx from 'clsx'
import FbIcon from './assets/fb.svg'
import IgIcon from './assets/ig.svg'
import TgIcon from './assets/tg.svg'

import { FB_LINK, IG_LINK, TG_LINK } from '@site/src/constants/socialLinks'

import styles from './Social.module.css'

type SocialProps = {
  className?: string
}

export function Social({ className }: SocialProps) {
  return <div className={`${styles.social} ${className}`}>
    <div className={styles.content}>
      <div className={styles.contentItem}>
        <h4 className={styles.contentTitle}>
          У Instagram і Facebook
        </h4>
        <p className={styles.contentDescription}>
          тлумачэнні, падборкі, гісторыі і факты пра правы чалавека з гумарам і без канцылярызмаў.
        </p>
      </div>

      <div className={styles.contentItem}>
        <h4 className={styles.contentTitle}>
          У Telegram
        </h4>
        <p className={styles.contentDescription}>
          магчымасці для тых, хто хоча рухацца далей: курсы, стажыроўкі, падтрымка, ідэі для дзейнасці.
        </p>
      </div>
    </div>

    <a href={IG_LINK} target='_blank' rel="noopener noreferrer" className={clsx(styles.ig, styles.link)}><IgIcon /></a>
    <a href={FB_LINK} target='_blank' rel="noopener noreferrer" className={clsx(styles.fb, styles.link)}><FbIcon /></a>
    <a href={TG_LINK} target='_blank' rel="noopener noreferrer" className={clsx(styles.tg, styles.link)}><TgIcon /></a>
  </div>
}

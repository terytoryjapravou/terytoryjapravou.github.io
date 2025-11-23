import clsx from 'clsx'
import FbIcon from '@site/src/pages/activity/internal/CardsSection/internal/SocialCard/Social/assets/fb.svg'
import IgIcon from '@site/src/pages/activity/internal/CardsSection/internal/SocialCard/Social/assets/ig.svg'
import TgIcon from '@site/src/pages/activity/internal/CardsSection/internal/SocialCard/Social/assets/tg.svg'

import { FB_LINK, IG_LINK, TG_LINK } from '@site/src/constants/socialLinks'

import styles from '@site/src/pages/activity/internal/CardsSection/internal/SocialCard/Social/Social.module.css'

type SocialProps = {
  className?: string
}

export function Social({ className }: SocialProps) {
  return <div className={`${styles.social} ${className}`}>
    <div className={styles.content}>
      <div className={styles.contentItem}>
        <h4 className={styles.contentTitle}>
          On Instagram and Facebook
        </h4>
        <p className={styles.contentDescription}>
          explanations, collections, stories and facts about human rights with humor and without bureaucratic jargon.
        </p>
      </div>

      <div className={styles.contentItem}>
        <h4 className={styles.contentTitle}>
          On Telegram
        </h4>
        <p className={styles.contentDescription}>
          opportunities for those who want to move forward: courses, internships, support, ideas for action.
        </p>
      </div>
    </div>

    <a href={IG_LINK} target='_blank' rel="noopener noreferrer" className={clsx(styles.ig, styles.link)}><IgIcon /></a>
    <a href={FB_LINK} target='_blank' rel="noopener noreferrer" className={clsx(styles.fb, styles.link)}><FbIcon /></a>
    <a href={TG_LINK} target='_blank' rel="noopener noreferrer" className={clsx(styles.tg, styles.link)}><TgIcon /></a>
  </div>
}

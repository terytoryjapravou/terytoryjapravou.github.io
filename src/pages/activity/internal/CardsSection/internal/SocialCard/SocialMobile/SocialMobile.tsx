import clsx from "clsx"

import FbIcon from './assets/fb.svg'
import IgIcon from './assets/ig.svg'
import TgIcon from './assets/tg.svg'

import { TG_LINK, FB_LINK, IG_LINK } from '@site/src/constants/socialLinks'

import styles from './SocialMobile.module.css'

type SocialMobileProps = {
  className?: string
}

export function SocialMobile({ className }: SocialMobileProps) {
  return (
    <div className={clsx(styles.social, className)}>
      <div className={styles.socialCard}>
        <div className={styles.content}>
          Instagram <br />
          Facebook <br />
          тлумачэнні, падборкі, гісторыі і факты
          пра правы чалавека з гумарам і без канцылярызмаў.
        </div>

        <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className={clsx(styles.link, styles.ig)}><IgIcon /></a>
        <a href={FB_LINK} target="_blank" rel="noopener noreferrer" className={clsx(styles.link, styles.fb)}><FbIcon /></a>
      </div>

      <div className={styles.socialCard}>
        <div className={styles.content}>
          Telegram <br />
          магчымасці для тых, хто хоча рухацца далей:
          курсы, стажыроўкі, падтрымка, ідэі для дзейнасці.
        </div>
        <a href={TG_LINK} target="_blank" rel="noopener noreferrer" className={clsx(styles.link, styles.tg)}><TgIcon /></a>
      </div>
    </div>
  )
}

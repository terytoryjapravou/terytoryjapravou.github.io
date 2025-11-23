import { Card } from '@site/src/pages/activity/internal/CardsSection/internal/Card/Card'
import Grid from '@site/src/pages/activity/internal/CardsSection/internal/WebinarsCard/assets/grid.png'
import TgLogo from '@site/src/pages/activity/internal/CardsSection/internal/WebinarsCard/assets/tg.svg'

import { TG_LINK } from '@site/src/constants/socialLinks'

import styles from '@site/src/pages/activity/internal/CardsSection/internal/WebinarsCard/WebinarsCard.module.css'

export function WebinarsCard() {
  return (
    <Card className={styles.card}>
      <h3 className={styles.title}>Webinars</h3>

      <div className={styles.content}>
        <p>
          These are live meetings with experts,
          activists, and researchers who openly share
          their knowledge and experience.
        </p>
        <p>
          We discuss topics that concern everyone:
          from fighting discrimination to the challenges of artificial
          intelligence and its impact on human rights.
        </p>
      </div>

      <img src={Grid} alt="" className={styles.image} />

      <a href={TG_LINK} target='_blank' rel='noopener noreferrer' className={styles.tg}>
        <span>Subscribe to our Telegram to receive announcements</span>
        <TgLogo className={styles.tgLogo} />
      </a>

    </Card>
  )
}

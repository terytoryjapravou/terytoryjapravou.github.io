import { Card } from '@site/src/pages/activity/internal/CardsSection/internal/Card/Card'
import { Social } from './Social/Social'
import { useWindowSize } from '@docusaurus/theme-common'


import styles from '@site/src/pages/activity/internal/CardsSection/internal/SocialCard/SocialCard.module.css'
import { SocialMobile } from '@site/src/pages/activity/internal/CardsSection/internal/SocialCard/SocialMobile/SocialMobile'

export function SocialCard() {
  const windowSize = useWindowSize()


  return (
    <Card className={styles.card}>
      <h3 className={styles.title}>
        Our Social Networks
      </h3>

      <div className={styles.description}>
        We create a space where the complex becomes simple.
      </div>

      {windowSize === 'desktop' && <Social className={styles.social} />}
      {windowSize === 'mobile' && <SocialMobile className={styles.social} />}

      <div className={styles.conclusion}>
        Our social networks are a place where you can learn, get inspired, and feel a sense of community.
      </div>
    </Card>
  )
}

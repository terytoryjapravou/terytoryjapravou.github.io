import { Card } from '../Card/Card'
import { Social } from './Social/Social'
import { useWindowSize } from '@docusaurus/theme-common'


import styles from './SocialCard.module.css'
import { SocialMobile } from './SocialMobile/SocialMobile'

export function SocialCard() {
  const windowSize = useWindowSize()


  return (
    <Card className={styles.card}>
      <h3 className={styles.title}>
        Нашы сацыяльныя сеткі
      </h3>

      <div className={styles.description}>
        Мы ствараем прастору, дзе складанае становіцца простым.
      </div>

      {windowSize === 'desktop' && <Social className={styles.social} />}
      {windowSize === 'mobile' && <SocialMobile className={styles.social} />}

      <div className={styles.conclusion}>
        Нашы сацсеткі — гэта месца, дзе можна вучыцца, натхняцца і адчуваць супольнасць.
      </div>
    </Card>
  )
}

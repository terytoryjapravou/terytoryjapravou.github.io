import { useWindowSize } from '@docusaurus/theme-common'
import Image from '@theme/IdealImage';
import styles from '@site/src/pages/about/internal/TeamSection/TeamSection.module.css'

import TeamImage from '@site/src/pages/about/internal/TeamSection/assets/Team.png'
import TeamMobileImage from '@site/src/pages/about/internal/TeamSection/assets/TeamMobile.png'

export function TeamSection() {
  const windowSize = useWindowSize()

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Team</h3>
        <p className={styles.content}>
          We are a group of people with different experiences but one goal:
          to make human rights closer and more understandable to everyone
        </p>
        {windowSize === 'desktop' && <Image className={styles.image} img={TeamImage} alt="Group photo of the Territory of Rights project team" />}
        {windowSize === 'mobile' && <Image className={styles.imageMobile} img={TeamMobileImage} alt="Group photo of the Territory of Rights project team" />}
      </div>
    </section>
  )
}

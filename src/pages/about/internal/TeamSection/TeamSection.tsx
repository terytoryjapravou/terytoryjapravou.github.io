import { useWindowSize } from '@docusaurus/theme-common'
import Image from '@theme/IdealImage';
import styles from './TeamSection.module.css'

import TeamImage from './assets/Team.png'
import TeamMobileImage from './assets/TeamMobile.png'

export function TeamSection() {
  const windowSize = useWindowSize()

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Каманда</h3>
        <p className={styles.content}>
          Мы – група людзей з розным досведам, але адной мэтай:
          зрабіць правы чалавека бліжэйшымі і зразумелымі для ўсіх
        </p>
        {windowSize === 'desktop' && <Image className={styles.image} img={TeamImage} alt="Групавое фота каманды праекта Тэрыторыя правоў" />}
        {windowSize === 'mobile' && <Image className={styles.imageMobile} img={TeamMobileImage} alt="Групавое фота каманды праекта Тэрыторыя правоў" />}
      </div>
    </section>
  )
}

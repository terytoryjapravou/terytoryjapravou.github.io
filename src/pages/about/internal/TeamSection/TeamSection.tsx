import { useWindowSize } from '@docusaurus/theme-common'
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
        {windowSize === 'desktop' && <img className={styles.image} src={TeamImage} alt="Групавое фота каманды праекта Тэрыторыя правоў" />}
        {windowSize === 'mobile' && <img className={styles.imageMobile} src={TeamMobileImage} alt="Групавое фота каманды праекта Тэрыторыя правоў" />}
      </div>
    </section>
  )
}

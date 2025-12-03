import { useWindowSize } from '@docusaurus/theme-common'
import Image from '@theme/IdealImage'
import Team from '@site/src/pages/about/internal/TeamSection/assets/illystration_4.png'
import styles from '@site/src/pages/about/internal/TeamSection/TeamSection.module.css'
import { Badge } from '@site/src/pages/about/internal/TeamSection/internal/Badge/Badge'
import Pointers from '@site/src/pages/about/internal/TeamSection/assets/pointers.png'
import PointersMobile from '@site/src/pages/about/internal/TeamSection/assets/pointerMobile.png'


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

        <div className={styles.imageWrapper}>
          <Badge name='Piatrovich' position='organization coordinator' className={styles.badge5} />
          <Badge name="Veranika" position="project manager" className={styles.badge1} />
          <Badge name='Yulia' position='SMM manager' className={styles.badge6} />
          <Badge name='Katsia' position='communications manager' className={styles.badge3} />
          <Badge name="Zakhar" position="technical manager" className={styles.badge2} />
          <Badge name='Nastsia' position='designer' className={styles.badge4} />

          <Image img={Team} className={styles.image} />

          {windowSize === 'desktop' && <Image img={Pointers} className={styles.pointers} />}
          {windowSize === 'mobile' && <Image img={PointersMobile} className={styles.pointersMobile} />}
        </div>

      </div>
    </section>
  )
}

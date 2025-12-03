import { useWindowSize } from '@docusaurus/theme-common'
import Image from '@theme/IdealImage'
import Team from './assets/illystration_4.png'
import styles from './TeamSection.module.css'
import { Badge } from './internal/Badge/Badge'
import Pointers from './assets/pointers.png'
import PointersMobile from './assets/pointerMobile.png'


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

        <div className={styles.imageWrapper}>
          <Badge name='Пятровіч' position='каардынатар арганізацыі' className={styles.badge5} />
          <Badge name="Вераніка" position="праектная менеджарка" className={styles.badge1} />
          <Badge name='Юля' position='SMM-менеджарка' className={styles.badge6} />
          <Badge name='Каця' position='камунікацыйная менеджарка' className={styles.badge3} />
          <Badge name="Захар" position="тэхнічны менеджар" className={styles.badge2} />
          <Badge name='Насця' position='дызайнерка' className={styles.badge4} />

          <Image img={Team} className={styles.image} />

          {windowSize === 'desktop' && <Image img={Pointers} className={styles.pointers} />}
          {windowSize === 'mobile' && <Image img={PointersMobile} className={styles.pointersMobile} />}
        </div>

      </div>
    </section>
  )
}

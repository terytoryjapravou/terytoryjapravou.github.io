import { Mark } from '@site/src/components/Mark/Mark'
import DonatImage from '@site/src/pages/about/internal/SupportSection/assets/Donat.png'
import styles from '@site/src/pages/about/internal/SupportSection/SupportSection.module.css'

export function SupportSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>How to Support Us?</h3>
        <div className={styles.content}>
          <p className={styles.p1}>We work without government support, so everything we do exists thanks to people who believe in the power of education and solidarity.</p>
          <p className={styles.p2}><Mark variant='underline'>Every</Mark> donation <Mark variant='rounded'>helps</Mark> us continue educational programs, create new materials, and expand the culture of human rights.</p>
          <img src={DonatImage} alt="Illustration with images of hands holding a heart" className={styles.image} />
        </div>
      </div>
    </section>
  )
}

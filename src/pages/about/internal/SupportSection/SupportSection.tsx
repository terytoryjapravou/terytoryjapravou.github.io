import { Mark } from '@site/src/components/Mark/Mark'
import Image from '@theme/IdealImage';
import DonatImage from './assets/Donat.png'
import styles from './SupportSection.module.css'

export function SupportSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Як падтрымаць нас?</h3>
        <div className={styles.content}>
          <p className={styles.p1}>Мы працуем без дзяржаўнай падтрымкі, таму ўсё, што робім, існуе дзякуючы людзям, якія вераць у сілу асветы і салідарнасці.</p>
          <p className={styles.p2}><Mark variant='underline'>Кожны</Mark> данат <Mark variant='rounded'>дапамагае</Mark> нам працягваць адукацыйныя праграмы, ствараць новыя матэрыялы і пашыраць культуру правоў чалавека.</p>
          <Image img={DonatImage} alt="Ілюстрацыя з выявамі рук, якія трымаюць сэрца" className={styles.image} />
        </div>
      </div>
    </section>
  )
}

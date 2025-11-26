import styles from "./SloganSection.module.css"
import { useWindowSize } from "@docusaurus/theme-common"
import Image from '@theme/IdealImage'
import illustration from './assets/illystration_13.png'


export const SloganSection = () => {
  const windowSize = useWindowSize()

  if (windowSize === 'mobile') return null

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.slogan}>Стварайма Беларусь тэрыторыяй правоў</div>
        <div className={styles.imageWrapper}>
          <Image img={illustration} alt="" />
        </div>
      </div>
    </section>
  )
}

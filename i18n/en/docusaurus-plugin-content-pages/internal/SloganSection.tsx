import styles from "@site/src/pages/internal/SloganSection/SloganSection.module.css"
import { useWindowSize } from "@docusaurus/theme-common"
import Image from '@theme/IdealImage'
import illustration from '@site/src/pages/internal/SloganSection/assets/illystration_13.png'


export const SloganSection = () => {
  const windowSize = useWindowSize()

  if (windowSize === 'mobile') return null

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.slogan}>Let's make Belarus a territory of rights</div>
        <div className={styles.imageWrapper}>
          <Image img={illustration} />
        </div>
      </div>
    </section>
  )
}

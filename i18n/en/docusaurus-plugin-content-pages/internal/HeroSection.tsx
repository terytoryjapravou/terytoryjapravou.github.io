import styles from '@site/src/pages/internal/HeroSection/HeroSection.module.css'
import { useWindowSize } from '@docusaurus/theme-common'
import { MapImage } from '@site/src/pages/internal/HeroSection/internal/MapImage'

export const HeroSection = () => {
  const windowSize = useWindowSize()

  return (
    <section className={styles.hero}>
      {windowSize === 'desktop' && <MapImage className={styles.desktopMapImage} />}
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>
          <span className={styles.titleFirst}>Territory</span>
          <span className={styles.titleSecond}>of Rights</span>
        </h1>
        <div className={styles.description}>
          Educational initiative on human rights for representatives of Belarusian society
        </div>
        {windowSize === 'mobile' && <MapImage className={styles.mobileMapImage} />}
      </div>
    </section>
  )
}

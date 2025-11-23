import styles from './HeroSection.module.css'
import { useWindowSize } from '@docusaurus/theme-common'
import { MapImage } from './internal/MapImage'

export const HeroSection = () => {
  const windowSize = useWindowSize()

  return (
    <section className={styles.hero}>
      {windowSize === 'desktop' && <MapImage className={styles.desktopMapImage} />}
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>
          <span className={styles.titleFirst}>Тэрыторыя</span>
          <span className={styles.titleSecond}>Правоў</span>
        </h1>
        <div className={styles.description}>
          Асветніцка-адукацыйная ініцыятыва пра правы чалавека для прадстаў_ніц беларускага грамадства
        </div>
        {windowSize === 'mobile' && <MapImage className={styles.mobileMapImage} />}
      </div>
      {windowSize === 'desktop' && <MapImage className={styles.mapHoverHandler} />}
    </section>
  )
}

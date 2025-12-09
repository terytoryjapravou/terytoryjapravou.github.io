import { Mark } from '@site/src/components/Mark/Mark'
import Image from '@theme/IdealImage';
import Dama from '@site/src/pages/activity/internal/HeaderSection/assets/illystration_9png.png'
import Group from '@site/src/pages/activity/internal/HeaderSection/assets/illystration_10.png'

import styles from '@site/src/pages/activity/internal/HeaderSection/HeaderSection.module.css'

export function HeaderSection() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Activities
        </h1>
        <p className={styles.description}>
          <Mark variant='underline'>Our offerings</Mark> that can help you get closer to understanding human rights.
        </p>
        <div className={styles.pic1}>
          <Image img={Dama} />
        </div>
        <div className={styles.pic2}>
          <Image img={Group} />
        </div>
      </div>
    </header>
  )
}

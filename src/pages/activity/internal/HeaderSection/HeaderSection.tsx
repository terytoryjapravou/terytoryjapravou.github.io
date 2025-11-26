import { Mark } from '@site/src/components/Mark/Mark'
import Image from '@theme/IdealImage';
import Dama from './assets/Dama.png'
import Group from './assets/Group.png'

import styles from './HeaderSection.module.css'

export function HeaderSection() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          Дзейнасць
        </h1>
        <p className={styles.description}>
          <Mark variant='underline'>Нашы прапановы</Mark>, якія могуць дапамагчы табе стать бліжэй да разумення правоў чалавека.
        </p>
        <Image img={Dama} alt="" className={styles.pic1} />
        <Image img={Group} alt="" className={styles.pic2} />
      </div>
    </header>
  )
}

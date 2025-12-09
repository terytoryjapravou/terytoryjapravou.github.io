import Lamp from './assets/lamp.svg'
import Illustration from './assets/illystration_1.png'
import Image from '@theme/IdealImage';

import styles from './WebinarsCardPreview.module.css'

export const WebinarsCardPreview = () => {
  return (
    <div className={styles.preview}>
      <Lamp className={styles.lamp} />
      <div className={styles.caption}>
        Мы абмяркоўваем тэмы, што датычаць усіх:
        ад барацьбы з дыскрымінацыяй да выклікаў штучнага інтэлекту
        і яго ўплыву на правы чалавека.
      </div>

      <div className={styles.image}>
        <Image img={Illustration} />
      </div>
    </div>
  )
}

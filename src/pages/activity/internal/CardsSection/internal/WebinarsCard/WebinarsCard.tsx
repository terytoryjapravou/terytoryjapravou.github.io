import { Card } from '../Card/Card'
import Image from '@theme/IdealImage';
import Grid from './assets/grid.png'
import TgLogo from './assets/tg.svg'

import { TG_LINK } from '@site/src/constants/socialLinks'

import styles from './WebinarsCard.module.css'

export function WebinarsCard() {
  return (
    <Card className={styles.card}>
      <h3 className={styles.title}>Вэбінары</h3>

      <div className={styles.content}>
        <p>
          Гэта жывыя сустрэчы з экспертамі і эксперткамі,
          актывістамі і даследчыкамі, якія адкрыта дзеляцца
          ведамі і досведам.
        </p>
        <p>
          Мы абмяркоўваем тэмы, што датычаць усіх:
          ад барацьбы з дыскрымінацыяй да выклікаў штучнага
          інтэлекту і яго ўплыву на правы чалавека.
        </p>
      </div>

      <Image img={Grid} alt="" className={styles.image} />

      <a href={TG_LINK} target='_blank' rel='noopener noreferrer' className={styles.tg}>
        <span>Падпісацца на наш Telegram, каб атрымліваць анонсы</span>
        <TgLogo className={styles.tgLogo} />
      </a>

    </Card>
  )
}

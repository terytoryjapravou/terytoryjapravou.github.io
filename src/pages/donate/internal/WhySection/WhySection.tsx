import { Mark } from '@site/src/components/Mark/Mark'
import Image from '@theme/IdealImage';
import DonateBig from './assets/DonateBig.png'

import styles from './WhySection.module.css'

export function WhySection() {
  return (
    <section>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Чаму ваш данат важны</h2>
        <Image img={DonateBig} alt="" className={styles.image} />
        <p className={styles.content}>
          Кожная наша адукацыйная праграма, матэрыял —
          гэта праца людзей, якія хочуць <Mark variant="underline">дапамагчы</Mark> іншым <Mark variant='rounded'>ведаць</Mark> і разумець <Mark variant="underline">свае правы</Mark>,
          навучыцца абараняць сябе і іншых.
        </p>
        <p className={styles.content}>
          Шмат што мы робім як валанцёры, але і без фінансавых рэсурсаў не абыходзіцца.
          Мы працуем без дзяржаўнай падтрымкі, таму ўсё існуе дзякуючы тым, хто дапамагае нам у гэтым.
        </p>
        <p className={styles.content}>
          Твае <Mark variant='handwritten'>5, 10</Mark> ці <Mark variant="handwritten">20</Mark> еўра — гэта новы матэрыял, аплачаная праца дызайнеркі,
          пераклад тэксту або вэбінар для дзясяткаў людзей.
        </p>
        <p className={styles.content}>
          Калі ты таксама верыш у сілу адукацыі і салідарнасці — <Mark variant='underline'>падтрымай нас!</Mark>
        </p>
      </div>
    </section>
  )
}

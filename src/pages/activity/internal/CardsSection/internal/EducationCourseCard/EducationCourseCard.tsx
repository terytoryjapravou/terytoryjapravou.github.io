import { Card } from "../Card/Card"
import Image from '@theme/IdealImage';
import CourseImage from './assets/Kurs.png'

import styles from './EducationCourseCard.module.css'

export function EducationCourseCard() {
  return (
    <Card className={styles.card}>
      <h3 className={styles.title}>
        Адукацыйны курс «Тэрыторыя правоў»
      </h3>

      <div className={styles.image}>
        <Image img={CourseImage} />
      </div>

      <p className={styles.description}>
        Наш флагманскі курс створаны для тых, хто хоча пачаць з пачатку і разабрацца,
        што такое правы чалавека і чаму гэта важна.
        Курс праходзіць у афлайн-фармаце і доўжыцца 1–3 дні.
        Удзельнікі і ўдзельніцы праходзяць інтэрактыўнае навучанне: лекцыі чаргуюцца з дыскусіямі,
        практычнымі заданнямі і групавой працай.
      </p>

      <div className={styles.agenda}>
        <h4 className={styles.agendaTitle}>У праграме:</h4>
        <ul className={styles.agendaList}>
          <li className={styles.agendaItem}>знаёмства з гісторыяй і асноўнымі элементамі канцэпцыі правоў чалавека;</li>
          <li className={styles.agendaItem}>агляд Дэкларацыі правоў чалавека і асноўных міжнародных дакументаў;</li>
          <li className={styles.agendaItem}>асновы роўнасці і недыскрымінацыі;</li>
          <li className={styles.agendaItem}>бароны сваіх правоў і грамадскіх інтарэсаў.</li>
        </ul>
      </div>

      <div className={styles.promo}>
        Менавіта наш Уводны курс стаў першым і важным крокам у свет правоў чалавека для многіх актывіста_к,
        валанцёрак, журналіста_к і пачынаючых праваабаронцаў. Пасля яго людзі далучаюцца да іншых адукацыйных праграм,
        ініцыятыў і праектаў — і пачынаюць дзейнічаць.
      </div>

    </Card>
  )
}

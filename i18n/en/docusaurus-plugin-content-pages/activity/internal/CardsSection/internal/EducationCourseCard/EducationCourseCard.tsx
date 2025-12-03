import { Card } from "@site/src/pages/activity/internal/CardsSection/internal/Card/Card"
import Image from '@theme/IdealImage';
import GridImg from '@site/src/pages/activity/internal/CardsSection/internal/EducationCourseCard/assets/Kurs.png'

import styles from '@site/src/pages/activity/internal/CardsSection/internal/EducationCourseCard/EducationCourseCard.module.css'

export function EducationCourseCard() {
  return (
    <Card className={styles.card}>
      <h3 className={styles.title}>
        Educational Course "Territory of Rights"
      </h3>

      <Image img={GridImg} alt="" className={styles.image} />

      <p className={styles.description}>
        Our flagship course is designed for those who want to start from the beginning and understand
        what human rights are and why it matters.
        The course takes place in offline format and lasts 1–3 days.
        Participants undergo interactive learning: lectures alternate with discussions,
        practical tasks, and group work.
      </p>

      <div className={styles.agenda}>
        <h4 className={styles.agendaTitle}>The program includes:</h4>
        <ul className={styles.agendaList}>
          <li className={styles.agendaItem}>introduction to the history and main elements of the human rights concept;</li>
          <li className={styles.agendaItem}>overview of the Universal Declaration of Human Rights and key international documents;</li>
          <li className={styles.agendaItem}>fundamentals of equality and non-discrimination;</li>
          <li className={styles.agendaItem}>defending your rights and public interests.</li>
        </ul>
      </div>

      <div className={styles.promo}>
        Our Introductory Course has become the first and important step into the world of human rights for many activists,
        volunteers, journalists, and aspiring human rights defenders. After it, people join other educational programs,
        initiatives, and projects — and start taking action.
      </div>

    </Card>
  )
}

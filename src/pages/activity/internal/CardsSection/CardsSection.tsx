import styles from './CardsSection.module.css'
import { EducationCourseCard } from './internal/EducationCourseCard/EducationCourseCard'

export function CardsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <EducationCourseCard />
      </div>
    </section>
  )
}

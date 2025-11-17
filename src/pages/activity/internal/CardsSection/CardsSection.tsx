import styles from './CardsSection.module.css'
import { EducationCourseCard } from './internal/EducationCourseCard/EducationCourseCard'
import { SocialCard } from './internal/SocialCard/SocialCard'

export function CardsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <EducationCourseCard />
        <SocialCard />
      </div>
    </section>
  )
}

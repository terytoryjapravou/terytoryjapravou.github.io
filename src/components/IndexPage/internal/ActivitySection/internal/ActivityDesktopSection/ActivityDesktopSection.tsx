import styles from './ActivityDesktopSection.module.css'
import { EducationCard } from './internal/EducationCard/EducationCard'
import { ActivityCardsGroup } from './internal/ActivityCardsGroup/ActivityCardsGroup'
import { TPCourseCard } from './internal/TPCourseCard'
import { WebinarsCard } from './internal/WebinarsCard'

export const ActivityDesktopSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Наша дзейнасць</h2>

        <ActivityCardsGroup className={styles.cardsGroup}>
          <TPCourseCard />
          <WebinarsCard />
          <EducationCard />
        </ActivityCardsGroup>
      </div>
    </section>
  )
}



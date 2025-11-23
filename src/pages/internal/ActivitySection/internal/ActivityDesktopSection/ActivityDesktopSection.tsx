import styles from './ActivityDesktopSection.module.css'
import { EducationCard } from './internal/EducationCard/EducationCard'
import { ActivityCardsGroup } from './internal/ActivityCardsGroup/ActivityCardsGroup'
import { TPCourseCard } from './internal/TPCourseCard'
import { WebinarsCard } from './internal/WebinarsCard'
import { SectionHeader } from '@site/src/components/SectionHeader/SectionHeader'

export const ActivityDesktopSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.contentWrapper}>
        <SectionHeader title={<a href="/activity">Наша дзейнасць</a>} />

        <ActivityCardsGroup className={styles.cardsGroup}>
          <TPCourseCard />
          <WebinarsCard />
          <EducationCard />
        </ActivityCardsGroup>
      </div>
    </section>
  )
}



import styles from '@site/src/pages/internal/ActivitySection/internal/ActivityDesktopSection/ActivityDesktopSection.module.css'
import { EducationCard } from './internal/EducationCard/EducationCard'
import { ActivityCardsGroup } from '@site/src/pages/internal/ActivitySection/internal/ActivityDesktopSection/internal/ActivityCardsGroup/ActivityCardsGroup'
import { TPCourseCard } from './internal/TPCourseCard'
import { WebinarsCard } from './internal/WebinarsCard'
import { SectionHeader } from '@site/src/components/SectionHeader/SectionHeader'

export const ActivityDesktopSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.contentWrapper}>
        <SectionHeader title="Our Activities" />

        <ActivityCardsGroup className={styles.cardsGroup}>
          <TPCourseCard />
          <WebinarsCard />
          <EducationCard />
        </ActivityCardsGroup>
      </div>
    </section>
  )
}

import { SectionHeader } from "@site/src/components/SectionHeader/SectionHeader"
import { EducationCard } from "./internal/EducationCard/EducationCard"
import { TPCourseCard } from "./internal/TPCourseCard/TPCourseCard"
import { WebinarsCard } from "./internal/WebinarsCard/WebinarsCard"

export const ActivityMobileSection = () => {
  return (
    <section >
      <div >
        <SectionHeader title={<a href="/activity">Our Activities</a>} />

        <div>
          <TPCourseCard />
          <WebinarsCard />
          <EducationCard />
        </div>
      </div>
    </section>
  )
}

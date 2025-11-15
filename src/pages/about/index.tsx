import { PageLayout } from "@site/src/components/PageLayout/PageLayout"
import { AboutSection } from "./internal/AboutSection/AboutSection"
import { DetailsSection } from "./internal/DetailsSection/DetailsSection"
import { HistorySection } from "./internal/HistorySection/HistorySection"
import { TeamSection } from "./internal/TeamSection/TeamSection"

export default function AboutPage() {
  return (
    <PageLayout title="Пра нас">
      <AboutSection />
      <DetailsSection />
      <HistorySection />
      <TeamSection />
    </PageLayout>
  )
}

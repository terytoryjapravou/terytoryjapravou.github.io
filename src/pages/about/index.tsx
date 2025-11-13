import { PageLayout } from "@site/src/components/PageLayout/PageLayout"
import { AboutSection } from "./internal/AboutSection/AboutSection"
import { DetailsSection } from "./internal/DetailsSection/DetailsSection"

export default function AboutPage() {
  return (
    <PageLayout title="Пра нас">
      <AboutSection />
      <DetailsSection />
    </PageLayout>
  )
}

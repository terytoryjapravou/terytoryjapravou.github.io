import { PageLayout } from "@site/src/components/PageLayout/PageLayout"
import { HeroSection } from "./internal/HeroSection/HeroSection"
import { ActivitySection } from "./internal/ActivitySection/ActivitySection"
import { SloganSection } from "./internal/SloganSection/SloganSection"

export const IndexPage = () => {
  return (
    <PageLayout title="Галоўная">
      <HeroSection />
      <ActivitySection />
      <SloganSection />
    </PageLayout>
  )
}

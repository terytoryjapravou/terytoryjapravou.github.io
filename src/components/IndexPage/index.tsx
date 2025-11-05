import { PageLayout } from "@site/src/components/PageLayout/PageLayout"
import { HeroSection } from "./internal/HeroSection/HeroSection"
import { ActivitySection } from "./internal/ActivitySection/ActivitySection"
import { SloganSection } from "./internal/SloganSection/SloganSection"
import { RecentArticlesSection } from "./internal/RecentArticlesSection/RecentArticlesSection"
import { RecentOpportunitiesSection } from "./internal/RecentOpportunitiesSection/RecentOpportunitiesSection"

export const IndexPage = () => {
  return (
    <PageLayout title="Галоўная">
      <HeroSection />
      <ActivitySection />
      <SloganSection />
      <RecentArticlesSection />
      <RecentOpportunitiesSection />
    </PageLayout>
  )
}

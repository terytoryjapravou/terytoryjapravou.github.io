import { PageLayout } from "@site/src/components/PageLayout/PageLayout"
import { ActivitySection } from "./internal/ActivitySection/ActivitySection"
import { HeroSection } from "./internal/HeroSection"
import { RecentArticlesSection } from "./internal/RecentArticlesSection/RecentArticlesSection"
import { RecentOpportunitiesSection } from "./internal/RecentOpportunitiesSection/RecentOpportunitiesSection"
import { SloganSection } from "./internal/SloganSection"

export default function IndexPage() {
  return (
    <PageLayout title="Home">
      <HeroSection />
      <ActivitySection />
      <SloganSection />
      <RecentArticlesSection />
      <RecentOpportunitiesSection />
    </PageLayout>
  )
}

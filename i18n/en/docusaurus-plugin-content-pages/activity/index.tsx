import { PageLayout } from "@site/src/components/PageLayout/PageLayout";
import { HeaderSection } from "./internal/HeaderSection/HeaderSection";
import { CardsSection } from "./internal/CardsSection/CardsSection";

export default function ActivityPage() {
  return (
    <PageLayout title="Activities">
      <HeaderSection />
      <CardsSection />
    </PageLayout>
  )
}

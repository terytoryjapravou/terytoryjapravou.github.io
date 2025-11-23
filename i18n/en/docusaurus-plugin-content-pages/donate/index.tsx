import { PageLayout } from "@site/src/components/PageLayout/PageLayout"
import { WhySection } from "./internal/WhySection/WhySection"
import { DonateSection } from "./internal/DonateSection/DonateSection"

export default function DonatePage() {
  return (
    <PageLayout title="Support">
      <WhySection />
      <DonateSection />
    </PageLayout>
  )
}

import { useWindowSize } from '@docusaurus/theme-common'
import { ActivityDesktopSection } from './internal/ActivityDesktopSection/ActivityDesktopSection'
import { ActivityMobileSection } from './internal/ActivityMobileSection/ActivityMobileSection'

export const ActivitySection = () => {
  const windowSize = useWindowSize()

  if (windowSize === 'mobile') {
    return <ActivityMobileSection />
  }

  return <ActivityDesktopSection />
}

import { HistoryDesktopSection } from './HistoryDesktopSection/HistoryDesktopSection'
import { useWindowSize } from '@docusaurus/theme-common'

export function HistorySection() {
  const windowSize = useWindowSize()

  // if (windowSize === 'mobile') return null

  return <HistoryDesktopSection />
}

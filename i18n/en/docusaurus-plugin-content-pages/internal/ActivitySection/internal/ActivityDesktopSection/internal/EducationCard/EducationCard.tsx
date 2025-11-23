import { ActivityCard } from '@site/src/pages/internal/ActivitySection/internal/ActivityDesktopSection/internal/ActivityCard/ActivityCard';
import { EducationCardContent } from './internal/EducationCardContent/EducationCardContent';

export const EducationCard = () => {
  return (
    <ActivityCard
      title="Education"
      content={<EducationCardContent />}
    />
  )
}

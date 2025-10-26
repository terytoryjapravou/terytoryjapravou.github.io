import { ActivityCard } from '../ActivityCard/ActivityCard';
import { EducationCardContent } from './internal/EducationCardContent/EducationCardContent';

export const EducationCard = () => {
  return (
    <ActivityCard
      title="Асвета"
      content={<EducationCardContent />}
    />
  )
}

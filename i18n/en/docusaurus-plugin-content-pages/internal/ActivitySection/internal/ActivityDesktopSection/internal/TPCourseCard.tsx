import { ActivityCard } from '@site/src/pages/internal/ActivitySection/internal/ActivityDesktopSection/internal/ActivityCard/ActivityCard';
import { Preview } from '@site/src/pages/internal/ActivitySection/internal/ActivityDesktopSection/internal/TPCourseCard/internal/Preview';

export const TPCourseCard = () => {
  return (
    <ActivityCard
      title="Educational Course 'Territory of Rights'"
      content="If you want to start from the beginning and understand what human rights are and why it matters."
      preview={<Preview />}
    />
  );
};

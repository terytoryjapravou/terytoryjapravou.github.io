import { ActivityCard } from '../ActivityCard/ActivityCard';
import { Preview } from './internal/Preview';

export const TPCourseCard = () => {
  return (
    <ActivityCard
      title="Адукацыйны курс «Тэрыторыя правоў»"
      content="Калі хочацца пачаць з пачатку і разабрацца, што такое правы чалавека і чаму гэта важна."
      preview={< Preview />}
    />
  )
}



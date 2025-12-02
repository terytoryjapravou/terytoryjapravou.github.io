import { ActivityCard } from '../ActivityCard/ActivityCard';
import { WebinarsCardPreview } from './internal/WebinarsCardPreview/WebinarsCardPreview';

export const WebinarsCard = () => {
  return (
    <ActivityCard
      title="Вэбінары"
      content="Сустрэчы з цікавымі людзьмі, якія ведаюць, як быць праваабаронц_ай у сучасным свеце."
      preview={<WebinarsCardPreview />}
    />
  )
}

import Details from "@site/src/theme/Details"
import styles from '@site/src/pages/about/internal/DetailsSection/DetailsSection.module.css'

export function DetailsSection() {
  return (
    <section>
      <div className={styles.wrapper}>

        <Details summary="Mission">
          Shaping and promoting a culture of human rights in Belarusian society through education and awareness, where everyone knows their rights and shares the values of human dignity
        </Details>

        <Details summary="Goal">
          Create an active community where everyone shares the values of human dignity, knows their rights, and is ready to defend them
        </Details>

        <Details summary="What Do We Do?">
          <ul>
            <li>Explain human rights in simple language through understandable examples;</li>
            <li>Support the Belarusian language and culture;</li>
            <li>Organize educational programs, courses, and seminars;</li>
            <li>Support activists, volunteers, and aspiring human rights defenders;</li>
            <li>Develop materials and initiatives to popularize legal culture.</li>
          </ul>
        </Details>
      </div>
    </section>
  )
}

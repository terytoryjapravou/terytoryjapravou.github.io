import { style } from "motion/react-client"
import styles from "./SloganSection.module.css"
import { useWindowSize } from "@docusaurus/theme-common"

export const SloganSection = () => {
  const windowSize = useWindowSize()

  if (windowSize === 'mobile') return null

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.slogan}>Стварайма Беларусь тэрыторыяй правоў</div>
      </div>
    </section>
  )
}

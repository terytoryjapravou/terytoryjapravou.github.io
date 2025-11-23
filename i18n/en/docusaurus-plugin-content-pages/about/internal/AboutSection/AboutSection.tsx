import Map from '@site/src/pages/about/internal/AboutSection/assets/map.svg'
import styles from "@site/src/pages/about/internal/AboutSection/AboutSection.module.css"
import { Mark } from '@site/src/components/Mark/Mark'

export function AboutSection() {
  return (
    <section >
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Who We Are</h2>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <Mark variant="rounded">"Territory of Rights"</Mark> is a reliable starting point for everyone
            who wants to <Mark variant="underline">understand</Mark> and <Mark variant="underline">know</Mark> how to defend their <Mark variant="underline">rights</Mark>.
            We believe that knowledge and understanding of human rights
            are essential for building a just and equal
            society.
          </div>
          <Map className={styles.map} />
        </div>
      </div>
    </section>
  )
}

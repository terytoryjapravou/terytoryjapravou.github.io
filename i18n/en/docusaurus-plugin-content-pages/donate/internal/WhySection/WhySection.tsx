import { Mark } from '@site/src/components/Mark/Mark'
import DonateBig from '@site/src/pages/donate/internal/WhySection/assets/DonateBig.png'

import styles from '@site/src/pages/donate/internal/WhySection/WhySection.module.css'

export function WhySection() {
  return (
    <section>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Why your donation matters</h2>
        <img src={DonateBig} alt="" className={styles.image} />
        <p className={styles.content}>
          Every educational program and material we create is the work of people who want to <Mark variant="underline">help</Mark> others <Mark variant='rounded'>know</Mark> and understand <Mark variant="underline">their rights</Mark>,
          learn to protect themselves and others.
        </p>
        <p className={styles.content}>
          Much of what we do is volunteer work, but financial resources are also essential.
          We operate without state support, so everything exists thanks to those who help us.
        </p>
        <p className={styles.content}>
          Your <Mark variant='handwritten'>5, 10</Mark> or <Mark variant="handwritten">20</Mark> euros — that's a new material, paid work of a designer,
          text translation, or a webinar for dozens of people.
        </p>
        <p className={styles.content}>
          If you also believe in the power of education and solidarity — <Mark variant='underline'>support us!</Mark>
        </p>
      </div>
    </section>
  )
}

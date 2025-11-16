import Map from './assets/map.svg'
import styles from "./AboutSection.module.css"
import { Mark } from '@site/src/components/Mark/Mark'

export function AboutSection() {
  return (
    <section >
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Хто мы</h2>
        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <Mark variant="rounded">«Тэрыторыя правоў»</Mark> – гэта надзейны пункт старту для ўсіх,
            хто хоча разумець і <Mark variant="underline">ведаць</Mark> як абараняць свае <Mark variant="underline">правы</Mark>.
            Мы верым, што веданне і разуменне правоў чалавека
            з’яўляюцца важнымі для пабудовы справядлівага і роўнапраўнага
            грамадства.
          </div>
          <Map className={styles.map} />
        </div>
      </div>
    </section>
  )
}

import styles from './HistoryDesktopSection.module.css'
import Map from './assets/Map.svg'
import Timeline from './assets/Timeline.png'

export const HistoryDesktopSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.descriptionWrapper}>
        <h3 className={styles.title}>Гісторыя</h3>
        <p className={styles.description}>
          “Тэрыторыя правоў” пачала свой шлях у 2018 годзе ў Беларусі як пляцоўка для асветы і папулярызацыі правоў чалавека.
          Аднак у ліпені 2021 года пасля ператрусаў і масавых атак на грамадскі сектар, наша арганізацыя была ліквідавана.
          Нягледзячы на гэта, сёння мы працягваем сваю місію – дапамагаем беларусам і беларускам разумець і абараняць свае правы,
          дзе б яны ні былі.
        </p>
      </div>

      <Map className={styles.map} />
      <img src={Timeline} alt="Timeline" className={styles.timeline} />
    </section>
  )
}

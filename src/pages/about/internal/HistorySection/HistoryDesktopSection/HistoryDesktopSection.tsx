import styles from './HistoryDesktopSection.module.css'
import Map from './assets/Map.svg'
import Timeline from './assets/Timeline.png'
import Location from './assets/Location.png'
import Calendar from './assets/Calendar.png'
import Ptushka from './assets/Ptushka.png'
import MilestoneCalendar from './assets/MilestoneCalendar.png'
import Lock from './assets/Lock.png'
import Chain from './assets/Chain.png'
import Like from './assets/Like.png'
import Social from './assets/Social.png'
import Laptop from './assets/Laptop.png'
import Sun from './assets/Sun.png'

import clsx from 'clsx'

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

      <div className={clsx(styles.milestone, styles.m1)}>
        <img src={MilestoneCalendar} alt="" className={styles.milestonePicture} />
        <h4 className={styles.milestoneTitle}>
          15 жніўня 2018
        </h4>
        <p className={styles.milestoneDescription}>
          пачалі сваю дзейнасць у Беларусі як пляцоўка для асветы і папулярызацыі правоў чалавека
        </p>
      </div>

      <div className={clsx(styles.milestone, styles.m2)}>
        <h4 className={styles.milestoneTitle}>
          14 жніўня 2021
        </h4>
        <img src={Lock} alt="" className={styles.milestonePicture} />
        <p className={styles.milestoneDescription}>
          дзейнасць арганізацыі была прыпынена ў выніку пазбаўлення рэгістрацыі
        </p>
      </div>

      <div className={clsx(styles.milestone, styles.m3)}>
        <h4 className={styles.milestoneTitle}>
          2022 - 2023
        </h4>
        <img src={Chain} alt="" className={styles.milestonePicture} />
        <p className={styles.milestoneDescription}>
          працягвалі сваю місію па асвеце і адукацыі ў галіне правоў чалавека, нават без афіцыянай рэгістрацыі
        </p>
      </div>

      <div className={clsx(styles.milestone, styles.m4)}>
        <img src={Like} alt="" className={styles.milestonePicture} />
        <h4 className={styles.milestoneTitle}>
          12 сакавіка 2024
        </h4>
        <p className={styles.milestoneDescription}>
          атрымалі рэгістрацыю па‑за межамі Беларусі
        </p>
      </div>

      <div className={clsx(styles.milestone, styles.m5)}>
        <h4 className={styles.milestoneTitle}>
          14 ліпеня 2024
        </h4>
        <img src={Social} alt="" className={styles.milestonePicture} />
        <p className={styles.milestoneDescription}>
          запусцілі нашы сацыяльныя сеткі Instagram, Telegram і Facebook, і гэта вельмі сымбалічна
        </p>
      </div>

      <div className={clsx(styles.milestone, styles.m6)}>
        <h4 className={styles.milestoneTitle}>
          20 лістапада 2025
        </h4>
        <img src={Laptop} alt="" className={styles.milestonePicture} />
        <p className={styles.milestoneDescription}>
          запусцілі сайт<br />
          terytoryja-pravou.org
        </p>
      </div>

      <div className={clsx(styles.milestone, styles.m7)}>
        <img src={Sun} alt="" className={styles.milestonePicture} />
        <h4 className={styles.milestoneTitle}>Сёння</h4>
        <p className={styles.milestoneDescription}>
          працягваем ставараць Беларусь тэрыяторыяй правоў
        </p>
      </div>

      <Map className={styles.map} />
      <img src={Timeline} alt="Timeline" className={styles.timeline} />
      <img src={Location} alt="Location" className={styles.location} />
      <img src={Calendar} alt="Calendar" className={styles.calendar} />
      <img src={Ptushka} alt="Ptushka" className={styles.ptushka} />
    </section>
  )
}

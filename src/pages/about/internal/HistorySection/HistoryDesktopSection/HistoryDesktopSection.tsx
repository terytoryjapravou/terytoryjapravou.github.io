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
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'motion/react'
import { Mark } from '@site/src/components/Mark/Mark'

const milestones = [
  {
    key: 'm1',
    picture: MilestoneCalendar,
    title: '15 жніўня 2018',
    description: 'пачалі сваю дзейнасць у Беларусі як пляцоўка для асветы і папулярызацыі правоў чалавека',
    pictureFirst: true
  },
  {
    key: 'm2',
    picture: Lock,
    title: '14 жніўня 2021',
    description: 'дзейнасць арганізацыі была прыпынена ў выніку пазбаўлення рэгістрацыі',
    pictureFirst: false
  },
  {
    key: 'm3',
    picture: Chain,
    title: '2022 - 2023',
    description: 'працягвалі сваю місію па асвеце і адукацыі ў галіне правоў чалавека, нават без афіцыянай рэгістрацыі',
    pictureFirst: false
  },
  {
    key: 'm4',
    picture: Like,
    title: '12 сакавіка 2024',
    description: 'атрымалі рэгістрацыю па‑за межамі Беларусі',
    pictureFirst: true
  },
  {
    key: 'm5',
    picture: Social,
    title: '14 ліпеня 2024',
    description: 'запусцілі нашы сацыяльныя сеткі Instagram, Telegram і Facebook, і гэта вельмі сымбалічна',
    pictureFirst: false
  },
  {
    key: 'm6',
    picture: Laptop,
    title: '20 лістапада 2025',
    description: 'запусцілі сайт\nterytoryja-pravou.org',
    pictureFirst: false
  },
  {
    key: 'm7',
    picture: Sun,
    title: 'Сёння',
    description: 'працягваем ставараць Беларусь тэрыяторыяй правоў',
    pictureFirst: true
  }
]

export const HistoryDesktopSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-67%'])

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.stickyContainer}>
        <motion.div
          ref={contentRef}
          className={styles.scrollContent}
          style={{ x }}
        >
          <div className={styles.descriptionWrapper}>
            <h3 className={styles.title}>Гісторыя</h3>
            <p className={styles.description}>
              "Тэрыторыя правоў" пачала свой шлях у <Mark variant="handwritten">2018</Mark> годзе ў Беларусі як пляцоўка для асветы і папулярызацыі правоў чалавека.
              Аднак у ліпені <Mark variant="handwritten">2021</Mark> года пасля ператрусаў і масавых атак на грамадскі сектар, наша арганізацыя была ліквідавана.
              Нягледзячы на гэта, сёння мы працягваем сваю місію – дапамагаем беларусам і беларускам разумець і абараняць свае правы,
              дзе б яны ні былі.
            </p>
          </div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.key}
              className={clsx(styles.milestone, styles[milestone.key])}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {milestone.pictureFirst && (
                <img src={milestone.picture} alt="" className={styles.milestonePicture} />
              )}
              <h4 className={styles.milestoneTitle}>
                {milestone.title}
              </h4>
              {!milestone.pictureFirst && (
                <img src={milestone.picture} alt="" className={styles.milestonePicture} />
              )}
              <p className={styles.milestoneDescription}>
                {milestone.description.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < milestone.description.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}

          <Map className={styles.map} />
          <img src={Timeline} alt="Timeline" className={styles.timeline} />
          <img src={Location} alt="Location" className={styles.location} />
          <img src={Calendar} alt="Calendar" className={styles.calendar} />
          <img src={Ptushka} alt="Ptushka" className={styles.ptushka} />
        </motion.div>
      </div>
    </section>
  )
}

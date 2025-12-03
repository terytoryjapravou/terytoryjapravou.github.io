import styles from '@site/src/pages/about/internal/HistorySection/HistoryDesktopSection/HistoryDesktopSection.module.css'
import Image from '@theme/IdealImage';
import Map from '@site/src/pages/about/internal/HistorySection/HistoryDesktopSection/assets/Map.svg'
import Timeline from '@site/src/pages/about/internal/HistorySection/HistoryDesktopSection/assets/Timeline.svg'
import Location from '@site/src/pages/about/internal/HistorySection/HistoryDesktopSection/assets/Location.png'
import Calendar from '@site/src/pages/about/internal/HistorySection/HistoryDesktopSection/assets/Calendar.png'
import Ptushka from '@site/src/pages/about/internal/HistorySection/HistoryDesktopSection/assets/Ptushka.png'
import MilestoneCalendar from '@site/src/pages/about/internal/HistorySection/HistoryDesktopSection/assets/MilestoneCalendar.png'
import Lock from '@site/src/pages/about/internal/HistorySection/HistoryDesktopSection/assets/Lock.png'
import Chain from '@site/src/pages/about/internal/HistorySection/HistoryDesktopSection/assets/Chain.png'
import Like from '@site/src/pages/about/internal/HistorySection/HistoryDesktopSection/assets/Like.png'
import Social from '@site/src/pages/about/internal/HistorySection/HistoryDesktopSection/assets/Social.png'
import Laptop from '@site/src/pages/about/internal/HistorySection/HistoryDesktopSection/assets/Laptop.png'
import Sun from '@site/src/pages/about/internal/HistorySection/HistoryDesktopSection/assets/Sun.png'

import clsx from 'clsx'
import { useRef, useState, useEffect } from 'react'
import { useScroll, useTransform, motion } from 'motion/react'
import { Mark } from '@site/src/components/Mark/Mark'

const milestones = [
  {
    key: 'm1',
    picture: MilestoneCalendar,
    title: 'August 15, 2018',
    description: 'started our activities in Belarus as a platform for education and promotion of human rights',
    pictureFirst: true
  },
  {
    key: 'm2',
    picture: Lock,
    title: 'August 14, 2021',
    description: 'the organization\'s activities were suspended as a result of deregistration',
    pictureFirst: false
  },
  {
    key: 'm3',
    picture: Chain,
    title: '2022 - 2023',
    description: 'continued our mission of education and awareness in the field of human rights, even without official registration',
    pictureFirst: false
  },
  {
    key: 'm4',
    picture: Like,
    title: 'March 12, 2024',
    description: 'received registration outside Belarus',
    pictureFirst: true
  },
  {
    key: 'm5',
    picture: Social,
    title: 'July 14, 2024',
    description: 'launched our social networks Instagram, Telegram and Facebook, which is very symbolic',
    pictureFirst: false
  },
  {
    key: 'm6',
    picture: Laptop,
    title: 'November 20, 2025',
    description: 'launched the website\nterytoryja-pravou.org',
    pictureFirst: false
  },
  {
    key: 'm7',
    picture: Sun,
    title: 'Today',
    description: 'continue to make Belarus a territory of rights',
    pictureFirst: true
  }
]

export const HistoryDesktopSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [scrollEnd, setScrollEnd] = useState('-67%')

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const calculateScrollEnd = () => {
      if (contentRef.current) {
        const contentWidth = contentRef.current.scrollWidth
        const viewportWidth = window.innerWidth
        const scrollDistance = contentWidth - viewportWidth
        const percentage = -(scrollDistance / contentWidth) * 100
        setScrollEnd(`${percentage.toFixed(2)}%`)
      }
    }

    calculateScrollEnd()
    window.addEventListener('resize', calculateScrollEnd)
    return () => window.removeEventListener('resize', calculateScrollEnd)
  }, [])

  const x = useTransform(scrollYProgress, [0, 0.03, 0.97, 1], ['0%', '0%', scrollEnd, scrollEnd])

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.stickyContainer}>
        <motion.div
          ref={contentRef}
          className={styles.scrollContent}
          style={{ x }}
        >
          <div className={styles.descriptionWrapper}>
            <h3 className={styles.title}>History</h3>
            <p className={styles.description}>
              "Territory of Rights" began its journey in <Mark variant="handwritten">2018</Mark> in Belarus as a platform for education and promotion of human rights.
              However, in July <Mark variant="handwritten">2021</Mark>, after searches and massive attacks on the civil society sector, our organization was liquidated.
              Despite this, today we continue our mission – helping Belarusians understand and defend their rights,
              wherever they are.
            </p>
          </div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.key}
              className={clsx(styles.milestone, styles[milestone.key])}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              {milestone.pictureFirst && (
                <Image img={milestone.picture} alt="" className={styles.milestonePicture} />
              )}
              <h4 className={styles.milestoneTitle}>
                {milestone.title}
              </h4>
              {!milestone.pictureFirst && (
                <Image img={milestone.picture} alt="" className={styles.milestonePicture} />
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
          <Timeline className={styles.timeline} />
          <Image img={Location} alt="Location" className={styles.location} />
          <Image img={Calendar} alt="Calendar" className={styles.calendar} />
          <Image img={Ptushka} alt="Ptushka" className={styles.ptushka} />
        </motion.div>
      </div>
    </section>
  )
}

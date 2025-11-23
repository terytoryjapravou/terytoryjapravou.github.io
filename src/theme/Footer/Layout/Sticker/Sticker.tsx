import React from 'react'
import styles from './Sticker.module.css'

import Map from './assets/Map.svg'
import Sun from './assets/Sun.svg'
import Hand from './assets/Hand.svg'
import Logo from './assets/Logo.svg'
import { useWindowSize } from '@docusaurus/theme-common'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

const translations = {
  be: {
    belarus: 'Беларусь',
    education: 'асвета',
    humanRights: 'правы чалавека',
    territoryOfRights: 'Тэрыторыя правоў',
    slogan: 'Стварайма Беларусь тэрыторыяй правоў'
  },
  en: {
    belarus: 'Belarus',
    education: 'education',
    humanRights: 'human rights',
    territoryOfRights: 'Territory of Rights',
    slogan: "Let's make Belarus a territory of rights"
  }
}

export const Sticker = () => {
  const windowSize = useWindowSize()
  const { i18n } = useDocusaurusContext()
  const locale = i18n.currentLocale as 'be' | 'en'
  const t = translations[locale]

  return (
    <div className={styles.sticker}>
      {windowSize === 'desktop' && <DesktopStickerContent t={t} />}
      {windowSize === 'mobile' && <MobileStickerContent t={t} />}
    </div>
  )
}

const DesktopStickerContent = ({ t }: { t: typeof translations.be }) => {
  return (
    <>
      <div className={styles.iconGroup}>
        <Map />
        <div>{t.belarus}</div>
      </div>

      <div className={styles.divider}>+</div>

      <div className={styles.iconGroup}>
        <Sun />
        <div>{t.education}</div>
      </div>

      <div className={styles.divider}>+</div>

      <div className={styles.iconGroup}>
        <Hand />
        <div>{t.humanRights}</div>
      </div>

      <div className={styles.divider}>=</div>

      <div className={styles.iconGroup}>
        <Logo />
        <div>{t.territoryOfRights}</div>
      </div>
    </>
  )
}

const MobileStickerContent = ({ t }: { t: typeof translations.be }) => {
  return (
    <div className={styles.slogan}>
      {t.slogan}
    </div>
  )
}

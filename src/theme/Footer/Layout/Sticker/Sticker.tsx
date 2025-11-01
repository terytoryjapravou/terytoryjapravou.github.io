import React from 'react'
import styles from './Sticker.module.css'

import Map from './assets/Map.svg'
import Sun from './assets/Sun.svg'
import Hand from './assets/Hand.svg'
import Logo from './assets/Logo.svg'
import { useWindowSize } from '@docusaurus/theme-common'

export const Sticker = () => {
    const windowSize = useWindowSize()

  return (
    <div className={styles.sticker}>
      {windowSize === 'desktop' && <DesktopStickerContent />}
      {windowSize === 'mobile' && <MobileStickerContent />}
    </div>
  )
}

const DesktopStickerContent = () => {
  return (
    <>
      <div className={styles.iconGroup}>
        <Map />
        <div>Беларусь</div>
      </div>

      <div className={styles.divider}>+</div>

      <div className={styles.iconGroup}>
        <Sun />
        <div>асвета</div>
      </div>

      <div className={styles.divider}>+</div>

      <div className={styles.iconGroup}>
        <Hand />
        <div>правы чалавека</div>
      </div>

      <div className={styles.divider}>=</div>

      <div className={styles.iconGroup}>
        <Logo />
        <div>Тэрыторыя правоў</div>
      </div>
    </>
  )
}

const MobileStickerContent = () => {
  return (
    <div className={styles.slogan}>
      Стварайма Беларусь тэрыторыяй правоў
    </div>
  )
}

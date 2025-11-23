import clsx from "clsx"
import styles from "./SectionHeader.module.css"
import RightIcon from "./assets/RightIcon.svg"
import { ReactNode } from "react"

type SectionHeaderProps = {
  title: ReactNode
  subtitle?: string
  href?: string
}

export function SectionHeader({ title, subtitle, href }: SectionHeaderProps) {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>

      {Boolean(subtitle && href) && (
        <a className={clsx(styles.subtitle, styles.link)} href={href}>
          {subtitle}
          <RightIcon />
        </a>
      )}

      {Boolean(subtitle && !href) && (
        <span className={styles.subtitle}>{subtitle}</span>
      )}
    </header>
  )
}

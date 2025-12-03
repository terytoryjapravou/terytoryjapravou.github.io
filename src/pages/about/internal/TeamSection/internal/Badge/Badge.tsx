import clsx from "clsx"
import styles from './Badge.module.css'

type BadgeProps = {
  name: string
  position: string
  className?: string
}

export function Badge({ name, position, className }: BadgeProps) {
  return (
    <div className={clsx(className, styles.wrapper)}>
      <span className={styles.name}>{name}</span>
      <span className={styles.position}>{position}</span>
    </div>
  )
}

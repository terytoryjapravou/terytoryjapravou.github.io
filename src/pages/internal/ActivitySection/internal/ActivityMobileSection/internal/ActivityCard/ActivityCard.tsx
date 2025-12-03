import clsx from 'clsx'
import styles from './ActivityCard.module.css'

type ActivityCardProps = {
  title: string
  content?: React.ReactNode
  preview?: React.ReactNode
  fullWidth?: boolean
}

export const ActivityCard = ({
  title,
  content,
  preview,
  fullWidth = false,
}: ActivityCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <div className={clsx(styles.content, {
          [styles.contentFullWidth]: fullWidth,
        })}>{content}</div>
      </div>
      {preview &&
        <div className={styles.preview}>
          {preview}
        </div>
      }
    </div>
  )
}

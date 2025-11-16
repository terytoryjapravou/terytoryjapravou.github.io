import styles from './ActivityCard.module.css'

type ActivityCardProps = {
  title: string
  content?: React.ReactNode
  preview?: React.ReactNode
}

export const ActivityCard = ({
  title,
  content,
  preview,
}: ActivityCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.contentWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.content}>{content}</div>
      </div>
      {preview &&
        <div className={styles.preview}>
          {preview}
        </div>
      }
    </div>
  )
}

import { PropsWithChildren } from 'react'
import styles from './ActivityCardsGroup.module.css'
import clsx from 'clsx';

type ActivityCardsGroupProps = PropsWithChildren<{
  className?: string
}>

export const ActivityCardsGroup = ({ children, className }: ActivityCardsGroupProps) => {

  const isSingleCard = !Array.isArray(children)

  if (isSingleCard) {
    return (
      <div className={clsx(styles.singleCard, className)}>
        {children}
      </div>
    )
  }

  return (
    <div className={clsx(styles.cardsGroup, className)}>
      {children && children.map((child, index) => (
        <div
          key={index}
          className={styles.card}
          style={{ '--idx': index } as React.CSSProperties}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

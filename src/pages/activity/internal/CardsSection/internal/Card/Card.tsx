import clsx from 'clsx'
import styles from './Card.module.css'
import { PropsWithChildren } from 'react'

type CardProps = PropsWithChildren<{
  className?: string
}>

export function Card({ className, children }: CardProps) {
  return (
    <div className={clsx(styles.card, className)}>{children}</div>
  )
}

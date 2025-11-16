import clsx from 'clsx'
import { PropsWithChildren } from 'react'
import styles from './Mark.module.css'

type MarkProps = PropsWithChildren<{
  variant: 'rounded' | 'underline' | 'handwritten'
  className?: string
}>

export function Mark({ children, variant, className }: MarkProps) {
  return (
    <span
      className={clsx(styles.span, styles[variant], className)}
    >{children}</span>
  )
}

import { PropsWithChildren } from 'react'
import styles from './Tag.module.css'
import clsx from 'clsx'

type TagProps = PropsWithChildren<{
  href?: string
  className?: string
}>

export function Tag({ children, href, className }: TagProps) {
  return href ?
    <a href={href} className={clsx(styles.tag, styles.link, className)}>{children}</a> :
    <span className={clsx(styles.tag, className)}>{children}</span>
}

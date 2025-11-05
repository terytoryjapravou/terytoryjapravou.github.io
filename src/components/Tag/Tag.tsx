import { PropsWithChildren } from 'react'
import styles from './Tag.module.css'
import clsx from 'clsx'

type TagProps = PropsWithChildren<{
  href?: string
}>

export function Tag({ children, href }: TagProps) {
  return href ?
    <a href={href} className={clsx(styles.tag, styles.link)}>{children}</a> :
    <span className={styles.tag}>{children}</span>
}

import { PropsWithChildren } from 'react'
import styles from './Tag.module.css'
import clsx from 'clsx'

type LinkTag = {
  href?: string
  target?: string
  rel?: string
  className?: string
}

type SpanTag = {
  className?: string
}

type TagProps = PropsWithChildren<LinkTag | SpanTag>

export function Tag({ children, className, ...props }: TagProps) {
  return 'href' in props ?
    <a href={props.href} className={clsx(styles.tag, styles.link, className)} {...props}>{children}</a> :
    <span className={clsx(styles.tag, className)}>{children}</span>
}

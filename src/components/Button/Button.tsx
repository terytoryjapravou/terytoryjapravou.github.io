import clsx from "clsx"
import styles from "./Button.module.css"
import { PropsWithChildren, ReactNode } from "react"

type ButtonProps = {
  className?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  href?: string
}

export function Button({ variant = 'secondary', children, href, className, ...props }: PropsWithChildren<ButtonProps>) {
  const variantClass = variant === 'primary' ? styles.primary : styles.secondary

  return href ?
    <a className={clsx(styles.button, variantClass, className)} href={href} {...props} >{children}</a> :
    <button className={clsx(styles.button, variantClass, className)} {...props}>{children}</button>
}

import React from 'react'
import Link from '@docusaurus/Link'
import type {Props} from '@theme/PaginatorNavLink'
import styles from './PaginatorNavLink.module.css'

export default function PaginatorNavLink(props: Props): JSX.Element {
  const {permalink, title, subLabel} = props;
  return (
    <Link
      className={styles.NavLink}
      to={permalink}>
      {subLabel && <div>{subLabel}</div>}
      <div className={styles.title}>{title}</div>
    </Link>
  )
}

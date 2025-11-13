import React, { JSX } from 'react'
import type { Props } from '@theme/BlogPostItem/Container'

import styles from './Container.module.css'

export default function BlogPostItemContainer({ children }: Props): JSX.Element {
  return <article className={styles.container}>{children}</article>
}

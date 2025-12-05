import React, { JSX } from 'react'
import type { Props } from '@theme/BlogPostItem/Container'

export default function BlogPostItemContainer({ children }: Props): JSX.Element {
  return <article>{children}</article>
}

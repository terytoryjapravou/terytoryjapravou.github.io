import { JSX } from "react"
import { useBlogPost } from '@docusaurus/plugin-content-blog/client'
import { Tag } from "@site/src/components/Tag/Tag"

import styles from './BlogPostItemHeaderTags.module.css'

export function BlogPostItemHeaderTags(): JSX.Element {
  const { metadata } = useBlogPost()
  const { tags } = metadata

  if (!tags) return null
  if (tags.length === 0) return null

  return (
    <div className={styles.tags}>
      {tags.map((tag) => (
        <Tag key={tag.label} href={tag.permalink}>{tag.label}</Tag>
      ))}
    </div>
  )
}

import React, { ComponentType, JSX, useEffect, useState } from 'react'
import type { Props } from '@theme/BlogPostItems'
import type { PropBlogPostContent } from '@docusaurus/plugin-content-blog'

import styles from './BlogPostItems.module.css'

export default function BlogPostItems({
  items,
}: Props): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {items.map(({ content: BlogPostContent }) => (
          <BlogPostCard
            key={BlogPostContent.metadata.permalink}
            content={BlogPostContent}
          />
        ))}
      </div>
    </section>
  )
}

type BlogPostCardProps = {
  content: PropBlogPostContent
}

const BlogPostCard = ({ content }: BlogPostCardProps) => {
  const [BlogPostItemComponent, setBlogPostItemComponent] = useState<ComponentType<{}> | null>(null)

  useEffect(() => {
    const blogId = content.metadata.permalink.split('/')[1]
    if (blogId === 'articles') {
      import('@site/src/components/BlogPostCard/ArticleCard/ArticleCard').then(({ArticleCard}) => {
        setBlogPostItemComponent(() => ArticleCard)
      })

      return
    }

    import('@site/src/components/BlogPostCard/OpportunityCard/OpportunityCard').then(({OpportunityCard}) => {
      setBlogPostItemComponent(() => OpportunityCard)
    })
  }, [content.metadata.permalink])

    const blogPost = {
      permalink: content.metadata.permalink,
      image: content.assets.image,
      title: content.metadata.title,
      tags: content.metadata.tags,
    }

  if (!BlogPostItemComponent) return null
  if (!blogPost) return null

  return <BlogPostItemComponent post={blogPost} />
}

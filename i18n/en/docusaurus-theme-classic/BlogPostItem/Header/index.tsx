import React, { JSX } from 'react'
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title'
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info'

import styles from '@site/src/theme/BlogPostItem/Header/Header.module.css'
import { BlogPostHeaderImage } from '@site/src/theme/BlogPostItem/Header/BlogPostHeaderImage/BlogPostHeaderImage'
import { BlogPostItemHeaderTags } from '@site/src/theme/BlogPostItem/Header/BlogPostItemHeaderTags/BlogPostItemHeaderTags'
import { useBlogPost } from '@docusaurus/plugin-content-blog/lib/client/index.js'

export default function BlogPostItemHeader(): JSX.Element {
  const { metadata: { permalink } } = useBlogPost()
  const blogId = permalink.split('/')[1]


  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>

        {blogId === 'opportunities' && <a className={styles.backLink} href="/opportunities">← All opportunities</a>}
        {blogId === 'articles' && <a className={styles.backLink} href="/articles">← All articles</a>}

        <div className={styles.headerContentWrapper}>
          <BlogPostItemHeaderTitle />
          <BlogPostItemHeaderInfo />
          <BlogPostItemHeaderTags />
        </div>
        <BlogPostHeaderImage />
      </div>
    </header>
  )
}

import React, { JSX } from 'react'
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title'
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info'

import styles from './Header.module.css'
import { BlogPostHeaderImage } from './BlogPostHeaderImage/BlogPostHeaderImage'
import { BlogPostItemHeaderTags } from './BlogPostItemHeaderTags/BlogPostItemHeaderTags'
import { useBlogPost } from '@docusaurus/plugin-content-blog/lib/client/index.js'

export default function BlogPostItemHeader(): JSX.Element {
  const { metadata: { permalink } } = useBlogPost()
  const blogId = permalink.split('/')[1]


  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>

        {blogId === 'opportunities' && <a className={styles.backLink} href="/opportunities">← Усе магчымасці</a>}
        {blogId === 'articles' && <a className={styles.backLink} href="/articles">← Усе артыкулы</a>}

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

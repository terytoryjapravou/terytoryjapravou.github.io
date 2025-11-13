import React, { JSX } from 'react'
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title'
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info'

import styles from './Header.module.css'
import { BlogPostHeaderImage } from './BlogPostHeaderImage/BlogPostHeaderImage'
import { BlogPostItemHeaderTags } from './BlogPostItemHeaderTags/BlogPostItemHeaderTags'

export default function BlogPostItemHeader(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.headerContentWrapper}>
        <BlogPostItemHeaderTitle />
        <BlogPostItemHeaderInfo />
        <BlogPostItemHeaderTags />
      </div>
      <BlogPostHeaderImage />
    </header>
  )
}

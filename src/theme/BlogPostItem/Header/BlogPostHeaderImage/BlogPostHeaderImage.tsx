import {useBlogPost} from '@docusaurus/plugin-content-blog/client'

import styles from './BlogPostHeaderImage.module.css'

export function BlogPostHeaderImage() {
  const { assets, metadata } = useBlogPost()
  const { image } = assets
  const { description } = metadata

  if (!image) {
    return null
  }

  return <img className={styles.image} src={image} alt={description} />
}

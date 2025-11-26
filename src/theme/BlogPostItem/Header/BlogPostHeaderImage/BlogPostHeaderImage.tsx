import { useBlogPost } from '@docusaurus/plugin-content-blog/client'
import Image from '@theme/IdealImage';

import styles from './BlogPostHeaderImage.module.css'

export function BlogPostHeaderImage() {
  const { assets, metadata } = useBlogPost()
  const { image } = assets
  const { description } = metadata

  if (!image) {
    return null
  }

  return <Image className={styles.image} img={image} alt={description} />
}

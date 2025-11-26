import { TagsGroup } from '@site/src/components/TagsGroup/TagsGroup'
import type { BlogPaginatedMetadata } from '@docusaurus/plugin-content-blog'
import { useEffect, useState } from 'react';
import Image from '@theme/IdealImage';

import styles from './BlogListPageHeader.module.css'
import { useWindowSize } from '@docusaurus/theme-common';

export function BlogListPageHeader({ metadata }: { metadata: BlogPaginatedMetadata }) {
  const [illustrationUrl, setIllustrationUrl] = useState<string | null>(null)
  const windowSize = useWindowSize()


  // should be same as blog root path
  const blogId = metadata.permalink.split('/')[1]

  const descriptionParagraphs = metadata.blogDescription
    .split('\n')
    .map(paragraph => paragraph.trim())
    .filter(paragraph => paragraph.length > 0)

  useEffect(() => {
    if (!blogId) return

    if (blogId === 'articles') {
      import('./assets/articles.png').then(module => {
        setIllustrationUrl(module.default)
      })

      return
    }

    if (blogId === 'opportunities') {
      import('./assets/opportunities.png').then(module => {
        setIllustrationUrl(module.default)
      })

      return
    }

  }, [blogId, setIllustrationUrl])

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{metadata.blogTitle}</h1>
        <div className={styles.tagsGroupWrapper}>
          <TagsGroup blogId={blogId} />
          {windowSize === 'mobile' && illustrationUrl && <Image img={illustrationUrl} alt="Illustration" className={styles.illustration} />}
        </div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.description}>{descriptionParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}</div>
          {windowSize === 'desktop' && illustrationUrl && <Image img={illustrationUrl} alt="Illustration" className={styles.illustration} />}
        </div>
      </div>
    </section>
  )
}

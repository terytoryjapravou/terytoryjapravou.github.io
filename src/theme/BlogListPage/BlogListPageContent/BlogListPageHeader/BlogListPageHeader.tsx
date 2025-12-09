import { TagsGroup } from '@site/src/components/TagsGroup/TagsGroup'
import type { BlogPaginatedMetadata } from '@docusaurus/plugin-content-blog'
import Image from '@theme/IdealImage';

import styles from './BlogListPageHeader.module.css'
import { useWindowSize } from '@docusaurus/theme-common';

export function BlogListPageHeader({ metadata }: { metadata: BlogPaginatedMetadata }) {
  const windowSize = useWindowSize()

  // should be same as blog root path
  const blogId = metadata.permalink.split('/')[1]

  const descriptionParagraphs = metadata.blogDescription
    .split('\n')
    .map(paragraph => paragraph.trim())
    .filter(paragraph => paragraph.length > 0)

  const asset =
    blogId === 'articles' ? require('./assets/illystration_3.png') :
      blogId === 'opportunities' ? require('./assets/illystration_6.png') :
        null

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{metadata.blogTitle}</h1>
        <div className={styles.tagsGroupWrapper}>
          <TagsGroup blogId={blogId} />
          {windowSize === 'mobile' && asset && (
            <div className={styles.mobileImageWrapper}>
              <div className={styles.imageWrapper}>
                <Image
                  img={asset}
                  alt="Illustration"
                />
              </div>
            </div>
          )}
        </div>
        <div className={styles.descriptionWrapper}>
          <div className={styles.description}>{descriptionParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}</div>
          {windowSize === 'desktop' && asset && (
            <div className={styles.imageWrapper}>
              <Image
                img={asset}
                alt="Illustration"
                style={{
                  maxWidth: 400,
                  maxHeight: 400,
                  width: '100%',
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

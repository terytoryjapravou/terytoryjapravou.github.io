import { Tag } from "@site/src/components/Tag/Tag"
import styles from "./OpportunityCard.module.css"
import { Button } from "@site/src/components/Button/Button"
import { BlogPostCardProps } from "../BlogPostCardProps"
import Image from '@theme/IdealImage';

export function OpportunityCard({ post }: BlogPostCardProps) {
  return (
    <a href={post.permalink} className={styles.card}>
      {post.image &&
        <div className={styles.previewImage}>
          <Image img={post.image} alt={post.title} />
        </div>
      }

      {Boolean(post.tags.length) &&
        <div className={styles.tagsGroup}>
          {post.tags.map(tag =>
            <Tag key={tag.permalink} >{tag.label}</Tag>
          )}
        </div>
      }

      <div className={styles.content}>
        <div className={styles.title}>{post.title}</div>
      </div>

      <Button href={post.permalink} className={styles.button}>
        Запісацца
      </Button>
    </a>
  )
}

import { Tag } from "@site/src/components/Tag/Tag"
import styles from "./OpportunityCard.module.css"
import { BlogPost } from "@site/src/hooks/useBlogData"
import { Button } from "@site/src/components/Button/Button"

type OpportunityCardProps = {
  post: BlogPost
}

export function OpportunityCard({ post }: OpportunityCardProps) {
  return (
    <div className={styles.card}>
      {post.image && <img className={styles.previewImage} src={post.image} alt={post.title} />}

      {Boolean(post.tags.length) &&
        <div className={styles.tagsGroup}>
          {post.tags.map(tag =>
            <Tag key={tag.permalink} >{tag.label}</Tag>
          )}
        </div>
      }

      <div className={styles.content}>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.description}>{post.description}</div>
      </div>

      <Button href={post.permalink}>
        Запісацца
      </Button>
    </div>
  )
}

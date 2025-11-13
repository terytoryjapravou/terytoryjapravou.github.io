import style from "./ArticleCard.module.css"
import { Tag } from "@site/src/components/Tag/Tag"
import { BlogPostCardProps } from "../BlogPostCardProps"

export const ArticleCard = function ({post}: BlogPostCardProps) {
  return (
    <a href={post.permalink} className={style.card}>
      {post.image && <img className={style.previewImage} src={post.image} alt={post.title} />}

      {Boolean(post.tags.length) &&
        <div className={style.tagsGroup}>
          {post.tags.map(tag =>
            <Tag key={tag.permalink} >{tag.label}</Tag>
          )}
        </div>
      }
      <div className={style.title}>{post.title}</div>
    </a>
  )
}

import { Tag } from "@site/src/components/Tag/Tag"
import { useBlogTags } from "@site/src/hooks/useBlogTags"
import clsx from "clsx"
import styles from "./TagsGroup.module.css"

export function TagsGroup ({ blogId, className }: { blogId: string, className?: string }) {
  const { tags, loading } = useBlogTags(blogId)

  if (loading) return null
  if (tags.length === 0) return null

  return (
    <nav className={clsx(styles.tags, className)}>
      {tags.map((tag) =>
        <Tag key={tag.permalink} href={tag.permalink}>{tag.label}</Tag>
      )}
    </nav>
  )
}

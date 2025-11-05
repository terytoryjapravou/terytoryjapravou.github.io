import { useLoadBlogData } from "@site/src/hooks/useBlogData"
import { useWindowSize } from '@docusaurus/theme-common'

import styles from "./RecentArticlesSection.module.css"
import { Tag } from "@site/src/components/Tag/Tag"
import { ArticleCard } from "./ArticleCard/ArticleCard"
import { SectionHeader } from "../../../SectionHeader/SectionHeader"
import { useBlogTags } from "@site/src/hooks/useBlogTags"

export const RecentArticlesSection = () => {
  const { posts, loading } = useLoadBlogData('articles')
  const screenSize = useWindowSize()

  const articlesCount = screenSize === 'mobile' ? 1 : 3

  if (loading) return null
  if (posts.length === 0) return null

  return (
    <section>
      <div className={styles.articles}>
        <SectionHeader
          title="Артыкулы"
          subtitle="Чытаць больш"
          href="/articles"
        />

        <div className={styles.content}>
          <TagsCard />
          {posts.slice(0, articlesCount).map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}


const TagsCard = () => {
  const screenSize = useWindowSize()
  const { tags, loading } = useBlogTags('articles')

  if (screenSize === 'mobile') return null
  if (loading) return null
  if (tags.length === 0) return null

  console.log('tags', tags)

  return (
    <nav className={styles.tags}>
      {tags.map((tag) =>
        <Tag key={tag.permalink} href={tag.permalink}>{tag.label}</Tag>
      )}
    </nav>
  )
}

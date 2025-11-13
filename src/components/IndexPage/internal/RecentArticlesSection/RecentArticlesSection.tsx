import { useLoadBlogData } from "@site/src/hooks/useBlogData"
import { useWindowSize } from '@docusaurus/theme-common'

import styles from "./RecentArticlesSection.module.css"
import { ArticleCard } from "../../../BlogPostCard/ArticleCard/ArticleCard"
import { SectionHeader } from "../../../SectionHeader/SectionHeader"
import { TagsCard } from "./TagsCard/TagsCard"

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

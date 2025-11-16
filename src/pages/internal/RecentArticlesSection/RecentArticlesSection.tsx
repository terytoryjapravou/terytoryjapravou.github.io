import { useLoadBlogData } from "@site/src/hooks/useBlogData"
import { useWindowSize } from '@docusaurus/theme-common'

import styles from "./RecentArticlesSection.module.css"
import { TagsCard } from "./TagsCard/TagsCard"
import { SectionHeader } from "@site/src/components/SectionHeader/SectionHeader"
import { ArticleCard } from "@site/src/components/BlogPostCard/ArticleCard/ArticleCard"

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

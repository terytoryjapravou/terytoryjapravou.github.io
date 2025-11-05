import { SectionHeader } from "@site/src/components/SectionHeader/SectionHeader";
import styles from "./RecentOpportunitiesSection.module.css";
import { useWindowSize } from "@docusaurus/theme-common";
import { useLoadBlogData } from "@site/src/hooks/useBlogData";
import { OpportunityCard } from "./OpportunityCard/OpportunityCard";

export function RecentOpportunitiesSection() {
  const { posts, loading } = useLoadBlogData('articles')
  const screenSize = useWindowSize()

  const articlesCount = screenSize === 'mobile' ? 1 : 3

  if (loading) return null
  if (posts.length === 0) return null

  return (
    <section className={styles.section}>
      <div className={styles.opportunities}>
        <SectionHeader
          title="Магчымасці"
          subtitle="Чытаць больш"
          href="/opportunities"
        />

        <div className={styles.content}>
          {posts.slice(0, articlesCount).map((post) =>
            <OpportunityCard key={post.id} post={post} />
          )}
        </div>
      </div>
    </section>
  )
}

import { useLoadBlogData } from "@site/src/hooks/useBlogData"

import styles from "./ArticlesFooter.module.css"

export function ArticlesFooter() {
  const { posts, loading } = useLoadBlogData('articles')
  const articlesCount = 3

  if (loading) return null
  if (posts.length === 0) return null

  return (
    <footer className={styles.footer}>
      <h6 className={styles.title}>Чытайце яшчэ:</h6>
      {posts.slice(0, articlesCount).map((post) => (
        <div key={post.id} className={styles.linkWrapper}>
          <a href={post.permalink} className={styles.link}>{post.title}</a>
        </div>
      ))}
    </footer>
  )
}

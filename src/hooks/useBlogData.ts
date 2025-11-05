import { useEffect, useState } from "react";

export type BlogPost = {
  id: string
  title: string
  description?: string
  date: string
  formattedDate: string
  permalink: string
  image?: string
  tags: Array<{
    label: string
    permalink: string
  }>
  authors: Array<{
    name: string
    title?: string
    url?: string
    imageURL?: string
  }>
}

export function useLoadBlogData(blogId: string) {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/data/${blogId}.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load blog data: ${response.statusText}`)
        }
        return response.json()
      })
      .then((data) => {
        setPosts(data)
      })
      .catch((error) => {
        console.error(`Error loading blog data for ${blogId}:`, error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [blogId, setPosts, setLoading])

  return { posts, loading }
}

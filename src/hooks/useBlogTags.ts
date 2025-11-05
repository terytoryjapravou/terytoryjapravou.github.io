import { useEffect, useState } from "react";

export interface BlogTag {
  label: string;
  permalink: string;
  count: number;
}

export function useBlogTags(blogId: string) {
  const [tags, setTags] = useState<BlogTag[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch(`/data/${blogId}-tags.json`);
        if (!response.ok) {
          throw new Error(`Failed to load blog tags: ${response.statusText}`);
        }
        const data = await response.json();
        setTags(data);
      } catch (error) {
        console.error(`Error loading blog tags for ${blogId}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [blogId, setTags, setLoading]);

  return { tags, loading }
}

import { BlogPost } from "@site/src/hooks/useBlogData";

export type BlogPostCardProps = {
  post: Pick<BlogPost, 'permalink' | 'image' | 'title' | 'tags'>;
};

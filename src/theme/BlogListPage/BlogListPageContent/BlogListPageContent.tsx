import BlogLayout from '@theme/BlogLayout'
import type { Props } from '@theme/BlogListPage'
import BlogListPaginator from '@theme/BlogListPaginator'
import BlogPostItems from '@theme/BlogPostItems'
import React from 'react'
import { BlogListPageHeader } from './BlogListPageHeader/BlogListPageHeader'

export function BlogListPageContent({ metadata, items, sidebar }: Props) {
  return (
    <BlogLayout sidebar={sidebar}>
      <BlogListPageHeader metadata={metadata} />
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  )
}

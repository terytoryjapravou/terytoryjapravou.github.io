import React, { JSX } from 'react'
import {useBlogPost} from '@docusaurus/plugin-content-blog/client'
import { ArticlesFooter } from './ArticlesFooter/ArticlesFooter'
import { OpportunityFooter } from './OpportunityFooter/OpportunityFooter'

export default function BlogPostItemFooter(): JSX.Element | null {
  const { metadata: { permalink } } = useBlogPost()
  const blogId = permalink.split('/')[1]

  if (blogId === 'articles') return <ArticlesFooter />
  if (blogId === 'opportunities') return <OpportunityFooter />

  return null
}

import React, { JSX } from 'react'
import Translate, { translate } from '@docusaurus/Translate'
import PaginatorNavLink from '@theme/PaginatorNavLink'
import type { Props } from '@theme/BlogListPaginator'

import styles from './BlogListPaginator.module.css'

export default function BlogListPaginator(props: Props): JSX.Element {
  const { metadata } = props;
  const { previousPage, nextPage } = metadata;

  return (
    <div className={styles.wrapper}>

      <nav
        className={styles.nav}
        aria-label={translate({
          id: 'theme.blog.paginator.navAriaLabel',
          message: 'Blog list page navigation',
          description: 'The ARIA label for the blog pagination',
        })}>
        {previousPage && (
          <PaginatorNavLink
            permalink={previousPage}
            title={'Папярэдняя старонка'}
          />
        )}
        {nextPage && (
          <PaginatorNavLink
            permalink={nextPage}
            title={'Наступная старонка'}
            isNext
          />
        )}
      </nav>
    </div>
  )
}

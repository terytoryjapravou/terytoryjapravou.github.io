import React, { JSX } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';

import type { Props } from '@theme/BlogLayout';

import styles from './BlogLayout.module.css';
import { useWindowSize } from '@docusaurus/theme-common';

export default function BlogLayout(props: Props): JSX.Element {
  const windowSize = useWindowSize()
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;

  return (
    <Layout {...layoutProps}>
      <div className={clsx("row", styles.blogLayout)}>
        <BlogSidebar sidebar={sidebar} />
        <main
          className={clsx('col', styles.main, {
            'col--7': hasSidebar,
          })}>
          {children}
        </main>
        {/* {toc && <div className="col col--2">{toc}</div>} */}
      </div>
    </Layout>
  )
}

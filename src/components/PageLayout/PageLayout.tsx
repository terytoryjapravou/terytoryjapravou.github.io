import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import clsx from 'clsx';
import styles from './PageLayout.module.css';

type PageLayoutProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  noFooter?: boolean;
  wrapperClassName?: string;
  headChildren?: React.ReactNode;
  image?: string;
}

export function PageLayout({
  title,
  description,
  children,
  noFooter = false,
  wrapperClassName,
  headChildren,
  image,
}: PageLayoutProps): React.JSX.Element {
  return (
    <Layout
      title={title}
      description={description}
      noFooter={noFooter}
      wrapperClassName={clsx(styles.pageWrapper, wrapperClassName)}
    >
      <Head>
        <meta property="og:title" content={title} />
        {description && <meta property="og:description" content={description} />}
        {image && <meta property="og:image" content={image} />}
        {headChildren}
      </Head>

      <main className={styles.main}>
        {children}
      </main>
    </Layout>
  );
}

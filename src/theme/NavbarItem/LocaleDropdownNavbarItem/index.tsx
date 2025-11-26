import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import Link from '@docusaurus/Link';
import type { Props } from '@theme/NavbarItem/LocaleDropdownNavbarItem';

import styles from './styles.module.css';

export default function LocaleDropdownNavbarItem({
  queryString = '',
  ...props
}: Props): JSX.Element {
  const {
    i18n: { currentLocale, locales, localeConfigs, defaultLocale },
  } = useDocusaurusContext();
  const { search, hash, pathname } = useLocation();

  const localeItems = locales.map((locale): { locale: string; to: string; onClick: () => void; isActive: boolean } => {
    // Remove current locale prefix from pathname
    let cleanPathname = pathname;

    // Remove /en prefix if we're on English page
    if (cleanPathname.startsWith('/en/')) {
      cleanPathname = cleanPathname.replace('/en/', '/');
    } else if (cleanPathname === '/en') {
      cleanPathname = '/';
    }

    // Build target URL based on target locale
    let targetUrl: string;
    if (locale === defaultLocale) {
      // For default locale (be), no prefix
      targetUrl = cleanPathname;
    } else {
      // For other locales (en), add prefix
      if (cleanPathname === '/') {
        targetUrl = `/${locale}`;
      } else {
        targetUrl = `/${locale}${cleanPathname}`;
      }
    }

    const baseTo = `pathname://${targetUrl}`;
    // preserve ?search#hash suffix on locale switches
    const to = `${baseTo}${search}${hash}${queryString}`;

    // Save locale preference to localStorage when clicked
    const onClick = () => {
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        localStorage.setItem('docusaurus.locale', locale);
      }
    };

    return {
      locale,
      to,
      onClick,
      isActive: locale === currentLocale,
    };
  });

  return (
    <div className={styles.localeButtons}>
      {localeItems.map((item, index) => (
        <React.Fragment key={item.locale}>
          <Link
            to={item.to}
            onClick={item.onClick}
            className={item.isActive ? styles.activeLocale : styles.inactiveLocale}
            target="_self"
            autoAddBaseUrl={false}
          >
            {item.locale}
          </Link>
          {index < localeItems.length - 1 && (
            <span className={styles.separator}>|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

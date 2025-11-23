import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useAlternatePageUtils } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import IconLanguage from '@theme/Icon/Language';
import type { LinkLikeNavbarItemProps } from '@theme/NavbarItem';
import type { Props } from '@theme/NavbarItem/LocaleDropdownNavbarItem';

import styles from './styles.module.css';

export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  queryString = '',
  ...props
}: Props): JSX.Element {
  const {
    i18n: { currentLocale, locales, localeConfigs, defaultLocale },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const { search, hash, pathname } = useLocation();

  const localeItems = locales.map((locale): LinkLikeNavbarItemProps => {
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

    return {
      label: localeConfigs[locale]!.label,
      lang: localeConfigs[locale]!.htmlLang,
      to,
      target: '_self',
      autoAddBaseUrl: false,
      className:
        // eslint-disable-next-line no-nested-ternary
        locale === currentLocale
          ? // Similar idea as DefaultNavbarItem: select the right Infima active
          // class name. This cannot be substituted with isActive, because the
          // target URLs contain `pathname://` and therefore are not NavLinks!
          mobile
            ? 'menu__link--active'
            : 'dropdown__link--active'
          : '',
    };
  });

  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];

  // Mobile is handled a bit differently
  const dropdownLabel = mobile
    ? translate({
      message: 'Languages',
      id: 'theme.navbar.mobileLanguageDropdown.label',
      description: 'The label for the mobile language switcher dropdown',
    })
    : localeConfigs[currentLocale]!.label;

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={
        <>
          <IconLanguage className={styles.iconLanguage} />
          {dropdownLabel}
        </>
      }
      items={items}
    />
  );
}

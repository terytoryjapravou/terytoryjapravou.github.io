import React, { JSX } from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import NavbarItem, { type Props as NavbarItemConfig } from '@theme/NavbarItem';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function filterNavbarItemsByLocale(items: NavbarItemConfig[], locale: string): NavbarItemConfig[] {
  // For English locale, filter out articles and opportunities
  if (locale === 'en') {
    return items.filter((item) => {
      // Check if it's a link to articles or opportunities
      if ('to' in item) {
        const path = item.to as string;
        return !path.includes('/articles') && !path.includes('/opportunities');
      }
      return true;
    });
  }
  return items;
}

// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar();
  const { i18n: { currentLocale } } = useDocusaurusContext();

  // TODO how can the order be defined for mobile?
  // Should we allow providing a different list of items?
  const items = useNavbarItems();
  // Filter items based on current locale
  const filteredItems = filterNavbarItemsByLocale(items, currentLocale);

  return (
    <ul className="menu__list">
      {filteredItems.map((item, i) => (
        <NavbarItem
          mobile
          {...item}
          onClick={() => mobileSidebar.toggle()}
          key={i}
        />
      ))}
    </ul>
  );
}

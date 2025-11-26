import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { buildConfigArticlesPlugins } from './buildConfigArticlesPlugins';
import { buildConfigOpportunitiesPlugins } from './buildConfigOpportunitiesPlugins';

const config: Config = {
  title: 'Тэрыторыя правоў',
  tagline: 'Асветніцка-адукацыйная ініцыятыва пра правы чалавека для прадстаў_ніц беларускага грамадства',
  favicon: 'img/favicon.svg',

  url: 'https://terytoryja-pravou.org',
  baseUrl: '/',

  organizationName: 'terytoryjapravou',
  projectName: 'terytoryja-pravou.org',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'be',
    locales: ['be', 'en'],
    path: 'i18n',
    localeConfigs: {
      be: {
        label: 'Беларуская',
        direction: 'ltr',
        htmlLang: 'be-BY',
        path: 'be',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        path: 'en',
      },
    },
  },

  plugins: [
    ...buildConfigArticlesPlugins(),
    ...buildConfigOpportunitiesPlugins(),
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 90,
        max: 2880,
        min: 640,
        steps: 4,
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        pages: {
          exclude: ['**/internal/**'],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {

    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'Тэрыторыя правоў',
      hideOnScroll: false,
      logo: {
        alt: 'Тэрыторыя правоў',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/about',
          label: 'Пра нас',
          position: 'right',
        },
        {
          to: '/articles',
          label: 'Артыкулы',
          position: 'right',
          // Hide for English locale - content not translated
          docsPluginId: 'default',
        },
        {
          to: '/opportunities',
          label: 'Магчымасці',
          position: 'right',
          // Hide for English locale - content not translated
          docsPluginId: 'default',
        },
        {
          to: '/activity',
          label: 'Дзейнасць',
          position: 'right',
        },
        {
          to: '/donate',
          label: 'Падтрымаць',
          position: 'right',
        },

        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },

    footer: {},

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

  } satisfies Preset.ThemeConfig,
};

export default config;

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const articlesDescription = `Тут мы сабралі ўсе нашы матэрыялы пра правы чалавека: ад разбораў законаў да асабістых гісторый, ад тэорыі да мастацтва.

Выбірайце тэгі, каб хутчэй знайсці патрэбнае, або проста гартайце галоўныя матэрыялы ніжэй.`


const opportunitiesDescription = `Адукацыя, стыпендыі, стажыроўкі, гранты і падзеі ў сферы правоў чалавека. Тут вы знойдзеце тое, што дапаможа развівацца і дзейнічаць кожнаму і кожнай.`

const config: Config = {
  title: 'Тэрыторыя правоў',
  tagline: 'Асветніцка-адукацыйная ініцыятыва пра правы чалавека для прадстаў_ніц беларускага грамадства',
  favicon: 'img/favicon.ico',

  url: 'https://terytoryja-pravou.org',
  baseUrl: '/',

  organizationName: 'terytoryjapravou',
  projectName: 'terytoryja-pravou.org',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'be',
    locales: [ 'be' ],
    path: 'i18n',
    localeConfigs: {
      be: {
        label: 'Беларуская',
        direction: 'ltr',
        htmlLang: 'be-BY',

      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'articles',
        path: './content/articles',
        routeBasePath: 'articles',
        blogTitle: 'Артыкулы',
        blogDescription: articlesDescription,
        blogSidebarCount: 0,
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'opportunities',
        path: './content/opportunities',
        routeBasePath: 'opportunities',
        blogTitle: 'Магчымасці',
        blogDescription: opportunitiesDescription,
        blogSidebarCount: 0,
        showReadingTime: false,
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
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
      items: [
        {
          to: '/about',
          label: 'Пра нас',
          position: 'left',
        },
        {
          to: '/articles',
          label: 'Артыкулы',
          position: 'left',
        },
        {
          to: '/opportunities',
          label: 'Магчымасці',
          position: 'left',
        },

        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
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

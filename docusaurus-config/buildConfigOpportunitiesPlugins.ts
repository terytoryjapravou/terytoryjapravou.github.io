import type { PluginConfig } from '@docusaurus/types'

export function buildConfigOpportunitiesPlugins(): PluginConfig[] {
  const blogId = 'opportunities';
  const blogTitle = 'Магчымасці';
  const opportunitiesDescription = `Адукацыя, стыпендыі, стажыроўкі, гранты і падзеі ў сферы правоў чалавека. Тут вы знойдзеце тое, што дапаможа развівацца і дзейнічаць кожнаму і кожнай.`;


  return [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: blogId,
        path: `./content/${blogId}`,
        routeBasePath: blogId,
        blogTitle: blogTitle,
        blogDescription: opportunitiesDescription,
        blogSidebarCount: 0,
        showReadingTime: false,
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
        postsPerPage: 6,
      },
    ],

    [
      '../plugins/blogJsonGeneratorPlugin',
      {
        id: `${blogId}-json`,
        blogPluginId: blogId,
        outputPath: 'static/data',
        limit: 3,
      },
    ],
  ]
}

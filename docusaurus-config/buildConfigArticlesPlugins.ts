import type { PluginConfig } from '@docusaurus/types'

export function buildConfigArticlesPlugins(): PluginConfig[] {
  const blogId = 'articles'
  const blogTitle = 'Артыкулы'

  const blogDescription = `
    Тут мы сабралі ўсе нашы матэрыялы пра правы чалавека: ад разбораў законаў да асабістых гісторый, ад тэорыі да мастацтва.
    Выбірайце тэгі, каб хутчэй знайсці патрэбнае, або проста гартайце галоўныя матэрыялы ніжэй.`


  return [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: blogId,
        path: `./content/${blogId}`,
        routeBasePath: blogId,
        blogTitle: blogTitle,
        blogDescription: blogDescription,
        blogSidebarCount: 0,
        onInlineTags: 'warn',
        onInlineAuthors: 'warn',
        onUntruncatedBlogPosts: 'warn',
        postsPerPage: 8,
        exclude: ['**/**draft**/**'],
      },
    ],
    [
      '../plugins/blogJsonGeneratorPlugin',
      {
        id: `${blogId}-json`,
        blogPluginId: blogId,
        outputPath: 'static/data',
        limit: 5,
      },
    ],
    [
      '../plugins/blogTagsJsonGeneratorPlugin',
      {
        id: `${blogId}-tags-json`,
        blogPluginId: blogId,
        outputPath: 'static/data',
      },
    ],
  ]
}

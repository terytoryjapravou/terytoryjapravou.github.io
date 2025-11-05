import type { LoadContext, Plugin } from '@docusaurus/types';
import * as fs from 'fs/promises';
import * as path from 'path';
import { findBuiltImageAsset } from './internal/findBuiltImageAsset';

interface BlogPost {
  id: string;
  title: string;
  description?: string;
  date: string;
  formattedDate?: string;
  permalink: string;
  image?: string;
  tags: Array<{
    label: string;
    permalink: string;
  }>;
  authors: Array<{
    name: string;
    title?: string;
    url?: string;
    imageURL?: string;
  }>;
}

interface BlogJsonGeneratorOptions {
  id?: string;
  blogPluginId: string;
  outputPath?: string;
  limit?: number;
}

export function blogJsonGeneratorPlugin(
  context: LoadContext,
  options: BlogJsonGeneratorOptions
): Plugin<void> {
  const { id, blogPluginId, outputPath = 'static/data', limit = 5 } = options;

  return {
    name: 'blog-json-generator',
    ...(id && { id }),

    async postBuild({ outDir }: any) {
      try {
        // Read blog data from .docusaurus directory
        const blogDataDir = path.join(
          context.siteDir,
          '.docusaurus',
          'docusaurus-plugin-content-blog',
          blogPluginId
        );

        // Read all JSON files in the blog data directory
        const files = await fs.readdir(blogDataDir);
        const postFiles = files.filter(f => f.startsWith('site-content-') && f.endsWith('.json'));

        if (postFiles.length === 0) {
          console.warn(
            `✗ No blog posts found for "${blogPluginId}"`
          );
          return;
        }

        // Read all post metadata
        const posts = await Promise.all(
          postFiles.map(async (file) => {
            const content = await fs.readFile(path.join(blogDataDir, file), 'utf-8');
            return JSON.parse(content);
          })
        );

        // Sort by date (newest first) and take the limit
        const sortedPosts = posts
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, limit);


        // Transform to our BlogPost format
        const blogData: BlogPost[] = await Promise.all(
          sortedPosts.map(async (post: any) => {
            const image = await findBuiltImageAsset({
              imagePath: post.frontMatter?.image,
              postSource: post.source,
              context,
              outDir,
            });

            return {
              id: path.basename(post.source, path.extname(post.source)),
              title: post.title,
              description: post.description,
              date: post.date,
              formattedDate: new Date(post.date).toLocaleDateString('be-BY', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              }),
              permalink: post.permalink,
              image,
              tags: (post.tags || []).map((tag: any) => ({
                label: tag.label,
                permalink: tag.permalink,
              })),
              authors: (post.authors || []).map((author: any) => ({
                name: author.name,
                title: author.title,
                url: author.url,
                imageURL: author.imageURL,
              })),
            };
          })
        );

        // Write JSON file to build output
        const outputFile = path.join(outDir, 'data', `${blogPluginId}.json`);
        await fs.mkdir(path.dirname(outputFile), { recursive: true });
        await fs.writeFile(
          outputFile,
          JSON.stringify(blogData, null, 2),
          'utf-8'
        );

        console.log(
          `✓ Generated data/${blogPluginId}.json with ${blogData.length} posts`
        );
      } catch (error) {
        console.error(
          `✗ Error generating JSON for "${blogPluginId}":`,
          error
        );
      }
    },
  };
}

import type { LoadContext, Plugin } from '@docusaurus/types';
import * as fs from 'fs/promises';
import * as path from 'path';

type BlogTag = {
  label: string;
  permalink: string;
  count: number;
}

type BlogTagsGeneratorOptions = {
  id?: string;
  blogPluginId: string;
  outputPath?: string;
}

export default function blogTagsJsonGeneratorPlugin(
  context: LoadContext,
  options: BlogTagsGeneratorOptions
): Plugin<void> {
  const { id, blogPluginId, outputPath = 'static/data' } = options;

  return {
    name: 'blog-tags-json-generator',
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
            `✗ No blog posts found for tags in "${blogPluginId}"`
          );
          return;
        }

        // Read all post metadata and collect tags
        const posts = await Promise.all(
          postFiles.map(async (file) => {
            const content = await fs.readFile(path.join(blogDataDir, file), 'utf-8');
            return JSON.parse(content);
          })
        );

        // Count tags
        const tagMap = new Map<string, { label: string; permalink: string; count: number }>();

        posts.forEach((post: any) => {
          (post.tags || []).forEach((tag: any) => {
            const key = tag.permalink;
            if (tagMap.has(key)) {
              tagMap.get(key)!.count++;
            } else {
              tagMap.set(key, {
                label: tag.label,
                permalink: tag.permalink,
                count: 1,
              });
            }
          });
        });

        // Convert to array and sort by count (descending)
        const tags: BlogTag[] = Array.from(tagMap.values())
          .sort((a, b) => b.count - a.count);

        if (tags.length === 0) {
          console.warn(
            `✗ No tags found for "${blogPluginId}"`
          );
          return;
        }

        // Write JSON file to build output
        const outputFile = path.join(outDir, 'data', `${blogPluginId}-tags.json`);
        await fs.mkdir(path.dirname(outputFile), { recursive: true });
        await fs.writeFile(
          outputFile,
          JSON.stringify(tags, null, 2),
          'utf-8'
        );

        console.log(
          `✓ Generated data/${blogPluginId}-tags.json with ${tags.length} tags`
        );
      } catch (error) {
        console.error(
          `✗ Error generating tags JSON for "${blogPluginId}":`,
          error
        );
      }
    },
  };
}

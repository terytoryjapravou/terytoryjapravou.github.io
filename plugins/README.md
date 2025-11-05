# Blog JSON Generator Plugins

This project includes two custom Docusaurus plugins that generate static JSON files at build time:

1. **blog-json-generator** - Generates JSON files with the latest N posts from blog plugins
2. **blog-tags-json-generator** - Generates JSON files with all tags and their post counts

## Generated Files

After running `npm run build`, the following JSON files are created in the `build/data/` directory:

- `articles.json` - Latest articles posts
- `articles-tags.json` - All tags from articles with counts
- `opportunities.json` - Latest opportunities posts
- `opportunities-tags.json` - All tags from opportunities with counts

## Configuration

### In `docusaurus.config.ts`:

```typescript
plugins: [
  // Blog post JSON generators
  [
    './plugins/blogJsonGeneratorPlugin',
    {
      id: 'articles-json',
      blogPluginId: 'articles',
      outputPath: 'static/data',
      limit: 5, // Number of posts to include
    },
  ],
  [
    './plugins/blogJsonGeneratorPlugin',
    {
      id: 'opportunities-json',
      blogPluginId: 'opportunities',
      outputPath: 'static/data',
      limit: 3,
    },
  ],

  // Tags JSON generators
  [
    './plugins/blog-tags-json-generator',
    {
      id: 'articles-tags-json',
      blogPluginId: 'articles',
      outputPath: 'static/data',
    },
  ],
  [
    './plugins/blog-tags-json-generator',
    {
      id: 'opportunities-tags-json',
      blogPluginId: 'opportunities',
      outputPath: 'static/data',
    },
  ],
]
```

## Components

### RecentBlogPosts

Displays the latest posts from a blog:

```tsx
import { RecentBlogPosts } from '@site/src/components/RecentBlogPosts/RecentBlogPosts';

<RecentBlogPosts
  blogId="articles"
  title="Апошнія артыкулы"
  showTags={true}
  showAuthors={false}
/>
```

**Props:**
- `blogId: string` - ID of the blog (e.g., 'articles', 'opportunities')
- `title?: string` - Section title (default: 'Апошнія публікацыі')
- `showTags?: boolean` - Show tags for each post (default: true)
- `showAuthors?: boolean` - Show authors for each post (default: false)

### BlogTags

Displays all tags from a blog with post counts:

```tsx
import { BlogTags } from '@site/src/components/BlogTags/BlogTags';

<BlogTags
  blogId="articles"
  title="Тэгі артыкулаў"
  showCount={true}
  limit={10}
/>
```

**Props:**
- `blogId: string` - ID of the blog (e.g., 'articles', 'opportunities')
- `title?: string` - Section title (default: 'Тэгі')
- `showCount?: boolean` - Show post count for each tag (default: true)
- `limit?: number` - Maximum number of tags to display (default: all)

## Utility Functions

### Load Blog Posts

```typescript
import { loadBlogData } from '@site/src/utils/blogData';

const posts = await loadBlogData('articles');
```

Returns an array of `BlogPost` objects:

```typescript
interface BlogPost {
  id: string;
  title: string;
  description?: string;
  date: string;
  formattedDate?: string;
  permalink: string;
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
```

### Load Blog Tags

```typescript
import { loadBlogTags } from '@site/src/utils/blogTagsData';

const tags = await loadBlogTags('articles');
```

Returns an array of `BlogTag` objects:

```typescript
interface BlogTag {
  label: string;
  permalink: string;
  count: number; // Number of posts with this tag
}
```

## Example Usage

### Complete Section with Posts and Tags

```tsx
import React from 'react';
import { RecentBlogPosts } from '@site/src/components/RecentBlogPosts/RecentBlogPosts';
import { BlogTags } from '@site/src/components/BlogTags/BlogTags';

export const ContentSection: React.FC = () => {
  return (
    <div>
      <RecentBlogPosts
        blogId="articles"
        title="Апошнія артыкулы"
        showTags={true}
      />

      <BlogTags
        blogId="articles"
        title="Тэгі артыкулаў"
        showCount={true}
        limit={10}
      />
    </div>
  );
};
```

### Custom Component Using Data

```tsx
import React, { useEffect, useState } from 'react';
import { loadBlogData, loadBlogTags } from '@site/src/utils';

export const CustomBlogWidget: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    Promise.all([
      loadBlogData('articles'),
      loadBlogTags('articles')
    ]).then(([postsData, tagsData]) => {
      setPosts(postsData);
      setTags(tagsData);
    });
  }, []);

  return (
    <div>
      <h2>Latest: {posts[0]?.title}</h2>
      <div>Popular tags: {tags.slice(0, 3).map(t => t.label).join(', ')}</div>
    </div>
  );
};
```

## Plugin Options

### blogJsonGeneratorPlugin Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `id` | `string` | - | Unique plugin instance ID (required for multiple instances) |
| `blogPluginId` | `string` | **required** | ID of the blog plugin to extract data from |
| `outputPath` | `string` | `'static/data'` | Directory where JSON files will be saved |
| `limit` | `number` | `5` | Maximum number of posts to include |

### blog-tags-json-generator Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `id` | `string` | - | Unique plugin instance ID (required for multiple instances) |
| `blogPluginId` | `string` | **required** | ID of the blog plugin to extract tags from |
| `outputPath` | `string` | `'static/data'` | Directory where JSON files will be saved |

## How It Works

### Build Time

1. **During Build**: Plugins read data from `.docusaurus/docusaurus-plugin-content-blog/{blogId}/`
2. **Processing**:
   - Posts are sorted by date (newest first)
   - Tags are collected and counted across all posts
   - Data is formatted according to the interfaces
3. **Output**: JSON files are written to `build/data/`

### Runtime

1. **Client Side**: Components fetch JSON files via `/data/{filename}.json`
2. **Rendering**: Data is displayed using React components with CSS Modules
3. **Caching**: Browser caches JSON files for better performance

## Customization

### Styling

All components use CSS Modules. Customize by editing:
- `src/components/RecentBlogPosts/RecentBlogPosts.module.css`
- `src/components/BlogTags/BlogTags.module.css`

### Data Format

To modify the data structure, edit the plugin files:
- `plugins/blogJsonGeneratorPlugin/index.ts`
- `plugins/blog-tags-json-generator/index.ts`

### Date Formatting

The `formattedDate` field uses Belarusian locale by default. To change:

```typescript
formattedDate: new Date(post.date).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})
```

## Troubleshooting

### JSON files not generated

- Check plugin configuration in `docusaurus.config.ts`
- Verify `blogPluginId` matches your blog plugin's ID
- Look for error messages in build output

### Components not displaying data

- Check browser console for network errors
- Verify JSON files exist at `/data/{filename}.json`
- Ensure `blogId` prop matches the JSON filename (without extension)

### Build errors

- Ensure all plugins have unique `id` values
- Check that the plugins directory structure is correct
- Run `npm run clear` and rebuild

## Performance Considerations

- JSON files are generated at build time (no runtime overhead)
- Files are small and cacheable by browsers
- Components use React's `useEffect` for efficient data loading
- Limit the number of posts/tags to keep JSON files small

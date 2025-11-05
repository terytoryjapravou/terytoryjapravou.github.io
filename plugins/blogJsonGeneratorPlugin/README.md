# Blog JSON Generator Plugin

This plugin generates static JSON files containing the latest N posts from Docusaurus blog plugins at build time. The JSON files can be consumed by any page to display recent posts dynamically.

## Features

- Generates JSON files during build time
- Configurable number of posts per blog
- Extracts all important metadata (title, description, date, tags, authors, permalink)
- Type-safe TypeScript implementation
- Reusable React component for displaying posts

## How It Works

1. **Build Time**: The plugin runs after the build and extracts blog post data from the specified blog plugin instances
2. **JSON Generation**: Creates JSON files in `static/data/` directory (e.g., `articles.json`, `opportunities.json`)
3. **Runtime**: Pages fetch these JSON files and display the data

## Configuration

In `docusaurus.config.ts`:

```typescript
plugins: [
  // ... your blog plugins ...

  [
    './plugins/blog-json-generator',
    {
      blogPluginId: 'articles',  // ID of the blog plugin
      outputPath: 'static/data',  // Where to save JSON files
      limit: 5,                   // Number of posts to include
    },
  ],
  [
    './plugins/blog-json-generator',
    {
      blogPluginId: 'opportunities',
      outputPath: 'static/data',
      limit: 3,
    },
  ],
]
```

## Usage in Components

### Basic Usage

```tsx
import { RecentBlogPosts } from '@site/src/components/RecentBlogPosts/RecentBlogPosts';

export const MyPage = () => {
  return (
    <RecentBlogPosts
      blogId="articles"
      title="Latest Articles"
      showTags={true}
      showAuthors={false}
    />
  );
};
```

### Advanced Usage - Custom Component

```tsx
import React, { useEffect, useState } from 'react';
import { loadBlogData, type BlogPost } from '@site/src/utils/blogData';

export const CustomBlogDisplay = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    loadBlogData('articles').then(setPosts);
  }, []);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <a href={post.permalink}>Read more</a>
        </div>
      ))}
    </div>
  );
};
```

## API Reference

### Plugin Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `blogPluginId` | `string` | **required** | ID of the blog plugin to extract data from |
| `outputPath` | `string` | `'static/data'` | Directory where JSON files will be saved |
| `limit` | `number` | `5` | Maximum number of posts to include |

### RecentBlogPosts Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `blogId` | `string` | **required** | ID of the blog (matches the JSON filename) |
| `title` | `string` | `'Апошнія публікацыі'` | Section title |
| `showTags` | `boolean` | `true` | Whether to display tags |
| `showAuthors` | `boolean` | `false` | Whether to display authors |

### BlogPost Type

```typescript
interface BlogPost {
  id: string;
  title: string;
  description?: string;
  date: string;
  formattedDate: string;
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

## Generated Files

After running `npm run build`, you'll find JSON files in:
- `static/data/articles.json`
- `static/data/opportunities.json`

These files are copied to the build output and can be accessed at `/data/{blogId}.json` in your deployed site.

## Example Output

```json
[
  {
    "id": "lorem-ipsum-article",
    "title": "Lorem Ipsum Article",
    "description": "This is a sample article...",
    "date": "2025-01-15T00:00:00.000Z",
    "formattedDate": "15 студзеня 2025 г.",
    "permalink": "/articles/lorem-ipsum-article",
    "tags": [
      {
        "label": "sample",
        "permalink": "/articles/tags/sample"
      }
    ],
    "authors": [
      {
        "name": "John Doe",
        "title": "Author",
        "url": "https://example.com",
        "imageURL": "/img/authors/john.jpg"
      }
    ]
  }
]
```

## Troubleshooting

### JSON files not generated

- Make sure the plugin is registered in `docusaurus.config.ts`
- Verify the `blogPluginId` matches your blog plugin's ID
- Check the build output for any error messages

### Posts not showing on the page

- Check browser console for network errors
- Verify the JSON file exists at `/data/{blogId}.json`
- Ensure the `blogId` prop matches the JSON filename

### Styling issues

- Customize the CSS module in `RecentBlogPosts.module.css`
- Override CSS variables in your theme's custom CSS

## Customization

### Changing the Number of Posts

Edit the `limit` option in `docusaurus.config.ts`:

```typescript
{
  blogPluginId: 'articles',
  limit: 10, // Show 10 posts instead of 5
}
```

### Styling

Modify `src/components/RecentBlogPosts/RecentBlogPosts.module.css` to customize the appearance.

### Adding More Data

To include additional fields in the JSON, edit `plugins/blog-json-generator/index.ts` and update the post mapping logic.

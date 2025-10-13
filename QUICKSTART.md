# Quick Start Guide

## Setup (First Time Only)

```bash
# 1. Install fnm (if not already installed)
curl -fsSL https://fnm.vercel.app/install | bash

# 2. Use the correct Node version
fnm use

# 3. Install dependencies
npm ci
```

## Development Workflow

```bash
# Start development server (opens http://localhost:3000)
npm start

# In another terminal - run type checking
npm run typecheck
```

## Creating New Blog Posts

1. Create a new file in `content/blog/`:
   ```
   content/blog/2025-01-25-my-post.md
   ```

2. Add frontmatter:
   ```markdown
   ---
   slug: my-post
   title: My Post Title
   authors: [admin]
   tags: [articles]  # or [opportunities]
   ---

   Your introduction here...

   <!--truncate-->

   Full content here...
   ```

3. For English translation, create:
   ```
   i18n/en/docusaurus-plugin-content-blog/2025-01-25-my-post.md
   ```

## Adding New Pages

1. Create in `src/pages/`:
   ```
   src/pages/contact.md
   ```

2. Add English translation:
   ```
   i18n/en/docusaurus-plugin-content-pages/contact.md
   ```

## Creating New Components

```bash
# Create component directory
mkdir src/components/MyComponent

# Create component files
touch src/components/MyComponent/MyComponent.tsx
touch src/components/MyComponent/MyComponent.module.css
```

Example component:
```tsx
// MyComponent.tsx
import React from 'react';
import styles from './MyComponent.module.css';

export default function MyComponent(): JSX.Element {
  return (
    <div className={styles.container}>
      Content
    </div>
  );
}
```

## Building for Production

```bash
# Build
npm run build

# Test production build locally
npm run serve
```

## Deployment

Push to `main` branch - GitHub Actions will automatically deploy to GitHub Pages.

## Troubleshooting

**Wrong Node version?**
```bash
fnm use
```

**Dependencies issues?**
```bash
rm -rf node_modules package-lock.json
npm ci
```

**Type errors?**
```bash
npm run typecheck
```

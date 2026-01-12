# TP Preview Docusaurus

Bilingual blog site built with Docusaurus and TypeScript, featuring Belarusian as the default language with English translation support.

## Prerequisites

- Node.js 20.18.0 (use `fnm` for version management)
- npm 10.8.2

## Setup

```bash
# Install fnm and activate Node version
fnm use

# Install dependencies
npm ci
```

## Development

```bash
# Start development server
npm start

# Build for production
npm run build

# Serve production build locally
npm run serve

# Run TypeScript type checking
npm run typecheck
```

## Project Structure

- `content/blog/` - Blog posts with frontmatter
- `src/components/` - React components with CSS modules
- `src/pages/` - Static pages (About, etc.)
- `i18n/` - Localization files (be, en)
- `static/` - Static assets

## Blog Categories

Posts are tagged with:
- `articles` - General articles
- `opportunities` - Opportunities and announcements

## Localization

Default locale: Belarusian (`be`)
Secondary locale: English (`en`)

Switch languages using the dropdown in the navigation bar.

## Deployment

Automatically deploys to GitHub Pages on push to `main` branch via GitHub Actions.

## License

Private

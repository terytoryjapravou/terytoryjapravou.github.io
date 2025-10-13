# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TypeScript-based Docusaurus blog site for GitHub Pages deployment. Features bilingual support (Belarusian default, English secondary) with minimalistic UI design.

## Commands

### Development
```bash
npm start              # Start dev server at http://localhost:3000
npm run build         # Build production bundle to ./build
npm run serve         # Serve production build locally
npm run typecheck     # Run TypeScript type checking
```

### Localization
```bash
npm run write-translations  # Generate translation files
```

### Deployment
Automatic deployment to GitHub Pages via `.github/workflows/deploy.yml` on push to `main` branch.

## Architecture

### Directory Structure
```
├── content/blog/          # Blog posts in root (tagged: articles, opportunities)
├── src/
│   ├── components/        # Reusable React components with CSS modules
│   │   ├── Header/       # Site header component
│   │   └── Footer/       # Site footer component
│   ├── css/              # Global styles (custom.css)
│   └── pages/            # Static pages (about.md)
├── i18n/                 # Localization (be, en)
│   ├── be/              # Belarusian (default)
│   └── en/              # English
├── static/               # Static assets (favicon, images)
└── .github/workflows/    # GitHub Actions (deploy.yml)
```

### Configuration Files
- `docusaurus.config.ts` - Main Docusaurus config (TypeScript)
- `tsconfig.json` - TypeScript configuration
- `.nvmrc` / `.node-version` - Node version (20.18.0)
- `.npmrc` - NPM config (exact versions, engine-strict)

### Localization
- Default locale: Belarusian (`be`)
- Secondary locale: English (`en`)
- Translations in `i18n/{locale}/code.json`
- Localized pages in `i18n/{locale}/docusaurus-plugin-content-pages/`
- Blog route: `/` (root path)

## Development Patterns

### Components
- Create in `src/components/{ComponentName}/`
- TypeScript files: `ComponentName.tsx`
- CSS Modules: `ComponentName.module.css`
- Keep components decoupled and reusable

### Styling
- Use CSS Modules exclusively (not global styles)
- Scoped to component level
- Minimalistic design: simple borders, no heavy shadows

### Blog Posts
- Location: `content/blog/`
- Naming: `YYYY-MM-DD-slug.md`
- Required frontmatter: `slug`, `title`, `authors`, `tags`
- Tags: `articles` or `opportunities`
- Use `<!--truncate-->` for excerpt separator
- Authors defined in `content/blog/authors.yml`

### TypeScript
- All config files use `.ts` extension
- Strict type checking enabled
- Use proper types/interfaces, avoid `any`

## Node Version Management
- Use `fnm` for Node.js version switching
- Run `fnm use` to activate correct version (20.18.0)
- Strict package versions enforced via `.npmrc`

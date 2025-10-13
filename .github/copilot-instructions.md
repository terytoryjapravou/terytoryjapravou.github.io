# GitHub Copilot Instructions for TP Preview Docusaurus

## Project Overview
This is a TypeScript-based Docusaurus blog site configured for GitHub Pages deployment. The site features bilingual support (Belarusian as default, English as secondary) with a minimalistic design.

## Development Principles

### Code Style
- Use strict package versions (configured via `.npmrc`)
- Write simple, readable code
- Create decoupled components to avoid code duplication
- Use TypeScript for all new code
- Follow existing file naming conventions

### Styling
- Always use CSS Modules for component styling
- File naming: `ComponentName.module.css`
- Keep styles scoped to components
- Follow the minimalistic design pattern established in the project

### Components
- Create reusable, decoupled components in `src/components/`
- Each component should have its own directory with:
  - `ComponentName.tsx` - Component logic
  - `ComponentName.module.css` - Component styles
- Export components from their directory
- Avoid tight coupling between components

### Content Management
- Blog posts go in `content/blog/`
- Use frontmatter with `slug`, `title`, `authors`, and `tags`
- Support both blog categories: `articles` and `opportunities`
- Localized content goes in `i18n/{locale}/` directories

### TypeScript
- Use strict TypeScript configuration
- Always define proper types and interfaces
- Avoid using `any` type
- Use TypeScript for all configuration files (`.ts` over `.js`)

### Localization
- Default locale: Belarusian (`be`)
- Secondary locale: English (`en`)
- Add translations to `i18n/{locale}/code.json`
- Create localized pages in `i18n/{locale}/docusaurus-plugin-content-pages/`

## Project Structure
```
├── content/blog/          # Blog posts (root level)
├── src/
│   ├── components/        # Reusable React components
│   ├── css/              # Global styles
│   └── pages/            # Static pages
├── i18n/                 # Localization files
├── static/               # Static assets
└── .github/workflows/    # CI/CD workflows
```

## Common Commands
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run typecheck` - Run TypeScript type checking
- `npm run serve` - Serve production build locally

## Node Version Management
- Use `fnm` for Node.js version management
- Node version: specified in `.nvmrc` and `.node-version`
- Always use exact versions in `package.json`

# Setup Instructions

## Initial Setup

1. **Install fnm (Fast Node Manager)**
   ```bash
   # macOS/Linux
   curl -fsSL https://fnm.vercel.app/install | bash

   # Or via Homebrew
   brew install fnm
   ```

2. **Activate Node version**
   ```bash
   fnm use
   # This will automatically install Node 20.18.0 if not present
   ```

3. **Install dependencies**
   ```bash
   npm ci
   ```

4. **Start development**
   ```bash
   npm start
   ```

## First Time GitHub Pages Setup

1. Go to repository Settings > Pages
2. Source: GitHub Actions
3. Push to `main` branch to trigger deployment

## Verify Setup

```bash
# Check Node version
node --version  # Should output v20.18.0

# Check npm version
npm --version   # Should output 10.8.2

# Run type checking
npm run typecheck

# Build the site
npm run build
```

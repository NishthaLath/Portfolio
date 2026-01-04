
# Portfolio

Minimal, dark-first portfolio website for Nishtha Lath.

## Getting Started

Install and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Update your links

- Social + email links live in the `profile.links` object in [app/page.tsx](app/page.tsx).

### Configure site URL (SEO)

- Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://your-domain.com`) for correct canonical/OG metadata.

### Build

```bash
npm run build
npm run start
```

## GitHub Pages Deployment

This portfolio is configured to deploy automatically to GitHub Pages. Here's how it works:

### Automatic Deployment

1. Every push to the `main` branch triggers the deployment workflow
2. GitHub Actions builds the Next.js site as static files
3. The built files are automatically deployed to GitHub Pages

### Manual Deployment

You can also trigger deployment manually:
1. Go to the Actions tab in your GitHub repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### Setup Requirements

To enable GitHub Pages for this repository:

1. Go to repository **Settings** → **Pages**
2. Under "Build and deployment":
   - Source: Select **GitHub Actions**
3. The site will be available at `https://nishthalath.github.io/Portfolio/`

### Configuration

The deployment configuration is in:
- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `next.config.ts` - Next.js export settings with basePath for GitHub Pages

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

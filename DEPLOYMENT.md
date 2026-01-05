# GitHub Pages Deployment Guide

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Quick Start

### 1. Enable GitHub Pages (One-time setup)

1. Go to your repository on GitHub
2. Click **Settings** (top navigation)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select `GitHub Actions` from the dropdown
5. Save (if required)

That's it! Your site will automatically deploy when you push to the `main` branch.

## Viewing Your Site

After the first deployment completes, your portfolio will be live at:

```
https://<your-username>.github.io/Portfolio/
```

Replace `<your-username>` with your GitHub username.

## How It Works

### Automatic Deployment

- Every push to the `main` branch triggers the deployment workflow
- GitHub Actions:
  1. Checks out your code
  2. Installs dependencies
  3. Builds the Next.js site as static files
  4. Deploys to GitHub Pages

### Manual Deployment

You can also trigger deployment manually:

1. Go to the **Actions** tab in your repository
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow** button
4. Choose the branch and click **Run workflow**

## Monitoring Deployments

### Check Deployment Status

1. Go to the **Actions** tab in your repository
2. Look for the latest workflow run
3. Green checkmark = successful deployment
4. Red X = failed deployment (click to see logs)

### View Deployment History

- All deployments are listed in the **Actions** tab
- Each workflow run shows:
  - Commit that triggered it
  - Build time
  - Success/failure status
  - Detailed logs

## Configuration Files

The deployment is configured in these files:

### `.github/workflows/deploy.yml`

The GitHub Actions workflow that handles the build and deployment process.

### `next.config.ts`

Next.js configuration with:

- `output: 'export'` - Enables static site generation
- `basePath: '/Portfolio'` - Configures routing for subdirectory hosting
- `images.unoptimized: true` - Allows images in static export

### `package.json`

Contains the build script that compiles the Next.js application.

## Troubleshooting

### Deployment fails

1. Check the Actions tab for error messages
2. Common issues:
   - Build errors: Check if `npm run build` works locally
   - Dependencies: Make sure package-lock.json is committed
   - Permissions: Verify the workflow has proper permissions

### Site not updating

1. Check if the workflow ran successfully in Actions tab
2. Clear your browser cache
3. Wait a few minutes for GitHub CDN to update

### 404 errors

1. Make sure GitHub Pages is set to use "GitHub Actions" as source
2. Verify the basePath in `next.config.ts` matches your repository name
3. Check that you're accessing the correct URL format

## Local Testing

To test the static export locally:

```bash
# Build the static site
npm run build

# The output is in the 'out' directory
# You can serve it with any static file server, for example:
npx serve out
```

Note: When testing locally, the basePath won't work correctly since it's configured for `/Portfolio/`. The deployed version on GitHub Pages will work correctly.

## Customization

### Change Repository Name

If you rename your repository:

1. Update `basePath` in `next.config.ts` to match the new name
2. Commit and push the change
3. The workflow will automatically use the new repository name

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain
4. Update `NEXT_PUBLIC_SITE_URL` in the workflow (optional)

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

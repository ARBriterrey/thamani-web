# GitHub Pages Deployment Guide

## Repository Setup Complete ✅

The Thamani Healthcare website has been initialized and is ready for deployment to GitHub Pages.

### What's Been Done

1. ✅ Git repository initialized
2. ✅ All files committed to `main` branch
3. ✅ `gh-pages` branch created
4. ✅ GitHub Actions workflow configured
5. ✅ Next.js configured for static export

---

## Next Steps: Push to GitHub

### 1. Create GitHub Repository

Go to [GitHub](https://github.com/new) and create a new repository named `thamani-web`.

**Important**: Do **NOT** initialize with README, .gitignore, or license (we already have these).

### 2. Add Remote and Push

```bash
cd /Users/andhan/Desktop/Sami/Thamani/thamani-web

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/thamani-web.git

# Push main branch
git push -u origin main

# Push gh-pages branch
git push -u origin gh-pages
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: **GitHub Actions**
4. The site will be automatically deployed on every push to `main`

---

## Deployment Details

### Automatic Deployment

- **Trigger**: Push to `main` branch
- **Build**: GitHub Actions runs `npm run build`
- **Output**: Static files in `/out` directory
- **Deploy**: Automatically published to GitHub Pages

### Manual Deployment

To trigger a manual deployment:
1. Go to **Actions** tab in your GitHub repository
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### Site URL

After deployment, your site will be available at:
```
https://YOUR_USERNAME.github.io/thamani-web/
```

---

## Configuration

### Base Path

The site is configured with `basePath: '/thamani-web'` for GitHub Pages subdirectory deployment.

If you want to use a custom domain or deploy to the root:
1. Update `next.config.ts`: Remove or adjust `basePath`
2. Add a `CNAME` file to `/public` with your custom domain
3. Configure DNS settings as per [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

### Static Export

The site uses Next.js static export (`output: 'export'`) which:
- Generates plain HTML/CSS/JS files
- No server-side rendering at runtime
- All pages pre-rendered at build time
- Compatible with GitHub Pages hosting

---

## Troubleshooting

### Build Fails

Check the Actions tab for build logs. Common issues:
- Node version mismatch (workflow uses Node 20)
- Missing dependencies (ensure `package-lock.json` is committed)
- TypeScript errors (run `npm run build` locally first)

### Assets Not Loading

- Ensure `basePath` in `next.config.ts` matches your repository name
- Check that asset paths use relative URLs
- Verify files are in `/public` directory

### 404 Errors

- Confirm GitHub Pages source is set to "GitHub Actions"
- Check that workflow completed successfully
- Wait a few minutes for DNS propagation

---

## Development

```bash
# Local development
npm run dev

# Build and test locally
npm run build
npx serve out
```

## License

© 2026 Thamani Healthcare. All rights reserved.

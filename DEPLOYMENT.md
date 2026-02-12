# Deployment Guide (Manual Branch Deployment)

## Overview

This project uses the `gh-pages` package to deploying the `out/` build folder directly to a `gh-pages` branch on GitHub. This allows you to build locally and push the static site to GitHub Pages without relying on GitHub Actions.

## Prerequisites

1.  **Git Repository**: Ensure your project is initialized as a git repo (already done).
2.  **GitHub Repository**: Create a new empty repository on GitHub named `thamani-web`.
3.  **Remote Origin**: Link your local repo to GitHub.

## Setup Remote

If you haven't already:

```bash
git remote add origin https://github.com/YOUR_USERNAME/thamani-web.git
```

## How to Deploy

The deployment process is automated with a single command:

```bash
npm run deploy
```

### What this command does:
1.  Run `npm run build` (generates static files in `out/`)
2.  Using `gh-pages`, it pushes the contents of `out/` to the `gh-pages` branch on GitHub.

## First-Time Setup on GitHub

After running `npm run deploy` successfully for the first time:

1.  Go to your repository on **GitHub**.
2.  Navigate to **Settings** -> **Pages**.
3.  Under **Build and deployment**:
    -   **Source**: Select **Deploy from a branch**.
    -   **Branch**: Select `gh-pages` and folder `/ (root)`.
4.  Click **Save**.

Your site will be live at `https://YOUR_USERNAME.github.io/thamani-web/`.

## Troubleshooting

### "Updates were rejected because the remote contains work that you do not have locally"
If the `gh-pages` branch on GitHub gets out of sync, you can force-push or delete the remote branch:
```bash
git push origin --delete gh-pages
npm run deploy
```

### 404 Errors on Assets
Ensure `next.config.ts` has the correct `basePath`.
- If your repo is `username/thamani-web`, basePath should be `/thamani-web`.
- If `username/username.github.io`, basePath should be empty `''`.

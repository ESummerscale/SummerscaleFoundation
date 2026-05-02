# GitHub Pages Deployment Guide

This document explains how to deploy The Summerscale Foundation website to GitHub Pages using the included GitHub Actions workflow.

## Prerequisites

- A GitHub account
- Git installed on your computer
- The project repository pushed to GitHub

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon in the top-right corner → **New repository**
3. Name the repository (e.g., `summerscale-foundation`)
4. Choose **Public** (required for free GitHub Pages)
5. Click **Create repository**

## Step 2: Push Your Code to GitHub

```bash
# Navigate to your project directory
cd /path/to/summerscale

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Summerscale Foundation website"

# Add remote origin (replace USERNAME and REPO_NAME)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top-right)
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - The workflow will automatically deploy on every push to `main`

## Step 4: Monitor the Deployment

1. Go to your repository
2. Click the **Actions** tab
3. You should see a workflow run titled "Deploy to GitHub Pages"
4. Wait for it to complete (usually 1–2 minutes)
5. Once successful, your site will be live at: `https://USERNAME.github.io/REPO_NAME/`

## Step 5: Configure Custom Domain (Optional)

If you have a custom domain (e.g., `summerscalefoundation.org`):

1. In **Settings** → **Pages**
2. Under "Custom domain", enter your domain name
3. Click **Save**
4. Update your domain's DNS settings to point to GitHub Pages:
   - Add an `A` record pointing to: `185.199.108.153`
   - Or follow [GitHub's DNS setup guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## Making Updates

After the initial setup, any changes you push to the `main` branch will automatically trigger a new deployment:

```bash
# Make changes to your files
# ...

# Commit and push
git add .
git commit -m "Update: [describe your changes]"
git push origin main
```

The workflow will automatically rebuild and redeploy your site within 1–2 minutes.

## Workflow File Details

The `.github/workflows/deploy.yml` file handles:

- **Trigger**: Runs on every push to `main` or manual trigger via "Run workflow"
- **Build**: Installs dependencies and builds the static site
- **Deploy**: Uploads the built files to GitHub Pages
- **Permissions**: Automatically manages GitHub Pages deployment permissions

## Troubleshooting

### Workflow fails to run
- Check that `.github/workflows/deploy.yml` exists in your repository
- Verify the file has no YAML syntax errors
- Go to **Settings** → **Pages** and confirm "GitHub Actions" is selected as the source
- Ensure pnpm is installed before Node.js in the workflow (the order matters!)

### Site not updating
- Check the **Actions** tab to see if the workflow completed successfully
- Look for error messages like "pnpm not found" — this means the workflow step order needs fixing
- Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Wait 2–3 minutes for GitHub's CDN to update

### Custom domain not working
- Verify DNS records are correctly configured
- Check **Settings** → **Pages** for any SSL/TLS errors
- Wait up to 24 hours for DNS propagation

## Reverting to Manus Hosting

If you prefer to keep using Manus's built-in hosting instead of GitHub Pages:

1. Simply don't push to GitHub, or
2. Keep the repository private (GitHub Pages requires public repos for free tier), or
3. Use Manus's **Publish** button in the Management UI

Both hosting options work perfectly—choose based on your preference for independence vs. convenience.

---

For more information, see [GitHub Pages documentation](https://docs.github.com/en/pages).

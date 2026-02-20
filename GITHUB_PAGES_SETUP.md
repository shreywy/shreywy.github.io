# GitHub Pages Deployment Guide

This portfolio is configured to deploy to GitHub Pages at `shreywy.github.io`. Follow these steps to complete the deployment setup.

## Prerequisites

1. GitHub account
2. Repository created: `https://github.com/shreywy/shreywy.github.io`
3. Local Next.js project (this folder)
4. Git installed on your machine
5. Terminal/PowerShell access

## Step 1: Initialize Git Repository

Open PowerShell in your project directory and run:

```powershell
cd e:\GitHub\portfolio2
git init
```

Configure git with your GitHub account info:

```powershell
git config user.name "Shrey Mistry"
git config user.email "shrey.d.mistry@gmail.com"
```

(Replace with your actual name and email if different)

## Step 2: Connect to Remote Repository

Add the GitHub repository as your remote origin:

```powershell
git remote add origin https://github.com/shreywy/shreywy.github.io.git
```

Verify the remote was added:

```powershell
git remote -v
```

You should see:
```
origin  https://github.com/shreywy/shreywy.github.io.git (fetch)
origin  https://github.com/shreywy/shreywy.github.io.git (push)
```

## Step 3: Rename Main Branch

Rename your local branch to `main` to match GitHub's default:

```powershell
git branch -M main
```

## Step 4: Force Push New Code to Main

Add all files to git:

```powershell
git add .
```

Create initial commit:

```powershell
git commit -m "Initial portfolio deployment: Next.js 14 with dynamic content and GitHub Pages integration"
```

Force push to main branch (overwrites old site like you mentioned):

```powershell
git push -u origin main --force
```

⚠️ **Note:** The `--force` flag overwrites everything on the `main` branch. This is intentional to replace your old site.

## Step 5: Enable GitHub Pages

1. Go to `https://github.com/shreywy/shreywy.github.io/settings/pages`
2. Under "Build and deployment":
   - **Source:** Select "GitHub Actions"
   - (It should auto-detect the deploy.yml workflow)

3. Click "Save"

The workflow will now automatically:
- ✅ Install dependencies
- ✅ Build the Next.js app to static HTML
- ✅ Deploy to `gh-pages` branch
- ✅ Make it live at `https://shreywy.github.io`

## Step 6: Monitor Deployment

1. Go to your repository: `https://github.com/shreywy/shreywy.github.io`
2. Click the "Actions" tab
3. Wait for the "Deploy to GitHub Pages" workflow to complete (usually 2-3 minutes)
4. Once ✅ passes, visit `https://shreywy.github.io` in your browser

You should see your portfolio live!

## How Future Deployments Work

Now that everything is set up, deployments are automatic:

1. Edit `userinput.txt` with new content
2. Commit and push to main:
   ```powershell
   git add userinput.txt
   git commit -m "Update portfolio content"
   git push
   ```
3. GitHub Actions automatically builds and deploys (2-3 min)
4. Visit `https://shreywy.github.io` to see changes

## Troubleshooting

### Build Fails in GitHub Actions

Check the Actions tab for error logs. Common issues:

**Issue: "npm ERR! code ERESOLVE"**
```powershell
npm install --legacy-peer-deps
git add package-lock.json
git commit -m "Fix dependency resolution"
git push
```

**Issue: "Image Optimization Disabled"**
- This is expected - next.config.js has `images: { unoptimized: true }`
- Required for static export to GitHub Pages
- Do NOT remove this setting

**Issue: "Cannot find module"**
```powershell
npm install
npm run build
git add package-lock.json
git commit -m "Update dependencies"
git push
```

### Website Not Updating

1. Hard refresh browser: `Ctrl+Shift+Delete` (clear cache)
2. Wait 2-3 minutes after push (GitHub Actions builds)
3. Check Actions tab to ensure deploy succeeded
4. Verify changes are on `main` branch, not local only

### Custom Domain (Optional)

If you want to use a custom domain (e.g., shreywy.com):

1. Buy domain from registrar (GoDaddy, Namecheap, etc.)
2. Go to repository Settings → Pages → Custom Domain
3. Enter your custom domain
4. Update DNS records at your registrar to point to GitHub Pages
5. GitHub will auto-verify and enable HTTPS

## Reverting to Old Site

Your old site is safely backed up in the 'archive' branch:

```powershell
# View archive branch
git checkout archive
git log --oneline  # See old commits

# To restore old site
git checkout archive
git push origin archive:main --force
```

## Architecture Overview

```
┌─ Local Repository (main branch)
│  └─ Push code
│
├─> GitHub (main branch)
│   └─ Trigger GitHub Actions
│
├─> GitHub Actions Workflow
│   ├─ Install npm packages
│   ├─ Run: npm run build
│   ├─ Creates static 'out/' folder
│   └─ Upload to gh-pages branch
│
└─> GitHub Pages (gh-pages branch)
    └─ Serves static files at shreywy.github.io
```

## Important Files for Deployment

| File | Purpose |
|------|---------|
| `.github/workflows/deploy.yml` | ✅ Automation rules |
| `next.config.js` | ✅ Static export enabled |
| `public/.nojekyll` | ✅ Disables Jekyll processing |
| `.gitignore` | ✅ Excludes build artifacts |
| `package.json` | ✅ Dependencies and scripts |
| `userinput.txt` | ⭐ Your content goes here |

All these files are already set up and ready to use.

## Summary of Changes Made for GitHub Pages

✅ **next.config.js** - Added:
```javascript
output: 'export',
images: { unoptimized: true },
```

✅ **GitHub Actions** - Created `.github/workflows/deploy.yml` for auto-deployment

✅ **.nojekyll** - Created in `public/` to disable Jekyll processing

✅ **.gitignore** - Updated to exclude node_modules, .next, build artifacts

All configuration is complete. Your portfolio is ready to deploy!

## Need Help?

- GitHub Pages Docs: https://pages.github.com/
- Next.js Static Export: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- GitHub Actions: https://docs.github.com/en/actions
- Troubleshooting: Check Actions tab → workflow logs for detailed error messages

---

**Next Step:** Run the git commands in Step 1-4 above to push your code and deploy!

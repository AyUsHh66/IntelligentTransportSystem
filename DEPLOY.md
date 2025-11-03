# Quick Deployment Guide

## Your repository is ready locally!
All files are committed. Follow these steps to push to GitHub:

### Step 1: Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `ITS-Portfolio` (or your choice)
3. Keep it **Public**
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### Step 2: Push from PowerShell
After creating the repo, GitHub will show you commands. Use these instead:

```powershell
cd c:\Users\silen\Desktop\EnergyPortfolio\ITS-Portfolio

# Add the remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/ITS-Portfolio.git

# Rename branch to main
git branch -M main

# Push everything
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under "Source", select branch: **main** and folder: **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes, then your site will be live at:
   `https://YOUR-USERNAME.github.io/ITS-Portfolio/`

### Alternative: Use GitHub CLI (after installing)
If you install gh CLI later:

```powershell
gh auth login
gh repo create ITS-Portfolio --public --source . --remote origin --push
gh browse
```

Then just enable Pages in Settings → Pages.

---
**Your portfolio is ready to go!** 🚀

# Intelligent Transport Systems — Portfolio

This repository contains a professional, responsive static portfolio for Intelligent Transport Systems (ITS). It includes example projects, tech stack highlights, and deployment instructions for GitHub Pages.

## What's included
- `index.html` — single-page site with sections: Home, About, Projects, Skills, Contact
- `css/styles.css` — responsive styles and layout
- `js/script.js` — minor interaction (mobile nav, year, smooth scroll)
- `assets/logo.svg` — simple SVG logo

## How to preview locally

Open `index.html` directly in a browser, or run a local HTTP server (recommended) from PowerShell:

```powershell
# from the ITS-Portfolio folder
# If you have Python installed:
python -m http.server 8000

# then open http://localhost:8000 in your browser
```

## Deploy to GitHub Pages (manual git)

1. Create a GitHub repository (e.g., `ITS-Portfolio`) on github.com.
2. From PowerShell in this folder run:

```powershell
git init
git add .
git commit -m "Initial ITS portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

3. On GitHub: go to Repository > Settings > Pages and set the source to the `main` branch root. Save. The site will be published at `https://<your-username>.github.io/<repo>/`.

## Deploy with GitHub CLI (optional)

If you have GitHub CLI installed and authenticated:

```powershell
gh repo create <repo> --public --source . --remote origin --push
gh repo view --web
```

Then enable Pages in repository settings or create a workflow (GitHub Pages will pick up root content).

## Quick customization
- Replace the placeholder texts and links in `index.html`.
- Add project pages or link to live demos / GitHub repos.
- Swap colors in `css/styles.css` for your brand.

## Next steps (suggested enhancements)
- Add a contact form (Formspree or Netlify forms) for direct inquiries.
- Hook up analytics (Plausible or Google Analytics) if desired.
- Add automated CI to run accessibility/lint checks.

## License
MIT — see `LICENSE` file.

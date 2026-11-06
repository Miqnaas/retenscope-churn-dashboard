# RetenScope — Explainable Retention Intelligence

Responsive, dependency-free frontend implementation of the university graduation-project Figma designs.

**Design:** https://www.figma.com/design/Qdh3nc38M4mGVXkD1U7iJh

## Run locally

Requires a static HTTP server (no build steps, npm or dependencies):

```bash
python -m http.server 8080
# Open http://localhost:8080
```

The sign-in page is **demo-only**. Click **Enter demo workspace**. Do not submit real passwords or personal data.

## Deploy to GitHub Pages

1. Create a **new public repository** on GitHub, for example `retenscope-churn-dashboard`.
2. Upload all project files and folders, including `.github/workflows/deploy.yml`, to the default `main` branch (or push using the commands below).
3. In GitHub → **Settings → Pages → Build and deployment**, select **GitHub Actions**.
4. The included workflow will deploy the static site on push to `main`. The site URL will appear in the Actions deployment and Pages settings (typically `https://USERNAME.github.io/REPOSITORY/`).

```bash
git init
git add .
git commit -m "Build RetenScope interactive web dashboard"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/retenscope-churn-dashboard.git
git push -u origin main
```

**GitHub Pages hosts HTML/CSS/JS only.** ASP.NET Core, Python ML inference and SQL Server will need separate hosting and secure APIs before a production deployment.

## Implemented pages

- Demo sign-in
- Retention overview with phase-report metrics
- Customer intelligence with search/filter/export
- Customer 360 with review states
- Explainability preview with adjustable threshold
- Local CSV structure validator and data-quality summary
- Campaign board with local draft/status management
- Campaign builder with required review acknowledgment
- Outcomes with locally saved entries
- Reports with baseline confusion matrix and metrics
- Model/settings reference with architecture and API contract

Navigation is URL-hash based, so all routes work on static GitHub Pages including nested project URLs. Responsive layout uses brand assets and Figma color tokens. Local interaction state is saved in browser localStorage only.

## Evidence boundary

- **Dataset facts** (7,043 records, 26.5% churn; baseline ROC-AUC 0.842, recall 0.786, F1 0.616) come from the supplied university phase report.
- **Individual customer scores**, customer IDs, intervention events, and campaign outcomes are **illustrative mock data**, not actual model results.
- The SHAP-style display is illustrative; no real SHAP computation occurs.
- CSV parsing is **browser-only**, performs only basic header/shape checks and does **not** train or run the model.
- Demo login is **not an authentication system**. Do not upload sensitive customer information or use real passwords.
- The dataset is a single historical snapshot; no claim of 30-/60-day forecasting is supported.

## Stack

Static HTML + modern JavaScript + CSS, Lato font with offline fallbacks, SVG brand assets. No server, build step, package manager or framework dependency.

## Reference files

- `assets/brand_tokens.css`: RetenScope original brand tokens.
- `assets/RetenScope_Logo_*.svg`: original logo variants.
- `app.js`: mock data, views, navigation, CSV validation and demo interactions.
- `.github/workflows/deploy.yml`: GitHub Pages Actions deployment.

This is an educational demonstration, not a customer-management production service.
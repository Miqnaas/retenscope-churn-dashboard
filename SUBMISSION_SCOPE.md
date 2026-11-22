# RetenScope — Independent UI Submission

**Student:** Mohamed Bakr (محمد بكر)  
**University team project:** [Telco Customer Churn Project](https://github.com/BaraaEid1098-tech/Telco-Customer-Churn-Project)  
**My independent submission:** [RetenScope Frontend](https://github.com/Miqnaas/retenscope-churn-dashboard)  
**Figma design:** [RetenScope Web + Mobile Design](https://www.figma.com/design/Qdh3nc38M4mGVXkD1U7iJh)  

## My responsibility in this stage

1. **Figma:** Web UI screens, visual language, layouts and user flow.
2. **Frontend:** A static website built with understandable HTML, CSS and a little JavaScript.
3. **Demo & explanation:** Explain the purpose of every screen and how its HTML, CSS and JS work.

This repository is intentionally separate from the full team project. The team repo includes backend, ML and database implementations; they are **outside the scope of this independent frontend submission**.

## Pages in this repository

| Page | File | Purpose |
| --- | --- | --- |
| Overview | index.html | Dataset metrics and next action |
| Customers | customers.html | Table, search and risk filter |
| Customer 360 | customer.html | One example customer |
| Explanations | explain.html | Illustration of risk factors and threshold |
| Data Import | import.html | Select a CSV and show its filename |
| Campaigns | campaigns.html | View sample and locally saved draft |
| New Campaign | new-campaign.html | Create a browser-only draft |
| Outcomes | outcomes.html | Add a temporary outcome row |
| Reports | reports.html | Display baseline test metrics |
| Settings | settings.html | Describe current and future architecture |

## Why the code is structured this way

Each page is a **real HTML file**, with a normal navigation link such as:

    <a href="customers.html">Customers</a>

- HTML defines the visible structure and content of each page.
- style.css handles typography, layout, cards, tables and small-screen rules.
- script.js adds only a few interactions (search, filter, slider, file-name display, campaign draft and outcome row).
- No React, build step, npm installation or JavaScript-created page templates are required.

## Important demo boundaries

This is a **frontend prototype**, not a deployed machine-learning application.

- The IBM Telco dataset summary and baseline test metrics are research numbers.
- Example customer IDs and individual churn probabilities are **illustrative**, not real-time model predictions.
- The explanation bars are examples, **not computed SHAP values**.
- CSV selection does not upload, validate the whole dataset or run ML.
- Campaigns are demo drafts stored in browser localStorage; outcomes appear only until page refresh.
- Authentication, customer database, ASP.NET API, Python ML and messaging are **not connected in this submission**.

## How to demonstrate

Open index.html or the GitHub Pages URL, navigate to Customers, search for Demo 001, review Customer 360, move the Explain threshold above 91%, create a campaign draft, view it under Campaigns, then open Reports.

See [FIGMA_FRONTEND_VIVA_AR.md](FIGMA_FRONTEND_VIVA_AR.md) for a beginner-friendly Figma and frontend explanation.
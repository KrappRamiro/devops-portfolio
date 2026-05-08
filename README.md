# krapp.dev: Personal Portfolio

DevOps engineer portfolio at [krapp.dev](https://krapp.dev). React + TypeScript +
Tailwind on the frontend, deployed to **Cloudflare Pages**, with infrastructure
(Pages project, custom domain, DNS records) provisioned via **OpenTofu**.

## Stack

| Layer | Choice |
|------|--------|
| Build | Vite 6 + React 18 + TypeScript |
| Styling | Tailwind CSS · Framer Motion · Lucide icons |
| Routing | React Router (SPA) |
| Hosting | Cloudflare Pages (git-integrated) |
| Infrastructure | OpenTofu + `cloudflare/cloudflare ~> 5` |

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # tsc + vite build → dist/
npm run preview      # serve the built dist/ locally
```

## Project layout

```
.
├── src/
│   ├── components/   # Navbar, Footer, TerminalHeader, Typewriter, Grid3D
│   ├── pages/        # Home, About, Skills, Projects, Contact
│   ├── data/         # portfolio.ts: single source of truth for content
│   └── App.tsx       # routes
├── public/           # static assets shipped as-is (CV, _redirects, _headers, favicon)
├── infra/            # OpenTofu: Cloudflare Pages + DNS
└── index.html
```

## Cloudflare Pages routing

Two files in `public/` are picked up at deploy time:

- `_redirects`: SPA fallback so client-side routes (`/about`, `/skills`, ...)
  return `index.html` instead of 404
- `_headers`: security headers + cache rules

## Infrastructure

All Cloudflare resources for `krapp.dev` are managed in `infra/` with OpenTofu.
See [`infra/README.md`](infra/README.md) for setup, required API token scopes,
and a one-time GitHub OAuth note.

```bash
cd infra/
cp terraform.tfvars.example terraform.tfvars   # then fill in
tofu init
tofu plan
tofu apply
```

## Editing content

Almost everything user-visible lives in [`src/data/portfolio.ts`](src/data/portfolio.ts):
hero copy, about text, skills (grouped by category), projects, contact info,
resume URL. Pages read from this module instead of hardcoding values, so most
content updates are a single-file diff.

## Credits

Originally based on [neerajnakka/devops-portfolio](https://github.com/neerajnakka/devops-portfolio).
Significantly refactored for Cloudflare Pages + OpenTofu, content rewritten,
proficiency bars and interactive skill explorer removed, blog and case-studies
disabled, footer redesigned. MIT licensed.

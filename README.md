# Kaung Khant Naing — Portfolio

A single-page developer portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS, configured for static export to GitHub Pages.

## Stack

- Next.js 14 (App Router, static export)
- TypeScript (strict mode)
- Tailwind CSS
- lucide-react icons

## 1. Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> This project was scaffolded without running `npm install` (no network access in the build environment), so there's no `package-lock.json` yet. Running `npm install` locally the first time will generate one — commit it so CI installs the exact same versions.

## 2. Validation

Run these before every deploy — the GitHub Actions workflow runs the same checks:

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run build` produces a static site in the `out/` folder (because `next.config.mjs` sets `output: "export"`).

## 3. Updating your content

All editable content lives in `src/data/` — you should never need to touch the components in `src/components/` just to update text:

| File | What it controls |
|---|---|
| `src/data/profile.ts` | Name, title, bio, contact links, resume path |
| `src/data/experience.ts` | Work experience timeline |
| `src/data/projects.ts` | Project cards + filter categories |
| `src/data/skills.ts` | Skills grid, grouped by category |
| `src/data/achievements.ts` | Achievement stat cards |

A few things to personalize before you publish:

1. **`src/data/profile.ts`** — replace the placeholder `github` URL with your real GitHub profile.
2. **`src/app/layout.tsx`** — replace `siteUrl` with your real deployed URL (used for SEO/Open Graph tags).
3. **`src/components/sections/GitHubSection.tsx`** — replace the placeholder stats and pinned-repo rows with your real numbers, or wire it up to the public GitHub REST API.
4. **`src/data/projects.ts`** — the current entries are case studies of real systems from your CV (proprietary, so no public repo link). Add your own open-source projects with `github` / `liveDemo` URLs as you build them.

### Replacing the resume

Your current CV has already been copied to `public/resume.pdf`. To replace it, just overwrite that file — the filename must stay `resume.pdf` unless you also update `resumeUrl` in `src/data/profile.ts`.

## 4. GitHub Pages setup

**You'll need to do the GitHub side yourself** — I can build and hand you the code, but I don't create accounts, log in, or push commits on your behalf.

1. Create a new repository on GitHub (e.g. `portfolio`, or `<your-username>.github.io` for root-domain hosting).
2. Push this code to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Push to `main` (or re-run the workflow manually from the **Actions** tab). The included `.github/workflows/deploy.yml` will lint, type-check, build, and deploy automatically.

### Base path — how it's handled

GitHub Pages serves project repos from a subpath (`https://<user>.github.io/<repo>/`), but serves a repo named `<user>.github.io` from the root. The workflow detects this automatically:

- Repo named `<username>.github.io` → deployed at the root, no base path.
- Any other repo name → deployed at `/<repo-name>`, and the workflow sets `NEXT_PUBLIC_BASE_PATH=/<repo-name>` at build time automatically. You don't need to hardcode this anywhere.

If you ever add a custom domain, put it in `public/CNAME` (a plain text file containing just your domain) and the base path becomes empty again — update `NEXT_PUBLIC_BASE_PATH` handling in the workflow if you do this (set it to an empty string).

## 5. Manual deploy (without GitHub Actions)

```bash
NEXT_PUBLIC_BASE_PATH=/<your-repo-name> npm run build
npx gh-pages -d out
```

(Requires `gh-pages` as a dev dependency: `npm install -D gh-pages`.)

## 6. Project structure

```text
src/
├── app/            # App Router: layout, page, global styles
├── components/
│   ├── layout/     # Navbar, Footer
│   ├── sections/   # Hero, About, Skills, Experience, Projects, etc.
│   └── ui/         # Small shared primitives (SectionHeading, Badge)
├── data/           # All editable content — edit here, not in components
├── lib/            # Helpers (basePath prefixing for GitHub Pages assets)
└── types/          # Shared TypeScript interfaces
```

## Notes

- No secrets or API tokens are used anywhere in this project — the GitHub section is intentionally static/placeholder data so nothing needs to be hidden behind a server that doesn't exist on GitHub Pages.
- The contact form has no backend; submitting it opens a pre-filled `mailto:` link to your email in `src/data/profile.ts`.

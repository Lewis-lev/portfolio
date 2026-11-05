# Makki — Portfolio

A fast, static portfolio built with Astro. The site keeps its dark and violet color palette, uses Astro's optimized image pipeline and typed content collections, and renders pages without a client-side UI framework.

Project browsing includes instant text search and category filters. Each project opens as a statically generated Markdown case study, with shared-element page transitions between the card and the full project image. Astro also emits structured profile metadata and an XML sitemap at build time.

## Requirements

- Node.js 22.23.4 or newer
- npm 10.8.2 or newer

The project pins Node.js `22.23.4` in `.nvmrc`. With nvm-windows installed, select the project runtime in PowerShell:

```powershell
nvm install 22.23.4
nvm use 22.23.4
node --version
npm run dev
```

To try the pinned Node version without changing the system-wide Node installation, run:

```powershell
npm exec --yes --package=node@22.23.4 -- npm run dev
```

## Development

```sh
npm ci
npm run dev
```

Useful commands:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run check` | Check Astro components and TypeScript |
| `npm run build` | Create the production site in `dist/` |
| `npm run preview` | Preview the production build locally |

## Updating portfolio content

Project cards, certificates, social profiles, skills, workflow items, and interests are defined in `src/data/portfolio.ts`. Each project has a matching, schema-validated Markdown case study in `src/content/projects/`; add a corresponding content file there when adding a project so Astro can generate its detail page. The build verifies each project's Markdown entry exists and its frontmatter matches the collection schema.

Add images under `src/assets/images` and import them in `src/data/portfolio.ts` so Astro can optimize responsive image variants at build time. Shared metadata, structured data, and animated page navigation live in `src/layouts/BaseLayout.astro`. Reusable navigation, project, certificate, and icon components live in `src/components`.

## Deployment

GitHub Actions builds the site and deploys `dist/` to GitHub Pages when changes are pushed to `main`. Astro is configured for the `/portfolio` project-site path.

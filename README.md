# Makki — Portfolio

A fast, static portfolio built with Astro. The site keeps its dark and violet color palette, uses Astro's optimized image pipeline, and renders pages without a client-side UI framework.

## Requirements

- Node.js 22.23.4 or newer
- npm 9.6.5 or newer

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

Project cards, certificates, social profiles, skills, workflow items, and interests are defined in `src/data/portfolio.ts`. Add images under `src/assets/images` and import them in that data file so Astro can optimize them during the build.

Shared page metadata and document markup live in `src/layouts/BaseLayout.astro`; reusable navigation, project, certificate, and icon components live in `src/components`.

## Deployment

GitHub Actions builds the site and deploys `dist/` to GitHub Pages when changes are pushed to `main`. Astro is configured for the `/portfolio` project-site path.

# Claude Code Playbook

Interactive learning site for understanding Claude Code through real source analysis rather than generic product copy.

## What this project is

This repository contains a static learning site that explains:

- Claude Code project structure
- core runtime modules
- key execution flows
- notable features and engineering tradeoffs
- recommended source reading paths
- glossary and analysis metadata

The site is designed for developers who want to study how Claude Code is built.

## Source basis

This playbook is intentionally based on two source inputs:

1. A local Claude Code app-source snapshot used for internals such as:
   - bootstrap
   - REPL
   - query runtime
   - permissions
   - tools
   - auth
   - MCP
   - remote/bridge

2. The public GitHub repo `anthropics/claude-code`, which is useful mainly for:
   - plugin ecosystem context
   - examples
   - workflows
   - marketplace and extension patterns

Important note: the public GitHub repo does not expose the full core CLI source tree. The learning site makes that distinction explicit.

## Information architecture

- `/` — Home and execution plan
- `/architecture` — system layers and boundaries
- `/modules` — interactive module breakdowns
- `/flows` — execution chains and runtime walkthroughs
- `/features` — notable design choices and tradeoffs
- `/reading-paths` — guided source-reading routes
- `/top-files` — top 20 source-file guide
- `/glossary` — core terms and concepts
- `/about` — analysis basis, snapshot metadata, tracked files

## Tech stack

- Next.js App Router
- React
- TypeScript
- static export for GitHub Pages
- theme switching: auto / light / dark
- bilingual UI and content: English / Chinese
- richer diagrams with SVG + Mermaid views

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
```

Static output is generated in `out/`.

## Updating the Claude Code analysis

### 1. Refresh source metadata

If you have a new local Claude Code source snapshot:

```bash
npm run update:metadata -- --source-root=/absolute/path/to/Claude\ Code/src
```

This updates `content/generated/source-metadata.json` with current line counts for key files.

### 2. Revisit content pages

After refreshing metadata, review and update:

- `content/site.ts`
- `app/architecture/page.tsx`
- `app/modules/page.tsx`
- `app/flows/page.tsx`
- `app/features/page.tsx`
- `app/reading-paths/page.tsx`
- `app/glossary/page.tsx`
- `app/about/page.tsx`

Recommended update workflow:

1. Diff the new snapshot against the previously studied snapshot
2. Re-check core files called out in `content/generated/source-metadata.json`
3. Update any changed architecture, flow, or feature explanations
4. Rebuild and verify the site locally

## GitHub Pages deployment

This project is set up for GitHub-driven deployment using GitHub Actions and static export.

### Deployment model

- Git push to `main`
- GitHub Actions builds the static site
- Workflow uploads `out/` as a Pages artifact
- GitHub Pages serves the built site automatically

### Files involved

- `.github/workflows/deploy-github-pages.yml`
- `package.json`
- `next.config.mjs`

### Required repository configuration

In GitHub repository settings:

1. Open `Settings -> Pages`
2. Set `Source` to `GitHub Actions`

No extra deployment secrets are required.

## Minimal manual steps

The setup is designed to keep deployment almost fully automatic.

### Minimum one-time manual work

1. In `Settings -> Pages`, switch the site to `GitHub Actions`
2. Push to `main` or trigger the workflow manually

The workflow then:

```bash
npm ci
npm run build
```

and deploys the generated `out/` directory to GitHub Pages.

### Why there is still one manual step

GitHub Pages must be told once to use `GitHub Actions` as its publishing source. After that, deployments are automatic on every push to `main`.

### Optional manual tasks not required for first deployment

- bind a custom domain
- enable an enforcement policy for protected branches if desired

## Repository maintenance tips

- Keep content in `content/` and UI in `components/` / `app/`
- Update metadata before changing narrative content
- Treat `/about` as the source-of-truth page for analysis basis and version labeling

## Suggested first commit message

`feat: build interactive Claude Code learning site with GitHub Pages deployment`

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AlphaStrike website — a marketing/product site for an ML-based crypto trading platform. Built with React 18, TypeScript, Vite, and Tailwind CSS. Uses shadcn/ui (new-york style, configured but no `src/components/ui/` components installed yet).

## Commands

- **Dev server:** `pnpm dev` (runs on Vite default port, typically 5173)
- **Build:** `pnpm build` (TypeScript check + Vite build)
- **Production build:** `pnpm run build:prod` (sets `BUILD_MODE=prod`, disables source-identifier plugin)
- **Lint:** `pnpm lint` (ESLint with typescript-eslint)
- **Preview built output:** `pnpm preview`
- **No test framework is configured.**

## Architecture

### Routing

`react-router-dom` v6 with `BrowserRouter`. Four routes defined in `src/App.tsx`:
- `/` → `HomePage` (hero, ticker, value prop, market opportunity, trust, CTA)
- `/technology` → `TechnologyPage` (ML ensemble diagram, adaptive leverage, agent selection, risk management, architecture)
- `/performance` → `PerformancePage`
- `/defi` → `DeFiPage`

### File Structure

- `src/pages/` — Route-level page components that compose section components
- `src/components/` — Section-level components (not reusable primitives); each is a self-contained page section
- `src/lib/utils.ts` — Utility functions (shadcn `cn()` helper)
- `src/hooks/` — Custom hooks (`use-mobile.tsx`)
- `src/index.css` — Tailwind base + custom component classes (circuit-card, glow-button, neon-text, etc.)

### Path Aliases

`@/` maps to `./src/` (configured in both `tsconfig.json` and `vite.config.ts`).

## Design System

The site uses a dark, tech/cyberpunk aesthetic defined in `tailwind.config.js`:

- **Brand colors:** `brand-primary` (#0066CC electric blue), `brand-secondary` (#FFFF00 neon yellow), `brand-tertiary` (#00F0FF cyan)
- **Backgrounds:** `background-main` (#020408 deep void), `background-surface` (#0B1221)
- **Fonts:** `font-heading` (Space Grotesk), `font-body` (Inter), `font-mono` (JetBrains Mono)
- **Custom CSS classes** in `index.css`: `circuit-card`, `glow-button`, `neon-text`, `circuit-grid`, `glass-panel`, `power-line`, `data-font`
- **Custom animations:** `pulse-glow`, `circuit-flow`, `scan`

Use these design tokens and utility classes to maintain visual consistency.

## Build Notes

- `vite-plugin-source-identifier` adds `data-matrix-*` attributes in dev/non-prod builds for debugging; disabled in production (`BUILD_MODE=prod`)
- ESLint has `@typescript-eslint/no-unused-vars` and `@typescript-eslint/no-explicit-any` turned off
- shadcn/ui is configured (`components.json`) with aliases `@/components/ui`, `@/lib`, `@/hooks` — add components with `npx shadcn@latest add <component>`

## Deployment

- GitHub Actions (`.github/workflows/cloudflare-deploy.yml`) deploys to Cloudflare Pages
- `main` branch → production (`pnpm run build:prod`), `dev` branch → preview (`pnpm run build`)
- Requires `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets in GitHub
- `public/_redirects` provides SPA fallback routing for BrowserRouter
- Production URL: https://alphastrike-website.pages.dev/

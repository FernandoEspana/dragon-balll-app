# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project state

This is a freshly scaffolded Angular 22 application (generated via Angular CLI 22.0.4) — the Dragon Ball app
itself has not been built yet. `src/app/app.html` still contains the default Angular CLI welcome template;
`src/app/app.routes.ts` has an empty routes array. There is no HTTP client, state management, or API
integration set up yet, so don't assume any of that exists — check current file contents before extending.

## Commands

- `npm start` / `ng serve` — dev server at http://localhost:4200, rebuilds on file changes.
- `ng build` — production build (default configuration) into `dist/`. Use `npm run watch` for an
  unoptimized dev-mode build in watch mode (`ng build --watch --configuration development`).
- `ng test` — runs unit tests via the Angular unified test builder (`@angular/build:unit-test`), which uses
  Vitest under the hood with jsdom by default (no separate `vitest` CLI invocation is needed).
  - Run a single spec file: `ng test --include src/app/app.spec.ts`
  - Filter by test/suite name (regex): `ng test --filter "^App"`
  - `ng test` watches by default in a TTY; pass `--watch=false` for a single non-interactive run (useful in CI
    or when invoked from a script).
- There is no e2e test setup and no lint script configured in `package.json`.

## Architecture

- **Standalone components only, no NgModules.** Bootstrapping goes through `src/main.ts` →
  `bootstrapApplication(App, appConfig)`. New components should use the standalone `imports: [...]` array on
  the `@Component` decorator rather than declaring/importing NgModules.
- **Zoneless.** `zone.js` is not a direct dependency and is not imported in `main.ts`/polyfills — do not
  reintroduce it or write code that depends on zone.js-based change detection assumptions (e.g. relying on
  automatic CD after native async callbacks outside Angular APIs). Prefer signals (`signal()`, `computed()`)
  for reactive state, following the pattern already used in `src/app/app.ts`.
- **Routing**: `src/app/app.routes.ts` exports the `routes: Routes` array consumed by `provideRouter(routes)`
  in `src/app/app.config.ts`. `App`'s template includes a bare `<router-outlet />`. All new routed features
  should be registered here.
- **Global providers** live in `src/app/app.config.ts` (`appConfig: ApplicationConfig`) — add new app-wide
  providers (HTTP client, etc.) there.
- **Styling**: Tailwind CSS v4 is wired in via PostCSS (`.postcssrc.json` → `@tailwindcss/postcss`) and
  imported globally in `src/styles.css` (`@import 'tailwindcss';`). Component-level styles use per-component
  `.css` files referenced via `styleUrl`.
- **TypeScript strictness**: `tsconfig.json` enables `strictInjectionParameters`, `strictInputAccessModifiers`,
  `noImplicitOverride`, `noPropertyAccessFromIndexSignature`, `noImplicitReturns`, and
  `noFallthroughCasesInSwitch`. Keep new code compliant with these rather than loosening them.
- **Formatting**: Prettier is configured (`.prettierrc`) with `printWidth: 100`, single quotes, and the
  Angular parser for `.html` files — match this style (also enforced by `.editorconfig` for indentation/quote
  conventions).

## Tooling available in this environment

An `angular-cli` MCP server is configured (`.mcp.json`) and should be preferred over ad hoc shell commands for
Angular CLI operations (workspace/project discovery, best-practice lookups, running targets, doc search).
Call `list_projects` first to get the workspace path context these tools need, and `get_best_practices` before
generating or modifying code.

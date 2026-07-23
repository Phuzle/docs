# Phuzle Docs

Universal documentation site for every Phuzle app and package — one home page listing all of
them, each with its own standalone documentation area.

Stack: Bun + TypeScript + Next.js + [Fumadocs](https://fumadocs.dev) + shadcn/ui.

## Run it

```bash
bun install
bun run dev
```

Open http://localhost:3000.

## Adding a new app's docs

1. Create `content/docs/<slug>/meta.json`:
   ```json
   {
     "title": "Your App Name",
     "root": true,
     "description": "One-line tagline",
     "pages": ["index", "..."]
   }
   ```
   `"root": true` is what makes this folder its own standalone doc tree (own sidebar, own nav),
   rather than nesting under another app's docs. Fumadocs auto-detects every root folder and lets
   users switch between them via the dropdown at the top of the sidebar.
2. Add `content/docs/<slug>/index.mdx` (and any other pages) as normal MDX with `title`/`description`
   frontmatter.
3. Add an entry to `src/lib/apps.ts` — this is what makes the app show up as a card on the home
   page (`/`). Nothing else needs to change.

Each app's docs are then reachable directly at `/<slug>/...` — e.g. `/messages`,
`/messages/privacy` — no `/docs` prefix. See `src/lib/shared.ts` (`docsRoute = ''`) and
`src/app/[...slug]/` for how that routing is wired.

## Structure

| Path                   | What                                                                 |
| ----------------------- | --------------------------------------------------------------------- |
| `src/app/(home)/`       | The `/` landing page listing every app (reads `src/lib/apps.ts`).    |
| `src/app/[...slug]/`    | Catch-all route rendering any doc page from any app's root folder.   |
| `content/docs/<app>/`   | One folder per app, each a Fumadocs "root folder".                   |
| `src/lib/source.ts`     | Fumadocs content loader (`baseUrl` is empty — see above).            |
| `src/lib/apps.ts`       | The registry the home page renders cards from.                       |
| `src/components/ui/`    | shadcn/ui components, used by the home page (not the docs pages —    |
|                         | those use Fumadocs UI's own components).                             |

## Before going to production

- `src/lib/shared.ts` — confirm `gitConfig` matches the real GitHub org/repo once this is pushed
  (used for "Edit on GitHub" links).
- `src/app/layout.tsx` — set `NEXT_PUBLIC_SITE_URL` (or update the fallback) once
  `docs.phuzle.com` is live, so Open Graph/social images resolve correctly.
- No favicon is set yet.

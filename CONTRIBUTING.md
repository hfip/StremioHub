# Contributing

Thanks for helping keep StremioHub useful.

## What belongs here

- Official Stremio apps and **actively maintained** forks with public source code.
- Add-ons that still work (stream, metadata/catalogue, subtitles, extras).
- Tools, self-hosting recipes and guides.
- Debrid / Usenet providers that add-ons actually support.

What does **not**: direct links to copyrighted files, referral-only links, abandoned projects
untouched for years, or anything that requires a shady installer.

## How to add a resource

1. Edit the English page in `docs/` **and** the Arabic page in `docs/ar/` — the site is bilingual,
   and a missing translation shows up immediately in the language switcher.
2. Follow the existing format:

   ```md
   - ⭐ **[Name](https://official-link)** — One short sentence about what it does.
   ```

   `⭐` marks the picks we would actually recommend to a beginner.
3. Keep the list sorted roughly by importance, not alphabetically.
4. Run `npm run docs:build` before opening a pull request. Broken internal links fail the build.
5. In the pull request, say **what changed and why** — "added X, it is the actively maintained fork
   of Y" is enough.

## Adding a new page

1. Create `docs/my-page.md` and `docs/ar/my-page.md`.
2. Add both to `nav` and `sidebar` in `docs/.vitepress/config.ts` (top-level for English, inside
   `locales.ar.themeConfig` for Arabic).
3. Add the translation pair to the home page features only if it is a main section.

## Style

- One line per resource, no trailing periods inside link text.
- Prefer the GitHub repository over a download page.
- Write descriptions in the second person and skip marketing words ("amazing", "best ever").
- In Arabic pages, keep product names and technical terms in Latin script (Debrid, Usenet, add-on)
  and translate the rest.

## Reporting a dead link

Open an issue with the page name and the broken URL. If the project moved, include the new link.

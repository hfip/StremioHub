# MediaFusion

MediaFusion is a heavy, configurable scraper with two things the others do not have: strong regional
coverage and built-in catalogues. It also handles Usenet natively.

- Repository: [mhdzumair/MediaFusion](https://github.com/mhdzumair/MediaFusion)
- Public instance: [mediafusion.elfhosted.com](https://mediafusion.elfhosted.com)

## What makes it different

- **Regional content** — Indian, Spanish, French, German and East Asian sources are first-class, not
  an afterthought.
- **Catalogues** — it can add browse rows to Stremio, not just streams.
- **Usenet** — works with Usenet providers and indexers as well as debrid.
- **Parental controls** — filters that a family setup can actually live with.
- **Background scraping** — it can pre-fetch results so the list is ready when you open a title.

## Setup

1. Open the configure page on a public instance, or your own deployment.
2. Add a **debrid** account (Real-Debrid, AllDebrid, Premiumize, TorBox, Debrid-Link) and/or a
   **Usenet** setup.
3. Pick the **catalogues** you want. Keep it to a handful; every row is another request.
4. Set **filters**: quality, resolution, size, language, and the parental options if needed.
5. Choose how aggressively it pre-fetches. More pre-fetching means a faster list and more upstream
   load.
6. Install the manifest.

## Self-hosting

MediaFusion ships a Docker Compose stack with a database and a worker. The short version:

```bash
git clone https://github.com/mhdzumair/MediaFusion
cd MediaFusion
cp .env-sample .env
# set POSTGRES_*, SECRET_KEY, HOST_URL and your provider credentials
docker compose up -d
```

Read the project's own deployment notes before exposing it: the compose file expects a PostgreSQL
instance and a public HTTPS hostname.

## Practical advice

- Do not enable every catalogue on the first run. Add one, check it works, then add another.
- If your list is slow, turn off background scraping for a day and compare.
- Regional users should set the language filters first; they change the results more than any other
  option.
- If you use Usenet, expect to configure both a provider and an indexer. See [Usenet](/guides/stremio/usenet).

## When to pick MediaFusion

- You watch non-English content.
- You want catalogue rows in Stremio.
- You use Usenet rather than debrid.

Otherwise [AIOStreams](/guides/stremio/aiostreams) is simpler and [Comet](/guides/stremio/comet) is
lighter.

## Next

- [Usenet](/guides/stremio/usenet)
- [Metadata & catalogs](/guides/stremio/metadata)
- [Troubleshooting](/guides/stremio/troubleshooting)

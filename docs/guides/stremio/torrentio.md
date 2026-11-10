# Torrentio

Torrentio is the add-on that made Stremio popular. It scrapes public torrent indexes, groups results
by quality, and can resolve them through a debrid account. It has been running for years on a single
public instance maintained by its developer.

- Repository: [TheBeastLT/torrentio-scraper](https://github.com/TheBeastLT/torrentio-scraper)
- Configure page: `https://torrentio.strem.fun/configure`

## Configure it

1. Open the configure page.
2. Choose your **debrid provider** from the dropdown and paste the API key. Skip this and you get
   raw torrents only.
3. Pick the **providers** (indexes) to search. The defaults are fine; trimming them makes it faster.
4. Set the options you care about:
   - *Don't show download links* — hides the `[RD download]` entries.
   - *Don't show torrents without seeds* — removes dead results.
   - *Remove adult content* — keeps the list clean.
   - *Sort by* — quality, seeds or size.
5. Copy the generated URL and install it in Stremio.

## What the labels mean

- `[RD+]` or `[RD download]` — the torrent is already cached at Real-Debrid (`+`) or would need to be
  downloaded first.
- `⚡` — the result is cached and should start immediately.
- `👤` — a single-seeder torrent; expect it to stall.

## Limitations

- One public instance, no self-hosting for the hosted service. You can run the scraper yourself if
  you are comfortable with Node.js and a proxy.
- Public torrent indexes only, so private-tracker users will need [Jackettio](/addons) or AIOStreams
  with Prowlarr.
- It does not know about Usenet.
- If the instance goes down, every guide that told you to "just install Torrentio" stops working.

## Torrentio in 2026

The add-on still works, but the ecosystem moved on:

- **AIOStreams** aggregates Torrentio with other sources and deduplicates the result.
- **Comet** and **MediaFusion** often return the same torrents faster.
- Torrentio remains the simplest single install and the best debugging reference: if Torrentio
  returns links and your fancy aggregator does not, the problem is the aggregator.

## Legal note

Torrentio returns torrents from public indexes. Using it without debrid puts your IP in the swarm.
Whether that is legal depends on your country and on what you stream. A debrid provider keeps your
IP out of the swarm; it does not make the content licensed.

## Next

- [AIOStreams](/guides/stremio/aiostreams)
- [Debrid providers](/guides/stremio/debrid)
- [Technical details in FAQ](/guides/stremio/faq)

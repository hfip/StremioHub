# Comet

Comet is a fast, lightweight stream add-on that searches torrent indexes and resolves results
through your debrid or Usenet account. It does less than AIOStreams, does it quickly, and it is a
good second source when the aggregator misses something.

- Repository: [g0ldyy/comet](https://github.com/g0ldyy/comet)
- Public instance: [comet.elfhosted.com](https://comet.elfhosted.com)

## Configure it

1. Open the instance's configure page.
2. Choose your **debrid service** and paste the API key (Real-Debrid, AllDebrid, Premiumize,
   TorBox, Debrid-Link).
3. Pick the **scrapers** to use. Torrentio and DMM cover most of what you need; add more only if you
   are missing specific content.
4. Set **filters**: resolution, excluded qualities, max size, languages.
5. Enable **cached only** if you do not want to wait for uncached torrents.
6. Enable **proxy** only if direct links are throttled by your ISP.
7. Install the generated manifest in Stremio.

## Self-hosting

```bash
git clone https://github.com/g0ldyy/comet
cd comet
cp .env-sample .env
# edit .env: add your debrid key and set a random secret
docker compose up -d
```

Comet needs a public HTTPS address for Stremio to accept its manifest. A Caddy reverse proxy or a
Cloudflare Tunnel handles that; see [Docker basics](/guides/self-hosting/docker).

## When to use Comet instead of AIOStreams

- You want a minimal, fast list without configuring an aggregator.
- You self-host and want fewer moving parts.
- You need a second opinion when AIOStreams returns nothing.

## When not to

- You want one list that combines several sources — that is AIOStreams' job.
- You rely on regional content with fine-grained language filters — MediaFusion is stronger there.

## Notes

- Comet is designed around debrid; without a provider it falls back to P2P torrents.
- Like every scraper, it breaks when the sites it reads change their HTML. Keep it updated.
- Public instances are rate-limited. If you use it daily, self-host.

## Next

- [MediaFusion](/guides/stremio/mediafusion)
- [Torrentio](/guides/stremio/torrentio)
- [Debrid providers](/guides/stremio/debrid)

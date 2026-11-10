# AIOStreams

AIOStreams is a **meta add-on**: instead of scraping torrent sites itself, it asks other stream
add-ons (Torrentio, Comet, MediaFusion, Prowlarr, Jackett…) and merges their answers into one clean,
deduplicated, sorted list.

- Repository: [Viren070/AIOStreams](https://github.com/Viren070/AIOStreams)
- Public instance: [aiostreams.elfhosted.com](https://aiostreams.elfhosted.com)
- Docs: [AIOStreams wiki](https://github.com/Viren070/AIOStreams/wiki)

## Why start here

- One install instead of five.
- It removes duplicates and ranks results by your rules.
- It can add debrid and Usenet support to add-ons that lack it (through StremThru).
- Filters are centralised: resolution, quality, codec, size, language, release group.

The trade-off: one more service between you and the source, so a broken instance means an empty
list. That is why the fallback advice is to keep a second, simple stream add-on.

## Option A — public instance

1. Open the instance URL and create a configuration.
2. Add your **debrid** account in *Services* (Real-Debrid, AllDebrid, Premiumize, TorBox,
   Debrid-Link…). Paste the API token, not your password.
3. Add **add-ons** you want it to query:
   - Torrentio — `https://torrentio.strem.fun/manifest.json` (or your configured URL)
   - Comet — your Comet manifest URL
   - MediaFusion — your MediaFusion manifest URL
   - Prowlarr / Jackett — if you self-host indexers
4. Set **filters**: minimum resolution, excluded qualities (CAM, TS), max size, required languages.
5. Set **sorting**: cached debrid results first, then resolution, then seeders.
6. Optionally enable **proxy** streaming if your ISP throttles debrid traffic.
7. Press **Install** and confirm in Stremio.

::: warning Public instance limits
ElfHosted's public instance is rate-limited and shared. If you configure five add-ons and refresh
constantly you will hit the limit. Either be patient or self-host.
:::

## Option B — self-host

```bash
docker run -d --name aiostreams \
  -p 3000:3000 \
  -e SECRET_KEY=change-me \
  -v ./aiostreams-data:/app/data \
  ghcr.io/viren070/aiostreams:latest
```

Then open `http://your-server:3000` and configure it exactly like the public instance. Put it behind
HTTPS — Stremio clients refuse to install plain-HTTP manifests outside localhost. Caddy or a
Cloudflare Tunnel is enough; see [Docker basics](/guides/self-hosting/docker).

## What to put in it

| Add-on | Use it for |
| --- | --- |
| Torrentio | Broad public torrent coverage |
| Comet | Fast, lightweight fallback |
| MediaFusion | Regional and non-English content |
| Prowlarr / Jackett | Your private trackers |
| StremThru | Debrid/Usenet for add-ons without native support |

Start with **two**. Add a third only if you can name the gap it fills.

## Settings that actually matter

- **Cached only** — hide uncached torrents. You lose obscure titles but never wait for a download.
- **Max size** — 8–15 GB for 1080p, 25–60 GB for 4K. Stops 90 GB remuxes from appearing on a TV
  stick.
- **Excluded qualities** — CAM, TS, HDTS. Nobody wants them, and they are always first in the list.
- **Result limit** — 20–30 is plenty; a 300-item list is unusable on a TV remote.
- **Proxy** — only if direct debrid links buffer. It adds a hop and another thing to go down.

## Common problems

**"No streams found" in Stremio but results on the AIOStreams page** — the manifest you installed is
stale. Re-install the latest URL after saving settings.

**Everything is uncached** — your debrid token is wrong, expired, or the account has no active
subscription.

**Only Torrentio results appear** — the other add-ons you added returned errors. Open the AIOStreams
dashboard and check each add-on's status.

**Slow list** — too many upstream add-ons, or one of them is timing out. Remove the slow one.

## Next

- [Comet](/guides/stremio/comet)
- [Debrid providers](/guides/stremio/debrid)
- [Troubleshooting](/guides/stremio/troubleshooting)

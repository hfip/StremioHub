# Debrid providers

A debrid service downloads torrents on its own servers and gives you a direct HTTPS link. That is
the whole idea, and it changes the Stremio experience more than any add-on choice.

## Why people use one

| Without debrid | With debrid |
| --- | --- |
| Your IP joins the torrent swarm | Your IP never touches the swarm |
| Playback depends on seeders | Playback comes from a datacenter |
| Popular titles are fast, old ones stall | Old titles are often already cached |
| Your ISP can see BitTorrent traffic | Your ISP sees one HTTPS connection |

## The providers

| Provider | Notes |
| --- | --- |
| [Real-Debrid](https://real-debrid.com/) | Most integrations, largest cache. Occasional hoster and DMCA friction. |
| [AllDebrid](https://alldebrid.com/) | Close second; reliable torrent cache, good add-on support. |
| [Premiumize](https://www.premiumize.me/) | Debrid + cloud storage + Usenet in one subscription. Pricier. |
| [TorBox](https://torbox.app/) | Debrid, Usenet and a growing cache; popular post-RD alternative. |
| [Debrid-Link](https://debrid-link.com/) | European provider, torrent and hoster support. |
| [Put.io](https://put.io/) | Polished cloud torrent box; smaller cache. |

Prices and fair-use limits change constantly. Check each provider's own page, and buy one month
before committing to a year.

## Getting your API key

Every provider hides the token in a different menu. The pattern is always the same:

1. Log in on the provider's website.
2. Find **API** or **API token** in account settings.
3. Copy the long string — not your password, not your username.
4. Paste it into the add-on's configure page.

Treat that token like a password: anyone who has it can spend your quota. If you paste it into a
public instance you do not control, revoke it later from the provider's site.

## How caching works

1. An add-on finds a torrent matching the movie.
2. It asks the provider: *is this info hash already in your cache?*
3. **Cached** → you get an instant link.
4. **Uncached** → the provider downloads it (minutes to hours) and it becomes cached for everyone
   afterwards.

This is why "cached only" filters are popular: they hide everything that would make you wait.

## Configure it in your add-on

- **AIOStreams** → Services → Debrid → pick provider → paste token.
- **Comet** → Debrid Service + API key.
- **MediaFusion** → Streaming Provider → debrid credentials.
- **Torrentio** → provider dropdown + API key on the configure page.

One provider is enough. Adding the same provider to five add-ons does not increase your quota; it
just multiplies the requests.

## Limits you will actually hit

- **Hoster links** — debrid also unlocks file-host downloads, and those links expire. Irrelevant for
  Stremio, annoying if you use the provider for other things.
- **DMCA removals** — a cached torrent can disappear overnight. The add-on will simply stop showing
  it.
- **Fair use** — "unlimited" always has an abuse threshold. Streaming a season a day is fine;
  running a seedbox is not.
- **Concurrent streams** — most plans allow a small number of IPs at once. A family sharing one
  account across two homes will get errors.

## Do you need a VPN too?

- Debrid or Usenet only → no.
- Raw P2P add-ons without debrid → yes, your IP is in the swarm.

## Next

- [Usenet](/guides/stremio/usenet)
- [AIOStreams](/guides/stremio/aiostreams)
- [Troubleshooting](/guides/stremio/troubleshooting)

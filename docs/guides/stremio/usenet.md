# Usenet

Usenet is older than the web: a network of servers that store articles, including binary files split
into many parts. It behaves like a download service, not like BitTorrent — no swarm, no seeders, no
uploading from your side. For Stremio it means fast, predictable streams that do not depend on who
else is online.

## What you need

1. **A provider** — gives you access to the servers. Paid, usually per month with a data cap or
   "unlimited".
2. **An indexer** — a search engine for `.nzb` files. Some are free, most good ones are paid or
   invite-only.
3. **An add-on** — something that turns an NZB into a stream.

Examples:

- Providers: [Newshosting](https://www.newshosting.com/), [Eweka](https://www.eweka.nl/),
  [Frugal Usenet](https://frugalusenet.com/)
- Add-ons: [UsenetStreamer](https://github.com/Sanket9225/UsenetStreamer),
  [Usenet-Ultimate](https://github.com/DSmart33/Usenet-Ultimate),
  [MediaFusion](/guides/stremio/mediafusion) (Usenet support built in)
- All-in-one: [TorBox](https://torbox.app/) and [Premiumize](https://www.premiumize.me/) sell
  Usenet access alongside debrid

## How it fits together

```
Stremio → add-on → indexer (find NZB) → provider (download articles) → stream
```

The add-on asks the indexer for a matching release, then asks the provider for the articles in that
NZB, and serves the reconstructed video. A missing indexer means no results; a missing provider
means nothing plays.

## Settings that matter

- **Connections** — how many parallel connections your provider allows. More is faster, up to the
  provider's limit.
- **Retention** — how far back the provider stores articles. Old shows need high retention
  (3000+ days).
- **SSL** — always on. Plain Usenet sends your credentials in clear text.
- **Backup provider** — a second provider on a different backbone fills gaps when the first is
  missing articles.

## Getting started without overthinking it

1. Buy one month of a provider with a small block or a cheap unlimited plan.
2. Buy access to one indexer.
3. Install [UsenetStreamer](https://github.com/Sanket9225/UsenetStreamer) or use MediaFusion.
4. Paste provider + indexer credentials into the add-on's config.
5. Compare the result with your debrid setup for a week. Keep whichever is more reliable for the
   content you watch.

## Pros and cons

**Pros:** no swarm, no seeding, consistently fast, works for old and obscure releases if retention
is good.

**Cons:** two subscriptions instead of one, indexers are the weak link, takedowns remove content
permanently, and setup is less forgiving than debrid.

## Next

- [Debrid providers](/guides/stremio/debrid)
- [MediaFusion](/guides/stremio/mediafusion)
- [Self-hosting](/guides/self-hosting/)

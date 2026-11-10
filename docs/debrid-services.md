# Debrid & Usenet

Stremio add-ons can hand you a torrent magnet link and let your player download it from the swarm
(**P2P**), or they can resolve it through a **debrid** service into a direct HTTPS stream. The
second option is what most people end up using: no seeding, no ISP letters, and playback starts
immediately.

## How debrid works

1. The add-on finds a torrent that matches the movie or episode.
2. It asks your debrid provider whether that torrent is already in their cache.
3. If it is, you get a direct download link. If it is not, the provider downloads it for you and it
   becomes cached for everyone afterwards.

That is why a debrid subscription plus one stream add-on beats ten free scrapers.

## Debrid providers

- **[Real-Debrid](https://real-debrid.com/)** — The most widely supported option. Nearly every
  add-on integrates with it; occasional hoster and DMCA friction.
- **[AllDebrid](https://alldebrid.com/)** — Close competitor with good torrent caching and solid
  add-on support.
- **[Premiumize](https://www.premiumize.me/)** — Debrid plus cloud storage and Usenet access.
  More expensive, but one subscription covers a lot.
- **[TorBox](https://torbox.app/)** — Newer provider with debrid, Usenet and a generous cache. A
  popular alternative since the Real-Debrid disruptions.
- **[Debrid-Link](https://debrid-link.com/)** — European provider with torrent and hoster support.
- **[Put.io](https://put.io/)** — Cloud torrent box with a polished app; smaller torrent cache than
  the big three.

::: tip Prices and limits change constantly
Check each provider's own pricing page before subscribing, and prefer monthly billing until you
know it works with your add-on. All of them are paid services — there is no legitimate "free
debrid".
:::

## Usenet

Usenet is a separate network from BitTorrent: articles are stored on servers, so downloads are
fast and do not depend on seeders. You need two things:

1. **A provider** that gives you access to the servers — e.g.
   [Newshosting](https://www.newshosting.com/), [Eweka](https://www.eweka.nl/),
   [Frugal Usenet](https://frugalusenet.com/).
2. **An indexer** (a search engine for NZB files) — many are invite-only or paid.

Then install a Usenet-capable add-on such as
[UsenetStreamer](https://github.com/Sanket9225/UsenetStreamer),
[Usenet-Ultimate](https://github.com/DSmart33/Usenet-Ultimate) or a debrid provider that also does
Usenet ([TorBox](https://torbox.app/), [Premiumize](https://www.premiumize.me/)).

## Managed hosting

If you do not want to run anything yourself, [ElfHosted](https://store.elfhosted.com/) sells
private instances of AIOStreams, MediaFusion and Comet with bundled debrid/Usenet. It is a paid
convenience, not a requirement.

::: warning P2P is not free of consequences
Without a debrid or Usenet provider, P2P add-ons make your IP visible to everyone else in the
swarm, and in some countries that leads to warning letters or fines. A VPN is the minimum
protection if you go that route.
:::

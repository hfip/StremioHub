# Glossary

The words that show up in every Stremio thread, in plain language.

## A–C

**Add-on** — A small web service that gives Stremio content: streams, catalogues, metadata or
subtitles. Stremio ships nearly empty and you install what you need.

**Add-on collection** — Your personal list of installed add-ons, stored on your Stremio account and
synced across devices.

**Cache (debrid)** — A torrent the debrid provider has already downloaded. A cached torrent starts
playing instantly; an uncached one has to be fetched first.

**Catalogue** — A browsable list of titles (Trending, Netflix, IMDb Top 250…) shown on the Board
and Discover pages. Catalogues come from metadata add-ons.

**Cinemeta** — The default metadata add-on, built into Stremio. Provides posters, descriptions and
episode lists.

**Client** — The app you actually use: Stremio for Windows, Stremio Web, a fork, or a compatible
app like Nuvio.

## D–M

**Debrid** — A paid service that downloads torrents on its servers and gives you a direct HTTPS
link. Removes the need to seed.

**Direct streaming / HTTP streaming** — Playing a file from a plain web server rather than from
BitTorrent peers. Often used by add-ons that scrape streaming sites.

**Fork** — A modified copy of an open-source project. Stremio forks change the UI, add features or
target specific hardware.

**Indexer** — A searchable database of releases, mostly used in the Usenet world to find NZB files.

**Manifest** — The `manifest.json` file every add-on exposes. It describes the add-on's name,
version, and the resource types it provides. Installing an add-on means adding its manifest URL.

**Meta add-on** — An add-on that queries other add-ons and merges the results (AIOStreams is the
best-known example).

**Metadata add-on** — Supplies titles, posters, descriptions, cast and episode information.

## N–S

**NZB** — The Usenet equivalent of a torrent file: an index of the articles that make up a
release.

**P2P (peer-to-peer)** — Downloading pieces of a file from other users. Fast and free, but your IP
is visible to the swarm.

**PWA** — Progressive Web App. Stremio Web installed to your home screen; the closest thing to a
native app on iOS.

**Provider** — In this context, the service behind your setup: a debrid provider or a Usenet
provider.

**RPDB** — RatingPosterDB. Puts IMDb/other ratings directly onto posters.

**Scraper** — An add-on that searches torrent indexes or streaming sites for a given title and
returns the results as streams.

**Seeder** — A peer that has the complete file and uploads it to others. Zero seeders means the
torrent will not download.

**Stream add-on** — An add-on whose job is to return video sources for a title.

**StremThru** — A companion service that adds debrid and Usenet support to add-ons that lack it.

## T–Z

**Torrentio** — The classic stream add-on. Scrapes public indexes and supports most debrid
services.

**Trakt** — A watch-tracking service; Stremio can sync your progress and watchlist with it.

**Usenet** — A distributed discussion and file-transfer network, older than the web. Downloads come
from servers, so speed does not depend on seeders.

**VPN** — Encrypts your traffic and hides your IP from your ISP and from other peers. Relevant for
P2P, unnecessary for debrid-only setups.

**WebView2 / Electron / Qt** — The technologies used to wrap Stremio's web UI into a desktop app.
That is why desktop forks mostly differ in UI polish and player features.

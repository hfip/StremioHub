# Add-ons & Plugins

Stremio itself ships almost no content. Everything you watch comes from **add-ons**: small web
services that expose streams, catalogues, metadata or subtitles through a `manifest.json` URL.

::: tip How to install
Open the add-on's configure page, pick your settings, press **Install** — or copy the manifest link
into the search box on Stremio's **Add-ons** screen. The same link works in Nuvio and most
Stremio-compatible clients.
:::

## Stream add-ons

These are the ones that actually return video sources.

- ⭐ **[AIOStreams](https://github.com/Viren070/AIOStreams)** — Meta add-on: queries several
  stream add-ons in parallel, deduplicates and filters the results into one clean list. The best
  starting point for most people.
- ⭐ **[Comet](https://github.com/g0ldyy/comet)** — Fast, lightweight torrent/debrid/Usenet
  scraper with a built-in proxy.
- ⭐ **[MediaFusion](https://github.com/mhdzumair/MediaFusion)** — Heavily configurable scraper
  with strong regional coverage (Indian, Spanish, French, German, East Asian) and parental filters.
- **[Torrentio](https://github.com/TheBeastLT/torrentio-scraper)** — The classic. Scrapes public
  torrent indexes and supports most debrid services. Single public instance.
- **[Knightcrawler](https://github.com/knightcrawler-stremio/knightcrawler)** — Self-hosted
  scraper, good when you want your own instance.
- **[Jackett add-on](https://github.com/aymene69/stremio-jackett)** — Connects your own Jackett
  indexers to Stremio, with debrid support.
- **[UsenetStreamer](https://github.com/Sanket9225/UsenetStreamer)** — Streams NZBs straight from
  Usenet through your provider.
- **[Usenet-Ultimate](https://github.com/DSmart33/Usenet-Ultimate)** — Modern Usenet add-on with
  a proper configuration UI.
- **[StremThru](https://github.com/MunifTanjim/stremthru)** — Companion/proxy that adds debrid
  and Usenet support to add-ons that do not have it.
- **[NuvioStreamsAddon](https://github.com/tapframe/NuvioStreamsAddon)** — HTTP streaming add-on
  used by the Nuvio ecosystem.
- **[Orion](https://github.com/gorlev/orion-stremio-addon)** — Torrent and debrid add-on backed by
  the Orion service.
- **[Deflix](https://github.com/doingodswork/deflix-stremio)** — Debrid-only add-on written in Go
  (YTS, TPB, RARBG, 1337x, ibit).

## Metadata & catalogues

- **[Cinemeta](https://www.stremio.com/)** — Built into Stremio. Supplies the default catalogues,
  posters and episode metadata. Leave it installed.
- **[AIOMetadata](https://aiometadata.elfhosted.com)** — Replaces the defaults with richer
  catalogues, high-resolution artwork and ratings from TMDB, TVDB, MyAnimeList and AniList.
- **[TMDB](https://tmdb.elfhosted.com)** / **[TMDB Discover+](https://tmdb-discover-plus.elfhosted.com)**
  — Popular, trending and upcoming lists, plus deeper discovery by genre, year and release date.
- **[Anime Kitsu](https://github.com/TheBeastLT/stremio-kitsu-anime)** — Anime catalogues and
  metadata from Kitsu.
- **[AIOLists](https://github.com/SebastianMorel/AIOLists)** — Turns MDBList and Trakt lists into
  catalogues.
- **[IMDb list](https://github.com/jaruba/stremio-imdb-list)** /
  **[IMDb tag](https://github.com/jaruba/stremio-imdb-tag)** — Use any IMDb list or tag as a
  catalogue.
- **[Toast Translator](https://toast-translator.elfhosted.com)** — Translates titles and
  descriptions into your language.

## What to watch next

- **[Trakt](https://trakt.tv)** — Built into Stremio's settings. Syncs your watch history and
  progress across devices.
- **[MyTrakt](https://mytrakt.elfhosted.com)** — Turns Trakt into catalogues: continue watching,
  watchlist, recommendations.
- **[Watchly](https://watchly.elfhosted.com)** — Recommendations based on what you have watched.
- **[ItsOut](https://itsout.elfhosted.com)** — Tells you when a new episode or release drops.

## Subtitles

- **[OpenSubtitles](https://www.opensubtitles.org)** — Official add-on, installed by default.
  Covers most titles.
- **[SubMaker](https://submaker.elfhosted.com)** — Generates subtitles from the audio track when
  nobody has published any.

## Ratings, posters & trailers

- **[RPDB](https://ratingposterdb.com)** — Puts ratings on posters. Free tier available; plugs
  into a metadata add-on such as AIOMetadata.
- **[Rating Aggregator](https://rating-aggregator.elfhosted.com)** — IMDb, TMDB and Metacritic
  ratings side by side.
- **[Streailer](https://streailer.elfhosted.com)** — Plays trailers inside Stremio.
- **[ultra-max-addon](https://github.com/PaRaN01a-hash/ultra-max-addon)** — Curated catalogues
  and a clean setup for Stremio and Nuvio.

## Add-on lists & discovery

- **[stremio-addons.net](https://stremio-addons.net/)** — Community-curated add-on directory with
  popularity sorting.
- **[stremio-addons-list](https://github.com/stremio-community/stremio-addons-list)** — The JSON
  list that powers much of the add-on ecosystem.
- **[awesome-stremio](https://github.com/doingodswork/awesome-stremio)** — Curated list focused on
  open-source add-ons.
- **[ElfHosted recommended add-ons](https://docs.elfhosted.com/stremio-addons/guide/recommended-addons/)** —
  Opinionated picks, updated regularly.

## Keep it small

Every stream add-on you install gets asked separately for every title. More add-ons means slower
stream lists, more broken links and more rate limiting. Two stream add-ons and one metadata add-on
is a healthy setup.

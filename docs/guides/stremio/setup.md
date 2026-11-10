# Getting started

From zero to a working stream in about fifteen minutes.

## 1. Install the client

Download from the official site: [stremio.com/downloads](https://www.stremio.com/downloads).

- **Windows / macOS / Linux** — full desktop app, includes the local streaming server.
- **Android / Android TV** — mobile and TV apps; the TV version is the one to use on a set-top box.
- **LG / Samsung TVs** — install from the TV's app store where available.
- **iOS / iPadOS** — no native app; use [Stremio Web](https://web.stremio.com/) and add it to your
  home screen as a PWA.

::: warning Avoid third-party installers
APKs and "repacks" from random sites are the most common source of malware in this ecosystem.
If you sideload, use the official GitHub releases only.
:::

## 2. Create an account (or use guest mode)

An account syncs your add-ons, library and watch progress across devices. Guest mode keeps
everything local and makes no calls to Stremio's backend, at the cost of sync and some features.

::: tip
If you plan to use more than one device, create an account. Switching later means re-adding every
add-on by hand.
:::

## 3. Set up playback before adding content

Open **Settings** and check these first — they prevent most "why does it buffer" threads:

- **Hardware acceleration** — on, unless it causes green or black video on old GPUs.
- **Cache size** — on desktop, raise it if you have disk space; a bigger buffer survives slow peers.
- **Quality** — "Auto" is fine; forcing 4K on a 1080p TV only adds buffering.
- **Subtitles** — set your preferred language and size now, not mid-episode.
- **External player** (Android) — if the built-in player struggles with a codec, install
  Just Player or MX Player and select it here.
- **Autoplay next episode** — on, unless you fall asleep to shows.

## 4. Install your first add-ons

Open the **Add-ons** screen. You have two ways in:

1. **Community add-ons** — the built-in catalog. Press *Install* on what you want.
2. **Manifest URL** — paste a link ending in `manifest.json` into the search box. This is how you
   install configured add-ons (AIOStreams, Comet, MediaFusion, Torrentio).

For a first setup, install:

- [AIOStreams](/guides/stremio/aiostreams) — one aggregator that covers most sources.
- [AIOMetadata](/guides/stremio/metadata) — better catalogs and artwork (optional but nice).
- OpenSubtitles — already installed, leave it.

## 5. Test it

Open **Discover**, pick a well-known movie, press play, and look at the source list. You should see
several results grouped by add-on. If the list is empty, jump straight to
[Troubleshooting](/guides/stremio/troubleshooting) — it is almost always a missing debrid token or
an add-on that is down.

## 6. Tidy up

- Reorder add-ons with the [Addon Manager](/guides/stremio/extras): the first add-on is asked first,
  so put your main source on top.
- Save your setup with the [Account Bootstrapper](/guides/stremio/extras) so a new TV takes two
  minutes instead of an evening.
- Optionally connect [Trakt](/guides/stremio/extras) for watch history that survives everything.

## Next

- [How add-ons work](/guides/stremio/addons)
- [Debrid providers](/guides/stremio/debrid)
- [AIOStreams setup](/guides/stremio/aiostreams)

# Stremio overview

Stremio is a free, open-source media center. It is not a streaming service: it is a shell that
displays whatever your **add-ons** return. That single design decision explains almost everything
about how it behaves — including why it is empty on a fresh install.

## The pieces

| Piece | What it does |
| --- | --- |
| **Client** | The app you open: desktop, Android, TV, or the web client |
| **Account** | Stores your library, add-on list and watch progress |
| **Add-ons** | Web services that supply catalogs, metadata, streams or subtitles |
| **Streaming server** | Local service that fetches and plays torrents (desktop only) |
| **Debrid provider** | Optional paid service that turns torrents into direct HTTPS links |

## How playback works

1. You open a title. Stremio asks a **metadata add-on** (usually Cinemeta) for the description,
   poster and episode list.
2. You press play. Stremio asks every installed **stream add-on** for sources.
3. Each stream add-on returns a list of links: torrents, direct HTTP links, or debrid links.
4. The player opens the link. For torrents on desktop, the local streaming server downloads pieces
   and seeds them while you watch.

## What you need

- A device from the [apps list](/core-apps) — the desktop app is the most capable.
- One **stream add-on**. Two, at most, unless you know why you need more.
- Optionally a **debrid subscription**, which removes the peer-to-peer part entirely and makes
  playback start instantly.

## What you do not need

- A VPN, if you use debrid or Usenet only.
- Twenty add-ons. Each one adds latency and another thing that can break.
- A separate "media server". Stremio is not Plex and does not scan a library.

## Recommended reading order

1. [Getting started](/guides/stremio/setup) — install and configure the client.
2. [How add-ons work](/guides/stremio/addons) — understand manifests before installing anything.
3. [Debrid providers](/guides/stremio/debrid) — decide whether to pay for reliability.
4. Pick one stream add-on: [AIOStreams](/guides/stremio/aiostreams) is the usual first choice.
5. Add [metadata](/guides/stremio/metadata) and [subtitles](/guides/stremio/subtitles).
6. Keep [troubleshooting](/guides/stremio/troubleshooting) open for the first week.

::: tip The 30-second version
Install Stremio → subscribe to a debrid provider → install AIOStreams → paste the manifest into
Stremio → watch. Everything else on this site is refinement.
:::

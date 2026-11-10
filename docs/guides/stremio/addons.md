# How add-ons work

Every problem with Stremio eventually comes back to this page. Ten minutes here saves hours later.

## An add-on is a web service

Stremio does not download code. When you install an add-on, you are saving a **manifest URL** — a
link to a JSON file that describes a service running somewhere else.

```json
{
  "id": "com.example.addon",
  "version": "1.0.0",
  "name": "Example",
  "resources": ["catalog", "meta", "stream"],
  "types": ["movie", "series"],
  "idPrefixes": ["tt"]
}
```

When you open a title, Stremio calls that service over HTTPS and displays the answer. This is why:

- An add-on can break without Stremio updating.
- Your debrid credentials live on the add-on's server when you use a public instance.
- "Install" is really "remember this URL".

## The four resource types

| Resource | Job | Example |
| --- | --- | --- |
| `catalog` | Browsable lists on the Board/Discover pages | Trending, Netflix, IMDb Top 250 |
| `meta` | Titles, posters, descriptions, episodes | Cinemeta, AIOMetadata, TMDB |
| `stream` | Playable sources for a title | AIOStreams, Comet, Torrentio |
| `subtitles` | Subtitle tracks | OpenSubtitles, SubDL |

A single add-on can provide several resources. AIOStreams is `stream` only; AIOMetadata is
`meta` + `catalog`.

## Public instance vs self-hosted

Most add-ons are open-source services that someone runs for the public.

- **Public instance** — zero setup, but shared rate limits, and your debrid token is stored on
  someone else's server.
- **Self-hosted** — your own container, your own limits, your credentials stay with you. Requires
  [Docker](/guides/self-hosting/docker) and a small server.

If you use a public instance with a debrid account, prefer an instance run by a known operator, and
remember that you can revoke the debrid API token at any time.

## Why more add-ons is slower

Stremio asks every stream add-on for every title, in parallel. Each add-on then queries its upstream
sources. With six stream add-ons you get:

- a longer wait before the list appears,
- duplicate results,
- more chance that one add-on times out and delays the rest.

Two stream add-ons is plenty. One aggregator (AIOStreams) plus one fallback (Comet) covers almost
everything.

## A sane stack

1. **Streams:** [AIOStreams](/guides/stremio/aiostreams)
2. **Fallback:** [Comet](/guides/stremio/comet) — optional
3. **Metadata:** [AIOMetadata](/guides/stremio/metadata) or the built-in Cinemeta
4. **Subtitles:** OpenSubtitles (built in)
5. **Extras:** Trakt for history, RPDB for poster ratings

## Order matters

Add-ons are queried in the order they appear in your list. The [Addon Manager](/guides/stremio/extras)
lets you drag them without reinstalling. Put the fastest, most reliable source first.

## Reading a manifest URL

- It ends in `manifest.json`.
- It is HTTPS. Stremio will refuse plain HTTP in most clients.
- A configured add-on has a long, unreadable path — that path encodes your settings (and sometimes
  your debrid token). Treat it like a password.
- If you change settings on the configure page, you get a **new** URL and must reinstall. The old
  one keeps working with the old settings.

## Next

- [AIOStreams](/guides/stremio/aiostreams)
- [Debrid providers](/guides/stremio/debrid)
- [Troubleshooting](/guides/stremio/troubleshooting)

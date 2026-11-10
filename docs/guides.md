# Community Guides

Setup tutorials, official documentation and the corners of the internet where Stremio users
actually help each other.

## Official

- **[Stremio Help Center](https://stremio.zendesk.com/)** — Accounts, devices, playback and
  billing questions.
- **[Stremio Add-on Guide](https://stremio.github.io/stremio-addon-guide/)** — The protocol
  explained, plus a step-by-step SDK tutorial.
- **[Add-on SDK docs](https://github.com/Stremio/stremio-addon-sdk)** — Reference for building
  add-ons in Node.js.
- **[Stremio Blog](https://blog.stremio.com/)** — Release notes and announcements.
- **[Stremio on GitHub](https://github.com/Stremio)** — Core, web, desktop shell, SDK, service.

## Community

- **[r/StremioAddons](https://www.reddit.com/r/StremioAddons/)** — The main community. Add-on
  news, troubleshooting and setup threads.
- **[r/Stremio](https://www.reddit.com/r/Stremio/)** — General app discussion.
- **[stremio-addons.net](https://stremio-addons.net/)** — Community add-on directory.
- **[awesome-stremio](https://github.com/doingodswork/awesome-stremio)** — Curated open-source
  add-ons and developer resources.
- **[ElfHosted docs](https://docs.elfhosted.com/stremio-addons/guide/recommended-addons/)** —
  Well-maintained guide to the current best add-ons, with honest trade-offs.
- **[Viren070's guides](https://guides.viren070.me/)** — Detailed walkthroughs for AIOStreams,
  debrid setup and account bootstrapping.

## Recommended reading order

1. [Install Stremio](/core-apps) and create an account (or use guest mode).
2. Pick a debrid provider from [Debrid & Usenet](/debrid-services) if you want reliable streams.
3. Install **one** stream add-on from [Add-ons](/addons) — AIOStreams or Comet.
4. Add a metadata add-on (AIOMetadata or TMDB) so the catalogues look right.
5. Tidy the add-on order with the [Stremio Addon Manager](/tools-utilities).

## Frequently asked

**Do I need a VPN?**
If you stream through debrid or Usenet, no. If you use P2P add-ons without debrid, yes — your IP is
part of the swarm.

**Why is the stream list empty?**
Nine times out of ten it is the add-on being down, your debrid account not being configured in the
add-on, or an expired subscription. Check the provider's status page and re-install the add-on with
fresh credentials.

**Why do subtitles not match?**
The release name matters. Pick a stream whose release group matches the subtitle, or use
SubMaker to generate subtitles from the audio.

**Does Stremio work on iPhone?**
Yes, through [Stremio Web](https://web.stremio.com/) installed as a PWA. There is no official
native iOS app.

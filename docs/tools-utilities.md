# Tools & Utilities

Things that make Stremio easier to live with: managing add-ons, moving your setup between
accounts, building catalogues, downloading episodes for offline viewing, and self-hosting.

## Add-on management

- ⭐ **[Stremio Addon Manager](https://github.com/pancake3000/stremio-addon-manager)** /
  [Web app](https://stremio-addon-manager.pages.dev/) — Reorder, add and remove add-ons without
  reinstalling everything. Connect your Stremio account and drag the list into the order you want.
- ⭐ **[Stremio Account Bootstrapper](https://github.com/JourneyDeprecated/stremio-account-bootstrapper)** —
  Applies a saved preset (add-ons, order, settings) to a Stremio account in a few clicks. Handy for
  new devices and family members.
  A fork that also handles [Nuvio](https://nuvio.tv/) exists
  [here](https://github.com/burggraf/stremio-account-bootstrapper).
- **[PimpMyStremio](https://github.com/sungshon/PimpMyStremio)** — Local add-on manager that can
  run add-ons the regular app refuses to load. Older project; use with care.
- **[AIOManager](https://aiomanager.elfhosted.com)** — Web app that keeps several accounts'
  add-ons in sync and backs up your configuration.

## Catalogues & add-on development

- **[Stremio Catalog Builder](https://stremio.github.io/stremio-catalog-builder/)** — Official
  tool for building custom catalogues without writing code.
- **[Add-on publishing helper](https://stremio.github.io/stremio-publish-addon/index.html)** —
  Official helper for publishing an add-on to the community collection.
- **[Stremio Add-on SDK](https://github.com/Stremio/stremio-addon-sdk)** — Node.js SDK, the
  fastest way to write your own add-on.
- **[Add-on guide](https://stremio.github.io/stremio-addon-guide/)** — Official guide covering the
  add-on protocol from scratch.

## Downloading & offline

- **[Stremio Downloader](https://github.com/BurningSands70/stremio-downloader)** — Downloads
  streams from Stremio to your disk.
- **[Stremio Downloader (web)](https://github.com/BurningSands70/stremio-downloader)** — Same
  project, usable without the desktop app.

## Self-hosting & platforms

- **[stremio-docker](https://github.com/tsaridas/stremio-docker)** — Docker images for the Stremio
  server and web client. The easiest way to run Stremio on a NAS or home server.
- **[Stremio Service](https://github.com/Stremio/stremio-service)** — The official local streaming
  service, if you want to run it separately from the UI.
- **[Stremio Server Docker](https://github.com/Stremio/server-docker)** — Official server images.
- **[Stremio on Raspberry Pi](https://github.com/shivasiddharth/Stremio-RaspberryPi)** — Install
  script for Raspberry Pi.
- **[Stremio Flatpak](https://github.com/bilelmoussaoui/stremio-flatpak)** — Flatpak packaging for
  Linux desktops.

## Quick picks

| If you want to… | Install |
| --- | --- |
| Reorder your add-ons | Stremio Addon Manager |
| Clone a setup to a new device | Stremio Account Bootstrapper |
| Build a custom catalogue | Stremio Catalog Builder |
| Save episodes for a flight | Stremio Downloader |
| Run Stremio on a server/NAS | stremio-docker |

::: warning
Third-party tools ask for access to your Stremio account. Use the official web app or a tool with
public source code, and revoke access when you are done. Never paste your password into a random
site — Stremio's login uses a token, not your password.
:::

# Extras & tools

The add-ons get you streams. These tools make the whole setup easier to live with.

## Account Bootstrapper

[Stremio Account Bootstrapper](https://github.com/JourneyDeprecated/stremio-account-bootstrapper)
applies a saved preset to a Stremio account: add-ons, their order, and some settings.

- Use it when setting up a new TV, a family member's account, or after a factory reset.
- Create the preset once, export the link, keep it private — it can contain add-on URLs with your
  debrid token inside.
- A [fork that also supports Nuvio](https://github.com/burggraf/stremio-account-bootstrapper) exists.

## Addon Manager

[Stremio Addon Manager](https://stremio-addon-manager.pages.dev/) reorders and adds add-ons without
reinstalling them one by one.

Add-on order is not cosmetic: Stremio asks them in order, and the first good answer shapes the list.
Put your main aggregator first, metadata second, extras last.

## AIOManager

[AIOManager](https://aiomanager.elfhosted.com) keeps several Stremio accounts in sync and backs up
their add-on configuration. Useful for a household with more than one profile-like account.

## Stremio Enhanced (desktop)

[Stremio Enhanced](https://github.com/REVENGE977/stremio-enhanced) is an Electron client that adds
plugins and themes on top of Stremio's web UI. Good for:

- custom themes and layout tweaks,
- plugins that extend the player,
- a more current UI than the stable desktop app.

It is unofficial. Bugs go to its GitHub, not to Stremio.

## Stremio Community v5

[Stremio Community v5](https://github.com/Zaarrg/stremio-community-v5) wraps the latest web UI in a
WebView2/Qt6 shell. It tends to track Stremio Web faster than the stable desktop release. Same caveat:
community project, community support.

## Trakt

Connect Trakt in **Stremio → Settings → Trakt** to keep watch history and progress outside Stremio.
Benefits:

- history survives a reinstall or a new device,
- [MyTrakt](https://mytrakt.elfhosted.com) can turn your lists into catalogs,
- recommendations improve over time.

## Downloader

[Stremio Downloader](https://github.com/BurningSands70/stremio-downloader) saves a stream to disk for
offline viewing. Remember that a download from a debrid link is still subject to the same legal
question as streaming it.

## External players

If the built-in player struggles:

- **Android / Android TV** — Just Player, MX Player, VLC. Set it in Stremio's playback settings.
- **Desktop** — mpv handles almost everything, at the cost of a keyboard.
- **Apple TV** — use the Stremio-compatible clients listed in [Apps & Forks](/core-apps).

## Keeping things tidy

- Every few months, open your add-on list and remove what you do not use.
- Re-check your debrid token after changing your provider password.
- Export your setup with the Bootstrapper before a big change. Rollback is easier than rebuilding.

## Next

- [Troubleshooting](/guides/stremio/troubleshooting)
- [Self-hosting](/guides/self-hosting/)
- [Glossary](/glossary)

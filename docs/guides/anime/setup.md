# Aniyomi setup

Fifteen minutes from APK to a working library.

## 1. Install

1. Open [aniyomi.org/download](https://aniyomi.org/download/) on the device.
2. Download the latest APK. Choose the standard build unless you know you need a specific ABI.
3. Android will ask to allow installs from your browser or file manager. Approve it for that app
   only, install, then revoke the permission.

Do not use APK mirrors. The site links to the official GitHub releases; that is the only source you
should trust.

## 2. Add extensions

1. Open **Browse → Extensions**.
2. If no repository is configured, add the community repo URL from the Aniyomi docs.
3. Install the sources you want. Anime sources are grouped by language; install two or three, not
   twenty.
4. Open **Browse** and search. If a source fails, it is usually down — try another rather than
   reinstalling.

::: tip Fewer sources, fewer problems
Every installed extension adds update checks and failure modes. Two reliable sources beat ten
half-broken ones.
:::

## 3. Set up tracking

**Settings → Tracking** → log in to MyAnimeList, AniList, Kitsu or Shikimori.

- Pick one primary tracker. Two trackers means two sets of duplicates to fix.
- Enable automatic updates so episodes and scores sync without manual edits.
- If you already have a MAL/AniList list, import it before adding titles manually.

## 4. Player settings

**Settings → Player**:

- **Decoder** — hardware by default. Switch to software if you see green frames or crashes on old
  devices.
- **Subtitles** — set preferred language and font size now.
- **Gestures** — brightness and volume on the sides, seek on the bottom. Enable what you will
  actually use.
- **Skip intro** — works only when the source provides chapter markers; do not expect magic.

## 5. Downloads

- Set a download directory on external storage if internal is small.
- Choose a default quality: 720p is the sweet spot for phones, 1080p for tablets and TV.
- Downloads continue in the background but Android may kill them on aggressive battery savers;
  exclude Aniyomi from battery optimisation.

## 6. Backups

**Settings → Backup** → create a backup before you change anything major.

- Backups include library, categories, tracking settings and extension list — not the downloaded
  video files.
- Store the file outside the app's folder (cloud drive, SD card).
- A backup is also your migration path to a [fork](/guides/anime/forks).

## 7. Updating

- In-app updater checks GitHub releases. Forks have their own updaters and their own signing keys —
  you cannot update one over another, only restore a backup.
- Before a big version jump, make a backup. Extension breakage after an update is common and usually
  fixed within days.

## Common problems

**"No results"** — the extension's source is down or geo-blocked. Try a VPN or another extension.

**Video plays but no audio** — unsupported codec; switch the decoder to software or use an external
player.

**Library empty after update** — you restored the wrong backup or installed a fork over the original.
Reinstall the matching build, then restore.

**Tracking does not sync** — re-authenticate in Settings → Tracking; tokens expire.

## Next

- [Forks](/guides/anime/forks)
- [Overview](/guides/anime/)
- [Aniyomi docs](https://aniyomi.org/docs/guides/getting-started)

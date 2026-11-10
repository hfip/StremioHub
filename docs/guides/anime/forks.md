# Aniyomi forks

A fork is a copy of the app maintained by different developers. Forks exist because Aniyomi's
original development is slow, and because different people want different features.

## Endorsed forks

Aniyomi's site lists two forks it endorses:

- **[Animiru](https://aniyomi.org/forks/Animiru/)** — Aniyomi without the manga features. Focused on
  anime, lighter, with Discord rich presence.
- **[Animetail](https://aniyomi.org/forks/Animetail/)** — Aniyomi plus features borrowed from Mihon
  forks: casting, Discord RPC, torrent streaming support.

## Older forks

- **Kuukiyomi** — added torrent streaming and Discord RPC. No longer updated; its features were
  planned for the main app. Do not install it today unless you have a specific reason.

## How to choose

| If you want… | Pick |
| --- | --- |
| The default, best-supported app | Aniyomi |
| Anime only, no manga UI | Animiru |
| Casting and torrents | Animetail |
| Maximum stability | Aniyomi stable |

## Switching forks

1. In the old app: **Settings → Backup**, create a backup and copy it somewhere safe.
2. Uninstall the old app **only after** the backup is copied off the device.
3. Install the new fork from its official release page.
4. **Settings → Backup → Restore** and select the file.
5. Re-authenticate tracking services and re-check extension repositories.
6. Keep the old backup for a month.

::: warning Signing keys
Forks are signed with different keys, so Android will refuse to install one over another. Uninstall
first — which is exactly why the backup step is not optional.
:::

## Risks

- Small forks can disappear, taking their update channel with them.
- A fork that lags behind security fixes is a liability. Check the last release date before trusting
  one with your library.
- Never install a "premium unlocked" build from a Telegram channel. Those are the ones that ship
  malware.

## Next

- [Setup](/guides/anime/setup)
- [Overview](/guides/anime/)
- [Aniyomi endorsed forks](https://aniyomi.org/forks/)

# Troubleshooting

Work down the list in order. Most problems are one of five causes: an add-on is down, credentials
are wrong, the torrent is uncached, the device cannot decode the file, or the network is blocking
something.

## The stream list is empty

1. **Check the add-on first.** Open its status page or dashboard (AIOStreams and Comet both show
   upstream errors). If it is down, nothing you do locally will help.
2. **Re-check credentials.** A debrid password change, an expired plan or a revoked token all look
   identical: no results.
3. **Test with Torrentio.** Install it with your debrid key. If Torrentio returns links and your
   aggregator does not, the aggregator is misconfigured.
4. **Check the manifest is current.** After saving settings you get a new URL; the old one keeps the
   old settings.
5. **Try a mainstream title.** If a new blockbuster returns nothing, it is the setup. If only an
   obscure 1970s film returns nothing, it may genuinely have no sources.

## Everything buffers

- **Uncached torrents** — enable "cached only" or pick a result marked cached.
- **Debrid link but still slow** — try the proxy option in AIOStreams/Comet; some ISPs throttle
  debrid hosts.
- **Old device** — a 4K remux will not play on a 2018 TV stick. Force 1080p.
- **Wi-Fi** — a 60 GB file over 2.4 GHz Wi-Fi is not going to work. Use Ethernet or 5 GHz.
- **Server cache** — on desktop, raise Stremio's cache size if you have disk space.

## Video plays but audio does not (or vice versa)

The file uses a codec the device cannot decode — commonly DTS or TrueHD audio, or HEVC on old
hardware.

- Pick a different release (look for AAC audio, H.264 video).
- Use an external player with better codec support (VLC, mpv, Just Player).
- On Android TV, enable audio passthrough only if your receiver supports the format.

## Subtitles are out of sync

See [Subtitles](/guides/stremio/subtitles#sync-problems). Short version: adjust the offset, and if it
drifts, pick a track that matches the release.

## An add-on will not install

- The URL must end in `manifest.json` and use **HTTPS**. Plain HTTP is rejected outside localhost.
- On the web client, check that the browser is not blocking the popup that asks to open Stremio.
- Some add-ons require a configuration step before they produce a valid URL.
- If it says "invalid manifest", open the URL in a browser: you should see JSON, not an error page.

## The app says "add-on is not responding"

That is a timeout, not a crash.

- Remove slow or duplicate stream add-ons.
- Raise the timeout if the add-on's config allows it.
- A public instance under load will do this at peak times; self-hosting fixes it.

## 4K stutters, 1080p is fine

- Check the TV/stick spec: many "4K" devices decode only a narrow set of profiles.
- Disable any transcoding in the add-on or proxy — direct play is always better.
- Use a wired connection for remuxes.
- Accept that some 4K remuxes are simply too large for your hardware.

## Debrid errors

| Message | Meaning |
| --- | --- |
| "Infringing file" | The provider removed the cached torrent. Pick another release. |
| "Torrent not cached" | It was cached when indexed, removed since. |
| "Account expired" | Renew, then re-save the add-on config. |
| "Too many concurrent downloads" | Another device or IP is using the account. |

## Stremio Web works, the TV app does not

Different clients, different capabilities. The TV app has no external player and a smaller cache.
If a file plays in the browser but not on the TV, it is a codec or memory problem, not an account
problem.

## Starting over

1. Remove all add-ons except Cinemeta.
2. Install one stream add-on with fresh credentials.
3. Test a popular movie.
4. Add things back one at a time.

Fifteen minutes of bisecting beats a week of guessing.

## Next

- [FAQ](/guides/stremio/faq)
- [How add-ons work](/guides/stremio/addons)
- [Debrid providers](/guides/stremio/debrid)

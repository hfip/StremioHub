# Subtitles

Stremio handles subtitles reasonably well out of the box. Most complaints come from a mismatch
between the release and the subtitle file, not from Stremio.

## What you get by default

- **OpenSubtitles v3** — installed by default. Covers most mainstream titles in most languages.
- **Embedded subtitles** — many releases carry their own tracks. They are always in sync with that
  release.

## Adding more sources

| Add-on | Strength |
| --- | --- |
| OpenSubtitles (built in) | Default source, covers most mainstream titles |
| [OpenSubtitles v3 source](https://github.com/dexter21767/stremio-opensubtitles) | Community mirror of the official add-on |
| [SubMaker](https://submaker.elfhosted.com) | Generates subtitles from the audio when none exist |

For everything else, browse the subtitle category on
[stremio-addons.net](https://stremio-addons.net/addons). Subtitle add-ons come and go quickly — a
link that worked last month may be gone today, so check the directory rather than trusting an old
list.

Install one extra source at most. Two subtitle add-ons asking in parallel is fine; five makes the
track list unreadable.

## Arabic subtitles

- OpenSubtitles has a large Arabic catalog; set **Preferred language → Arabic** in Stremio settings
  so it surfaces first.
- SubDL and SubSource often have Arabic tracks that OpenSubtitles lacks.
- For older or regional content, generate a subtitle with SubMaker and correct it manually.

## Sync problems

Subtitle files are timed to a specific release. If yours drifts:

1. Pause the episode and open the subtitle menu.
2. Use the **offset** control (usually ±0.5 s steps) to correct it.
3. If the drift grows over time, the file is for a different frame rate. Try another track.

Stremio's offset is temporary. If a file is consistently wrong, replace it rather than adjust every
episode.

## Forced subtitles

For scenes with foreign dialogue, look for tracks marked **forced**. If the release includes them,
Stremio lists them separately. If not, no add-on will invent them.

## Styling

Stremio's subtitle size and background are in **Settings → Subtitles**. On Android, an external
player gives you font, outline and position control that the built-in player lacks.

## Subtitles in other languages

Translation add-ons can machine-translate a track, but quality is what you would expect. They are
useful for understanding a plot, not for a first watch of something you care about.

## Next

- [Metadata & catalogs](/guides/stremio/metadata)
- [Troubleshooting](/guides/stremio/troubleshooting)
- [FAQ](/guides/stremio/faq)

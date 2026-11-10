# Metadata & catalogs

Streams are half the experience. The other half is what you see before pressing play: posters,
descriptions, episode lists and the rows on your Board.

## Cinemeta (built in)

Cinemeta is the default metadata add-on. It supplies:

- the standard catalogs (popular, featured, IMDb-derived lists),
- posters, backgrounds and descriptions,
- season and episode structure.

Leave it installed. Almost every other add-on assumes its IDs (`tt…`).

## AIOMetadata

[AIOMetadata](https://aiometadata.elfhosted.com) replaces Cinemeta's output with something noticeably
better.

- Configurable catalogs from TMDB, TVDB, MyAnimeList, AniList and Trakt.
- Higher-resolution artwork.
- Ratings from several sources.
- Per-catalog ordering and limits.

Setup is a configure page like any other add-on: choose providers, pick catalogs, install the
manifest. Keep the number of catalogs modest — each row is a request when the home screen loads.

## TMDB add-on

[tmdb.elfhosted.com](https://tmdb.elfhosted.com) adds TMDB's popular, trending, upcoming and
top-rated lists without replacing Cinemeta. [TMDB Discover+](https://tmdb-discover-plus.elfhosted.com)
goes further with genre, year and release-date discovery.

Use it when you want more rows, not different metadata.

## Anime

- [Anime Kitsu](https://github.com/TheBeastLT/stremio-kitsu-anime) — Kitsu catalogs and metadata,
  the classic choice for anime rows.
- AIOMetadata — MyAnimeList and AniList catalogs in the same add-on as everything else.
- Anime IDs are messy: a title may exist as both a TMDB entry and a Kitsu entry. Pick one metadata
  source per library to avoid duplicates.

## Custom catalogs

- [AIOLists](https://github.com/SebastianMorel/AIOLists) — turns MDBList and Trakt lists into
  catalogs.
- [IMDb list](https://github.com/jaruba/stremio-imdb-list) — any public IMDb list as a row.
- [IMDb tag](https://github.com/jaruba/stremio-imdb-tag) — dynamic catalogs from an IMDb tag.
- [Stremio Catalog Builder](https://stremio.github.io/stremio-catalog-builder/) — official no-code
  builder.

## Poster ratings

[RPDB](https://ratingposterdb.com) draws ratings onto posters. It is not an add-on: you plug its URL
into a metadata add-on (AIOMetadata supports it natively). Free tier exists; the paid tiers add
styles and more rating sources.

## Ordering

Metadata add-ons are queried in list order, and the first one that answers wins for a given ID. If
two add-ons provide the same title, you may see duplicates or mismatched artwork. Keep **one**
primary metadata source and disable the overlapping catalogs on the others.

## Common problems

**Duplicate titles in Discover** — two metadata add-ons both provide the same catalog. Disable one.

**Wrong posters** — a metadata add-on is overriding Cinemeta with a lower-quality image. Reorder or
remove it.

**Anime shows as a movie** — the ID came from TMDB instead of Kitsu/MAL. Use one source per title.

**Home screen slow** — too many catalogs. Cut it to five or six.

## Next

- [Subtitles](/guides/stremio/subtitles)
- [Extras & tools](/guides/stremio/extras)
- [Troubleshooting](/guides/stremio/troubleshooting)

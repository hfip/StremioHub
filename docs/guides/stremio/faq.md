# FAQ

## Is Stremio legal?

Stremio itself is legal, open-source software. What matters is what you install and what you stream.
Add-ons that return unlicensed content are the user's responsibility, and in many countries
streaming or downloading that content is illegal. This site does not host or link to files.

## Do I need a debrid subscription?

No, but it is the single biggest quality improvement you can make. Without one you depend on seeders,
your IP is visible to the swarm, and old or niche titles often will not play. With one, playback
starts instantly and your ISP sees a normal HTTPS connection.

## Do I need a VPN?

- Debrid or Usenet only: no.
- P2P add-ons without debrid: yes, at minimum for privacy.

A VPN does not make unlicensed streaming legal, and it does not fix a bad source.

## Does Stremio work on iPhone?

Through [Stremio Web](https://web.stremio.com/), installed to the home screen as a PWA. There is no
official native iOS app. Some compatible third-party clients exist; see [Apps & Forks](/core-apps).

## How many add-ons should I install?

Two stream add-ons, one metadata add-on, subtitles. More add-ons mean slower lists, more duplicates
and more things that can break.

## Why does Stremio need an account?

It stores your library, add-on list and progress server-side so it can sync between devices. Guest
mode avoids the account entirely and keeps everything local.

## Can I use one account on several TVs?

Yes, but concurrent playback limits come from your debrid provider, not from Stremio. Two streams at
once is usually fine; five will fail.

## How do I watch offline?

Stremio can cache content on desktop, and there are downloader tools. On mobile the reliable route is
an external downloader against a direct debrid link. See [Extras](/guides/stremio/extras).

## Why is the file size so large?

A 4K remux is a copy of the disc: 40–90 GB. A 1080p web release is 2–8 GB and looks nearly identical
on a TV at normal viewing distance. Size filters are your friend.

## What are CAM, TS and HDTS?

Recordings made in a cinema with a camera or line audio. Always low quality. Exclude them in your
add-on filters; they are otherwise always at the top of the list.

## Why do results disappear after a while?

Debrid caches are cleaned, torrents lose seeders, and DMCA requests remove content. A source that
worked last month may be gone today. Try another release rather than reinstalling everything.

## Can I share my setup with family?

Yes — with caveats. Your debrid token is inside the add-on URLs, so anyone with the link can use your
quota. The Account Bootstrapper makes sharing convenient; make sure you trust the people you share
with.

## Is there a kids mode?

Stremio has no proper profiles. Options: a separate account with filtered add-ons only, or a
metadata/stream setup with parental filters (MediaFusion has them). Neither is a real parental
control; supervise.

## Why does the site recommend self-hosting?

Because public instances are shared, rate-limited, and hold your debrid token. A €4 VPS removes all
three problems. It is optional, not required.

## Something is broken and the guide did not help

Open [Troubleshooting](/guides/stremio/troubleshooting) first, then ask in
[r/StremioAddons](https://www.reddit.com/r/StremioAddons/) with: device, client version, add-on list,
and what exactly the stream list shows. That is enough for someone to help.

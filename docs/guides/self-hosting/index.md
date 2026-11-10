# Self-hosting overview

Everything Stremio talks to is a web service. Public instances are convenient, but they are shared,
rate-limited, and — if you paste a debrid token into them — they hold your credentials. Running your
own copy fixes all three.

## What is worth hosting

| Service | Why host it |
| --- | --- |
| [AIOStreams](https://github.com/Viren070/AIOStreams) | Your own aggregator, your limits, your token |
| [Comet](https://github.com/g0ldyy/comet) | Lightweight scraper with proxy |
| [MediaFusion](https://github.com/mhdzumair/MediaFusion) | Regional catalogs, Usenet, parental filters |
| [StremThru](https://github.com/MunifTanjim/stremthru) | Debrid/Usenet bridge for other add-ons |
| [Prowlarr](https://github.com/Prowlarr/Prowlarr) / [Jackett](https://github.com/Jackett/Jackett) | Your own indexers |
| Stremio Service | Headless playback server for a home box |

You do not need all of them. One aggregator plus a reverse proxy is a complete setup.

## What it costs

- A small VPS: €3–5/month, or free on Oracle's Always Free tier (see
  [Oracle free VPS](/guides/self-hosting/oracle)).
- A domain: optional. A free subdomain from Cloudflare or DuckDNS works for HTTPS.
- Your time: an evening the first time, minutes afterwards.

## What you need to know

- Basic terminal use: `cd`, `nano`, `docker compose up -d`.
- What a reverse proxy does (it terminates HTTPS and forwards to your container).
- That exposing a service means securing it: firewall, updates, strong secrets.

If any of that sounds unpleasant, use a public instance. It is a legitimate choice; self-hosting is
about control, not about being a real user.

## The shape of a setup

```
Internet → Caddy (HTTPS, port 443) → AIOStreams (container, port 3000)
                                   → Comet (container, port 8080)
```

Caddy gets certificates automatically. AIOStreams and Comet never expose ports to the internet
directly; only Caddy does.

## Security checklist

- [ ] SSH keys only, password login disabled.
- [ ] Firewall allows 22, 80, 443 and nothing else.
- [ ] Each service has a random `SECRET_KEY` or equivalent.
- [ ] Containers run as a non-root user where the image supports it.
- [ ] Automatic updates or a monthly `docker compose pull`.
- [ ] Backups of configuration volumes, not of media.

## Next

- [Docker basics](/guides/self-hosting/docker)
- [Oracle free VPS](/guides/self-hosting/oracle)
- [AIOStreams](/guides/stremio/aiostreams)

# Docker basics

You do not need to be a Docker expert to self-host an add-on. You need five commands and one file.

## Install Docker

On Ubuntu/Debian:

```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
# log out and back in so the group applies
docker run --rm hello-world
```

The last command should print a welcome message. If it does not, the daemon is not running or your
user is not in the `docker` group.

## The vocabulary

- **Image** — a packaged application (`ghcr.io/viren070/aiostreams`).
- **Container** — a running copy of an image.
- **Volume** — persistent storage, so a container update does not erase your config.
- **Compose** — a YAML file describing one or more containers.
- **Reverse proxy** — the thing that gives your container an HTTPS URL.

## A working example

`docker-compose.yml`:

```yaml
services:
  aiostreams:
    image: ghcr.io/viren070/aiostreams:latest
    container_name: aiostreams
    restart: unless-stopped
    environment:
      - SECRET_KEY=replace-with-a-long-random-string
    volumes:
      - ./data/aiostreams:/app/data
    # no ports: Caddy reaches it over the internal network

  caddy:
    image: caddy:2
    container_name: caddy
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./Caddyfile:/etc/caddy/Caddyfile:ro
      - ./data/caddy:/data
    depends_on:
      - aiostreams
```

`Caddyfile`:

```
streams.example.com {
    reverse_proxy aiostreams:3000
}
```

Start it:

```bash
docker compose up -d
docker compose logs -f caddy   # watch the certificate being issued
```

Point an `A` record for `streams.example.com` at your server before starting, otherwise Caddy cannot
complete the ACME challenge.

## Day-to-day commands

```bash
docker compose ps                 # what is running
docker compose logs -f --tail=100 # recent logs
docker compose pull && docker compose up -d   # update
docker compose down               # stop (volumes survive)
docker compose restart aiostreams # restart one service
```

## Updating safely

1. `docker compose pull`
2. `docker compose up -d`
3. Check the add-on's web UI and install the new manifest in Stremio if the config changed.

Pin a version tag instead of `latest` if you want predictable upgrades:
`ghcr.io/viren070/aiostreams:2.4.0`.

## Backups

Back up the `./data` folders, not the containers. A nightly `tar` of the compose directory is enough:

```bash
tar czf ~/backups/streams-$(date +%F).tar.gz ./docker-compose.yml ./Caddyfile ./data
```

## Without a domain: Cloudflare Tunnel

If you cannot open ports, run `cloudflared` in the same compose file and point a hostname at
`http://aiostreams:3000`. You get HTTPS on a Cloudflare-managed domain without a public IP.

## Common mistakes

- Publishing `3000:3000` to the internet and skipping the proxy — no HTTPS, Stremio refuses the
  manifest.
- Using `latest` and never updating — scrapers break monthly.
- Storing secrets in the compose file and committing it to a public repo.
- Forgetting that a container restart does not apply new environment variables; `up -d` does.

## Next

- [Oracle free VPS](/guides/self-hosting/oracle)
- [AIOStreams setup](/guides/stremio/aiostreams)

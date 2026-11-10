# Oracle free VPS

Oracle Cloud's Always Free tier includes an Arm virtual machine that is genuinely useful for hosting
add-ons. The catch is a signup process that rejects a lot of cards, and capacity that comes and goes.

::: warning Numbers change
As of late 2026, Always Free covers **one `VM.Standard.A1.Flex` instance with 2 OCPUs and 12 GB RAM**,
plus **200 GB of total block storage** and **10 TB/month of egress**. Oracle has changed these
numbers before; confirm on the [Always Free resources page](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm)
before you build anything.
:::

## Before you start

- A real credit or debit card. Prepaid and virtual cards are rejected.
- An address that matches your bank statement exactly.
- Patience: "Out of capacity" is normal in popular regions.

## Create the instance

1. Sign up at [oracle.com/cloud/free](https://www.oracle.com/cloud/free/) and open the console.
2. **Compute → Instances → Create instance**.
3. Image: **Canonical Ubuntu 24.04**.
4. Shape: **Ampere → VM.Standard.A1.Flex**, **2 OCPUs**, **12 GB** memory.
5. Networking: create a new VCN and a public subnet (defaults are fine).
6. SSH keys: upload your public key. Generate one locally if needed:

   ```bash
   ssh-keygen -t ed25519 -C "you@example.com"
   ```

7. Boot volume: 200 GB, performance 120 (the maximum included).
8. Create. If you get **Out of capacity**, try another availability domain, or try again later.

## First login

```bash
ssh ubuntu@YOUR_PUBLIC_IP
sudo apt update && sudo apt upgrade -y
```

## Open ports — twice

Oracle blocks traffic in two places. You must change both.

**1. Cloud security list**

Instance → **Networking** → subnet → **Security** → default security list → **Add ingress rules**:

- Source `0.0.0.0/0`, TCP, destination port `80`
- Source `0.0.0.0/0`, TCP, destination port `443`

**2. The instance firewall**

Ubuntu images ship with iptables rules that persist:

```bash
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 443 -j ACCEPT
sudo netfilter-persistent save
```

If you use `ufw`, open 80/443 there as well.

## Install Docker and a proxy

Follow [Docker basics](/guides/self-hosting/docker). The example compose file works unchanged on
Arm: AIOStreams, Comet and MediaFusion all publish multi-arch images.

## Keep it free

- Do not create a second A1 instance or extra block volumes; the free allowance is exact.
- Do not upgrade to Pay-As-You-Go unless you set a budget alert first and understand the limits.
- Watch egress: 10 TB/month is a lot for a few add-ons, but a proxy streaming 4K to several people
  can approach it.
- Set a **$1 budget alert** in Billing → Budgets even on the free tier. It costs nothing and warns
  you before a surprise.

## Maintenance

```bash
sudo apt update && sudo apt upgrade -y      # monthly
docker compose pull && docker compose up -d # after upstream releases
df -h                                       # 200 GB fills up with images and logs
docker system prune -af --volumes           # reclaim space (careful: removes unused volumes)
```

Enable automatic security updates:

```bash
sudo apt install unattended-upgrades -y
sudo dpkg-reconfigure --priority=low unattended-upgrades
```

## Alternatives

If Oracle rejects you or has no capacity:

- **Hetzner CX22** — a few euros a month, no capacity games.
- **Contabo VPS** — cheap but slower disk.
- **A Raspberry Pi at home** — free after hardware, needs a tunnel for HTTPS.
- **Fly.io / Railway** — PaaS, fine for one small add-on, more expensive at scale.

## Next

- [Docker basics](/guides/self-hosting/docker)
- [AIOStreams](/guides/stremio/aiostreams)
- [Comet](/guides/stremio/comet)

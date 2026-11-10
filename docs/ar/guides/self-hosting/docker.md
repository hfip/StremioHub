# أساسيات Docker

لا تحتاج أن تكون خبير Docker لتستضيف إضافة. تحتاج خمسة أوامر وملفًا واحدًا.

## تثبيت Docker

على Ubuntu/Debian:

```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
# سجّل الخروج والدخول من جديد ليُطبّق صلاحية المجموعة
docker run --rm hello-world
```

يجب أن يطبع الأمر الأخير رسالة ترحيب. إن لم يفعل، فالخدمة لا تعمل أو مستخدمك ليس في مجموعة
`docker`.

## المصطلحات

- **Image** — تطبيق مغلّف (`ghcr.io/viren070/aiostreams`).
- **Container** — نسخة تعمل من الصورة.
- **Volume** — تخزين دائم حتى لا تمسح التحديثات إعداداتك.
- **Compose** — ملف YAML يصف حاوية أو أكثر.
- **Reverse proxy** — ما يمنح حاويتك رابط HTTPS.

## مثال يعمل

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
    # بدون ports: Caddy يصل إليه عبر الشبكة الداخلية

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

شغّله:

```bash
docker compose up -d
docker compose logs -f caddy   # راقب إصدار الشهادة
```

وجّه سجل `A` للنطاق `streams.example.com` إلى سيرفرك قبل التشغيل، وإلا لن يكمل Caddy تحدي ACME.

## أوامر اليومية

```bash
docker compose ps                 # ما الذي يعمل
docker compose logs -f --tail=100 # آخر السجلات
docker compose pull && docker compose up -d   # تحديث
docker compose down               # إيقاف (الحجوم تبقى)
docker compose restart aiostreams # إعادة خدمة واحدة
```

## التحديث بأمان

1. `docker compose pull`
2. `docker compose up -d`
3. تحقق من واجهة الإضافة، وأعد تثبيت الـ manifest في ستريمو إن تغيّر الإعداد.

ثبّت وسم إصدار بدل `latest` إن أردت ترقيات متوقعة: `ghcr.io/viren070/aiostreams:2.4.0`.

## النسخ الاحتياطي

انسخ مجلدات `./data` لا الحاويات. أمر `tar` ليلي لمجلد compose يكفي:

```bash
tar czf ~/backups/streams-$(date +%F).tar.gz ./docker-compose.yml ./Caddyfile ./data
```

## بدون نطاق: Cloudflare Tunnel

إن لم تستطع فتح المنافذ، شغّل `cloudflared` في نفس ملف compose ووجّه اسم مضيف إلى
`http://aiostreams:3000`. تحصل على HTTPS على نطاق تديره Cloudflare بدون IP عام.

## أخطاء شائعة

- نشر `3000:3000` للإنترنت وتخطّي البروكسي — لا HTTPS، وستريمو يرفض الـ manifest.
- استخدام `latest` وعدم التحديث — السكرابرز تتعطل شهريًا.
- حفظ الأسرار في ملف compose ورفعه لمستودع عام.
- نسيان أن إعادة تشغيل الحاوية لا تطبّق متغيرات البيئة الجديدة؛ `up -d` تفعل.

## التالي

- [Oracle VPS مجاني](/ar/guides/self-hosting/oracle)
- [إعداد AIOStreams](/ar/guides/stremio/aiostreams)

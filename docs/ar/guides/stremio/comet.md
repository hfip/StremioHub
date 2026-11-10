# Comet

Comet إضافة بث سريعة وخفيفة تبحث في فهارس التورنت وتحوّل النتائج عبر حساب Debrid أو Usenet. تفعل
أقل من AIOStreams لكنها تفعلها بسرعة، وهي مصدر ثانٍ جيد عندما يفوّت المجمّع شيئًا.

- المستودع: [g0ldyy/comet](https://github.com/g0ldyy/comet)
- النسخة العامة: [comet.elfhosted.com](https://comet.elfhosted.com)

## الإعداد

1. افتح صفحة الضبط في النسخة.
2. اختر **خدمة Debrid** والصق مفتاح الـ API (Real-Debrid، AllDebrid، Premiumize، TorBox،
   Debrid-Link).
3. اختر **السكرابرز**. Torrentio وDMM يغطيان معظم ما تحتاجه؛ أضف غيرهما فقط عند نقص محتوى معيّن.
4. اضبط **الفلاتر**: الدقة، الجودات المستبعدة، أقصى حجم، اللغات.
5. فعّل **المخزّن فقط** إن كنت لا تريد انتظار التورنتات غير المخزّنة.
6. فعّل **البروكسي** فقط إذا كان مزوّد الإنترنت يخنق الروابط المباشرة.
7. ثبّت الـ manifest الناتج في ستريمو.

## الاستضافة الذاتية

```bash
git clone https://github.com/g0ldyy/comet
cd comet
cp .env-sample .env
# عدّل .env: أضف مفتاح Debrid وضع secret عشوائيًا
docker compose up -d
```

تحتاج Comet عنوان HTTPS عامًا ليقبل ستريمو الـ manifest. Caddy أو Cloudflare Tunnel يحلّان ذلك؛
راجع [أساسيات Docker](/ar/guides/self-hosting/docker).

## متى تستخدم Comet بدل AIOStreams

- تريد قائمة بسيطة وسريعة دون إعداد مجمّع.
- تستضيف بنفسك وتريد أجزاء متحركة أقل.
- تحتاج رأيًا ثانيًا عندما لا يرجع AIOStreams شيئًا.

## متى لا تستخدمها

- تريد قائمة واحدة تدمج عدة مصادر — هذه وظيفة AIOStreams.
- تعتمد على محتوى إقليمي بفلاتر لغة دقيقة — MediaFusion أقوى هناك.

## ملاحظات

- Comet مصمّمة حول Debrid؛ بدون مزوّد تعود إلى تورنتات P2P.
- مثل كل سكرابر، تتعطل عندما تغيّر المواقع التي تقرأها بنيتها. أبقها محدّثة.
- النسخ العامة محدودة الطلبات. إن استخدمتها يوميًا فاستضفها بنفسك.

## التالي

- [MediaFusion](/ar/guides/stremio/mediafusion)
- [Torrentio](/ar/guides/stremio/torrentio)
- [خدمات Debrid](/ar/guides/stremio/debrid)

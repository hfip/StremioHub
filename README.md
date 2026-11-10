# StremioHub

دليل مجتمعي شامل: موارد وأدلة **ستريمو**، مع أقسام للاستضافة الذاتية والألعاب والأنمي.
مبني بـ [VitePress](https://vitepress.dev)، ثنائي اللغة (إنجليزي/عربي مع RTL)، وبنفس أسلوب
[NuvioHub](https://nuviohub.pages.dev/).

- الموقع: **https://stremiohub.pages.dev**
- المستودع: [hfip/StremioHub](https://github.com/hfip/StremioHub)

> ⚠️ الموقع لا يستضيف أي ملفات، وهو مشروع مجتمعي غير رسمي وغير مرتبط بفريق Stremio.

## المحتويات

| القسم | الرابط |
| --- | --- |
| التطبيقات والنسخ | `/core-apps` |
| الإضافات | `/addons` |
| الأدوات | `/tools-utilities` |
| Debrid و Usenet | `/debrid-services` |
| الأدلة | `/guides/` |
| المصطلحات | `/glossary` |

النسخة العربية تحت المسار `/ar/`.

## الأدلة

`/guides/` يحتوي أدلة أصلية ثنائية اللغة في أربعة مسارات:

- **ستريمو** — البداية، الإضافات، AIOStreams، Comet، MediaFusion، Torrentio، Debrid، Usenet،
  الميتاداتا، الترجمة، الأدوات، حل المشاكل، الأسئلة الشائعة.
- **الاستضافة الذاتية** — Docker وOracle VPS.
- **الألعاب** — Plutonium.
- **الأنمي** — Aniyomi وإعداده ونسخه المعدّلة.

الأدلة مكتوبة بصياغتنا مع روابط للمصادر الأصلية؛ راجع `/guides/credits`.

## المزايا

- ثنائي اللغة مع تبديل تلقائي للمسار المطابق، واتجاه RTL كامل للعربية.
- بحث محلي، وضع ليلي، `sitemap.xml` و`robots.txt`.
- خطوط مستضافة ذاتيًا (IBM Plex Sans Arabic للعربية، Inter للإنجليزية) — بدون Google Fonts.
- نشر تلقائي على Cloudflare Pages مع كل `git push`.

## التشغيل محليًا

يتطلب Node.js 18 أو أحدث.

```bash
npm install
npm run docs:dev      # http://localhost:5173
npm run docs:build    # يبني الموقع في docs/.vitepress/dist
npm run docs:preview  # معاينة نسخة البناء
```

## النشر

النشر تلقائي عبر GitHub Actions (`.github/workflows/deploy.yml`): كل `git push` على `main` يبني
ويرفع إلى مشروع Cloudflare Pages باسم `stremiohub`. التوكن في **Secrets** المستودع:
`CLOUDFLARE_API_TOKEN` و`CLOUDFLARE_ACCOUNT_ID`.

- نطاق مخصص: من Cloudflare → **Custom domains** → أضف النطاق ثم اضبط سجل CNAME.
- لتفرّع المشروع: غيّر `REPO` و`hostname` في `docs/.vitepress/config.ts` و`docs/public/robots.txt`،
  واسم المشروع في ملف الـ workflow.

## المساهمة

لكل إضافة محتوى:

1. عدّل الصفحة المناسبة في `docs/` **و** نظيرتها العربية في `docs/ar/`.
2. اتبع النمط الموجود: `- ⭐ **[الاسم](https://...)** — وصف قصير.` للفهارس، أو صفحة Markdown
   للأدلة.
3. شغّل `npm run docs:build` ثم افتح Pull Request.

التفاصيل الكاملة (أسلوب الكتابة، ترجمة الصفحات، إضافة صفحة جديدة) في
[CONTRIBUTING.md](CONTRIBUTING.md). ويمكنك فتح Issue من قالب **Submit a resource**.

## بنية المشروع

```
stremiohub/
├─ docs/
│  ├─ .vitepress/
│  │  ├─ config.ts            # الإعدادات، اللغات، التنقل، السايدبار
│  │  └─ theme/
│  │     ├─ index.ts
│  │     ├─ custom.css        # الهوية البصرية + إصلاحات RTL
│  │     └─ fonts.css         # الخطوط المستضافة ذاتيًا
│  ├─ index.md                # الرئيسية (إنجليزي)
│  ├─ core-apps.md, addons.md, ...
│  ├─ guides/                 # الأدلة (EN): stremio / self-hosting / gaming / anime
│  ├─ 404.md
│  ├─ ar/                     # النسخة العربية بالكامل (تشمل ar/guides/)
│  └─ public/
│     ├─ logo.svg
│     ├─ robots.txt
│     └─ fonts/               # IBM Plex Sans Arabic — SIL OFL
├─ .github/
│  ├─ workflows/deploy.yml
│  └─ ISSUE_TEMPLATE/submit-resource.yml
├─ CONTRIBUTING.md
└─ package.json
```

## ملاحظات قانونية

الموقع دليل روابط ومحتوى تعليمي فقط، ولا يستضيف أو يوزّع أي ملفات. بعض الإضافات والنسخ المذكورة قد
تُستخدم للوصول إلى محتوى غير مرخّص، وهذا مسؤولية المستخدم في بلده. لا تُضف روابط مباشرة لملفات
محمية بحقوق النشر، ولا استضف أي ملفات داخل هذا المستودع.

## English summary

A bilingual (EN/AR, RTL) VitePress hub for everything Stremio — apps, forks, add-ons, debrid/Usenet
providers and tools — plus original guides for self-hosting, gaming and anime. Build with
`npm run docs:build`; deploys to Cloudflare Pages automatically on push. The site hosts no files and
is not affiliated with Stremio.

---

الفضل لفريق [Stremio](https://www.stremio.com/) ولمجتمع [FMHY](https://fmhy.net/).

صُنع بواسطة [@Abdulluh_X](https://t.me/Abdulluh_X).

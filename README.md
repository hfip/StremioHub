# StremioHub

دليل مجتمعي شامل لكل ما يتعلق بتطبيق **Stremio**: التطبيقات والنسخ المعدّلة، الإضافات، الأدوات،
خدمات Debrid وUsenet، والأدلة. مبني بـ [VitePress](https://vitepress.dev) وثنائي اللغة
(إنجليزي/عربي) — وهو نفس أسلوب [NuvioHub](https://nuviohub.pages.dev/).

> ⚠️ الموقع لا يستضيف أي ملفات، وهو غير رسمي وغير مرتبط بفريق Stremio.

## المحتويات

| الصفحة | الرابط |
| --- | --- |
| التطبيقات والنسخ | `/core-apps` |
| الإضافات | `/addons` |
| الأدوات | `/tools-utilities` |
| Debrid و Usenet | `/debrid-services` |
| الأدلة | `/guides` |
| المصطلحات | `/glossary` |

النسخة العربية تحت المسار `/ar/`.

## التشغيل محليًا

يتطلب Node.js 18 أو أحدث.

```bash
npm install
npm run docs:dev      # http://localhost:5173
npm run docs:build    # يبني الموقع في docs/.vitepress/dist
npm run docs:preview  # معاينة نسخة البناء
```

## قبل النشر: عدّل رابط المستودع

افتح `docs/.vitepress/config.ts` وغيّر السطر الأول:

```ts
const REPO = 'https://github.com/your-username/StremioHub'
```

هذا الرابط يُستخدم في أيقونة GitHub وفي روابط «عدّل هذه الصفحة».

## النشر على Cloudflare Pages

### الطريقة الأسهل (من لوحة التحكم)

1. أنشئ مستودعًا على GitHub وارفع المشروع:

   ```bash
   git init
   git add .
   git commit -m "StremioHub: initial site"
   git branch -M main
   git remote add origin https://github.com/<username>/StremioHub.git
   git push -u origin main
   ```

2. من [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create**
   → **Pages** → **Connect to Git**، واختر المستودع.

3. استخدم هذه الإعدادات:

   | الإعداد | القيمة |
   | --- | --- |
   | Framework preset | VitePress (أو None) |
   | Build command | `npm run docs:build` |
   | Build output directory | `docs/.vitepress/dist` |
   | Node version | `20` (متغير بيئة `NODE_VERSION=20`) |

4. اضغط **Save and Deploy**. سيصبح الموقع على `https://<project>.pages.dev`، وكل `git push`
   على `main` يعيد النشر تلقائيًا.

### النشر من GitHub Actions (اختياري)

الملف `.github/workflows/deploy.yml` جاهز. أضف في إعدادات المستودع → **Secrets**:

- `CLOUDFLARE_API_TOKEN` — توكن من Cloudflare بصلاحية *Cloudflare Pages: Edit*
- `CLOUDFLARE_ACCOUNT_ID` — موجود في صفحة Workers & Pages

إذا اخترت ربط المستودع من لوحة Cloudflare بدلًا من ذلك، احذف ملف الـ workflow لتجنّب النشر
المزدوج.

### نطاق مخصص

من صفحة المشروع في Cloudflare: **Custom domains** → أضف نطاقك، ثم اضبط سجل CNAME كما يطلب
Cloudflare.

## إضافة مورد جديد

1. افتح الملف المناسب في `docs/` (والنسخة العربية في `docs/ar/`).
2. أضف سطرًا بنفس النمط:

   ```md
   - **[اسم الأداة](https://example.com)** — وصف قصير في سطر واحد.
   ```

   استخدم `⭐` للأدوات المميّزة، وأضف الرابط المصدري على GitHub إن وُجد.
3. شغّل `npm run docs:build` للتأكد من عدم وجود روابط مكسورة، ثم افتح Pull Request.

يمكنك أيضًا فتح Issue من قالب **Submit a resource**.

## بنية المشروع

```
stremiohub/
├─ docs/
│  ├─ .vitepress/
│  │  ├─ config.ts          # الإعدادات، اللغات، القوائم
│  │  └─ theme/custom.css    # ألوان الهوية
│  ├─ index.md               # الرئيسية (إنجليزي)
│  ├─ core-apps.md, addons.md, ...
│  ├─ ar/                    # نفس الصفحات بالعربية
│  └─ public/logo.svg
├─ .github/
│  ├─ workflows/deploy.yml
│  └─ ISSUE_TEMPLATE/submit-resource.yml
└─ package.json
```

## ملاحظات قانونية

الموقع دليل روابط فقط. كثير من الإضافات والنسخ المذكورة قد تُستخدم للوصول إلى محتوى غير مرخّص،
وهذا مسؤولية المستخدم في بلده. لا تُضف روابط مباشرة لملفات محمية بحقوق النشر، ولا استضف أي ملفات
داخل هذا المستودع.

## English summary

A bilingual (EN/AR) VitePress directory of everything Stremio: official apps, community forks,
add-ons, tools, debrid/Usenet providers and guides. Build with `npm run docs:build`, deploy the
`docs/.vitepress/dist` folder to Cloudflare Pages. The site hosts no files and is not affiliated
with Stremio.

---

الفضل لفريق [Stremio](https://www.stremio.com/) ولمجتمع [FMHY](https://fmhy.net/).

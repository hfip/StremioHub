# MediaFusion

MediaFusion سكرابر ثقيل وقابل للتخصيص، ويتميّز بشيئين لا توفّرهما الأخريات: تغطية إقليمية قوية
وكتالوجات مدمجة. كما يدعم Usenet أصلاً.

- المستودع: [mhdzumair/MediaFusion](https://github.com/mhdzumair/MediaFusion)
- النسخة العامة: [mediafusion.elfhosted.com](https://mediafusion.elfhosted.com)

## ما يميّزها

- **محتوى إقليمي** — المصادر الهندية والإسبانية والفرنسية والألمانية وشرق آسيوية أولوية، لا إضافة
  متأخرة.
- **كتالوجات** — تضيف صفوف تصفح في ستريمو، لا مجرد مصادر بث.
- **Usenet** — تعمل مع مزوّدي Usenet والفهارس إلى جانب Debrid.
- **فلترة أبوية** — خيارات يمكن لإعداد عائلي أن يعيش معها.
- **بحث مسبق** — يمكنها تجهيز النتائج قبل فتح العمل لتظهر القائمة فورًا.

## الإعداد

1. افتح صفحة الضبط في نسخة عامة أو نشرك الخاص.
2. أضف حساب **Debrid** (Real-Debrid، AllDebrid، Premiumize، TorBox، Debrid-Link) و/أو إعداد
   **Usenet**.
3. اختر **الكتالوجات** التي تريدها. اجعلها قليلة؛ كل صف طلب إضافي.
4. اضبط **الفلاتر**: الجودة والدقة والحجم واللغة والخيارات الأبوية إن لزم.
5. اختر قوة البحث المسبق. البحث الأكثر يعني قائمة أسرع وحملًا أكبر على المصادر.
6. ثبّت الـ manifest.

## الاستضافة الذاتية

MediaFusion تأتي مع Docker Compose يشمل قاعدة بيانات وعاملًا. باختصار:

```bash
git clone https://github.com/mhdzumair/MediaFusion
cd MediaFusion
cp .env-sample .env
# اضبط POSTGRES_* وSECRET_KEY وHOST_URL وبيانات المزوّد
docker compose up -d
```

اقرأ ملاحظات النشر في المشروع قبل كشفها للإنترنت: ملف compose يتوقع PostgreSQL واسم مضيف HTTPS
عامًا.

## نصائح عملية

- لا تفعّل كل الكتالوجات في أول تشغيل. أضف واحدًا، تحقق أنه يعمل، ثم أضف آخر.
- إن كانت القائمة بطيئة، أوقف البحث المسبق يومًا وقارن.
- مستخدمو المناطق غير الإنجليزية يجب أن يبدأوا بفلاتر اللغة؛ تغيّر النتائج أكثر من أي خيار آخر.
- إن استخدمت Usenet، توقّع ضبط مزوّد وindexer معًا. راجع [Usenet](/ar/guides/stremio/usenet).

## متى تختار MediaFusion

- تشاهد محتوى غير إنجليزي.
- تريد صفوف كتالوج داخل ستريمو.
- تستخدم Usenet بدل Debrid.

في غير ذلك، [AIOStreams](/ar/guides/stremio/aiostreams) أبسط و[Comet](/ar/guides/stremio/comet)
أخف.

## التالي

- [Usenet](/ar/guides/stremio/usenet)
- [الميتاداتا والكتالوجات](/ar/guides/stremio/metadata)
- [حل المشاكل](/ar/guides/stremio/troubleshooting)

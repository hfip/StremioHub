# الاستضافة الذاتية: نظرة عامة

كل ما يتحدث معه ستريمو هو خدمة ويب. النسخ العامة مريحة لكنها مشتركة ومحدودة الطلبات — وإن لصقت
توكن Debrid فيها فهي تحتفظ ببياناتك. تشغيل نسختك يحل المشاكل الثلاث.

## ما يستحق الاستضافة

| الخدمة | لماذا تستضيفها |
| --- | --- |
| [AIOStreams](https://github.com/Viren070/AIOStreams) | مجمّعك الخاص، حدودك، توكنك |
| [Comet](https://github.com/g0ldyy/comet) | سكرابر خفيف مع بروكسي |
| [MediaFusion](https://github.com/mhdzumair/MediaFusion) | كتالوجات إقليمية، Usenet، فلاتر أبوية |
| [StremThru](https://github.com/MunifTanjim/stremthru) | جسر Debrid/Usenet لإضافات أخرى |
| [Prowlarr](https://github.com/Prowlarr/Prowlarr) / [Jackett](https://github.com/Jackett/Jackett) | فهارسك الخاصة |
| Stremio Service | خادم تشغيل بلا واجهة لجهاز منزلي |

لا تحتاجها كلها. مجمّع واحد مع بروكسي عكسي إعداد كامل.

## التكلفة

- VPS صغير: 3–5 يورو شهريًا، أو مجانًا على طبقة Oracle Always Free (راجع
  [Oracle VPS مجاني](/ar/guides/self-hosting/oracle)).
- نطاق: اختياري. نطاق فرعي مجاني من Cloudflare أو DuckDNS يكفي لـ HTTPS.
- وقتك: ليلة أول مرة، ودقائق بعدها.

## ما تحتاج معرفته

- استخدام طرفية أساسي: `cd` و`nano` و`docker compose up -d`.
- ما يفعله البروكسي العكسي (ينهي HTTPS ويحوّل إلى حاويتك).
- أن كشف خدمة يعني تأمينها: جدار ناري وتحديثات وأسرار قوية.

إن بدا هذا مزعجًا فاستخدم نسخة عامة. هذا خيار مشروع؛ الاستضافة الذاتية عن التحكم لا عن كونك
مستخدمًا «حقيقيًا».

## شكل الإعداد

```
الإنترنت → Caddy (HTTPS، منفذ 443) → AIOStreams (حاوية، منفذ 3000)
                                    → Comet (حاوية، منفذ 8080)
```

Caddy يحصل على الشهادات تلقائيًا. AIOStreams وComet لا يكشفان منافذهما للإنترنت مباشرة؛ Caddy
وحده يفعل.

## قائمة أمان

- [ ] مفاتيح SSH فقط، وتسجيل الدخول بكلمة المرور معطّل.
- [ ] الجدار الناري يسمح بـ 22 و80 و443 فقط.
- [ ] لكل خدمة `SECRET_KEY` عشوائي أو ما يعادله.
- [ ] الحاويات تعمل بمستخدم غير root حيث تدعم الصورة.
- [ ] تحديثات تلقائية أو `docker compose pull` شهريًا.
- [ ] نسخ احتياطي لحجوم الإعدادات، لا للوسائط.

## التالي

- [أساسيات Docker](/ar/guides/self-hosting/docker)
- [Oracle VPS مجاني](/ar/guides/self-hosting/oracle)
- [AIOStreams](/ar/guides/stremio/aiostreams)

# أدلة المجتمع

شروحات التركيب، التوثيق الرسمي، والأماكن التي يساعد فيها مستخدمو ستريمو بعضهم فعلاً.

## رسمي

- **[مركز مساعدة Stremio](https://stremio.zendesk.com/)** — الحسابات والأجهزة والتشغيل والفواتير.
- **[دليل إضافات Stremio](https://stremio.github.io/stremio-addon-guide/)** — شرح البروتوكول مع
  درس خطوة بخطوة لاستخدام SDK.
- **[توثيق Add-on SDK](https://github.com/Stremio/stremio-addon-sdk)** — مرجع بناء الإضافات بـ
  Node.js.
- **[مدونة Stremio](https://blog.stremio.com/)** — ملاحظات الإصدارات والإعلانات.
- **[Stremio على GitHub](https://github.com/Stremio)** — النواة والويب وهيكل الكمبيوتر وSDK
  والخدمة.

## المجتمع

- **[r/StremioAddons](https://www.reddit.com/r/StremioAddons/)** — المجتمع الرئيسي. أخبار الإضافات
  وحل المشاكل ومواضيع الإعداد.
- **[r/Stremio](https://www.reddit.com/r/Stremio/)** — نقاش عام عن التطبيق.
- **[stremio-addons.net](https://stremio-addons.net/)** — دليل إضافات منسّق من المجتمع.
- **[awesome-stremio](https://github.com/doingodswork/awesome-stremio)** — إضافات مفتوحة المصدر
  وموارد للمطورين.
- **[توثيق ElfHosted](https://docs.elfhosted.com/stremio-addons/guide/recommended-addons/)** —
  دليل محدّث لأفضل الإضافات حاليًا مع مقايضات صريحة.
- **[أدلة Viren070](https://guides.viren070.me/)** — شروحات مفصّلة لـ AIOStreams وإعداد Debrid
  وAccount Bootstrapper.

## ترتيب القراءة المقترح

1. [ثبّت ستريمو](/ar/core-apps) وأنشئ حسابًا (أو استخدم وضع الضيف).
2. اختر مزوّد Debrid من [Debrid و Usenet](/ar/debrid-services) إذا أردت بثًا موثوقًا.
3. ثبّت إضافة بث **واحدة** من [الإضافات](/ar/addons) — AIOStreams أو Comet.
4. أضف إضافة ميتاداتا (AIOMetadata أو TMDB) ليظهر الكتالوج بشكل صحيح.
5. رتّب الإضافات عبر [Stremio Addon Manager](/ar/tools-utilities).

## أسئلة متكررة

**هل أحتاج VPN؟**
إذا كنت تبث عبر Debrid أو Usenet، لا. إذا استخدمت إضافات P2P بدون Debrid، نعم — عنوان IP الخاص بك
جزء من الشبكة.

**ليش قائمة البث فاضية؟**
في تسع حالات من عشر يكون السبب: الإضافة معطلة عند مزوّدها، أو حساب Debrid غير مضبوط داخل الإضافة،
أو الاشتراك منتهٍ. تحقق من صفحة حالة المزوّد وأعد تثبيت الإضافة ببيانات جديدة.

**ليش الترجمة لا تطابق الصوت؟**
اسم الإصدار مهم. اختر بثًا ينتمي لفريق إصدار يطابق الترجمة، أو استخدم SubMaker لتوليد ترجمة من
الصوت.

**هل يعمل ستريمو على iPhone؟**
نعم، عبر [Stremio Web](https://web.stremio.com/) مثبّتًا كتطبيق PWA. لا يوجد تطبيق iOS رسمي.

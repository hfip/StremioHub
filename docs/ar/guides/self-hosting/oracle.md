# Oracle VPS مجاني

طبقة Always Free من Oracle Cloud تتضمن جهازًا افتراضيًا بمعمارية Arm مفيدًا فعلاً لاستضافة
الإضافات. المشكلة في عملية تسجيل ترفض كثيرًا من البطاقات، وفي سعة تظهر وتختفي.

::: warning الأرقام تتغيّر
حتى أواخر 2026، تغطي Always Free **جهازًا واحدًا `VM.Standard.A1.Flex` بـ 2 OCPU و12 GB RAM**،
مع **200 GB تخزين بلوك إجمالاً** و**10 TB شهريًا خروجًا**. Oracle غيّرت هذه الأرقام سابقًا؛ تحقق من
[صفحة موارد Always Free](https://docs.oracle.com/en-us/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm)
قبل أن تبني شيئًا.
:::

## قبل البدء

- بطاقة ائتمان أو خصم حقيقية. البطاقات المسبقة والافتراضية مرفوضة.
- عنوان مطابق تمامًا لكشف حسابك البنكي.
- صبر: خطأ «Out of capacity» طبيعي في المناطق المزدحمة.

## إنشاء الجهاز

1. سجّل في [oracle.com/cloud/free](https://www.oracle.com/cloud/free/) وافتح لوحة التحكم.
2. **Compute → Instances → Create instance**.
3. الصورة: **Canonical Ubuntu 24.04**.
4. الشكل: **Ampere → VM.Standard.A1.Flex**، **2 OCPU**، **12 GB** ذاكرة.
5. الشبكة: أنشئ VCN جديدة وشبكة فرعية عامة (الافتراضيات جيدة).
6. مفاتيح SSH: ارفع مفتاحك العام. أنشئ واحدًا محليًا إن لزم:

   ```bash
   ssh-keygen -t ed25519 -C "you@example.com"
   ```

7. حجم قرص الإقلاع: 200 GB، والأداء 120 (الأقصى المشمول).
8. أنشئ. إن ظهر **Out of capacity**، جرّب نطاق توفر آخر أو أعد المحاولة لاحقًا.

## أول دخول

```bash
ssh ubuntu@YOUR_PUBLIC_IP
sudo apt update && sudo apt upgrade -y
```

## افتح المنافذ — مرتين

Oracle تحجب الحركة في مكانين، ويجب تعديل الاثنين.

**1. قائمة أمان السحابة**

الجهاز → **Networking** → الشبكة الفرعية → **Security** → قائمة الأمان الافتراضية →
**Add ingress rules**:

- المصدر `0.0.0.0/0`، TCP، منفذ الوجهة `80`
- المصدر `0.0.0.0/0`، TCP، منفذ الوجهة `443`

**2. جدار الجهاز**

صور Ubuntu تأتي بقواعد iptables دائمة:

```bash
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 443 -j ACCEPT
sudo netfilter-persistent save
```

إن استخدمت `ufw` فافتح 80/443 هناك أيضًا.

## ثبّت Docker والبروكسي

اتبع [أساسيات Docker](/ar/guides/self-hosting/docker). ملف compose المثال يعمل كما هو على Arm:
AIOStreams وComet وMediaFusion تنشر صورًا متعددة المعمارية.

## أبقِه مجانيًا

- لا تنشئ جهاز A1 ثانيًا أو حجوم بلوك إضافية؛ المخصص المجاني محدد بدقة.
- لا ترفع الحساب إلى Pay-As-You-Go قبل ضبط تنبيه ميزانية وفهم الحدود.
- راقب الخروج: 10 TB شهريًا رقم كبير لبضع إضافات، لكن بروكسي يبث 4K لعدة أشخاص قد يقترب منه.
- اضبط **تنبيه ميزانية بـ $1** في Billing → Budgets حتى على الطبقة المجانية. لا يكلّف شيئًا
  وينبّهك قبل مفاجأة.

## الصيانة

```bash
sudo apt update && sudo apt upgrade -y      # شهريًا
docker compose pull && docker compose up -d # بعد إصدارات جديدة
df -h                                       # 200 GB تمتلئ بالصور والسجلات
docker system prune -af --volumes           # استعادة مساحة (حذر: يحذف الحجوم غير المستخدمة)
```

فعّل تحديثات الأمان التلقائية:

```bash
sudo apt install unattended-upgrades -y
sudo dpkg-reconfigure --priority=low unattended-upgrades
```

## البدائل

إن رفضتك Oracle أو لم توجد سعة:

- **Hetzner CX22** — بضعة يورو شهريًا بلا ألعاب سعة.
- **Contabo VPS** — رخيص لكن قرصه أبطأ.
- **Raspberry Pi في المنزل** — مجاني بعد العتاد، ويحتاج نفقًا لـ HTTPS.
- **Fly.io / Railway** — منصات PaaS، جيدة لإضافة صغيرة وأغلى مع التوسّع.

## التالي

- [أساسيات Docker](/ar/guides/self-hosting/docker)
- [AIOStreams](/ar/guides/stremio/aiostreams)
- [Comet](/ar/guides/stremio/comet)

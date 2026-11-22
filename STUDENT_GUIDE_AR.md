# دليل شرح المشروع للمعيد — RetenScope

## أول حاجة تقولها

> أنا مسؤول عن الـ Web Frontend، وعملت نسخة بسيطة باستخدام HTML وCSS وJavaScript. كل صفحة موجودة في ملف HTML مستقل. CSS مسؤول عن التصميم، وJavaScript مسؤول عن شوية تفاعلات زي البحث والفلترة والفورم. الـML والـBackend مش مربوطين لسه، والبيانات الفردية اللي ظاهرة أمثلة توضيحية.

## احفظ الفرق بين الملفات

- `index.html`: الصفحة الرئيسية اللي فيها KPIs وChurn Rates.
- `customers.html`: جدول العملاء. فيه `<table>` وأداة بحث `<input>`.
- `customer.html`: تفاصيل عميل تجريبي وCTA لتفسير النتيجة.
- `explain.html`: شرح مفهوم Explainable AI وعندنا Slider صغير.
- `import.html`: اختيار ملف CSV وإظهار اسمه بس، من غير رفعه.
- `campaigns.html`: عرض حملات Demo والحملة اللي حفظتها بنفسك.
- `new-campaign.html`: فورم لإنشاء Draft.
- `outcomes.html`: سجل نتيجة إجراء تجريبي.
- `reports.html`: نتائج الـBaseline والـConfusion Matrix.
- `settings.html`: إيه اللي شغال وإيه اللي هيتعمل في المستقبل.
- `style.css`: ألوان Figma، توزيع الشاشة بـ CSS Grid، الـCards والجداول والـResponsive.
- `script.js`: البحث والفلترة، السلايدر، اختيار CSV، حفظ حملة، إضافة نتيجة.

## فلو واحد تعرضه عمليًا

1. افتح `index.html` واشرح المؤشرات.
2. اضغط Customers، واكتب `Demo 001` في Search.
3. اضغط Details فتروح لـCustomer 360.
4. اضغط Explain prediction ثم حرّك الـSlider.
5. اضغط Continue to retention action.
6. اكتب Campaign Name وPlanned Action، اعمل Check، واضغط Save.
7. افتح Campaigns، هتشوف الحملة الجديدة في Draft.
8. افتح Reports واشرح الـRecall والـPrecision.

## أشهر أسئلة المعيد

**ليه عملت كل صفحة HTML لوحدها؟**
علشان كل صفحة واضحة وسهل تعديلها وفهم بنيتها، والتنقل بيكون بروابط HTML عادية.

**يعني إيه CSS Grid؟**
طريقة لتقسيم الشاشة لأعمدة. هنا استخدمته للـSidebar والمحتوى، وكمان لكروت الـKPIs.

**JavaScript مستخدم في إيه؟**
في التفاعلات فقط، مش في رسم الموقع كله. عندي `addEventListener` للبحث والفورم والسلايدر.

**ليه استخدمت localStorage؟**
عشان أحفظ Campaign Draft بسيط على نفس المتصفح مؤقتًا، من غير Backend.

**هل فيه Model شغال على الموقع؟**
لأ، دي نسخة Frontend Demo. بنتعرض نتائج Baseline من التقرير وبيانات أمثلة علشان نوضح تجربة المستخدم. الربط الحقيقي هيبقى بالـAPI.

**ليه درجات المخاطر بألوان مختلفة؟**
عشان تسهّل قراءة المخاطر بصريًا، وكل لون معاه نص HIGH/MEDIUM/LOW عشان ما نعتمدش على اللون بس.

## مصطلحات مهمة

- **HTML**: هيكل الصفحة وعناصرها.
- **CSS**: شكل الصفحة (الألوان، المسافات، توزيع العناصر).
- **JavaScript**: التفاعل لما المستخدم يضغط أو يكتب.
- **DOM**: عناصر HTML اللي JS يقدر يوصل لها.
- **Event Listener**: كود بيستجيب لحدث زي `click` أو `input`.
- **Responsive Design**: الموقع بيتأقلم مع عرض شاشة الموبايل.
- **localStorage**: تخزين بسيط داخل نفس المتصفح، مش قاعدة بيانات.

## أهم تنبيه

ما تقولش إن الـML أو SHAP أو Security شغالين على GitHub Pages. وما تقولش إن الأرقام 91% تخص عميل حقيقي. دي UI Examples؛ أما إحصائيات الـDataset والـBaseline فهي من التقرير.

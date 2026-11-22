# مذاكرة مناقشة Figma + Frontend — محمد بكر

هذا الدليل خاص بتسليم **الـUI المستقل**؛ مش شرح كل الـBackend والـML الموجودين في مشروع الفريق.

- [التصميم على Figma](https://www.figma.com/design/Qdh3nc38M4mGVXkD1U7iJh)
- [الموقع المنشور](https://miqnaas.github.io/retenscope-churn-dashboard/)
- [الكود المستقل](https://github.com/Miqnaas/retenscope-churn-dashboard)

## 1) افهم المشروع في 30 ثانية

المشروع اسمه RetenScope وبيخدم فريق Retention في شركة اتصالات. الـUser Journey عندنا: **Predict → Explain → Act**. نبدأ بمؤشرات الـChurn، وبعدها نختار عميل، ونشوف بياناته ودرجة خطر *توضيحية*، ونفهم تفسير النموذج بشكل بصري، وبعدها ننظم إجراء متابعة ونسجل النتيجة.

أنا مسؤول في المرحلة دي عن **تصميم الواجهات في Figma** وتنفيذ **Frontend بسيط HTML/CSS/JavaScript**. ربط الـAPI والـML والـDatabase من اختصاص مراحل/أجزاء تانية، ومش متصل في النسخة المستقلة.

## 2) Figma من الصفر

### مصطلحات أساسية

- **Frame:** مساحة/شاشة التصميم؛ زي شاشة Dashboard أو Customers.
- **Layers:** العناصر جوه الشاشة؛ زي Text أو Rectangle أو Frame.
- **Auto Layout:** طريقة لترتيب عناصر جوه Frame أفقيًا أو رأسيًا باستخدام Spacing وPadding.
- **Component:** عنصر ممكن نعيد استخدامه، مثل Risk Badge أو Button. لما نستخدمه تاني نقدر نخلي التصميم متسق.
- **Typography:** نوع وحجم ووزن الخط. استخدمنا Lato للإنجليزي.
- **Color Palette:** ألوان ثابتة للمنتج بدل ما كل صفحة يبقى لها ألوان عشوائية.
- **Prototype:** روابط/انتقالات تفاعلية بين Frames لو تم إعدادها. وجود Frames وحده **مش معناه** إن الـPrototype التفاعلي مكتمل.
- **Responsive:** الواجهة بتتكيف مع عرض الشاشة في الكود، والموبايل له شاشات Figma منفصلة.

### خطوات عملية تعملها بإيدك في Figma

1. افتح صفحة **01 · Web / Dashboard 1440**، واختار Frame اسمه Overview.
2. من لوحة Layers شوف الـSidebar والـHeader والـCards والجداول.
3. اختار KPI Card، وحدد النص والعناصر الملونة. عدّل عنوان تجريبي وارجعه.
4. افتح **00 · Brand System & Components** وشوف Color Palette وRisk Badges وPrimary Action.
5. افتح **02 · Mobile / Flutter 390** ووضح إن تصميم الموبايل مختلف في توزيع المساحات، لكنه مش جزء كود الويب الحالي.
6. لو المعيد سألك عن Prototype، قول إننا بنسلم شاشات Design، وما تدّعيش إن كل الـInteractions في Figma مربوطة لو مش ظاهرة فعلاً.

### قرارات التصميم (ليه؟)

- **Sidebar يسار:** عشان التحرك بين الشاشات واضح وثابت.
- **Dashboard أول صفحة:** Overview first, details on demand؛ المستخدم يفهم الأرقام وبعدين يدخل للتفاصيل.
- **Cards:** كل رقم مهم في مساحة مستقلة؛ أسهل في الفهم.
- **Risk Badge + نص:** High/Medium/Low مكتوبة، مش لون بس.
- **Pine green #103B36:** لون الهوية الأساسي للـNavigation والثقة.
- **Burgundy #7A2032:** حالات الخطر والعناصر اللي محتاجة انتباه.
- **Ivory #F7F2E9:** خلفية هادية للكروت والجداول.
- **Lato:** خط واضح لعرض الـData والـLabels.

## 3) Frontend من الصفر

### الفرق بين HTML وCSS وJS

- **HTML = الهيكل:** عنوان، جدول، زر، صورة، رابط.
- **CSS = الشكل:** لون، خلفية، مسافة، حجم، أعمدة.
- **JavaScript = التفاعل:** المستخدم كتب في Search، يفلتر الصفوف.

مثال HTML حقيقي:

    <a href="customers.html">Customers</a>
    <h1>Retention overview</h1>
    <p>Understand the dataset before reviewing customers.</p>

- a = رابط؛ href = عنوان الصفحة.
- h1 = عنوان رئيسي.
- p = فقرة.

مثال CSS من فكرة المشروع:

    .card {
      background: white;
      padding: 22px;
      border-radius: 16px;
    }

- background = لون الخلفية.
- padding = المسافة داخل الكارت.
- border-radius = تدوير الحواف.

مثال JS بسيط — الفكرة مش لازم تحفظه حرفيًا:

    const input = document.getElementById('searchCustomers');
    input.addEventListener('input', function () {
      console.log(input.value);
    });

- getElementById = هات عنصر HTML بالـid.
- addEventListener = شغل وظيفة لما يحصل حدث.
- input = الحدث اللي بيحصل لما المستخدم يكتب.
- value = القيمة المكتوبة.

### هيكل الريبو

- **index.html:** Dashboard، KPIs، جداول.
- **customers.html:** Table وSearch وRisk Filter.
- **customer.html:** مثال لبيانات عميل.
- **explain.html:** Example Score وThreshold Slider.
- **import.html:** اختيار CSV وعرض الاسم والحجم فقط.
- **campaigns.html:** كروت الحملات.
- **new-campaign.html:** فورم لإنشاء Draft.
- **outcomes.html:** نموذج لإضافة Outcome Row مؤقت.
- **reports.html:** Confusion Matrix وMetrics.
- **settings.html:** حدود النسخة الحالية والـArchitecture المستقبلية.
- **style.css:** كل الألوان والـGrid والـResponsive.
- **script.js:** البحث، الفلترة، السلايدر، CSV filename، حفظ مسودة الحملة، إضافة Outcome.

### 3 مفاهيم لازم تتقنها

1. **class vs id:** الـclass نستخدمها مع عناصر كثيرة للتنسيق؛ الـid يكون معرف عنصر معين، وJavaScript يستخدمه للوصول إليه.
2. **CSS Grid:** قسمنا .app-layout إلى Sidebar عرضها 250px ومحتوى ياخد المساحة الباقية؛ .kpi-grid تعرض أربع كروت على الشاشات الواسعة.
3. **localStorage:** تخزين على نفس المتصفح، مش قاعدة بيانات. بيحفظ Campaign Draft تجريبي واحد. الـOutcomes الجديدة مؤقتة حتى Refresh.

## 4) اربط Figma بالكود

| في Figma | في HTML | في CSS |
| --- | --- | --- |
| Sidebar | aside + nav + a | .sidebar + .nav-link |
| عنوان الصفحة | header + h1 | .page-header |
| KPI Card | article class=card kpi | .card + .kpi-grid |
| Customer Table | table + thead + tbody | .table-wrapper + table |
| Risk Label | span class=badge high | .badge.high |
| Primary Button | a/button class=button primary | .button.primary |
| Two-column panel | section class=two-columns | .two-columns |
| Small screens | نفس HTML | @media |

## 5) Demo في 5 دقائق

1. **Overview (40 ثانية):** اشرح 7,043 عميل و26.5% Churn من التقرير.
2. **Customers (45 ثانية):** اكتب Demo 001 وجرب Risk Filter ثم Details.
3. **Customer 360 (45 ثانية):** اشرح بيانات العميل، ووضح إنها Demo.
4. **Explain (45 ثانية):** حرك الـThreshold من 50 إلى 95. الـ91% Demo Score هيتغير من Flagged إلى Not Flagged لما الحد يبقى أكبر من 91.
5. **New Campaign (55 ثانية):** املأ الاسم والإجراء، فعل الـCheckbox، واضغط Save. افتح Campaigns وشوف الـDraft.
6. **Reports (40 ثانية):** اشرح الـRecall 0.786 والـPrecision 0.507 كـBaseline نتائج بحث، مش نتيجة Live Model.
7. **Code (30 ثانية):** افتح index.html وورّي h1 وarticle وa، ثم style.css وscript.js.

## 6) اسئلة متوقعة مع إجابات بسيطة

**1. Figma وظيفته إيه؟** تصميم شكل وتدفق الشاشات قبل البرمجة.

**2. ليه استخدمت Frames؟** كل Frame بيمثل شاشة أو صفحة مستقلة.

**3. الفرق بين Frame وComponent؟** Frame حاوية؛ Component عنصر قابل لإعادة الاستخدام.

**4. يعني إيه Design System؟** قواعد ثابتة للألوان والخطوط والأزرار والمسافات.

**5. ليه نفس Sidebar في كل صفحة؟** Consistency — المستخدم يتعلم مكان التنقل مرة واحدة.

**6. ليه Dashboard أولًا؟** عشان يعرض نظرة عامة قبل التفاصيل.

**7. معنى UX؟** تجربة المستخدم ومسار تنفيذ المهمة بسهولة.

**8. معنى UI؟** العناصر المرئية اللي المستخدم بيتعامل معاها.

**9. ليه HTML منفصل لكل صفحة؟** أسهل في القراءة والتنقل والتعديل على مستوى المشروع الحالي.

**10. HTML عامل إيه؟** بيوصف هيكل الصفحة ومحتواها.

**11. CSS عامل إيه؟** بيحدد شكل وتوزيع العناصر.

**12. JS عامل إيه؟** بيتعامل مع أحداث المستخدم مثل الكتابة والضغط.

**13. الفرق بين class وid؟** class ممكن تتكرر؛ id معرف فريد للعنصر.

**14. يعني إيه addEventListener؟** ربط وظيفة بحدث زي input أو submit.

**15. يعني إيه event.preventDefault؟** منع السلوك الافتراضي للفورم، مثل إعادة تحميل الصفحة عند Submit.

**16. يعني إيه Responsive Design؟** تغيير توزيع العناصر حسب عرض الشاشة بواسطة CSS Media Queries.

**17. البيانات بتتخزن فين؟** Campaign Draft في localStorage، وباقي بيانات العملاء أمثلة داخل HTML، ومفيش Database متصلة.

**18. هل الـML شغال هنا؟** لأ؛ النسخة دي UI مستقلة، ونتائج الأبحاث العامة معروضة كمرجع.

**19. هل SHAP هنا حقيقي؟** لأ؛ Bars توضيحية فقط، وSHAP الفعلي جزء من تكامل ML لاحقًا.

**20. هل GitHub Pages بتشغل ASP.NET؟** لأ؛ هي هنا بتستضيف ملفات HTML وCSS وJS الثابتة فقط.

## 7) التدريب اللي لازم تعمله بنفسك

- في index.html غيّر عنوان Retention overview إلى My Churn Dashboard، احفظ وشوف النتيجة، وبعدها رجّع العنوان.
- في style.css غيّر قيمة --green وشوف تأثيرها على Sidebar والأزرار، وبعدها رجعها.
- في customers.html أضف صف Demo جديد لجدول العملاء وتأكد إن Search بيلاقيه.
- في script.js أضف console.log داخل Event Listener وجرب الكتابة.
- في Figma غيّر نص KPI Card واحدة وارجعه، وورّي المعيد مكان اللون والخط.

**خلاصة صادقة للمناقشة:** أنا عملت Figma Design وStatic Frontend مستقل. الصفحات HTML واضحة، CSS للتنسيق، JS للتفاعلات البسيطة. النتائج الفردية Mock، والـBackend/ML مش متصلين في التسليم ده.

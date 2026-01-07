import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@soar-design/soar-react-components"

export function AccordionDemoDocsRTL() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>معلومات المنتج</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            يجمع منتجنا الرائد بين التكنولوجيا المتطورة والتصميم الأنيق. مصنوع من
            مواد عالية الجودة، يقدم أداءً وموثوقية لا مثيل لهما.
          </p>
          <p>
            تشمل الميزات الرئيسية قدرات معالجة متقدمة، وواجهة مستخدم بديهية مصممة
            لكل من المبتدئين والخبراء.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>تفاصيل الشحن</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            نقدم شحنًا عالميًا من خلال شركاء النقل الموثوقين. يستغرق التسليم
            القياسي من 3 إلى 5 أيام عمل، بينما يضمن الشحن السريع التسليم خلال
            يوم إلى يومين عمل.
          </p>
          <p>
            جميع الطلبات معبأة بعناية ومؤمنة بالكامل. تتبع شحنتك في الوقت الفعلي
            من خلال بوابة التتبع المخصصة لدينا.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>سياسة الإرجاع</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            ندعم منتجاتنا بسياسة إرجاع شاملة لمدة 30 يومًا. إذا لم تكن راضيًا
            تمامًا، ما عليك سوى إرجاع العنصر في حالته الأصلية.
          </p>
          <p>
            تتضمن عملية الإرجاع الخالية من المتاعب شحن إرجاع مجاني واسترداد كامل
            للمبلغ تتم معالجته خلال 48 ساعة من استلام العنصر المرتجع.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

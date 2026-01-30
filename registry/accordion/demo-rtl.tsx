import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"

export function AccordionDemo() {
  return (
    <DirectionProvider dir="rtl">
      <Accordion
        type="single"
        collapsible
        defaultValue="shipping"
        className="w-full max-w-lg"
      >
        <AccordionItem value="shipping">
          <AccordionTrigger>ما هي خيارات الشحن المتاحة لديكم؟</AccordionTrigger>
          <AccordionContent>
            نقدم شحنًا عاديًا (5-7 أيام)، سريعًا (2-3 أيام)، وشحنًا ليليًا.
            شحن مجاني على الطلبات الدولية.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="returns">
          <AccordionTrigger>ما هي سياسة الإرجاع لديكم؟</AccordionTrigger>
          <AccordionContent>
            يتم قبول الإرجاع خلال 30 يومًا. يجب أن تكون العناصر غير مستخدمة
            وفي التغليف الأصلي. تتم معالجة المبالغ المستردة خلال 5-7 أيام عمل.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="support">
          <AccordionTrigger>كيف يمكنني التواصل مع خدمة العملاء؟</AccordionTrigger>
          <AccordionContent>
            تواصل معنا عبر البريد الإلكتروني أو الدردشة المباشرة أو الهاتف.
            نرد خلال 24 ساعة في أيام العمل.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </DirectionProvider>
  )
}

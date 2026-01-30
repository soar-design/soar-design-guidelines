import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"

const items = [
  {
    value: "notifications",
    trigger: "إعدادات الإشعارات",
    content:
      "إدارة طريقة استلامك للإشعارات. يمكنك تفعيل تنبيهات البريد الإلكتروني للتحديثات أو الإشعارات الفورية للأجهزة المحمولة.",
  },
  {
    value: "privacy",
    trigger: "الخصوصية والأمان",
    content:
      "التحكم في إعدادات الخصوصية وتفضيلات الأمان. تفعيل المصادقة الثنائية، إدارة الأجهزة المتصلة، مراجعة الجلسات النشطة، وتكوين تفضيلات مشاركة البيانات. يمكنك أيضًا تنزيل بياناتك أو حذف حسابك.",
  },
  {
    value: "billing",
    trigger: "الفوترة والاشتراك",
    content:
      "عرض خطتك الحالية، سجل المدفوعات، والفواتير القادمة. تحديث طريقة الدفع، تغيير مستوى الاشتراك، أو إلغاء الاشتراك.",
  },
]

export function AccordionMultiple() {
  return (
    <DirectionProvider dir="rtl">
      <Accordion
        type="multiple"
        className="w-full max-w-lg"
        defaultValue={["notifications"]}
      >
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </DirectionProvider>
  )
}

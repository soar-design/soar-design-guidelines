import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"

const items = [
  {
    value: "billing",
    trigger: "كيف تعمل الفوترة؟",
    content:
      "نقدم خطط اشتراك شهرية وسنوية. يتم تحصيل الفوترة في بداية كل دورة، ويمكنك الإلغاء في أي وقت. تتضمن جميع الخطط نسخًا احتياطيًا تلقائيًا ودعمًا على مدار الساعة طوال أيام الأسبوع وأعضاء فريق غير محدودين.",
  },
  {
    value: "security",
    trigger: "هل بياناتي آمنة؟",
    content:
      "نعم. نستخدم التشفير من طرف إلى طرف، والامتثال لمعايير SOC 2 النوع الثاني، ومراجعات أمنية منتظمة من طرف ثالث. يتم تشفير جميع البيانات عند الراحة وأثناء النقل باستخدام بروتوكولات معيارية في الصناعة.",
  },
  {
    value: "integration",
    trigger: "ما هي التكاملات التي تدعمونها؟",
    content:
      "نتكامل مع أكثر من 500 أداة شائعة بما في ذلك Slack و Zapier و Salesforce و HubSpot والمزيد. يمكنك أيضًا بناء تكاملات مخصصة باستخدام REST API و webhooks الخاصة بنا.",
  },
]

export function AccordionBorders() {
  return (
    <DirectionProvider dir="rtl">
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-lg rounded-lg border"
        defaultValue="billing"
      >
        {items.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="border-b px-4 last:border-b-0"
          >
            <AccordionTrigger>{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </DirectionProvider>
  )
}

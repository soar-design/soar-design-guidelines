import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@soar-design/soar-react-components"

const items = [
  {
    value: "plans",
    trigger: "ما هي خطط الاشتراك التي تقدمونها؟",
    content:
      "نقدم ثلاث مستويات اشتراك: المبتدئ (9 دولارات/شهر)، المحترف (29 دولارًا/شهر)، والمؤسسات (99 دولارًا/شهر). تتضمن كل خطة حدود تخزين متزايدة ووصول API ودعم ذو أولوية وميزات تعاون الفريق.",
  },
  {
    value: "billing",
    trigger: "كيف تعمل الفوترة؟",
    content:
      "تحدث الفوترة تلقائيًا في بداية كل دورة فوترة. نقبل جميع بطاقات الائتمان الرئيسية و PayPal والتحويلات ACH لعملاء المؤسسات. ستصلك فاتورة عبر البريد الإلكتروني بعد كل دفعة.",
  },
  {
    value: "cancel",
    trigger: "كيف يمكنني إلغاء اشتراكي؟",
    content:
      "يمكنك إلغاء اشتراكك في أي وقت من إعدادات حسابك. لا توجد رسوم إلغاء أو عقوبات. سيستمر وصولك حتى نهاية فترة الفوترة الحالية.",
  },
]

export function AccordionCard() {
  return (
    <DirectionProvider dir="rtl">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>الاشتراك والفوترة</CardTitle>
          <CardDescription>
            أسئلة شائعة حول حسابك والخطط والمدفوعات والإلغاءات.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible defaultValue="plans">
            {items.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </DirectionProvider>
  )
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"

export function AccordionDisabled() {
  return (
    <DirectionProvider dir="rtl">
      <Accordion type="single" collapsible className="w-full max-w-lg">
        <AccordionItem value="item-1">
          <AccordionTrigger>هل يمكنني الوصول إلى سجل حسابي؟</AccordionTrigger>
          <AccordionContent>
            نعم، يمكنك عرض سجل حسابك الكامل بما في ذلك جميع المعاملات وتغييرات
            الخطة وتذاكر الدعم في قسم سجل الحساب في لوحة التحكم الخاصة بك.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" disabled>
          <AccordionTrigger>معلومات الميزات المميزة</AccordionTrigger>
          <AccordionContent>
            يحتوي هذا القسم على معلومات حول الميزات المميزة. قم بترقية خطتك
            للوصول إلى هذا المحتوى.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>كيف يمكنني تحديث عنوان بريدي الإلكتروني؟</AccordionTrigger>
          <AccordionContent>
            يمكنك تحديث عنوان بريدك الإلكتروني في إعدادات حسابك. ستصلك رسالة
            تحقق على عنوانك الجديد لتأكيد التغيير.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </DirectionProvider>
  )
}

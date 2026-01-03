"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@soar-design/soar-react-components";
import { useDirection } from "@/hooks/use-direction";

export default function AccordionFAQ() {
  const { ref, isRTL } = useDirection();

  return (
    <div ref={ref} className="w-full">
      <Card>
        <CardHeader>
          <CardTitle>
            {isRTL ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </CardTitle>
          <CardDescription>
            {isRTL
              ? "احصل على إجابات للأسئلة الشائعة حول منتجاتنا وخدماتنا."
              : "Find answers to common questions about our product and services."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="shipping">
              <AccordionTrigger>
                {isRTL ? "ما هي خيارات الشحن المتاحة؟" : "What are your shipping options?"}
              </AccordionTrigger>
              <AccordionContent className="space-y-3">
                <p>
                  {isRTL
                    ? "نقدم خيارات شحن متعددة لتلبية احتياجاتك:"
                    : "We offer multiple shipping options to meet your needs:"}
                </p>
                <ul className="list-disc ps-5 space-y-1 text-sm">
                  <li>
                    <strong>
                      {isRTL ? "الشحن القياسي (3-5 أيام عمل)" : "Standard Shipping (3-5 business days)"}
                    </strong>{" "}
                    - {isRTL ? "مجاني للطلبات التي تزيد عن $50" : "Free on orders over $50"}
                  </li>
                  <li>
                    <strong>
                      {isRTL ? "الشحن السريع (1-2 يوم عمل)" : "Express Shipping (1-2 business days)"}
                    </strong>{" "}
                    - $15.99
                  </li>
                  <li>
                    <strong>{isRTL ? "الشحن الليلي" : "Overnight Shipping"}</strong> - $29.99
                  </li>
                </ul>
                <p className="text-sm">
                  {isRTL
                    ? "جميع الطلبات مؤمنة بالكامل وقابلة للتتبع. سوف تتلقى رقم التتبع بمجرد شحن طلبك."
                    : "All orders are fully insured and trackable. You'll receive a tracking number once your order ships."}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="returns">
              <AccordionTrigger>
                {isRTL ? "ما هي سياسة الإرجاع الخاصة بكم؟" : "What is your return policy?"}
              </AccordionTrigger>
              <AccordionContent className="space-y-3">
                <p>
                  {isRTL
                    ? "نريد أن تكون راضيًا تمامًا عن عملية الشراء. تتضمن سياسة الإرجاع لدينا:"
                    : "We want you to be completely satisfied with your purchase. Our return policy includes:"}
                </p>
                <ul className="list-disc ps-5 space-y-1 text-sm">
                  <li>{isRTL ? "ضمان استرداد الأموال لمدة 30 يومًا على جميع المنتجات" : "30-day money-back guarantee on all products"}</li>
                  <li>{isRTL ? "شحن مجاني للإرجاع للسلع المعيبة" : "Free return shipping for defective items"}</li>
                  <li>{isRTL ? "عملية إرجاع سهلة عبر الإنترنت - لا حاجة للمكالمات الهاتفية" : "Easy online returns process - no phone calls required"}</li>
                  <li>{isRTL ? "معالجة المبالغ المستردة خلال 3-5 أيام عمل" : "Refunds processed within 3-5 business days"}</li>
                </ul>
                <p className="text-sm">
                  {isRTL
                    ? "يجب إرجاع المنتجات في حالتها الأصلية مع جميع العبوات والملحقات."
                    : "Items must be returned in original condition with all packaging and accessories."}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="warranty">
              <AccordionTrigger>
                {isRTL ? "هل تأتي منتجاتكم مع ضمان؟" : "Do your products come with a warranty?"}
              </AccordionTrigger>
              <AccordionContent className="space-y-3">
                <p>
                  {isRTL
                    ? "نعم! تتضمن جميع منتجاتنا تغطية ضمان شاملة:"
                    : "Yes! All our products include comprehensive warranty coverage:"}
                </p>
                <ul className="list-disc ps-5 space-y-1 text-sm">
                  <li>{isRTL ? "ضمان الشركة المصنعة لمدة سنة واحدة على جميع المنتجات" : "1-year manufacturer's warranty on all products"}</li>
                  <li>{isRTL ? "ضمان ممتد لمدة 3 سنوات متاح للشراء" : "Extended 3-year warranty available for purchase"}</li>
                  <li>{isRTL ? "التغطية تشمل عيوب التصنيع وأعطال الأجهزة" : "Coverage includes manufacturing defects and hardware failures"}</li>
                  <li>{isRTL ? "إصلاحات أو استبدال مجاني حسب تقديرنا" : "Free repairs or replacement at our discretion"}</li>
                </ul>
                <p className="text-sm">
                  {isRTL
                    ? "يمكن تقديم مطالبات الضمان عبر الإنترنت من خلال لوحة تحكم حسابك."
                    : "Warranty claims can be submitted online through your account dashboard."}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="payment">
              <AccordionTrigger>
                {isRTL ? "ما هي طرق الدفع التي تقبلونها؟" : "What payment methods do you accept?"}
              </AccordionTrigger>
              <AccordionContent className="space-y-3">
                <p>
                  {isRTL
                    ? "نقبل جميع طرق الدفع الرئيسية لراحتك:"
                    : "We accept all major payment methods for your convenience:"}
                </p>
                <ul className="list-disc ps-5 space-y-1 text-sm">
                  <li>
                    {isRTL
                      ? "بطاقات الائتمان: Visa و Mastercard و American Express و Discover"
                      : "Credit cards: Visa, Mastercard, American Express, Discover"}
                  </li>
                  <li>
                    {isRTL
                      ? "بطاقات الخصم التي تحمل شعار Visa أو Mastercard"
                      : "Debit cards with Visa or Mastercard logo"}
                  </li>
                  <li>{isRTL ? "PayPal و PayPal Credit" : "PayPal and PayPal Credit"}</li>
                  <li>{isRTL ? "Apple Pay و Google Pay" : "Apple Pay and Google Pay"}</li>
                  <li>{isRTL ? "Affirm لخيارات الشراء الآن والدفع لاحقًا" : "Affirm for buy now, pay later options"}</li>
                </ul>
                <p className="text-sm">
                  {isRTL
                    ? "جميع المعاملات مؤمنة بتشفير SSL بسعة 256 بت."
                    : "All transactions are secured with 256-bit SSL encryption."}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="international">
              <AccordionTrigger>
                {isRTL ? "هل تشحنون دوليًا؟" : "Do you ship internationally?"}
              </AccordionTrigger>
              <AccordionContent className="space-y-3">
                <p>
                  {isRTL
                    ? "نعم، نشحن إلى أكثر من 100 دولة حول العالم. يتضمن الشحن الدولي:"
                    : "Yes, we ship to over 100 countries worldwide. International shipping includes:"}
                </p>
                <ul className="list-disc ps-5 space-y-1 text-sm">
                  <li>
                    {isRTL
                      ? "أوقات التسليم تختلف حسب الوجهة (عادة 7-14 يوم عمل)"
                      : "Delivery times vary by destination (typically 7-14 business days)"}
                  </li>
                  <li>
                    {isRTL
                      ? "الرسوم الجمركية والضرائب هي مسؤولية المشتري"
                      : "Customs fees and duties are the responsibility of the buyer"}
                  </li>
                  <li>{isRTL ? "جميع الطرود تشمل التتبع والتأمين" : "All packages include tracking and insurance"}</li>
                  <li>{isRTL ? "دعم متعدد العملات للعملاء الدوليين" : "Multi-currency support for international customers"}</li>
                </ul>
                <p className="text-sm">
                  {isRTL
                    ? "يتم احتساب تكاليف الشحن عند الدفع بناءً على موقعك."
                    : "Shipping costs are calculated at checkout based on your location."}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

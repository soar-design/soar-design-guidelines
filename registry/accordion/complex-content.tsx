"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Badge,
  Separator,
} from "@soar-design/soar-react-components";
import { CheckCircle2, AlertCircle, Info } from "lucide-react";
import { useDirection } from "@/hooks/use-direction";

export default function AccordionComplexContent() {
  const { ref, isRTL } = useDirection();

  return (
    <div ref={ref} className="w-full">
      <Accordion type="single" collapsible variant="outline" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center gap-2">
              {isRTL ? "ميزات المنتج" : "Product Features"}
              <Badge variant="primary" size="xs">
                {isRTL ? "جديد" : "New"}
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">
                    {isRTL ? "معالجة متقدمة" : "Advanced Processing"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {isRTL
                      ? "خوارزميات متطورة لأداء سريع للغاية."
                      : "State-of-the-art algorithms for lightning-fast performance."}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">
                    {isRTL ? "التكامل السحابي" : "Cloud Integration"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {isRTL
                      ? "مزامنة سلسة عبر جميع أجهزتك مع نسخ احتياطي تلقائي."
                      : "Seamless sync across all your devices with automatic backup."}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1">
                    {isRTL ? "أمان المؤسسات" : "Enterprise Security"}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {isRTL
                      ? "تشفير على مستوى البنوك والامتثال لمعايير الصناعة."
                      : "Bank-level encryption and compliance with industry standards."}
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>
            {isRTL ? "خطط التسعير" : "Pricing Plans"}
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 space-y-2">
                <h4 className="font-semibold">{isRTL ? "أساسي" : "Basic"}</h4>
                <p className="text-2xl font-bold">$9</p>
                <p className="text-xs text-muted-foreground">
                  {isRTL ? "كل شهر" : "per month"}
                </p>
                <Separator />
                <ul className="text-sm space-y-1">
                  <li>• {isRTL ? "10 مشاريع" : "10 Projects"}</li>
                  <li>• {isRTL ? "5 جيجابايت تخزين" : "5GB Storage"}</li>
                  <li>• {isRTL ? "دعم البريد الإلكتروني" : "Email Support"}</li>
                </ul>
                <Button size="sm" variant="outline" className="w-full">
                  {isRTL ? "اختر الخطة" : "Choose Plan"}
                </Button>
              </div>
              <div className="border rounded-lg p-4 space-y-2 border-primary">
                <h4 className="font-semibold">{isRTL ? "محترف" : "Pro"}</h4>
                <p className="text-2xl font-bold">$29</p>
                <p className="text-xs text-muted-foreground">
                  {isRTL ? "كل شهر" : "per month"}
                </p>
                <Separator />
                <ul className="text-sm space-y-1">
                  <li>• {isRTL ? "مشاريع غير محدودة" : "Unlimited Projects"}</li>
                  <li>• {isRTL ? "100 جيجابايت تخزين" : "100GB Storage"}</li>
                  <li>• {isRTL ? "دعم ذو أولوية" : "Priority Support"}</li>
                </ul>
                <Button size="sm" className="w-full">
                  {isRTL ? "اختر الخطة" : "Choose Plan"}
                </Button>
              </div>
              <div className="border rounded-lg p-4 space-y-2">
                <h4 className="font-semibold">{isRTL ? "مؤسسات" : "Enterprise"}</h4>
                <p className="text-2xl font-bold">$99</p>
                <p className="text-xs text-muted-foreground">
                  {isRTL ? "كل شهر" : "per month"}
                </p>
                <Separator />
                <ul className="text-sm space-y-1">
                  <li>• {isRTL ? "كل شيء في المحترف" : "Everything in Pro"}</li>
                  <li>• {isRTL ? "تخزين مخصص" : "Custom Storage"}</li>
                  <li>• {isRTL ? "مدير مخصص" : "Dedicated Manager"}</li>
                </ul>
                <Button size="sm" variant="outline" className="w-full">
                  {isRTL ? "اتصل بالمبيعات" : "Contact Sales"}
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            {isRTL ? "إشعار مهم" : "Important Notice"}
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              <div className="flex gap-3 p-3 bg-primary/10 rounded-lg">
                <Info className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    {isRTL ? "صيانة الخدمة" : "Service Maintenance"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isRTL
                      ? "صيانة مجدولة في 15 يناير 2024 من الساعة 2:00 صباحًا إلى 4:00 صباحًا بتوقيت UTC. ستكون الخدمات غير متوفرة مؤقتًا خلال هذا الوقت."
                      : "Scheduled maintenance on January 15th, 2024 from 2:00 AM to 4:00 AM UTC. Services will be temporarily unavailable during this time."}
                  </p>
                </div>
              </div>
              <div className="flex gap-3 p-3 bg-warning/10 rounded-lg">
                <AlertCircle className="h-5 w-5 text-warning mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <p className="text-sm font-medium">
                    {isRTL ? "إجراء مطلوب" : "Action Required"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isRTL
                      ? "يرجى تحديث معلومات الدفع الخاصة بك بحلول نهاية الشهر لتجنب انقطاع الخدمة."
                      : "Please update your payment information by the end of the month to avoid service interruption."}
                  </p>
                  <Button size="sm" variant="outline" className="mt-2">
                    {isRTL ? "تحديث معلومات الدفع" : "Update Payment Info"}
                  </Button>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@soar-design/soar-react-components";
import { useDirection } from "@/hooks/use-direction";

export default function AccordionVariants() {
  const { ref, isRTL } = useDirection();

  return (
    <div ref={ref} className="w-full flex flex-col gap-8">
      <div>
        <p className="text-sm text-muted-foreground mb-2">
          {isRTL ? "الافتراضي" : "Default"}
        </p>
        <Accordion type="single" collapsible variant="default" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {isRTL ? "النمط الافتراضي" : "Default variant"}
            </AccordionTrigger>
            <AccordionContent>
              {isRTL ? "تنسيق نظيف وبسيط." : "Clean, minimal styling."}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">
          {isRTL ? "المحدد" : "Outline"}
        </p>
        <Accordion type="single" collapsible variant="outline" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {isRTL ? "النمط المحدد" : "Outline variant"}
            </AccordionTrigger>
            <AccordionContent>
              {isRTL ? "مع تنسيق الحدود." : "With border styling."}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">
          {isRTL ? "الصلب" : "Solid"}
        </p>
        <Accordion type="single" collapsible variant="solid" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {isRTL ? "النمط الصلب" : "Solid variant"}
            </AccordionTrigger>
            <AccordionContent>
              {isRTL ? "مع تعبئة الخلفية." : "With background fill."}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

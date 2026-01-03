"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@soar-design/soar-react-components";
import { useDirection } from "@/hooks/use-direction";

export default function AccordionIndicators() {
  const { ref, isRTL } = useDirection();

  return (
    <div ref={ref} className="w-full flex flex-col gap-8">
      <div>
        <p className="text-sm text-muted-foreground mb-2">
          {isRTL ? "مؤشر السهم (افتراضي)" : "Arrow Indicator (Default)"}
        </p>
        <Accordion type="single" collapsible indicator="arrow" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {isRTL ? "مع مؤشر السهم" : "With arrow indicator"}
            </AccordionTrigger>
            <AccordionContent>
              {isRTL 
                ? "يدور السهم عند فتح الأكورديون."
                : "The arrow rotates when the accordion opens."}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">
          {isRTL ? "مؤشر الزائد" : "Plus Indicator"}
        </p>
        <Accordion type="single" collapsible indicator="plus" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {isRTL ? "مع مؤشر الزائد" : "With plus indicator"}
            </AccordionTrigger>
            <AccordionContent>
              {isRTL
                ? "يتغير الزائد إلى ناقص عند فتح الأكورديون."
                : "The plus changes to a minus when the accordion opens."}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@soar-design/soar-react-components";
import { useDirection } from "@/hooks/use-direction";

export default function AccordionDisabledRoot() {
  const { ref, isRTL } = useDirection();

  return (
    <div ref={ref} className="w-full flex flex-col gap-8">
      <div>
        <p className="text-sm text-muted-foreground mb-2">
          {isRTL ? "الأكورديون بالكامل معطل" : "Entire accordion disabled"}
        </p>
        <Accordion type="single" collapsible disabled className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {isRTL ? "القسم الأول" : "Section 1"}
            </AccordionTrigger>
            <AccordionContent>
              {isRTL ? "المحتوى 1" : "Content 1"}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              {isRTL ? "القسم الثاني" : "Section 2"}
            </AccordionTrigger>
            <AccordionContent>
              {isRTL ? "المحتوى 2" : "Content 2"}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              {isRTL ? "القسم الثالث" : "Section 3"}
            </AccordionTrigger>
            <AccordionContent>
              {isRTL ? "المحتوى 3" : "Content 3"}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">
          {isRTL ? "عناصر فردية معطلة (للمقارنة)" : "Individual items disabled (for comparison)"}
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {isRTL ? "عنصر نشط" : "Active item"}
            </AccordionTrigger>
            <AccordionContent>
              {isRTL ? "يمكن تبديل هذا العنصر." : "This item can be toggled."}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" disabled>
            <AccordionTrigger>
              {isRTL ? "عنصر معطل" : "Disabled item"}
            </AccordionTrigger>
            <AccordionContent>
              {isRTL ? "هذا العنصر المحدد معطل." : "This specific item is disabled."}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              {isRTL ? "عنصر نشط آخر" : "Another active item"}
            </AccordionTrigger>
            <AccordionContent>
              {isRTL ? "يمكن تبديل هذا العنصر أيضًا." : "This item can also be toggled."}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

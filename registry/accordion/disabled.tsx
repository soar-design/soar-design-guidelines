"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@soar-design/soar-react-components";
import { useDirection } from "@/hooks/use-direction";

export default function AccordionDisabled() {
  const { ref, isRTL } = useDirection();

  return (
    <div ref={ref} className="w-full">
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
            {isRTL
              ? "لا يمكن الوصول إلى هذا المحتوى لأن العنصر معطل."
              : "This content cannot be accessed because the item is disabled."}
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
  );
}

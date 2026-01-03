"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@soar-design/soar-react-components";
import { useDirection } from "@/hooks/use-direction";

export default function AccordionSingle() {
  const { ref, isRTL } = useDirection();

  return (
    <div ref={ref} className="w-full">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            {isRTL ? "القسم الأول" : "Section 1"}
          </AccordionTrigger>
          <AccordionContent>
            {isRTL 
              ? 'يمكن فتح قسم واحد فقط في كل مرة باستخدام type="single".'
              : 'Only one section can be open at a time with type="single".'}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            {isRTL ? "القسم الثاني" : "Section 2"}
          </AccordionTrigger>
          <AccordionContent>
            {isRTL 
              ? "انقر على زر آخر لإغلاق هذا القسم تلقائيًا."
              : "Click another trigger to close this one automatically."}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

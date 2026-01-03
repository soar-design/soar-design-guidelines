"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@soar-design/soar-react-components";
import { useDirection } from "@/hooks/use-direction";

export default function AccordionMultiple() {
  const { ref, isRTL } = useDirection();

  return (
    <div ref={ref} className="w-full">
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            {isRTL ? "القسم الأول" : "Section 1"}
          </AccordionTrigger>
          <AccordionContent>
            {isRTL
              ? 'يمكن فتح عدة أقسام في نفس الوقت باستخدام type="multiple".'
              : 'Multiple sections can be open at the same time with type="multiple".'}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            {isRTL ? "القسم الثاني" : "Section 2"}
          </AccordionTrigger>
          <AccordionContent>
            {isRTL 
              ? "جرب فتح القسمين في وقت واحد."
              : "Try opening both sections simultaneously."}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            {isRTL ? "القسم الثالث" : "Section 3"}
          </AccordionTrigger>
          <AccordionContent>
            {isRTL 
              ? "يمكن فتح الأقسام الثلاثة في نفس الوقت!"
              : "All three can be open at once!"}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

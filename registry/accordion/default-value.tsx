"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@soar-design/soar-react-components";
import { useDirection } from "@/hooks/use-direction";

export default function AccordionDefaultValue() {
  const { ref, isRTL } = useDirection();

  return (
    <div ref={ref} className="w-full flex flex-col gap-8">
      <div>
        <p className="text-sm text-muted-foreground mb-2">
          {isRTL 
            ? "الوضع الفردي مع item-2 مفتوح افتراضيًا"
            : "Single mode with item-2 open by default"}
        </p>
        <Accordion type="single" collapsible defaultValue="item-2" className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {isRTL ? "القسم الأول" : "Section 1"}
            </AccordionTrigger>
            <AccordionContent>
              {isRTL ? "يبدأ هذا القسم مغلقًا." : "This section starts closed."}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              {isRTL ? "القسم الثاني" : "Section 2"}
            </AccordionTrigger>
            <AccordionContent>
              {isRTL
                ? 'هذا القسم مفتوح افتراضيًا باستخدام defaultValue="item-2".'
                : 'This section is open by default using defaultValue="item-2".'}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              {isRTL ? "القسم الثالث" : "Section 3"}
            </AccordionTrigger>
            <AccordionContent>
              {isRTL ? "يبدأ هذا القسم مغلقًا." : "This section starts closed."}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">
          {isRTL
            ? "الوضع المتعدد مع عدة عناصر مفتوحة افتراضيًا"
            : "Multiple mode with multiple items open by default"}
        </p>
        <Accordion type="multiple" defaultValue={["item-1", "item-3"]} className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {isRTL ? "القسم الأول" : "Section 1"}
            </AccordionTrigger>
            <AccordionContent>
              {isRTL
                ? "هذا القسم مفتوح افتراضيًا في الوضع المتعدد."
                : "This section is open by default in multiple mode."}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              {isRTL ? "القسم الثاني" : "Section 2"}
            </AccordionTrigger>
            <AccordionContent>
              {isRTL ? "يبدأ هذا القسم مغلقًا." : "This section starts closed."}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              {isRTL ? "القسم الثالث" : "Section 3"}
            </AccordionTrigger>
            <AccordionContent>
              {isRTL
                ? 'هذا القسم مفتوح أيضًا افتراضيًا باستخدام defaultValue={["item-1", "item-3"]}.'
                : 'This section is also open by default using defaultValue={["item-1", "item-3"]}.'}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@soar-design/soar-react-components";
import { useDirection } from "@/hooks/use-direction";

export default function AccordionControlled() {
  const { ref, isRTL } = useDirection();
  const [value, setValue] = useState<string>("");

  return (
    <div ref={ref} className="w-full space-y-4">
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setValue("item-1")}
        >
          {isRTL ? "افتح القسم 1" : "Open Section 1"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setValue("item-2")}
        >
          {isRTL ? "افتح القسم 2" : "Open Section 2"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setValue("item-3")}
        >
          {isRTL ? "افتح القسم 3" : "Open Section 3"}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setValue("")}
        >
          {isRTL ? "أغلق الكل" : "Close All"}
        </Button>
      </div>
      <Accordion type="single" value={value} onValueChange={setValue} className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            {isRTL ? "القسم الأول" : "Section 1"}
          </AccordionTrigger>
          <AccordionContent>
            {isRTL
              ? "يتم التحكم في هذا الأكورديون بواسطة الحالة الخارجية. استخدم الأزرار أعلاه للتحكم في القسم المفتوح."
              : "This accordion is controlled by external state. Use the buttons above to control which section is open."}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            {isRTL ? "القسم الثاني" : "Section 2"}
          </AccordionTrigger>
          <AccordionContent>
            {isRTL
              ? "يتم إدارة القيمة الحالية بواسطة حالة React ويمكن التحكم فيها برمجيًا."
              : "The current value is managed by React state and can be controlled programmatically."}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            {isRTL ? "القسم الثالث" : "Section 3"}
          </AccordionTrigger>
          <AccordionContent>
            {isRTL
              ? "هذا مفيد للمعالجات أو الجولات أو عندما تحتاج إلى مزامنة حالة الأكورديون مع عناصر واجهة المستخدم الأخرى."
              : "This is useful for wizards, tours, or when you need to sync accordion state with other UI elements."}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <p className="text-sm text-muted-foreground">
        {isRTL ? "القيمة الحالية: " : "Current value: "}
        <code className="bg-muted px-1 py-0.5 rounded">{value || (isRTL ? "لا شيء" : "none")}</code>
      </p>
    </div>
  );
}

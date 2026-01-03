"use client";

import * as React from "react";
import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@soar-design/soar-react-components";

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-[500px] text-foreground text-sm rounded-lg border border-border p-4">
      ReUI هي مجموعة مفتوحة المصدر من مكونات واجهة المستخدم والتأثيرات المتحركة المبنية باستخدام React و TypeScript و Tailwind CSS و Motion
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleContent>
          تعمل بشكل جميل مع shadcn/ui. وفر الوقت وابني مشروعك القادم بشكل أسرع.
        </CollapsibleContent>

        <div className="text-end">
          <CollapsibleTrigger asChild>
            <Button underlined="dashed" mode="link" size="sm">
              {isOpen ? "عرض أقل" : "عرض المزيد"}
            </Button>
          </CollapsibleTrigger>
        </div>
      </Collapsible>
    </div>
  );
}


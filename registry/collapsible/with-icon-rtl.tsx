"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@soar-design/soar-react-components";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function CollapsibleWithIcon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px]">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-2 font-semibold hover:bg-muted/80">
        <span>الأسئلة الشائعة</span>
        <ChevronRight className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 space-y-2">
        <div className="rounded-md border border-border p-4">
          <h5 className="font-semibold">ما هو المكون القابل للطي؟</h5>
          <p className="mt-2 text-sm text-muted-foreground">
            المكون القابل للطي هو مكون يمكن توسيعه أو طيه لإظهار أو إخفاء المحتوى.
          </p>
        </div>
        <div className="rounded-md border border-border p-4">
          <h5 className="font-semibold">كيف أستخدمه؟</h5>
          <p className="mt-2 text-sm text-muted-foreground">
            ببساطة، قم بلف المحتوى الخاص بك في مكون Collapsible وأضف زر التفعيل.
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}


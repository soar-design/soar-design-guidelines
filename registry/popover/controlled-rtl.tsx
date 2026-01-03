"use client";

import { Button } from "@soar-design/soar-react-components";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@soar-design/soar-react-components";
import { useState } from "react";

export default function PopoverControlled() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-4" dir="rtl">
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpen(!open)}
        >
          {open ? "إغلاق" : "فتح"} النافذة المنبثقة
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpen(false)}
          disabled={!open}
        >
          إغلاق قسري
        </Button>
      </div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline">تبديل</Button>
        </PopoverTrigger>
        <PopoverContent dir="rtl">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">نافذة منبثقة خاضعة للتحكم</h4>
            <p className="text-sm text-muted-foreground">
              يتم التحكم في حالة الفتح لهذه النافذة المنبثقة خارجيًا.
            </p>
            <Button
              size="sm"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              إغلاق من الداخل
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}


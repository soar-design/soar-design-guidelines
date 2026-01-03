"use client";

import { useState } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Button,
  Switch,
} from "@soar-design/soar-react-components";

export default function HoverCardControlled() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4" dir="rtl">
      <div className="flex items-center gap-4">
        <Switch checked={open} onCheckedChange={setOpen} />
        <span className="text-sm">
          {open ? "بطاقة التمرير مفتوحة" : "بطاقة التمرير مغلقة"}
        </span>
      </div>

      <HoverCard open={open} onOpenChange={setOpen}>
        <HoverCardTrigger asChild>
          <Button variant="outline">بطاقة تمرير خاضعة للتحكم</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80" dir="rtl">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">حالة خاضعة للتحكم</h4>
            <p className="text-sm text-muted-foreground">
              يتم التحكم في حالة الفتح لبطاقة التمرير هذه بواسطة المفتاح أعلاه.
              يمكنك تبديله أو إيقافه، أو التمرير لتفعيله.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}


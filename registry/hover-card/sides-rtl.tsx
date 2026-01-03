"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Button,
} from "@soar-design/soar-react-components";

export default function HoverCardSides() {
  return (
    <div className="flex flex-wrap gap-4" dir="rtl">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">أعلى</Button>
        </HoverCardTrigger>
        <HoverCardContent side="top" className="w-64" dir="rtl">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">الموضع العلوي</h4>
            <p className="text-sm text-muted-foreground">
              تظهر بطاقة التمرير هذه فوق المحفز.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">يمين</Button>
        </HoverCardTrigger>
        <HoverCardContent side="right" className="w-64" dir="rtl">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">الموضع الأيمن</h4>
            <p className="text-sm text-muted-foreground">
              تظهر بطاقة التمرير هذه على يمين المحفز.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">أسفل</Button>
        </HoverCardTrigger>
        <HoverCardContent side="bottom" className="w-64" dir="rtl">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">الموضع السفلي</h4>
            <p className="text-sm text-muted-foreground">
              تظهر بطاقة التمرير هذه أسفل المحفز.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">يسار</Button>
        </HoverCardTrigger>
        <HoverCardContent side="left" className="w-64" dir="rtl">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">الموضع الأيسر</h4>
            <p className="text-sm text-muted-foreground">
              تظهر بطاقة التمرير هذه على يسار المحفز.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}


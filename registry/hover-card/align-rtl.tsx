"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Button,
} from "@soar-design/soar-react-components";

export default function HoverCardAlign() {
  return (
    <div className="flex flex-col gap-8" dir="rtl">
      <div className="space-y-2">
        <p className="text-sm font-medium">محاذاة البداية</p>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">مرر الماوس</Button>
          </HoverCardTrigger>
          <HoverCardContent align="start" className="w-80" dir="rtl">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">محاذاة البداية</h4>
              <p className="text-sm text-muted-foreground">
                يتم محاذاة المحتوى مع بداية عنصر المحفز.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">محاذاة الوسط</p>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">مرر الماوس</Button>
          </HoverCardTrigger>
          <HoverCardContent align="center" className="w-80" dir="rtl">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">محاذاة الوسط</h4>
              <p className="text-sm text-muted-foreground">
                يتم توسيط المحتوى بالنسبة لعنصر المحفز.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium">محاذاة النهاية</p>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline">مرر الماوس</Button>
          </HoverCardTrigger>
          <HoverCardContent align="end" className="w-80" dir="rtl">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">محاذاة النهاية</h4>
              <p className="text-sm text-muted-foreground">
                يتم محاذاة المحتوى مع نهاية عنصر المحفز.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}


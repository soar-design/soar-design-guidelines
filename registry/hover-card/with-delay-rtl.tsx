"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Button,
} from "@soar-design/soar-react-components";

export default function HoverCardWithDelay() {
  return (
    <div className="flex flex-wrap gap-4" dir="rtl">
      <HoverCard openDelay={100}>
        <HoverCardTrigger asChild>
          <Button variant="outline">سريع (100 مللي ثانية)</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-64" dir="rtl">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">استجابة سريعة</h4>
            <p className="text-sm text-muted-foreground">
              يفتح بعد تأخير 100 مللي ثانية.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard openDelay={500}>
        <HoverCardTrigger asChild>
          <Button variant="outline">عادي (500 مللي ثانية)</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-64" dir="rtl">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">استجابة عادية</h4>
            <p className="text-sm text-muted-foreground">
              يفتح بعد تأخير 500 مللي ثانية.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <HoverCard openDelay={1000}>
        <HoverCardTrigger asChild>
          <Button variant="outline">بطيء (1000 مللي ثانية)</Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-64" dir="rtl">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">استجابة متأخرة</h4>
            <p className="text-sm text-muted-foreground">
              يفتح بعد تأخير 1000 مللي ثانية.
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}


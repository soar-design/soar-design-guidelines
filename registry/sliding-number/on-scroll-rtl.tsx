"use client";

import { SlidingNumber } from "@soar-design/soar-react-components";

export default function SlidingNumberOnScroll() {
  return (
    <div className="space-y-4" dir="rtl">
      <p className="text-sm text-muted-foreground">
        قم بالتمرير لأسفل لرؤية تشغيل الرسوم المتحركة
      </p>
      <div className="h-[300px] flex items-end">
        <div className="w-full rounded-lg border p-8 text-center space-y-2">
          <div className="text-sm text-muted-foreground">المستخدمون النشطون</div>
          <div className="text-5xl font-bold">
            <SlidingNumber from={0} to={4567} duration={2} startOnView once />
          </div>
        </div>
      </div>
    </div>
  );
}


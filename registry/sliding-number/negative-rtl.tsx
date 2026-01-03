"use client";

import { SlidingNumber } from "@soar-design/soar-react-components";

export default function SlidingNumberNegative() {
  return (
    <div className="space-y-6" dir="rtl">
      <div className="rounded-lg border p-6 space-y-2">
        <div className="text-sm text-muted-foreground">درجة الحرارة</div>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold">
            <SlidingNumber from={0} to={-15} duration={2} />
          </span>
          <span className="text-2xl text-muted-foreground">°C</span>
        </div>
      </div>
      <div className="rounded-lg border p-6 space-y-2">
        <div className="text-sm text-muted-foreground">رصيد الحساب</div>
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-bold">
            <SlidingNumber from={0} to={-250} duration={2} />
          </span>
          <span className="text-2xl text-muted-foreground">$</span>
        </div>
      </div>
    </div>
  );
}


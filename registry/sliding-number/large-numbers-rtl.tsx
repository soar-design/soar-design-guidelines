"use client";

import { SlidingNumber } from "@soar-design/soar-react-components";

export default function SlidingNumberLargeNumbers() {
  return (
    <div className="space-y-6" dir="rtl">
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">المشاهدات</div>
        <div className="text-4xl font-bold">
          <SlidingNumber from={0} to={1250000} duration={2.5} />
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">التحميلات</div>
        <div className="text-4xl font-bold">
          <SlidingNumber from={0} to={87543} duration={2} />
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">المستخدمون</div>
        <div className="text-4xl font-bold">
          <SlidingNumber from={0} to={12890} duration={2} />
        </div>
      </div>
    </div>
  );
}


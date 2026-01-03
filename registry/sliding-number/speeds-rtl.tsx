"use client";

import { SlidingNumber } from "@soar-design/soar-react-components";

export default function SlidingNumberSpeeds() {
  return (
    <div className="space-y-4" dir="rtl">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground w-20">سريع (1 ثانية):</span>
        <span className="text-3xl font-bold">
          <SlidingNumber from={0} to={999} duration={1} />
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground w-20">عادي (2 ثانية):</span>
        <span className="text-3xl font-bold">
          <SlidingNumber from={0} to={999} duration={2} />
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground w-20">بطيء (4 ثواني):</span>
        <span className="text-3xl font-bold">
          <SlidingNumber from={0} to={999} duration={4} />
        </span>
      </div>
    </div>
  );
}


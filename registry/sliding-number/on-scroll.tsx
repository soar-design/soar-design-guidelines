"use client";

import { SlidingNumber } from "@soar-design/soar-react-components";

export default function SlidingNumberOnScroll() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Scroll down to see the animation trigger
      </p>
      <div className="h-[300px] flex items-end">
        <div className="w-full rounded-lg border p-8 text-center space-y-2">
          <div className="text-sm text-muted-foreground">Active Users</div>
          <div className="text-5xl font-bold">
            <SlidingNumber from={0} to={4567} duration={2} startOnView once />
          </div>
        </div>
      </div>
    </div>
  );
}


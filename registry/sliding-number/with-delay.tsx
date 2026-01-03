"use client";

import { SlidingNumber } from "@soar-design/soar-react-components";

export default function SlidingNumberWithDelay() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">No delay:</span>
        <span className="text-3xl font-bold">
          <SlidingNumber from={0} to={500} duration={2} delay={0} />
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">0.5s delay:</span>
        <span className="text-3xl font-bold">
          <SlidingNumber from={0} to={500} duration={2} delay={0.5} />
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">1s delay:</span>
        <span className="text-3xl font-bold">
          <SlidingNumber from={0} to={500} duration={2} delay={1} />
        </span>
      </div>
    </div>
  );
}


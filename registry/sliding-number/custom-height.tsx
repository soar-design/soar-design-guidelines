"use client";

import { SlidingNumber } from "@soar-design/soar-react-components";

export default function SlidingNumberCustomHeight() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">Small (30px)</div>
        <div className="text-3xl font-bold">
          <SlidingNumber from={0} to={567} duration={2} digitHeight={30} />
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">Default (40px)</div>
        <div className="text-4xl font-bold">
          <SlidingNumber from={0} to={567} duration={2} digitHeight={40} />
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-sm text-muted-foreground">Large (60px)</div>
        <div className="text-6xl font-bold">
          <SlidingNumber from={0} to={567} duration={2} digitHeight={60} />
        </div>
      </div>
    </div>
  );
}


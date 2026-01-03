"use client";

import { Slider, SliderThumb } from "@soar-design/soar-react-components";

export default function SliderDisabled() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <span className="text-sm font-medium">Enabled</span>
        <Slider defaultValue={[50]} max={100} step={1}>
          <SliderThumb />
        </Slider>
      </div>

      <div className="space-y-4">
        <span className="text-sm font-medium text-muted-foreground">Disabled</span>
        <Slider defaultValue={[50]} max={100} step={1} disabled>
          <SliderThumb />
        </Slider>
      </div>
    </div>
  );
}


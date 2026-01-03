"use client";

import { Slider, SliderThumb } from "@soar-design/soar-react-components";
import { useState } from "react";

export default function SliderSteps() {
  const [value, setValue] = useState([50]);

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Step: 1</span>
          <span className="text-sm text-muted-foreground">{value[0]}</span>
        </div>
        <Slider value={value} onValueChange={setValue} max={100} step={1}>
          <SliderThumb />
        </Slider>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Step: 10</span>
          <span className="text-sm text-muted-foreground">{value[0]}</span>
        </div>
        <Slider defaultValue={[50]} max={100} step={10}>
          <SliderThumb />
        </Slider>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Step: 25</span>
          <span className="text-sm text-muted-foreground">{value[0]}</span>
        </div>
        <Slider defaultValue={[50]} max={100} step={25}>
          <SliderThumb />
        </Slider>
      </div>
    </div>
  );
}


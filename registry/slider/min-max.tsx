"use client";

import { Slider, SliderThumb } from "@soar-design/soar-react-components";
import { useState } from "react";

export default function SliderMinMax() {
  const [value, setValue] = useState([5]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Rating (1-10)</span>
        <span className="text-sm text-muted-foreground">{value[0]}</span>
      </div>
      <Slider value={value} onValueChange={setValue} min={1} max={10} step={1}>
        <SliderThumb />
      </Slider>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>1</span>
        <span>10</span>
      </div>
    </div>
  );
}


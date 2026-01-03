"use client";

import { Slider, SliderThumb } from "@soar-design/soar-react-components";
import { useState } from "react";

export default function SliderWithLabels() {
  const [value, setValue] = useState([2]);

  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="space-y-4" dir="rtl">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">مقاس التي شيرت</span>
        <span className="text-sm font-semibold">{sizes[value[0]]}</span>
      </div>
      <Slider value={value} onValueChange={setValue} min={0} max={4} step={1}>
        <SliderThumb />
      </Slider>
      <div className="flex justify-between text-xs text-muted-foreground">
        {sizes.map((size) => (
          <span key={size}>{size}</span>
        ))}
      </div>
    </div>
  );
}


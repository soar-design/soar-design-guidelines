"use client";

import { Slider, SliderThumb } from "@soar-design/soar-react-components";
import { useState } from "react";

export default function SliderWithValue() {
  const [value, setValue] = useState([50]);

  return (
    <div className="space-y-4" dir="rtl">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">الحجم</span>
        <span className="text-sm text-muted-foreground">{value[0]}%</span>
      </div>
      <Slider value={value} onValueChange={setValue} max={100} step={1}>
        <SliderThumb />
      </Slider>
    </div>
  );
}


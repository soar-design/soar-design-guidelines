"use client";

import { Slider, SliderThumb } from "@soar-design/soar-react-components";
import { Volume2 } from "lucide-react";

export default function SliderVertical() {
  return (
    <div className="flex h-[200px] items-center justify-center gap-8" dir="rtl">
      <div className="flex flex-col items-center gap-4">
        <Volume2 className="h-4 w-4" />
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          orientation="vertical"
          className="h-full"
        >
          <SliderThumb />
        </Slider>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Volume2 className="h-4 w-4" />
        <Slider
          defaultValue={[75]}
          max={100}
          step={1}
          orientation="vertical"
          className="h-full"
        >
          <SliderThumb />
        </Slider>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Volume2 className="h-4 w-4" />
        <Slider
          defaultValue={[30]}
          max={100}
          step={1}
          orientation="vertical"
          className="h-full"
        >
          <SliderThumb />
        </Slider>
      </div>
    </div>
  );
}


"use client"

import * as React from "react"
import {
  DirectionProvider,
  Label,
  Slider,
} from "@soar-design/soar-react-components"

export function SliderControlled() {
  const [value, setValue] = React.useState([0.3, 0.7])

  return (
    <DirectionProvider dir="rtl">
      <div className="mx-auto grid w-full max-w-xs gap-3">
        <div className="flex items-center justify-between gap-2">
          <Label htmlFor="slider-demo-temperature">درجة الحرارة</Label>
          <span className="text-muted-foreground text-sm">
            {value.join(", ")}
          </span>
        </div>
        <Slider
          id="slider-demo-temperature"
          value={value}
          onValueChange={setValue}
          min={0}
          max={1}
          step={0.1}
        />
      </div>
    </DirectionProvider>
  )
}

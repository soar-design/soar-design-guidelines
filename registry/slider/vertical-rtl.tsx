"use client"

import {
  DirectionProvider,
  Slider,
} from "@soar-design/soar-react-components"

export function SliderVertical() {
  return (
    <DirectionProvider dir="rtl">
      <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-6">
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          orientation="vertical"
          className="h-40"
        />
        <Slider
          defaultValue={[25]}
          max={100}
          step={1}
          orientation="vertical"
          className="h-40"
        />
      </div>
    </DirectionProvider>
  )
}

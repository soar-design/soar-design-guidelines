"use client"

import {
  DirectionProvider,
  Slider,
} from "@soar-design/soar-react-components"

export function SliderRange() {
  return (
    <DirectionProvider dir="rtl">
      <Slider
        defaultValue={[25, 50]}
        max={100}
        step={5}
        className="mx-auto w-full max-w-xs"
      />
    </DirectionProvider>
  )
}

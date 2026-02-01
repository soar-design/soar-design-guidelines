"use client"

import {
  DirectionProvider,
  Slider,
} from "@soar-design/soar-react-components"

export function SliderMultiple() {
  return (
    <DirectionProvider dir="rtl">
      <Slider
        defaultValue={[10, 20, 70]}
        max={100}
        step={10}
        className="mx-auto w-full max-w-xs"
      />
    </DirectionProvider>
  )
}

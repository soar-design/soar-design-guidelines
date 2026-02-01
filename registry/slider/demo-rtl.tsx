"use client"

import {
  DirectionProvider,
  Slider,
} from "@soar-design/soar-react-components"

export function SliderDemo() {
  return (
    <DirectionProvider dir="rtl">
      <Slider
        defaultValue={[75]}
        max={100}
        step={1}
        className="mx-auto w-full max-w-xs"
      />
    </DirectionProvider>
  )
}

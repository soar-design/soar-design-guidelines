"use client"

import {
  DirectionProvider,
  Slider,
} from "@soar-design/soar-react-components"

export function SliderDisabled() {
  return (
    <DirectionProvider dir="rtl">
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        disabled
        className="mx-auto w-full max-w-xs"
      />
    </DirectionProvider>
  )
}

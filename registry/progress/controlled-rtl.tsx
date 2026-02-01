"use client"

import * as React from "react"
import {
  DirectionProvider,
  Progress,
  Slider,
} from "@soar-design/soar-react-components"

export function ProgressControlled() {
  const [value, setValue] = React.useState([50])

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex w-full max-w-sm flex-col gap-4">
          <Progress value={value[0]} />
          <Slider
            value={value}
            onValueChange={setValue}
            min={0}
            max={100}
            step={1}
          />
        </div>
      </div>
    </DirectionProvider>
  )
}

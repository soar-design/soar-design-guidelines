"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldTitle,
  Slider,
} from "@soar-design/soar-react-components"

export function FieldSlider() {
  const [value, setValue] = React.useState([200, 800])

  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-xs">
          <FieldTitle>Price Range</FieldTitle>
          <FieldDescription>
            Set your budget range ($
            <span className="font-medium tabular-nums">{value[0]}</span> -{" "}
            <span className="font-medium tabular-nums">{value[1]}</span>).
          </FieldDescription>
          <Slider
            value={value}
            onValueChange={(value) => setValue(value as [number, number])}
            max={1000}
            min={0}
            step={10}
            className="mt-2 w-full"
            aria-label="Price Range"
          />
        </Field>
      </div>
    </DirectionProvider>
  )
}

"use client"

import { useState } from "react"

import {
  Field,
  FieldDescription,
  FieldTitle,
} from "@soar-design/soar-react-components"
import { Slider } from "@soar-design/soar-react-components"

export function FieldSliderDocsRTL() {
  const [value, setValue] = useState([200, 800])
  return (
    <div className="w-full max-w-md">
      <Field>
        <FieldTitle>نطاق السعر</FieldTitle>
        <FieldDescription>
          حدد نطاق ميزانيتك ($
          <span className="font-medium tabular-nums">{value[0]}</span> -{" "}
          <span className="font-medium tabular-nums">{value[1]}</span>).
        </FieldDescription>
        <Slider
          value={value}
          onValueChange={setValue}
          max={1000}
          min={0}
          step={10}
          className="mt-2 w-full"
          aria-label="نطاق السعر"
        />
      </Field>
    </div>
  )
}

"use client"

import * as React from "react"
import {
  Checkbox,
  DirectionProvider,
  Label,
} from "@soar-design/soar-react-components"

export function LabelDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex gap-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">قبول الشروط والأحكام</Label>
        </div>
      </div>
    </DirectionProvider>
  )
}

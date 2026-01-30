"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldLabel,
  Switch,
} from "@soar-design/soar-react-components"

export function FieldSwitch() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field orientation="horizontal" className="w-fit">
          <FieldLabel htmlFor="2fa">المصادقة متعددة العوامل</FieldLabel>
          <Switch id="2fa" />
        </Field>
      </div>
    </DirectionProvider>
  )
}

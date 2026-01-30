"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldLabel,
  Input,
} from "@soar-design/soar-react-components"

export function InputFile() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-xs">
          <FieldLabel htmlFor="picture">صورة</FieldLabel>
          <Input id="picture" type="file" />
          <FieldDescription>اختر صورة للرفع.</FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

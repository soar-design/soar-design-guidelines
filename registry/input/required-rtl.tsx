"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldLabel,
  Input,
} from "@soar-design/soar-react-components"

export function InputRequired() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-xs">
          <FieldLabel htmlFor="input-required">
            حقل مطلوب <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="input-required"
            placeholder="هذا الحقل مطلوب"
            required
          />
          <FieldDescription>يجب ملء هذا الحقل.</FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

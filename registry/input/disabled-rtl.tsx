"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldLabel,
  Input,
} from "@soar-design/soar-react-components"

export function InputDisabled() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-md" data-disabled>
          <FieldLabel htmlFor="input-demo-disabled">البريد الإلكتروني</FieldLabel>
          <Input
            id="input-demo-disabled"
            type="email"
            placeholder="البريد الإلكتروني"
            disabled
          />
          <FieldDescription>هذا الحقل معطل حاليًا.</FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

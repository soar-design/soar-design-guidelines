"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldLabel,
  Input,
} from "@soar-design/soar-react-components"

export function InputDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-md">
          <FieldLabel htmlFor="input-demo-api-key">مفتاح API</FieldLabel>
          <Input
            id="input-demo-api-key"
            type="password"
            placeholder="sk-..."
          />
          <FieldDescription>
            يتم تشفير مفتاح API الخاص بك وتخزينه بأمان.
          </FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

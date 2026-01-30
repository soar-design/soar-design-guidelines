"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@soar-design/soar-react-components"
import { EyeOffIcon } from "lucide-react"

export function InputGroupInlineEnd() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="max-w-sm">
          <FieldLabel htmlFor="inline-end-input">إدخال</FieldLabel>
          <InputGroup>
            <InputGroupInput
              id="inline-end-input"
              type="password"
              placeholder="أدخل كلمة المرور"
            />
            <InputGroupAddon align="inline-end">
              <EyeOffIcon />
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>تم وضع الأيقونة في النهاية.</FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

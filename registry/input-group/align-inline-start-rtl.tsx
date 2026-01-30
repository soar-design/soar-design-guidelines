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
import { SearchIcon } from "lucide-react"

export function InputGroupInlineStart() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="max-w-sm">
          <FieldLabel htmlFor="inline-start-input">إدخال</FieldLabel>
          <InputGroup>
            <InputGroupInput id="inline-start-input" placeholder="بحث..." />
            <InputGroupAddon align="inline-start">
              <SearchIcon className="text-muted-foreground" />
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>تم وضع الأيقونة في البداية.</FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

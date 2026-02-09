"use client"

import * as React from "react"
import {
  Badge,
  DirectionProvider,
  Field,
  FieldLabel,
  Input,
} from "@soar-design/soar-react-components"

export function InputBadge() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-md">
          <FieldLabel htmlFor="input-badge">
            رابط الويب هوك{" "}
            <Badge variant="secondary" className="ml-auto">
              تجريبي
            </Badge>
          </FieldLabel>
          <Input
            id="input-badge"
            type="url"
            placeholder="https://api.example.com/webhook"
          />
        </Field>
      </div>
    </DirectionProvider>
  )
}

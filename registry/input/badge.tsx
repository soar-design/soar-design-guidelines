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
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-xs">
          <FieldLabel htmlFor="input-badge">
            Webhook URL{" "}
            <Badge variant="secondary" className="ml-auto">
              Beta
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

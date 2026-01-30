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
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-xs">
          <FieldLabel htmlFor="input-required">
            Required Field <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="input-required"
            placeholder="This field is required"
            required
          />
          <FieldDescription>This field must be filled out.</FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

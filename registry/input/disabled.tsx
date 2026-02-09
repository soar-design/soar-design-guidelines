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
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-md" data-disabled>
          <FieldLabel htmlFor="input-demo-disabled">Email</FieldLabel>
          <Input
            id="input-demo-disabled"
            type="email"
            placeholder="Email"
            disabled
          />
          <FieldDescription>This field is currently disabled.</FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

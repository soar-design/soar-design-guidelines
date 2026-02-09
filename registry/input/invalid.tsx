"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldLabel,
  Input,
} from "@soar-design/soar-react-components"

export function InputInvalid() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-md" data-invalid>
          <FieldLabel htmlFor="input-invalid">Invalid Input</FieldLabel>
          <Input id="input-invalid" placeholder="Error" aria-invalid />
          <FieldDescription>
            This field contains validation errors.
          </FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldLabel,
  Input,
} from "@soar-design/soar-react-components"

export function InputField() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-md">
          <FieldLabel htmlFor="input-field-username">Username</FieldLabel>
          <Input
            id="input-field-username"
            type="text"
            placeholder="Enter your username"
          />
          <FieldDescription>
            Choose a unique username for your account.
          </FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

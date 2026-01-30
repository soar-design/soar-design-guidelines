"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldGroup,
  FieldLabel,
  Input,
} from "@soar-design/soar-react-components"

export function InputGrid() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <FieldGroup className="grid max-w-sm grid-cols-2">
          <Field>
            <FieldLabel htmlFor="first-name">First Name</FieldLabel>
            <Input id="first-name" placeholder="Jordan" />
          </Field>
          <Field>
            <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
            <Input id="last-name" placeholder="Lee" />
          </Field>
        </FieldGroup>
      </div>
    </DirectionProvider>
  )
}

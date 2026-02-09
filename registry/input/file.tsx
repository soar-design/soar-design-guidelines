"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldLabel,
  Input,
} from "@soar-design/soar-react-components"

export function InputFile() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-md">
          <FieldLabel htmlFor="picture">Picture</FieldLabel>
          <Input id="picture" type="file" />
          <FieldDescription>Select a picture to upload.</FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

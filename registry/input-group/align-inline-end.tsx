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
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="max-w-sm">
          <FieldLabel htmlFor="inline-end-input">Input</FieldLabel>
          <InputGroup>
            <InputGroupInput
              id="inline-end-input"
              type="password"
              placeholder="Enter password"
            />
            <InputGroupAddon align="inline-end">
              <EyeOffIcon />
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>Icon positioned at the end.</FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

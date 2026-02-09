"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@soar-design/soar-react-components"
import { InfoIcon } from "lucide-react"

export function InputInputGroup() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-md">
          <FieldLabel htmlFor="input-group-url">Website URL</FieldLabel>
          <InputGroup>
            <InputGroupInput id="input-group-url" placeholder="example.com" />
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <InfoIcon />
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </div>
    </DirectionProvider>
  )
}

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
import { SearchIcon } from "lucide-react"

export function InputGroupInlineStart() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="max-w-sm">
          <FieldLabel htmlFor="inline-start-input">Input</FieldLabel>
          <InputGroup>
            <InputGroupInput id="inline-start-input" placeholder="Search..." />
            <InputGroupAddon align="inline-start">
              <SearchIcon className="text-muted-foreground" />
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>Icon positioned at the start.</FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

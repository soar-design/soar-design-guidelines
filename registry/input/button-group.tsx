"use client"

import * as React from "react"
import {
  Button,
  ButtonGroup,
  DirectionProvider,
  Field,
  FieldLabel,
  Input,
} from "@soar-design/soar-react-components"

export function InputButtonGroup() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-xs">
          <FieldLabel htmlFor="input-button-group">Search</FieldLabel>
          <ButtonGroup>
            <Input id="input-button-group" placeholder="Type to search..." />
            <Button variant="secondary">Search</Button>
          </ButtonGroup>
        </Field>
      </div>
    </DirectionProvider>
  )
}

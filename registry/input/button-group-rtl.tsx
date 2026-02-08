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
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-xs">
          <FieldLabel htmlFor="input-button-group">بحث</FieldLabel>
          <ButtonGroup>
            <Input id="input-button-group" placeholder="اكتب للبحث..." />
            <Button variant="secondary">بحث</Button>
          </ButtonGroup>
        </Field>
      </div>
    </DirectionProvider>
  )
}

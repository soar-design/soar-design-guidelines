"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldLabel,
  Switch,
} from "@soar-design/soar-react-components"

export function FieldSwitch() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field orientation="horizontal" className="w-fit">
          <FieldLabel htmlFor="2fa">Multi-factor authentication</FieldLabel>
          <Switch id="2fa" />
        </Field>
      </div>
    </DirectionProvider>
  )
}

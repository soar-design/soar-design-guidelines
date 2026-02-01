"use client"

import {
  DirectionProvider,
  Field,
  FieldGroup,
  FieldLabel,
  Switch,
} from "@soar-design/soar-react-components"

export function SwitchSizes() {
  return (
    <DirectionProvider dir="ltr">
      <FieldGroup className="w-full max-w-[10rem]">
        <Field orientation="horizontal">
          <Switch id="switch-size-sm" size="sm" />
          <FieldLabel htmlFor="switch-size-sm">Small</FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Switch id="switch-size-default" size="default" />
          <FieldLabel htmlFor="switch-size-default">Default</FieldLabel>
        </Field>
      </FieldGroup>
    </DirectionProvider>
  )
}

"use client"

import {
  DirectionProvider,
  Field,
  FieldLabel,
  Switch,
} from "@soar-design/soar-react-components"

export function SwitchDisabled() {
  return (
    <DirectionProvider dir="rtl">
      <Field orientation="horizontal" data-disabled className="w-fit">
        <Switch id="switch-disabled-unchecked" disabled />
        <FieldLabel htmlFor="switch-disabled-unchecked">معطل</FieldLabel>
      </Field>
    </DirectionProvider>
  )
}

"use client"

import {
  DirectionProvider,
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  Switch,
} from "@soar-design/soar-react-components"

export function SwitchDescription() {
  return (
    <DirectionProvider dir="ltr">
      <Field orientation="horizontal" className="max-w-sm">
        <FieldContent>
          <FieldLabel htmlFor="switch-focus-mode">
            Share across devices
          </FieldLabel>
          <FieldDescription>
            Focus is shared across devices, and turns off when you leave the app.
          </FieldDescription>
        </FieldContent>
        <Switch id="switch-focus-mode" />
      </Field>
    </DirectionProvider>
  )
}

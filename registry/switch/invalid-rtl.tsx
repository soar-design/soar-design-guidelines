"use client"

import {
  DirectionProvider,
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  Switch,
} from "@soar-design/soar-react-components"

export function SwitchInvalid() {
  return (
    <DirectionProvider dir="rtl">
      <Field orientation="horizontal" className="max-w-sm" data-invalid>
        <FieldContent>
          <FieldLabel htmlFor="switch-terms">
            قبول الشروط والأحكام
          </FieldLabel>
          <FieldDescription>
            يجب عليك قبول الشروط والأحكام للمتابعة.
          </FieldDescription>
        </FieldContent>
        <Switch id="switch-terms" aria-invalid />
      </Field>
    </DirectionProvider>
  )
}

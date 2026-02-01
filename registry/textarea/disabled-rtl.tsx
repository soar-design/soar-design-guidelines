"use client"

import {
  DirectionProvider,
  Field,
  FieldLabel,
  Textarea,
} from "@soar-design/soar-react-components"

export function TextareaDisabled() {
  return (
    <DirectionProvider dir="rtl">
      <Field data-disabled>
        <FieldLabel htmlFor="textarea-disabled">الرسالة</FieldLabel>
        <Textarea
          id="textarea-disabled"
          placeholder="اكتب رسالتك هنا."
          disabled
        />
      </Field>
    </DirectionProvider>
  )
}

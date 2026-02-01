"use client"

import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldLabel,
  Textarea,
} from "@soar-design/soar-react-components"

export function TextareaField() {
  return (
    <DirectionProvider dir="rtl">
      <Field>
        <FieldLabel htmlFor="textarea-message">الرسالة</FieldLabel>
        <FieldDescription>أدخل رسالتك أدناه.</FieldDescription>
        <Textarea id="textarea-message" placeholder="اكتب رسالتك هنا." />
      </Field>
    </DirectionProvider>
  )
}

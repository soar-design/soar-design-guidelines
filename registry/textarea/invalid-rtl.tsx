"use client"

import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldLabel,
  Textarea,
} from "@soar-design/soar-react-components"

export function TextareaInvalid() {
  return (
    <DirectionProvider dir="rtl">
      <Field data-invalid>
        <FieldLabel htmlFor="textarea-invalid">الرسالة</FieldLabel>
        <Textarea
          id="textarea-invalid"
          placeholder="اكتب رسالتك هنا."
          aria-invalid
        />
        <FieldDescription>يرجى إدخال رسالة صالحة.</FieldDescription>
      </Field>
    </DirectionProvider>
  )
}

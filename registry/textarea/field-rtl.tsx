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
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-md">
          <FieldLabel htmlFor="textarea-message">الرسالة</FieldLabel>
          <FieldDescription>أدخل رسالتك أدناه.</FieldDescription>
          <Textarea id="textarea-message" placeholder="اكتب رسالتك هنا." />
        </Field>
      </div>
    </DirectionProvider>
  )
}

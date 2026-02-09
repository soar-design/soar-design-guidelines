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
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-md" data-invalid>
          <FieldLabel htmlFor="textarea-invalid">الرسالة</FieldLabel>
          <Textarea
            id="textarea-invalid"
            placeholder="اكتب رسالتك هنا."
            aria-invalid
          />
          <FieldDescription>يرجى إدخال رسالة صالحة.</FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

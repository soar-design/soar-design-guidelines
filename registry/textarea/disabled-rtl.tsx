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
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-md" data-disabled>
          <FieldLabel htmlFor="textarea-disabled">الرسالة</FieldLabel>
          <Textarea
            id="textarea-disabled"
            placeholder="اكتب رسالتك هنا."
            disabled
          />
        </Field>
      </div>
    </DirectionProvider>
  )
}

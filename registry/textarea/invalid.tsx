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
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-md" data-invalid>
          <FieldLabel htmlFor="textarea-invalid">Message</FieldLabel>
          <Textarea
            id="textarea-invalid"
            placeholder="Type your message here."
            aria-invalid
          />
          <FieldDescription>Please enter a valid message.</FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

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
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-md">
          <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
          <FieldDescription>Enter your message below.</FieldDescription>
          <Textarea id="textarea-message" placeholder="Type your message here." />
        </Field>
      </div>
    </DirectionProvider>
  )
}

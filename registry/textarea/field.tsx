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
      <Field>
        <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
        <FieldDescription>Enter your message below.</FieldDescription>
        <Textarea id="textarea-message" placeholder="Type your message here." />
      </Field>
    </DirectionProvider>
  )
}

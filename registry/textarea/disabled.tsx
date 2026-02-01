"use client"

import {
  DirectionProvider,
  Field,
  FieldLabel,
  Textarea,
} from "@soar-design/soar-react-components"

export function TextareaDisabled() {
  return (
    <DirectionProvider dir="ltr">
      <Field data-disabled>
        <FieldLabel htmlFor="textarea-disabled">Message</FieldLabel>
        <Textarea
          id="textarea-disabled"
          placeholder="Type your message here."
          disabled
        />
      </Field>
    </DirectionProvider>
  )
}

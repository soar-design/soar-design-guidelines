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
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-md" data-disabled>
          <FieldLabel htmlFor="textarea-disabled">Message</FieldLabel>
          <Textarea
            id="textarea-disabled"
            placeholder="Type your message here."
            disabled
          />
        </Field>
      </div>
    </DirectionProvider>
  )
}

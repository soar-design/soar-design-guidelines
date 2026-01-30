"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@soar-design/soar-react-components"

export function InputGroupBlockEnd() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <FieldGroup className="max-w-sm">
          <Field>
            <FieldLabel htmlFor="block-end-input">Input</FieldLabel>
            <InputGroup className="h-auto">
              <InputGroupInput id="block-end-input" placeholder="Enter amount" />
              <InputGroupAddon align="block-end">
                <InputGroupText>USD</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <FieldDescription>Footer positioned below the input.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="block-end-textarea">Textarea</FieldLabel>
            <InputGroup>
              <InputGroupTextarea
                id="block-end-textarea"
                placeholder="Write a comment..."
              />
              <InputGroupAddon align="block-end">
                <InputGroupText>0/280</InputGroupText>
                <InputGroupButton variant="default" size="sm" className="ml-auto">
                  Post
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
            <FieldDescription>
              Footer positioned below the textarea.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </div>
    </DirectionProvider>
  )
}

"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldLabel,
  Input,
} from "@soar-design/soar-react-components"

export function InputDemo() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-xs">
          <FieldLabel htmlFor="input-demo-api-key">API Key</FieldLabel>
          <Input
            id="input-demo-api-key"
            type="password"
            placeholder="sk-..."
          />
          <FieldDescription>
            Your API key is encrypted and stored securely.
          </FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

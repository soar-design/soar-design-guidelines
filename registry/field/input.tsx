"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  Input,
} from "@soar-design/soar-react-components"

export function FieldInput() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <FieldSet className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input id="username" type="text" placeholder="Max Leiter" />
              <FieldDescription>
                Choose a unique username for your account.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <FieldDescription>
                Must be at least 8 characters long.
              </FieldDescription>
              <Input id="password" type="password" placeholder="••••••••" />
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    </DirectionProvider>
  )
}

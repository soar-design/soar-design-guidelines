"use client"

import * as React from "react"
import {
  Button,
  DirectionProvider,
  Field,
  Input,
} from "@soar-design/soar-react-components"

export function InputInline() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field orientation="horizontal" className="w-full max-w-md">
          <Input type="search" placeholder="Search..." />
          <Button>Search</Button>
        </Field>
      </div>
    </DirectionProvider>
  )
}

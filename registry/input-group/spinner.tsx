"use client"

import * as React from "react"
import {
  DirectionProvider,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  Spinner,
} from "@soar-design/soar-react-components"
import { LoaderIcon } from "lucide-react"

export function InputGroupSpinner() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="grid w-full max-w-sm gap-4">
          <InputGroup>
            <InputGroupInput placeholder="Searching..." />
            <InputGroupAddon align="inline-end">
              <Spinner />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Processing..." />
            <InputGroupAddon>
              <Spinner />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Saving changes..." />
            <InputGroupAddon align="inline-end">
              <InputGroupText>Saving...</InputGroupText>
              <Spinner />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Refreshing data..." />
            <InputGroupAddon>
              <LoaderIcon className="animate-spin" />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <InputGroupText className="text-muted-foreground">
                Please wait...
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </DirectionProvider>
  )
}

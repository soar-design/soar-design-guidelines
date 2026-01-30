"use client"

import * as React from "react"
import {
  DirectionProvider,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@soar-design/soar-react-components"

export function InputGroupTextExample() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="grid w-full max-w-sm gap-6">
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="0.00" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>USD</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput placeholder="example.com" className="!pl-0.5" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Enter your username" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>@company.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupTextarea placeholder="Enter your message" />
            <InputGroupAddon align="block-end">
              <InputGroupText className="text-muted-foreground text-xs">
                120 characters left
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </DirectionProvider>
  )
}

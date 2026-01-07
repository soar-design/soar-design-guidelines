"use client"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText as InputGroupTextComponent,
  InputGroupTextarea as InputGroupTextareaComponent,
} from "@soar-design/soar-react-components"

export function InputGroupText() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupTextComponent>$</InputGroupTextComponent>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupTextComponent>USD</InputGroupTextComponent>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupTextComponent>https://</InputGroupTextComponent>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" className="!pl-0.5" />
        <InputGroupAddon align="inline-end">
          <InputGroupTextComponent>.com</InputGroupTextComponent>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter your username" />
        <InputGroupAddon align="inline-end">
          <InputGroupTextComponent>@company.com</InputGroupTextComponent>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextareaComponent placeholder="Enter your message" />
        <InputGroupAddon align="block-end">
          <InputGroupTextComponent className="text-muted-foreground text-xs">
            120 characters left
          </InputGroupTextComponent>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

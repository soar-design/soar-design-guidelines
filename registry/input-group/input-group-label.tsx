"use client"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@soar-design/soar-react-components"
import { Label } from "@soar-design/soar-react-components"

export function InputGroupLabelDocs() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <div className="space-y-2">
        <Label htmlFor="username-input">Username</Label>
        <InputGroup>
          <InputGroupInput id="username-input" placeholder="Enter username" />
          <InputGroupAddon align="inline-end">
            <Label className="text-muted-foreground text-xs">@company.com</Label>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="space-y-2">
        <Label htmlFor="price-input">Price</Label>
        <InputGroup>
          <InputGroupAddon>
            <Label className="text-muted-foreground text-xs">$</Label>
          </InputGroupAddon>
          <InputGroupInput id="price-input" placeholder="0.00" />
          <InputGroupAddon align="inline-end">
            <Label className="text-muted-foreground text-xs">USD</Label>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <Label className="text-muted-foreground text-xs">12 results</Label>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

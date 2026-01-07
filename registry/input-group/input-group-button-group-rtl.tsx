"use client"

import { Link2 } from "lucide-react"

import {
  ButtonGroup,
  ButtonGroupText,
} from "@soar-design/soar-react-components"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@soar-design/soar-react-components"
import { Label } from "@soar-design/soar-react-components"

export function InputGroupButtonGroupRTL() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <ButtonGroup>
        <ButtonGroupText asChild>
          <Label htmlFor="url-rtl">https://</Label>
        </ButtonGroupText>
        <InputGroup>
          <InputGroupInput id="url-rtl" />
          <InputGroupAddon align="inline-end">
            <Link2 />
          </InputGroupAddon>
        </InputGroup>
        <ButtonGroupText>.com</ButtonGroupText>
      </ButtonGroup>
    </div>
  )
}

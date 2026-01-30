"use client"

import * as React from "react"
import {
  DirectionProvider,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@soar-design/soar-react-components"
import {
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  MailIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react"

export function InputGroupIcon() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="grid w-full max-w-sm gap-6">
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput type="email" placeholder="Enter your email" />
            <InputGroupAddon>
              <MailIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Card number" />
            <InputGroupAddon>
              <CreditCardIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <CheckIcon />
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupInput placeholder="Card number" />
            <InputGroupAddon align="inline-end">
              <StarIcon />
              <InfoIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </DirectionProvider>
  )
}

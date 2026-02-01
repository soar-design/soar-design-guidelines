"use client"

import {
  DirectionProvider,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
  Spinner,
} from "@soar-design/soar-react-components"
import { ArrowUpIcon } from "lucide-react"

export function SpinnerInputGroup() {
  return (
    <DirectionProvider dir="ltr">
      <div className="flex w-full max-w-md flex-col gap-4">
        <InputGroup>
          <InputGroupInput placeholder="Send a message..." disabled />
          <InputGroupAddon align="inline-end">
            <Spinner />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupTextarea placeholder="Send a message..." disabled />
          <InputGroupAddon align="block-end">
            <Spinner /> Validating...
            <InputGroupButton className="ml-auto" variant="default">
              <ArrowUpIcon />
              <span className="sr-only">Send</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </DirectionProvider>
  )
}

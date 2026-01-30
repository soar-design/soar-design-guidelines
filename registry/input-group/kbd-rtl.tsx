"use client"

import * as React from "react"
import {
  DirectionProvider,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  Kbd,
} from "@soar-design/soar-react-components"
import { SearchIcon } from "lucide-react"

export function InputGroupKbd() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <InputGroup className="max-w-sm">
          <InputGroupInput placeholder="بحث..." />
          <InputGroupAddon>
            <SearchIcon className="text-muted-foreground" />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>⌘K</Kbd>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </DirectionProvider>
  )
}

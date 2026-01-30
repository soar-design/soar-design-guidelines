"use client"

import * as React from "react"
import {
  DirectionProvider,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@soar-design/soar-react-components"
import { Search } from "lucide-react"

export function InputGroupDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <InputGroup className="max-w-xs">
          <InputGroupInput placeholder="بحث..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">12 نتيجة</InputGroupAddon>
        </InputGroup>
      </div>
    </DirectionProvider>
  )
}

"use client"

import * as React from "react"
import {
  DirectionProvider,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@soar-design/soar-react-components"
import {
  CodeIcon,
  CopyIcon,
  CornerDownLeftIcon,
  RotateCwIcon,
} from "lucide-react"

export function InputGroupTextareaExample() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="grid w-full max-w-md gap-4">
          <InputGroup>
            <InputGroupTextarea
              id="textarea-code-32"
              placeholder="console.log('Hello, world!');"
              className="min-h-[200px]"
            />
            <InputGroupAddon align="block-end" className="border-t">
              <InputGroupText>Line 1, Column 1</InputGroupText>
              <InputGroupButton size="sm" className="ml-auto" variant="default">
                Run <CornerDownLeftIcon />
              </InputGroupButton>
            </InputGroupAddon>
            <InputGroupAddon align="block-start" className="border-b">
              <InputGroupText className="font-mono font-medium">
                <CodeIcon />
                script.js
              </InputGroupText>
              <InputGroupButton className="ml-auto" size="icon-xs">
                <RotateCwIcon />
              </InputGroupButton>
              <InputGroupButton variant="ghost" size="icon-xs">
                <CopyIcon />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </DirectionProvider>
  )
}

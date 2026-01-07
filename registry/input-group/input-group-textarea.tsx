"use client"

import { ArrowUp, Plus } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@soar-design/soar-react-components"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton as InputGroupButtonComponent,
  InputGroupText as InputGroupTextComponent,
  InputGroupTextarea as InputGroupTextareaComponent,
} from "@soar-design/soar-react-components"
import { Separator } from "@soar-design/soar-react-components"

export function InputGroupTextarea() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupTextareaComponent placeholder="Ask, Search or Chat..." />
        <InputGroupAddon align="block-end">
          <InputGroupButtonComponent
            variant="outline"
            className="rounded-full"
            size="icon-xs"
          >
            <Plus />
          </InputGroupButtonComponent>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButtonComponent variant="ghost">Auto</InputGroupButtonComponent>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              align="start"
              className="[--radius:0.95rem]"
            >
              <DropdownMenuItem>Auto</DropdownMenuItem>
              <DropdownMenuItem>Agent</DropdownMenuItem>
              <DropdownMenuItem>Manual</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroupTextComponent className="ml-auto">52% used</InputGroupTextComponent>
          <Separator orientation="vertical" className="!h-4" />
          <InputGroupButtonComponent
            variant="default"
            className="rounded-full"
            size="icon-xs"
            disabled
          >
            <ArrowUp />
            <span className="sr-only">Send</span>
          </InputGroupButtonComponent>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

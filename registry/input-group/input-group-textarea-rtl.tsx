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

export function InputGroupTextareaRTL() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupTextareaComponent placeholder="اسأل، ابحث أو دردش..." />
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
              <InputGroupButtonComponent variant="ghost">تلقائي</InputGroupButtonComponent>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              align="start"
              className="[--radius:0.95rem]"
            >
              <DropdownMenuItem>تلقائي</DropdownMenuItem>
              <DropdownMenuItem>وكيل</DropdownMenuItem>
              <DropdownMenuItem>يدوي</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroupTextComponent className="ml-auto">52% مستخدم</InputGroupTextComponent>
          <Separator orientation="vertical" className="!h-4" />
          <InputGroupButtonComponent
            variant="default"
            className="rounded-full"
            size="icon-xs"
            disabled
          >
            <ArrowUp />
            <span className="sr-only">إرسال</span>
          </InputGroupButtonComponent>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

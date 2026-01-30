"use client"

import * as React from "react"
import {
  DirectionProvider,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@soar-design/soar-react-components"
import { ChevronDownIcon, MoreHorizontal } from "lucide-react"

export function InputGroupDropdown() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="grid w-full max-w-sm gap-4">
          <InputGroup>
            <InputGroupInput placeholder="أدخل اسم الملف" />
            <InputGroupAddon align="inline-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <InputGroupButton
                    variant="ghost"
                    aria-label="More"
                    size="icon-xs"
                  >
                    <MoreHorizontal />
                  </InputGroupButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>الإعدادات</DropdownMenuItem>
                    <DropdownMenuItem>نسخ المسار</DropdownMenuItem>
                    <DropdownMenuItem>فتح الموقع</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup className="[--radius:1rem]">
            <InputGroupInput placeholder="أدخل استعلام البحث" />
            <InputGroupAddon align="inline-end">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <InputGroupButton variant="ghost" className="!pr-1.5 text-xs">
                    البحث في... <ChevronDownIcon className="size-3" />
                  </InputGroupButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="[--radius:0.95rem]">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>التوثيق</DropdownMenuItem>
                    <DropdownMenuItem>مقالات المدونة</DropdownMenuItem>
                    <DropdownMenuItem>سجل التغييرات</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </DirectionProvider>
  )
}

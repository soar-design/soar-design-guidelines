"use client"

import * as React from "react"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@soar-design/soar-react-components"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@soar-design/soar-react-components"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@soar-design/soar-react-components"

const labels = [
  "ميزة",
  "خطأ",
  "تحسين",
  "توثيق",
  "تصميم",
  "سؤال",
  "صيانة",
]

export function ComboboxDropdownMenuRTL() {
  const [label, setLabel] = React.useState("ميزة")
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full flex-col items-center justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
      <p className="text-sm font-medium">
        <span className="bg-primary text-primary-foreground mr-2 rounded-lg px-2 py-1 text-xs">
          {label}
        </span>
        <span className="text-muted-foreground">إنشاء مشروع جديد</span>
      </p>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>الإجراءات</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>تعيين إلى...</DropdownMenuItem>
            <DropdownMenuItem>تعيين تاريخ الاستحقاق...</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>تطبيق تسمية</DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="p-0">
                <Command>
                  <CommandInput
                    placeholder="تصفية التسمية..."
                    autoFocus={true}
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>لم يتم العثور على تسمية.</CommandEmpty>
                    <CommandGroup>
                      {labels.map((label) => (
                        <CommandItem
                          key={label}
                          value={label}
                          onSelect={(value) => {
                            setLabel(value)
                            setOpen(false)
                          }}
                        >
                          {label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              حذف
              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}


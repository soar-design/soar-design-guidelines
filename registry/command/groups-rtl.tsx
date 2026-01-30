"use client"

import * as React from "react"
import {
  Button,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

export function CommandWithGroups() {
  const [open, setOpen] = React.useState(false)

  return (
    <DirectionProvider dir="rtl">
      <div className="flex flex-col gap-4">
        <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
          فتح القائمة
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="اكتب أمرًا أو ابحث..." />
            <CommandList>
              <CommandEmpty>لم يتم العثور على نتائج.</CommandEmpty>
              <CommandGroup heading="اقتراحات">
                <CommandItem>
                  <Calendar className="h-4 w-4" />
                  <span>التقويم</span>
                </CommandItem>
                <CommandItem>
                  <Smile className="h-4 w-4" />
                  <span>البحث عن الرموز التعبيرية</span>
                </CommandItem>
                <CommandItem>
                  <Calculator className="h-4 w-4" />
                  <span>الآلة الحاسبة</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="الإعدادات">
                <CommandItem>
                  <User className="h-4 w-4" />
                  <span>الملف الشخصي</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard className="h-4 w-4" />
                  <span>الفواتير</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings className="h-4 w-4" />
                  <span>الإعدادات</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    </DirectionProvider>
  )
}

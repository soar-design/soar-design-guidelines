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
  DirectionProvider,
} from "@soar-design/soar-react-components"

export function CommandBasic() {
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
                <CommandItem>التقويم</CommandItem>
                <CommandItem>البحث عن الرموز التعبيرية</CommandItem>
                <CommandItem>الآلة الحاسبة</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    </DirectionProvider>
  )
}

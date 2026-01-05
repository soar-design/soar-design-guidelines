"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@soar-design/soar-react-components"

export function CommandDialogDemoRTL() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <p className="text-muted-foreground text-sm flex items-center gap-1">
        اضغط على{" "}
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="اكتب أمرًا أو ابحث..." />
        <CommandList>
          <CommandEmpty>لم يتم العثور على نتائج.</CommandEmpty>
          <CommandGroup heading="اقتراحات">
            <CommandItem>
              <Calendar />
              <span>التقويم</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>البحث عن الرموز التعبيرية</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>الآلة الحاسبة</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="الإعدادات">
            <CommandItem>
              <User />
              <span>الملف الشخصي</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>الفوترة</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>الإعدادات</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}


"use client";

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@soar-design/soar-react-components";

export function CommandDemoDocsRTL() {
  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
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
          <CommandItem disabled>
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
    </Command>
  );
}

import {
  Command,
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

export function CommandDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Command className="max-w-sm border">
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
              <CommandItem disabled>
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
      </div>
    </DirectionProvider>
  )
}

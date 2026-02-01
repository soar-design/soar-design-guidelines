"use client"

import {
  Button,
  DirectionProvider,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@soar-design/soar-react-components"

const SHEET_SIDES = [
  { side: "top", label: "أعلى" },
  { side: "right", label: "يمين" },
  { side: "bottom", label: "أسفل" },
  { side: "left", label: "يسار" },
] as const

export function SheetSide() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex flex-wrap gap-2">
        {SHEET_SIDES.map(({ side, label }) => (
          <Sheet key={side}>
            <SheetTrigger asChild>
              <Button variant="outline">{label}</Button>
            </SheetTrigger>
            <SheetContent
              side={side}
              className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
            >
              <SheetHeader>
                <SheetTitle>تعديل الملف الشخصي</SheetTitle>
                <SheetDescription>
                  قم بإجراء تغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند
                  الانتهاء.
                </SheetDescription>
              </SheetHeader>
              <div className="no-scrollbar overflow-y-auto px-4">
                {Array.from({ length: 10 }).map((_, index) => (
                  <p key={index} className="mb-2 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </p>
                ))}
              </div>
              <SheetFooter>
                <Button type="submit">حفظ التغييرات</Button>
                <SheetClose asChild>
                  <Button variant="outline">إلغاء</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </DirectionProvider>
  )
}

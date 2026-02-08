"use client"

import {
  Button,
  DirectionProvider,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@soar-design/soar-react-components"

export function SheetNoCloseButton() {
  return (
    <DirectionProvider dir="rtl">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary">فتح اللوحة</Button>
        </SheetTrigger>
        <SheetContent showCloseButton={false}>
          <SheetHeader>
            <SheetTitle>لا يوجد زر إغلاق</SheetTitle>
            <SheetDescription>
              لا تحتوي هذه اللوحة على زر إغلاق في الزاوية العلوية اليمنى.
              انقر خارجها للإغلاق.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </DirectionProvider>
  )
}

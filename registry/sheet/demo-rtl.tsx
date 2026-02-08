"use client"

import {
  Button,
  DirectionProvider,
  Input,
  Label,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@soar-design/soar-react-components"

export function SheetDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary">فتح</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>تعديل الملف الشخصي</SheetTitle>
              <SheetDescription>
                قم بإجراء تغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند الانتهاء.
              </SheetDescription>
            </SheetHeader>
            <div className="grid flex-1 auto-rows-min gap-6 px-4">
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-name">الاسم</Label>
                <Input id="sheet-demo-name" defaultValue="بيدرو دوارتي" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="sheet-demo-username">اسم المستخدم</Label>
                <Input id="sheet-demo-username" defaultValue="@peduarte" />
              </div>
            </div>
            <SheetFooter>
              <Button type="submit">حفظ التغييرات</Button>
              <SheetClose asChild>
                <Button variant="secondary">إغلاق</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </DirectionProvider>
  )
}

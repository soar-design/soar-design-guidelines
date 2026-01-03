"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from "@soar-design/soar-react-components";

export default function SheetNoClose() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">بدون زر إغلاق</Button>
      </SheetTrigger>
      <SheetContent close={false} dir="rtl">
        <SheetHeader>
          <SheetTitle>تأكيد الإجراء</SheetTitle>
          <SheetDescription>
            تتطلب هذه اللوحة إجراءًا صريحًا للإغلاق.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            يجب النقر على أحد الأزرار أدناه لإغلاق هذه اللوحة.
          </p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">إلغاء</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button>تأكيد</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}


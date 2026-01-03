"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Button,
} from "@soar-design/soar-react-components";

export default function SheetNoOverlay() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">فتح بدون طبقة</Button>
      </SheetTrigger>
      <SheetContent overlay={false} dir="rtl">
        <SheetHeader>
          <SheetTitle>بدون طبقة</SheetTitle>
          <SheetDescription>
            هذه اللوحة لا تحتوي على طبقة خلفية.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">
            يمكنك التفاعل مع المحتوى خلف اللوحة.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}


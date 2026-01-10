import { Button } from "@soar-design/soar-react-components";
import { Input } from "@soar-design/soar-react-components";
import { Label } from "@soar-design/soar-react-components";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@soar-design/soar-react-components";

export function SheetDemoDocsRTL() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">فتح</Button>
      </SheetTrigger>
      <SheetContent dir="rtl">
        <SheetHeader>
          <SheetTitle>تعديل الملف الشخصي</SheetTitle>
          <SheetDescription>
            قم بإجراء تغييرات على ملفك الشخصي هنا. انقر فوق حفظ عند الانتهاء.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">الاسم</Label>
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">اسم المستخدم</Label>
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">حفظ التغييرات</Button>
          <SheetClose asChild>
            <Button variant="outline">إغلاق</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

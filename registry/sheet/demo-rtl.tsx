import { Button } from '@soar-design/soar-react-components';
import { Input } from '@soar-design/soar-react-components';
import { Label } from '@soar-design/soar-react-components';
import {
  Sheet,
  SheetBody,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@soar-design/soar-react-components';
import { Textarea } from '@soar-design/soar-react-components';
import { useDirection } from '@radix-ui/react-direction';

export default function DemoSheet() {
  const direction = useDirection();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">فتح اللوحة</Button>
      </SheetTrigger>
      <SheetContent dir={direction}>
        <SheetHeader>
          <SheetTitle>ملاحظات سريعة</SheetTitle>
          <SheetDescription>شارك ملاحظاتك لمساعدتنا على التحسين.</SheetDescription>
        </SheetHeader>
        <SheetBody>
          <div className="grid gap-5">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">الاسم</Label>
              <Input id="name" placeholder="اسمك" />
            </div>
            {/* Email */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <Input id="email" type="email" placeholder="بريدك الإلكتروني" />
            </div>
            {/* Feedback */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="feedback">الملاحظات</Label>
              <Textarea id="feedback" placeholder="اوصف اقتراحك." rows={4} />
              <p className="text-sm text-muted-foreground">يرجى عدم تضمين أي معلومات حساسة</p>
            </div>
          </div>
        </SheetBody>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">إلغاء</Button>
          </SheetClose>
          <SheetClose asChild>
            <Button type="submit">إرسال الملاحظات</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}


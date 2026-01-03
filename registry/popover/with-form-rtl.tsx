import { Button } from "@soar-design/soar-react-components";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@soar-design/soar-react-components";

export default function PopoverWithForm() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>تحديث الملف الشخصي</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" dir="rtl">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">الملف الشخصي</h4>
            <p className="text-sm text-muted-foreground">
              قم بتحديث معلومات ملفك الشخصي.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid gap-1.5">
              <label htmlFor="name" className="text-sm font-medium">
                الاسم
              </label>
              <input
                id="name"
                defaultValue="أحمد محمد"
                className="h-9 rounded-md border border-input bg-background px-3 text-sm"
                dir="rtl"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="email" className="text-sm font-medium">
                البريد الإلكتروني
              </label>
              <input
                id="email"
                type="email"
                defaultValue="ahmed@example.com"
                className="h-9 rounded-md border border-input bg-background px-3 text-sm"
                dir="rtl"
              />
            </div>
            <div className="grid gap-1.5">
              <label htmlFor="bio" className="text-sm font-medium">
                السيرة الذاتية
              </label>
              <textarea
                id="bio"
                defaultValue="أنا مطور برمجيات"
                className="min-h-[80px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                dir="rtl"
              />
            </div>
          </div>
          <Button className="w-full">حفظ التغييرات</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}


import { Label, Input } from "@soar-design/soar-react-components";

export default function LabelRequired() {
  return (
    <div className="space-y-6" dir="rtl">
      <div className="space-y-2">
        <Label htmlFor="username">
          اسم المستخدم
          <span className="text-destructive ms-1">*</span>
        </Label>
        <Input id="username" required placeholder="أدخل اسم المستخدم" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">
          كلمة المرور
          <span className="text-destructive ms-1">*</span>
        </Label>
        <Input id="password" type="password" required placeholder="أدخل كلمة المرور" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio" className="flex items-center gap-2">
          السيرة الذاتية
          <span className="text-xs text-muted-foreground font-normal">
            (اختياري)
          </span>
        </Label>
        <Input id="bio" placeholder="أخبرنا عن نفسك" />
      </div>
    </div>
  );
}


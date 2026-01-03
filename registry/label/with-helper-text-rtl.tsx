import { Label, Input } from "@soar-design/soar-react-components";

export default function LabelWithHelperText() {
  return (
    <div className="space-y-6" dir="rtl">
      <div className="space-y-2">
        <Label htmlFor="username">اسم المستخدم</Label>
        <Input id="username" placeholder="johndoe" />
        <p className="text-xs text-muted-foreground">
          اختر اسم مستخدم فريدًا (3-20 حرفًا)
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">البريد الإلكتروني</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
        <p className="text-xs text-muted-foreground">
          لن نشارك بريدك الإلكتروني مع أي شخص
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="website" className="text-destructive">
          رابط الموقع
        </Label>
        <Input
          id="website"
          type="url"
          placeholder="https://example.com"
          className="border-destructive"
        />
        <p className="text-xs text-destructive">
          يرجى إدخال رابط صحيح يبدأ بـ https://
        </p>
      </div>
    </div>
  );
}


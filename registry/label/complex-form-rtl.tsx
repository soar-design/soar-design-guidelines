import { Label, Input, Checkbox, Button } from "@soar-design/soar-react-components";

export default function LabelComplexForm() {
  return (
    <form className="space-y-6 max-w-md" dir="rtl">
      <div className="space-y-2">
        <Label htmlFor="fullName">
          الاسم الكامل
          <span className="text-destructive ms-1">*</span>
        </Label>
        <Input id="fullName" required placeholder="أحمد محمد" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">الاسم الأول</Label>
          <Input id="firstName" placeholder="أحمد" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">اسم العائلة</Label>
          <Input id="lastName" placeholder="محمد" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email-form">
          البريد الإلكتروني
          <span className="text-destructive ms-1">*</span>
        </Label>
        <Input
          id="email-form"
          type="email"
          required
          placeholder="you@example.com"
        />
        <p className="text-xs text-muted-foreground">
          سنرسل بريد إلكتروني للتحقق
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">
          الشركة
          <span className="text-xs text-muted-foreground font-normal ms-2">
            (اختياري)
          </span>
        </Label>
        <Input id="company" placeholder="شركة أكمة" />
      </div>

      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <Checkbox id="terms-form" required />
        <Label htmlFor="terms-form" className="cursor-pointer">
          أوافق على الشروط والأحكام
          <span className="text-destructive ms-1">*</span>
        </Label>
      </div>

      <Button type="submit" className="w-full">
        إرسال
      </Button>
    </form>
  );
}


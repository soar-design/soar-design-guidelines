import { Label, Input } from "@soar-design/soar-react-components";

export default function LabelDisabled() {
  return (
    <div className="space-y-6" dir="rtl">
      <div className="space-y-2">
        <Label htmlFor="disabled">البريد الإلكتروني</Label>
        <Input id="disabled" disabled placeholder="إدخال معطل" />
      </div>

      <div className="space-y-2 opacity-50">
        <Label htmlFor="disabled-2">اسم المستخدم (قريبًا)</Label>
        <Input id="disabled-2" disabled placeholder="الميزة غير متاحة" />
      </div>
    </div>
  );
}


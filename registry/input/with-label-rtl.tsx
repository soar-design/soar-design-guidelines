import { Input, Label } from "@soar-design/soar-react-components";

export default function InputWithLabel() {
  return (
    <div className="space-y-4" dir="rtl">
      <div className="space-y-2">
        <Label htmlFor="email">البريد الإلكتروني</Label>
        <Input id="email" type="email" placeholder="m@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">كلمة المرور</Label>
        <Input id="password" type="password" />
      </div>
    </div>
  );
}


import { Input } from "@soar-design/soar-react-components";

export default function InputTypes() {
  return (
    <div className="space-y-4" dir="rtl">
      <Input type="text" placeholder="إدخال نص" />
      <Input type="email" placeholder="إدخال بريد إلكتروني" />
      <Input type="password" placeholder="إدخال كلمة مرور" />
      <Input type="number" placeholder="إدخال رقم" />
      <Input type="tel" placeholder="رقم الهاتف" />
      <Input type="url" placeholder="رابط الموقع" />
      <Input type="search" placeholder="بحث..." />
      <Input type="date" />
    </div>
  );
}


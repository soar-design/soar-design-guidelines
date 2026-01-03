import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@soar-design/soar-react-components';

export default function SelectDemo() {
  return (
    <div dir="rtl">
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="اختر دورًا" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="developer">مطور</SelectItem>
          <SelectItem value="designer" disabled>
            مصمم
          </SelectItem>
          <SelectItem value="manager">مدير</SelectItem>
          <SelectItem value="qa" disabled>
            مهندس ضمان الجودة
          </SelectItem>
          <SelectItem value="data-analyst">محلل بيانات</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}


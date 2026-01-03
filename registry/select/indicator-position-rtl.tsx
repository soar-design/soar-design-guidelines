import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@soar-design/soar-react-components';

export default function SelectDemo() {
  return (
    <div dir="rtl">
      <Select defaultValue="banana" indicatorPosition="right">
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="اختر فاكهة" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">تفاح</SelectItem>
          <SelectItem value="banana">موز</SelectItem>
          <SelectItem value="cherry">كرز</SelectItem>
          <SelectItem value="orange">برتقال</SelectItem>
          <SelectItem value="grape">عنب</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}


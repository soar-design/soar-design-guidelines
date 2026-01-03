import { Badge } from '@soar-design/soar-react-components';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@soar-design/soar-react-components';

export default function SelectDemo() {
  return (
    <div dir="rtl">
      <Select defaultValue="3" indicatorPosition="right">
        <SelectTrigger className="w-[200px]">
          <span className="inline-flex items-center space-x-2 rtl:space-x-reverse">
            الحالة: <SelectValue placeholder="اختر إطار عمل" />
          </span>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">
            <Badge variant="primary" size="sm" appearance="outline">
              قيد التنفيذ
            </Badge>
          </SelectItem>
          <SelectItem value="2">
            <Badge variant="primary" size="sm" appearance="outline">
              مكتمل
            </Badge>
          </SelectItem>
          <SelectItem value="3">
            <Badge variant="primary" size="sm" appearance="outline">
              قيد الانتظار
            </Badge>
          </SelectItem>
          <SelectItem value="4">
            <Badge variant="destructive" size="sm" appearance="outline">
              ملغي
            </Badge>
          </SelectItem>
          <SelectItem value="5">
            <Badge variant="destructive" size="sm" appearance="outline">
              مرفوض
            </Badge>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}


import {
  Select,
  SelectContent,
  SelectIndicator,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@soar-design/soar-react-components';
import { CheckCircle } from 'lucide-react';

export default function SelectDemo() {
  return (
    <div dir="rtl">
      <Select
        defaultValue="read_write"
        indicatorPosition="right"
        indicator={
          <SelectIndicator>
            <CheckCircle className="size-4 text-primary" />
          </SelectIndicator>
        }
      >
        <SelectTrigger className="w-[200px] [&_small]:hidden">
          <SelectValue placeholder="اختر مستوى الوصول" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="full_access">
            <span className="flex flex-col items-start gap-px">
              <span className="font-medium">وصول كامل</span>
              <small className="text-muted-foreground text-xs">يمكن تعديل وصول القائمة</small>
            </span>
          </SelectItem>
          <SelectItem value="read_write">
            <span className="flex flex-col items-start gap-px">
              <span className="font-medium">قراءة وكتابة</span>
              <small className="text-muted-foreground text-xs">يمكن تعديل ونشر القوائم</small>
            </span>
          </SelectItem>
          <SelectItem value="read_only">
            <span className="flex flex-col items-start gap-px">
              <span className="font-medium">قراءة فقط</span>
              <small className="text-muted-foreground text-xs">يمكن فقط عرض القوائم</small>
            </span>
          </SelectItem>
          <SelectItem value="no_access">
            <span className="flex flex-col items-start gap-px">
              <span className="font-medium">لا يوجد وصول</span>
              <small className="text-muted-foreground text-xs">لا يمكن عرض أو تعديل القوائم</small>
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}


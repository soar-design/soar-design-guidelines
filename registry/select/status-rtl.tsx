import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@soar-design/soar-react-components';

export default function SelectDemo() {
  return (
    <div dir="rtl">
      <Select defaultValue="3" indicatorPosition="right">
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="اختر إطار عمل" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-violet-500"></span>
              <span>قيد التنفيذ</span>
            </span>
          </SelectItem>
          <SelectItem value="2">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-green-500"></span>
              <span>مكتمل</span>
            </span>
          </SelectItem>
          <SelectItem value="3">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-primary"></span>
              <span>قيد الانتظار</span>
            </span>
          </SelectItem>
          <SelectItem value="4">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-yellow-500"></span>
              <span>ملغي</span>
            </span>
          </SelectItem>
          <SelectItem value="5">
            <span className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-destructive"></span>
              <span>مرفوض</span>
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}


'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@soar-design/soar-react-components';

export default function SelectDemo() {
  return (
    <div className="flex flex-col gap-6" dir="rtl">
      <Select>
        <SelectTrigger size="sm" className="w-[200px]">
          <SelectValue placeholder="صغير" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">تفاح</SelectItem>
          <SelectItem value="banana">موز</SelectItem>
          <SelectItem value="cherry">كرز</SelectItem>
          <SelectItem value="orange">برتقال</SelectItem>
          <SelectItem value="grape">عنب</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="متوسط" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">تفاح</SelectItem>
          <SelectItem value="banana">موز</SelectItem>
          <SelectItem value="cherry">كرز</SelectItem>
          <SelectItem value="orange">برتقال</SelectItem>
          <SelectItem value="grape">عنب</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="lg" className="w-[200px]">
          <SelectValue placeholder="كبير" />
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


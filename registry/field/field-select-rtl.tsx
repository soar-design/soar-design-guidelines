"use client";

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@soar-design/soar-react-components";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@soar-design/soar-react-components";

export function FieldSelectDocsRTL() {
  return (
    <div className="w-full max-w-md">
      <Field>
        <FieldLabel>القسم</FieldLabel>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="اختر القسم" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="engineering">الهندسة</SelectItem>
            <SelectItem value="design">التصميم</SelectItem>
            <SelectItem value="marketing">التسويق</SelectItem>
            <SelectItem value="sales">المبيعات</SelectItem>
            <SelectItem value="support">دعم العملاء</SelectItem>
            <SelectItem value="hr">الموارد البشرية</SelectItem>
            <SelectItem value="finance">المالية</SelectItem>
            <SelectItem value="operations">العمليات</SelectItem>
          </SelectContent>
        </Select>
        <FieldDescription>اختر قسمك أو مجال عملك.</FieldDescription>
      </Field>
    </div>
  );
}

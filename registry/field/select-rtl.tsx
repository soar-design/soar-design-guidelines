"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldLabel,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@soar-design/soar-react-components"

export function FieldSelect() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-xs">
          <FieldLabel>القسم</FieldLabel>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="اختر القسم" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="engineering">الهندسة</SelectItem>
                <SelectItem value="design">التصميم</SelectItem>
                <SelectItem value="marketing">التسويق</SelectItem>
                <SelectItem value="sales">المبيعات</SelectItem>
                <SelectItem value="support">دعم العملاء</SelectItem>
                <SelectItem value="hr">الموارد البشرية</SelectItem>
                <SelectItem value="finance">المالية</SelectItem>
                <SelectItem value="operations">العمليات</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <FieldDescription>
            اختر قسمك أو مجال عملك.
          </FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

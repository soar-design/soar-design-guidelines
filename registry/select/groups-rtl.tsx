"use client"

import {
  DirectionProvider,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@soar-design/soar-react-components"

export function SelectGroups() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Select>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="اختر فاكهة" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>فواكه</SelectLabel>
              <SelectItem value="apple">تفاح</SelectItem>
              <SelectItem value="banana">موز</SelectItem>
              <SelectItem value="blueberry">توت</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>خضروات</SelectLabel>
              <SelectItem value="carrot">جزر</SelectItem>
              <SelectItem value="broccoli">بروكلي</SelectItem>
              <SelectItem value="spinach">سبانخ</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </DirectionProvider>
  )
}

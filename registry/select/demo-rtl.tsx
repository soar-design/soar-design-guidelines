"use client"

import {
  DirectionProvider,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@soar-design/soar-react-components"

export function SelectDemo() {
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
              <SelectItem value="grapes">عنب</SelectItem>
              <SelectItem value="pineapple">أناناس</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </DirectionProvider>
  )
}

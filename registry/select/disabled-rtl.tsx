"use client"

import {
  DirectionProvider,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@soar-design/soar-react-components"

export function SelectDisabled() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Select disabled>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="اختر فاكهة" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="apple">تفاح</SelectItem>
              <SelectItem value="banana">موز</SelectItem>
              <SelectItem value="blueberry">توت</SelectItem>
              <SelectItem value="grapes" disabled>
                عنب
              </SelectItem>
              <SelectItem value="pineapple">أناناس</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </DirectionProvider>
  )
}

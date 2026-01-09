import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@soar-design/soar-react-components"

export function SelectDemoDocsRTL() {
  return (
    <Select dir="rtl">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="اختر فاكهة" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>فواكه</SelectLabel>
          <SelectItem value="apple">تفاح</SelectItem>
          <SelectItem value="banana">موز</SelectItem>
          <SelectItem value="blueberry">توت أزرق</SelectItem>
          <SelectItem value="grapes">عنب</SelectItem>
          <SelectItem value="pineapple">أناناس</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}


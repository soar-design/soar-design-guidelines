"use client"

import {
  DirectionProvider,
  Field,
  FieldError,
  FieldLabel,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@soar-design/soar-react-components"

export function SelectInvalid() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field data-invalid className="w-full max-w-48">
          <FieldLabel>فاكهة</FieldLabel>
          <Select>
            <SelectTrigger aria-invalid>
              <SelectValue placeholder="اختر فاكهة" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">تفاح</SelectItem>
                <SelectItem value="banana">موز</SelectItem>
                <SelectItem value="blueberry">توت</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <FieldError>يرجى اختيار فاكهة.</FieldError>
        </Field>
      </div>
    </DirectionProvider>
  )
}

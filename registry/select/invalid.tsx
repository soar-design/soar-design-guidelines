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
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field data-invalid className="w-full max-w-48">
          <FieldLabel>Fruit</FieldLabel>
          <Select>
            <SelectTrigger aria-invalid>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <FieldError>Please select a fruit.</FieldError>
        </Field>
      </div>
    </DirectionProvider>
  )
}

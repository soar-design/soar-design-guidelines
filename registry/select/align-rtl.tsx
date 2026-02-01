"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
} from "@soar-design/soar-react-components"

export function SelectAlignItem() {
  const [alignItemWithTrigger, setAlignItemWithTrigger] = React.useState(true)

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <FieldGroup className="w-full max-w-xs">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="align-item">محاذاة العنصر</FieldLabel>
              <FieldDescription>
                قم بالتبديل لمحاذاة العنصر مع المحفز.
              </FieldDescription>
            </FieldContent>
            <Switch
              id="align-item"
              checked={alignItemWithTrigger}
              onCheckedChange={setAlignItemWithTrigger}
            />
          </Field>
          <Field>
            <Select defaultValue="banana">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent
                position={alignItemWithTrigger ? "item-aligned" : "popper"}
              >
                <SelectGroup>
                  <SelectItem value="apple">تفاح</SelectItem>
                  <SelectItem value="banana">موز</SelectItem>
                  <SelectItem value="blueberry">توت</SelectItem>
                  <SelectItem value="grapes">عنب</SelectItem>
                  <SelectItem value="pineapple">أناناس</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
      </div>
    </DirectionProvider>
  )
}

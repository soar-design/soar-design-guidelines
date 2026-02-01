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
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <FieldGroup className="w-full max-w-xs">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor="align-item">Align Item</FieldLabel>
              <FieldDescription>
                Toggle to align the item with the trigger.
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
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </FieldGroup>
      </div>
    </DirectionProvider>
  )
}

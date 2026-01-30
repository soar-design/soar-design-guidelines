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
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-xs">
          <FieldLabel>Department</FieldLabel>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose department" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="support">Customer Support</SelectItem>
                <SelectItem value="hr">Human Resources</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="operations">Operations</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <FieldDescription>
            Select your department or area of work.
          </FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

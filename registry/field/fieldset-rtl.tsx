"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  Input,
} from "@soar-design/soar-react-components"

export function FieldFieldset() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <FieldSet className="w-full max-w-sm">
          <FieldLegend>معلومات العنوان</FieldLegend>
          <FieldDescription>
            نحتاج عنوانك لتسليم طلبك.
          </FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="street">عنوان الشارع</FieldLabel>
              <Input id="street" type="text" placeholder="123 Main St" />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="city">المدينة</FieldLabel>
                <Input id="city" type="text" placeholder="New York" />
              </Field>
              <Field>
                <FieldLabel htmlFor="zip">الرمز البريدي</FieldLabel>
                <Input id="zip" type="text" placeholder="90502" />
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>
      </div>
    </DirectionProvider>
  )
}

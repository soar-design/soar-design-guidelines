"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldLabel,
  Input,
} from "@soar-design/soar-react-components"

export function InputField() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-xs">
          <FieldLabel htmlFor="input-field-username">اسم المستخدم</FieldLabel>
          <Input
            id="input-field-username"
            type="text"
            placeholder="أدخل اسم المستخدم الخاص بك"
          />
          <FieldDescription>
            اختر اسم مستخدم فريد لحسابك.
          </FieldDescription>
        </Field>
      </div>
    </DirectionProvider>
  )
}

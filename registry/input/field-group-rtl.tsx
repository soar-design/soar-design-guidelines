"use client"

import * as React from "react"
import {
  Button,
  DirectionProvider,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  Input,
} from "@soar-design/soar-react-components"

export function InputFieldgroup() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <form className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="fieldgroup-name">الاسم</FieldLabel>
              <Input id="fieldgroup-name" placeholder="Jordan Lee" />
            </Field>
            <Field>
              <FieldLabel htmlFor="fieldgroup-email">البريد الإلكتروني</FieldLabel>
              <Input
                id="fieldgroup-email"
                type="email"
                placeholder="name@example.com"
              />
              <FieldDescription>
                سنرسل التحديثات إلى هذا العنوان.
              </FieldDescription>
            </Field>
            <Field orientation="horizontal">
              <Button type="reset" variant="secondary">
                إعادة تعيين
              </Button>
              <Button type="submit">إرسال</Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </DirectionProvider>
  )
}

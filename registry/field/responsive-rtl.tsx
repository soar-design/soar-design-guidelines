"use client"

import * as React from "react"
import {
  Button,
  DirectionProvider,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  Input,
} from "@soar-design/soar-react-components"

export function FieldResponsive() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <form className="w-full">
          <FieldSet>
            <FieldLegend>الملف الشخصي</FieldLegend>
            <FieldDescription>املأ معلومات ملفك الشخصي.</FieldDescription>
            <FieldGroup>
              <Field orientation="responsive">
                <FieldContent>
                  <FieldLabel htmlFor="name">الاسم</FieldLabel>
                  <FieldDescription>
                    قدم اسمك الكامل للتعريف
                  </FieldDescription>
                </FieldContent>
                <Input id="name" placeholder="Evil Rabbit" required />
              </Field>
              <Field orientation="responsive">
                <Button type="submit">إرسال</Button>
                <Button type="button" variant="secondary">
                  إلغاء
                </Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </form>
      </div>
    </DirectionProvider>
  )
}

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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@soar-design/soar-react-components"

export function InputForm() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <form className="w-full max-w-sm">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="form-name">الاسم</FieldLabel>
              <Input
                id="form-name"
                type="text"
                placeholder="Evil Rabbit"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="form-email">البريد الإلكتروني</FieldLabel>
              <Input id="form-email" type="email" placeholder="john@example.com" />
              <FieldDescription>
                لن نشارك بريدك الإلكتروني مع أي شخص.
              </FieldDescription>
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="form-phone">الهاتف</FieldLabel>
                <Input id="form-phone" type="tel" placeholder="+1 (555) 123-4567" />
              </Field>
              <Field>
                <FieldLabel htmlFor="form-country">البلد</FieldLabel>
                <Select defaultValue="us">
                  <SelectTrigger id="form-country">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">الولايات المتحدة</SelectItem>
                    <SelectItem value="uk">المملكة المتحدة</SelectItem>
                    <SelectItem value="ca">كندا</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="form-address">العنوان</FieldLabel>
              <Input id="form-address" type="text" placeholder="123 Main St" />
            </Field>
            <Field orientation="horizontal">
              <Button type="button" variant="outline">
                إلغاء
              </Button>
              <Button type="submit">إرسال</Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </DirectionProvider>
  )
}

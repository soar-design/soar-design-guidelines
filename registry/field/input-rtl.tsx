"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  Input,
} from "@soar-design/soar-react-components"

export function FieldInput() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <FieldSet className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">اسم المستخدم</FieldLabel>
              <Input id="username" type="text" placeholder="Max Leiter" />
              <FieldDescription>
                اختر اسم مستخدم فريد لحسابك.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="password">كلمة المرور</FieldLabel>
              <FieldDescription>
                يجب أن تكون 8 أحرف على الأقل.
              </FieldDescription>
              <Input id="password" type="password" placeholder="••••••••" />
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    </DirectionProvider>
  )
}

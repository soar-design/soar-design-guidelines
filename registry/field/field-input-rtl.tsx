"use client"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@soar-design/soar-react-components"
import { Input } from "@soar-design/soar-react-components"

export function FieldInputDocsRTL() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
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
  )
}

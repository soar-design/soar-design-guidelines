"use client"

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@soar-design/soar-react-components"
import { Switch } from "@soar-design/soar-react-components"

export function FieldSwitchDocsRTL() {
  return (
    <div className="w-full max-w-md">
      <Field orientation="horizontal">
        <FieldContent>
          <FieldLabel htmlFor="2fa">المصادقة متعددة العوامل</FieldLabel>
          <FieldDescription>
            تفعيل المصادقة متعددة العوامل. إذا لم يكن لديك جهاز مصادقة ثنائية، يمكنك استخدام رمز لمرة واحدة يتم إرساله إلى بريدك الإلكتروني.
          </FieldDescription>
        </FieldContent>
        <Switch id="2fa" />
      </Field>
    </div>
  )
}

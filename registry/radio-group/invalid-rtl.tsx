"use client"

import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldSet,
  RadioGroup,
  RadioGroupItem,
} from "@soar-design/soar-react-components"

export function RadioGroupInvalid() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <FieldSet className="w-full max-w-xs">
          <FieldLegend variant="label">تفضيلات الإشعارات</FieldLegend>
          <FieldDescription>
            اختر كيف تريد استلام الإشعارات.
          </FieldDescription>
          <RadioGroup defaultValue="email">
            <Field orientation="horizontal" data-invalid>
              <RadioGroupItem value="email" id="invalid-email" aria-invalid />
              <FieldLabel htmlFor="invalid-email" className="font-normal">
                البريد الإلكتروني فقط
              </FieldLabel>
            </Field>
            <Field orientation="horizontal" data-invalid>
              <RadioGroupItem value="sms" id="invalid-sms" aria-invalid />
              <FieldLabel htmlFor="invalid-sms" className="font-normal">
                الرسائل النصية فقط
              </FieldLabel>
            </Field>
            <Field orientation="horizontal" data-invalid>
              <RadioGroupItem value="both" id="invalid-both" aria-invalid />
              <FieldLabel htmlFor="invalid-both" className="font-normal">
                البريد الإلكتروني والرسائل النصية
              </FieldLabel>
            </Field>
          </RadioGroup>
        </FieldSet>
      </div>
    </DirectionProvider>
  )
}

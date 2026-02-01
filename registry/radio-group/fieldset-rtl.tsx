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

export function RadioGroupFieldset() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <FieldSet className="w-full max-w-xs">
          <FieldLegend variant="label">خطة الاشتراك</FieldLegend>
          <FieldDescription>
            تقدم الخطط السنوية ومدى الحياة توفيراً كبيراً.
          </FieldDescription>
          <RadioGroup defaultValue="monthly">
            <Field orientation="horizontal">
              <RadioGroupItem value="monthly" id="plan-monthly" />
              <FieldLabel htmlFor="plan-monthly" className="font-normal">
                شهري ($9.99/شهر)
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="yearly" id="plan-yearly" />
              <FieldLabel htmlFor="plan-yearly" className="font-normal">
                سنوي ($99.99/سنة)
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <RadioGroupItem value="lifetime" id="plan-lifetime" />
              <FieldLabel htmlFor="plan-lifetime" className="font-normal">
                مدى الحياة ($299.99)
              </FieldLabel>
            </Field>
          </RadioGroup>
        </FieldSet>
      </div>
    </DirectionProvider>
  )
}

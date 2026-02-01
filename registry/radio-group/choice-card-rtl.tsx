"use client"

import {
  DirectionProvider,
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
  RadioGroup,
  RadioGroupItem,
} from "@soar-design/soar-react-components"

export function RadioGroupChoiceCard() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <RadioGroup defaultValue="plus" className="max-w-sm">
          <FieldLabel htmlFor="plus-plan">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>بلس</FieldTitle>
                <FieldDescription>
                  للأفراد والفرق الصغيرة.
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem value="plus" id="plus-plan" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="pro-plan">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>برو</FieldTitle>
                <FieldDescription>للشركات النامية.</FieldDescription>
              </FieldContent>
              <RadioGroupItem value="pro" id="pro-plan" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="enterprise-plan">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>المؤسسات</FieldTitle>
                <FieldDescription>
                  للفرق الكبيرة والمؤسسات.
                </FieldDescription>
              </FieldContent>
              <RadioGroupItem value="enterprise" id="enterprise-plan" />
            </Field>
          </FieldLabel>
        </RadioGroup>
      </div>
    </DirectionProvider>
  )
}

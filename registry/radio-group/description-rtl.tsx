"use client"

import {
  DirectionProvider,
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  RadioGroup,
  RadioGroupItem,
} from "@soar-design/soar-react-components"

export function RadioGroupDescription() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <RadioGroup defaultValue="comfortable" className="w-fit">
          <Field orientation="horizontal">
            <RadioGroupItem value="default" id="desc-r1" />
            <FieldContent>
              <FieldLabel htmlFor="desc-r1">افتراضي</FieldLabel>
              <FieldDescription>
                تباعد قياسي لمعظم حالات الاستخدام.
              </FieldDescription>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="comfortable" id="desc-r2" />
            <FieldContent>
              <FieldLabel htmlFor="desc-r2">مريح</FieldLabel>
              <FieldDescription>مساحة أكبر بين العناصر.</FieldDescription>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="compact" id="desc-r3" />
            <FieldContent>
              <FieldLabel htmlFor="desc-r3">مضغوط</FieldLabel>
              <FieldDescription>
                تباعد minimal للواجهات الكثيفة.
              </FieldDescription>
            </FieldContent>
          </Field>
        </RadioGroup>
      </div>
    </DirectionProvider>
  )
}

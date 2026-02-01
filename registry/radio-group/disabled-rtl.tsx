"use client"

import {
  DirectionProvider,
  Field,
  FieldLabel,
  RadioGroup,
  RadioGroupItem,
} from "@soar-design/soar-react-components"

export function RadioGroupDisabled() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <RadioGroup defaultValue="option2" className="w-fit">
          <Field orientation="horizontal" data-disabled>
            <RadioGroupItem value="option1" id="disabled-1" disabled />
            <FieldLabel htmlFor="disabled-1" className="font-normal">
              معطل
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="option2" id="disabled-2" />
            <FieldLabel htmlFor="disabled-2" className="font-normal">
              الخيار 2
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="option3" id="disabled-3" />
            <FieldLabel htmlFor="disabled-3" className="font-normal">
              الخيار 3
            </FieldLabel>
          </Field>
        </RadioGroup>
      </div>
    </DirectionProvider>
  )
}

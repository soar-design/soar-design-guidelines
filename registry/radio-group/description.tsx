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
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <RadioGroup defaultValue="comfortable" className="w-fit">
          <Field orientation="horizontal">
            <RadioGroupItem value="default" id="desc-r1" />
            <FieldContent>
              <FieldLabel htmlFor="desc-r1">Default</FieldLabel>
              <FieldDescription>
                Standard spacing for most use cases.
              </FieldDescription>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="comfortable" id="desc-r2" />
            <FieldContent>
              <FieldLabel htmlFor="desc-r2">Comfortable</FieldLabel>
              <FieldDescription>More space between elements.</FieldDescription>
            </FieldContent>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="compact" id="desc-r3" />
            <FieldContent>
              <FieldLabel htmlFor="desc-r3">Compact</FieldLabel>
              <FieldDescription>
                Minimal spacing for dense layouts.
              </FieldDescription>
            </FieldContent>
          </Field>
        </RadioGroup>
      </div>
    </DirectionProvider>
  )
}

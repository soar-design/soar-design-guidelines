"use client"

import {
  Checkbox,
  DirectionProvider,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
  Label,
} from "@soar-design/soar-react-components"

export function CheckboxDemo() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto">
        <FieldGroup className="max-w-sm">
          <Field orientation="horizontal">
            <Checkbox id="terms-checkbox" name="terms-checkbox" />
            <Label htmlFor="terms-checkbox">Accept terms and conditions</Label>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="terms-checkbox-2"
              name="terms-checkbox-2"
              defaultChecked
            />
            <FieldContent>
              <FieldLabel htmlFor="terms-checkbox-2">
                Accept terms and conditions
              </FieldLabel>
              <FieldDescription>
                By clicking this checkbox, you agree to the terms.
              </FieldDescription>
            </FieldContent>
          </Field>
          <Field orientation="horizontal" data-disabled>
            <Checkbox id="toggle-checkbox" name="toggle-checkbox" disabled />
            <FieldLabel htmlFor="toggle-checkbox">Enable notifications</FieldLabel>
          </Field>
          <FieldLabel>
            <Field orientation="horizontal">
              <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
              <FieldContent>
                <FieldTitle>Enable notifications</FieldTitle>
                <FieldDescription>
                  You can enable or disable notifications at any time.
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldLabel>
        </FieldGroup>
      </div>
    </DirectionProvider>
  )
}

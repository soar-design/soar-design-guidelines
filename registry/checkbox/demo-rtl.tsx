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
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto">
        <FieldGroup className="max-w-sm">
          <Field orientation="horizontal">
            <Checkbox id="terms-checkbox" name="terms-checkbox" />
            <Label htmlFor="terms-checkbox">قبول الشروط والأحكام</Label>
          </Field>
          <Field orientation="horizontal">
            <Checkbox
              id="terms-checkbox-2"
              name="terms-checkbox-2"
              defaultChecked
            />
            <FieldContent>
              <FieldLabel htmlFor="terms-checkbox-2">
                قبول الشروط والأحكام
              </FieldLabel>
              <FieldDescription>
                بالنقر على هذا المربع، فإنك توافق على الشروط.
              </FieldDescription>
            </FieldContent>
          </Field>
          <Field orientation="horizontal" data-disabled>
            <Checkbox id="toggle-checkbox" name="toggle-checkbox" disabled />
            <FieldLabel htmlFor="toggle-checkbox">تفعيل الإشعارات</FieldLabel>
          </Field>
          <FieldLabel>
            <Field orientation="horizontal">
              <Checkbox id="toggle-checkbox-2" name="toggle-checkbox-2" />
              <FieldContent>
                <FieldTitle>تفعيل الإشعارات</FieldTitle>
                <FieldDescription>
                  يمكنك تفعيل أو إلغاء تفعيل الإشعارات في أي وقت.
                </FieldDescription>
              </FieldContent>
            </Field>
          </FieldLabel>
        </FieldGroup>
      </div>
    </DirectionProvider>
  )
}

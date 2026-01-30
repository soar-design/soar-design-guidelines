import {
  Checkbox,
  DirectionProvider,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@soar-design/soar-react-components"

export function CheckboxDescription() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto">
        <FieldGroup className="mx-auto w-72">
          <Field orientation="horizontal">
            <Checkbox
              id="terms-checkbox-desc"
              name="terms-checkbox-desc"
              defaultChecked
            />
            <FieldContent>
              <FieldLabel htmlFor="terms-checkbox-desc">
                قبول الشروط والأحكام
              </FieldLabel>
              <FieldDescription>
                بالنقر على هذا المربع، فإنك توافق على الشروط والأحكام.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      </div>
    </DirectionProvider>
  )
}

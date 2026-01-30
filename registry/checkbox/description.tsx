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
    <DirectionProvider dir="ltr">
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
                Accept terms and conditions
              </FieldLabel>
              <FieldDescription>
                By clicking this checkbox, you agree to the terms and conditions.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      </div>
    </DirectionProvider>
  )
}

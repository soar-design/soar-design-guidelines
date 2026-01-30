import {
  Checkbox,
  DirectionProvider,
  Field,
  FieldGroup,
  FieldLabel,
} from "@soar-design/soar-react-components"

export function CheckboxInvalid() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto">
        <FieldGroup className="mx-auto w-56">
          <Field orientation="horizontal" data-invalid>
            <Checkbox
              id="terms-checkbox-invalid"
              name="terms-checkbox-invalid"
              aria-invalid
            />
            <FieldLabel htmlFor="terms-checkbox-invalid">
              Accept terms and conditions
            </FieldLabel>
          </Field>
        </FieldGroup>
      </div>
    </DirectionProvider>
  )
}

import {
  Checkbox,
  DirectionProvider,
  Field,
  FieldGroup,
  FieldLabel,
} from "@soar-design/soar-react-components"

export function CheckboxBasic() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto">
        <FieldGroup className="mx-auto w-56">
          <Field orientation="horizontal">
            <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" />
            <FieldLabel htmlFor="terms-checkbox-basic">
              Accept terms and conditions
            </FieldLabel>
          </Field>
        </FieldGroup>
      </div>
    </DirectionProvider>
  )
}

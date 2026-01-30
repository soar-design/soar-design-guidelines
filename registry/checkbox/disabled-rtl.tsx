import {
  Checkbox,
  DirectionProvider,
  Field,
  FieldGroup,
  FieldLabel,
} from "@soar-design/soar-react-components"

export function CheckboxDisabled() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto">
        <FieldGroup className="mx-auto w-56">
          <Field orientation="horizontal" data-disabled>
            <Checkbox
              id="toggle-checkbox-disabled"
              name="toggle-checkbox-disabled"
              disabled
            />
            <FieldLabel htmlFor="toggle-checkbox-disabled">
              تفعيل الإشعارات
            </FieldLabel>
          </Field>
        </FieldGroup>
      </div>
    </DirectionProvider>
  )
}

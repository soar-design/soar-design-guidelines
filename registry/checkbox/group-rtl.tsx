import {
  Checkbox,
  DirectionProvider,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@soar-design/soar-react-components"

export function CheckboxGroup() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto">
        <FieldSet>
          <FieldLegend variant="label">
            إظهار هذه العناصر على سطح المكتب:
          </FieldLegend>
          <FieldDescription>
            حدد العناصر التي تريد إظهارها على سطح المكتب.
          </FieldDescription>
          <FieldGroup className="gap-3">
            <Field orientation="horizontal">
              <Checkbox
                id="finder-pref-9k2-hard-disks-ljj-checkbox"
                name="finder-pref-9k2-hard-disks-ljj-checkbox"
                defaultChecked
              />
              <FieldLabel
                htmlFor="finder-pref-9k2-hard-disks-ljj-checkbox"
                className="font-normal"
              >
                الأقراص الصلبة
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="finder-pref-9k2-external-disks-1yg-checkbox"
                name="finder-pref-9k2-external-disks-1yg-checkbox"
                defaultChecked
              />
              <FieldLabel
                htmlFor="finder-pref-9k2-external-disks-1yg-checkbox"
                className="font-normal"
              >
                الأقراص الخارجية
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="finder-pref-9k2-cds-dvds-fzt-checkbox"
                name="finder-pref-9k2-cds-dvds-fzt-checkbox"
              />
              <FieldLabel
                htmlFor="finder-pref-9k2-cds-dvds-fzt-checkbox"
                className="font-normal"
              >
                الأقراص المدمجة وأجهزة iPod
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox
                id="finder-pref-9k2-connected-servers-6l2-checkbox"
                name="finder-pref-9k2-connected-servers-6l2-checkbox"
              />
              <FieldLabel
                htmlFor="finder-pref-9k2-connected-servers-6l2-checkbox"
                className="font-normal"
              >
                الخوادم المتصلة
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    </DirectionProvider>
  )
}

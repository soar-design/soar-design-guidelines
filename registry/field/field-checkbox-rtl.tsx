"use client";

import { Checkbox } from "@soar-design/soar-react-components";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@soar-design/soar-react-components";

export function FieldCheckboxDocsRTL() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <FieldSet>
          <FieldLegend variant="label">
            إظهار هذه العناصر على سطح المكتب
          </FieldLegend>
          <FieldDescription>
            اختر العناصر التي تريد إظهارها على سطح المكتب.
          </FieldDescription>
          <FieldGroup className="gap-3">
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-hard-disks-ljj" />
              <FieldLabel
                htmlFor="finder-pref-9k2-hard-disks-ljj"
                className="font-normal"
                defaultChecked
              >
                الأقراص الصلبة
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-external-disks-1yg" />
              <FieldLabel
                htmlFor="finder-pref-9k2-external-disks-1yg"
                className="font-normal"
              >
                الأقراص الخارجية
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
              <FieldLabel
                htmlFor="finder-pref-9k2-cds-dvds-fzt"
                className="font-normal"
              >
                الأقراص المدمجة وأقراص DVD وiPods
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-connected-servers-6l2" />
              <FieldLabel
                htmlFor="finder-pref-9k2-connected-servers-6l2"
                className="font-normal"
              >
                الخوادم المتصلة
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <Field orientation="horizontal">
          <Checkbox id="finder-pref-9k2-sync-folders-nep" defaultChecked />
          <FieldContent>
            <FieldLabel htmlFor="finder-pref-9k2-sync-folders-nep">
              مزامنة مجلدات سطح المكتب والمستندات
            </FieldLabel>
            <FieldDescription>
              يتم مزامنة مجلدات سطح المكتب والمستندات مع iCloud Drive. يمكنك
              الوصول إليها من أجهزة أخرى.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  );
}

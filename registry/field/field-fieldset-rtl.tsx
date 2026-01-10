"use client";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@soar-design/soar-react-components";
import { Input } from "@soar-design/soar-react-components";

export function FieldFieldsetDocsRTL() {
  return (
    <div className="w-full max-w-md space-y-6">
      <FieldSet>
        <FieldLegend>معلومات العنوان</FieldLegend>
        <FieldDescription>نحتاج عنوانك لتسليم طلبك.</FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="street">عنوان الشارع</FieldLabel>
            <Input id="street" type="text" placeholder="123 Main St" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="city">المدينة</FieldLabel>
              <Input id="city" type="text" placeholder="New York" />
            </Field>
            <Field>
              <FieldLabel htmlFor="zip">الرمز البريدي</FieldLabel>
              <Input id="zip" type="text" placeholder="90502" />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}

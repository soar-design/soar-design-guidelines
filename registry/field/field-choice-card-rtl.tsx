"use client";

import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@soar-design/soar-react-components";
import { RadioGroup, RadioGroupItem } from "@soar-design/soar-react-components";

export function FieldChoiceCardDocsRTL() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <FieldSet>
          <FieldLabel htmlFor="compute-environment-p8w">
            بيئة الحوسبة
          </FieldLabel>
          <FieldDescription>اختر بيئة الحوسبة لعنقودك.</FieldDescription>
          <RadioGroup defaultValue="kubernetes">
            <FieldLabel htmlFor="kubernetes-r2h">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Kubernetes</FieldTitle>
                  <FieldDescription>
                    تشغيل أحمال عمل GPU على عنقود مُكوّن بـ K8s.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="kubernetes" id="kubernetes-r2h" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="vm-z4k">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>الآلة الافتراضية</FieldTitle>
                  <FieldDescription>
                    الوصول إلى عنقود مُكوّن بـ VM لتشغيل أحمال عمل GPU.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="vm" id="vm-z4k" />
              </Field>
            </FieldLabel>
          </RadioGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  );
}

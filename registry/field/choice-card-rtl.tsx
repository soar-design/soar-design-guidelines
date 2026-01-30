"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  FieldTitle,
  RadioGroup,
  RadioGroupItem,
} from "@soar-design/soar-react-components"

export function FieldChoiceCard() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <FieldGroup className="w-full max-w-xs">
          <FieldSet>
            <FieldLegend variant="label">بيئة الحوسبة</FieldLegend>
            <FieldDescription>
              اختر بيئة الحوسبة لعنقودك.
            </FieldDescription>
            <RadioGroup defaultValue="kubernetes">
              <FieldLabel htmlFor="kubernetes-r2h">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Kubernetes</FieldTitle>
                    <FieldDescription>
                      تشغيل أحمال GPU على عنقود K8s.
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
                      الوصول إلى عنقود لتشغيل أحمال GPU.
                    </FieldDescription>
                  </FieldContent>
                  <RadioGroupItem value="vm" id="vm-z4k" />
                </Field>
              </FieldLabel>
            </RadioGroup>
          </FieldSet>
        </FieldGroup>
      </div>
    </DirectionProvider>
  )
}

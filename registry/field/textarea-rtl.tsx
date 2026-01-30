"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  Textarea,
} from "@soar-design/soar-react-components"

export function FieldTextarea() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <FieldSet className="w-full max-w-xs">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="feedback">التعليقات</FieldLabel>
              <Textarea
                id="feedback"
                placeholder="ملاحظاتك تساعدنا على التحسين..."
                rows={4}
              />
              <FieldDescription>
                شارك أفكارك حول خدمتنا.
              </FieldDescription>
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
    </DirectionProvider>
  )
}

"use client"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@soar-design/soar-react-components"
import { Textarea } from "@soar-design/soar-react-components"

export function FieldTextareaRTL() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="feedback">التعليقات</FieldLabel>
            <Textarea
              id="feedback"
              placeholder="ملاحظاتك تساعدنا على التحسين..."
              rows={4}
            />
            <FieldDescription>
              شاركنا أفكارك حول خدمتنا.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}

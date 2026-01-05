"use client"

import { Checkbox } from "@soar-design/soar-react-components"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@soar-design/soar-react-components"

export function FieldGroupExampleRTL() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <FieldSet>
          <FieldLabel>الردود</FieldLabel>
          <FieldDescription>
            احصل على إشعارات عندما يرد ChatGPT على الطلبات التي تستغرق وقتاً، مثل البحث أو إنشاء الصور.
          </FieldDescription>
          <FieldGroup data-slot="checkbox-group">
            <Field orientation="horizontal">
              <Checkbox id="push" defaultChecked disabled />
              <FieldLabel htmlFor="push" className="font-normal">
                إشعارات الدفع
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLabel>المهام</FieldLabel>
          <FieldDescription>
            احصل على إشعارات عندما تكون هناك تحديثات للمهام التي قمت بإنشائها.{" "}
            <a href="#">إدارة المهام</a>
          </FieldDescription>
          <FieldGroup data-slot="checkbox-group">
            <Field orientation="horizontal">
              <Checkbox id="push-tasks" />
              <FieldLabel htmlFor="push-tasks" className="font-normal">
                إشعارات الدفع
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="email-tasks" />
              <FieldLabel htmlFor="email-tasks" className="font-normal">
                إشعارات البريد الإلكتروني
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  )
}

"use client"

import { Checkbox } from "@soar-design/soar-react-components"
import {
  Field,
  FieldDescription,
  FieldGroup as FieldGroupComponent,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@soar-design/soar-react-components"

export function FieldFieldGroup() {
  return (
    <div className="w-full max-w-md">
      <FieldGroupComponent>
        <FieldSet>
          <FieldLabel>Responses</FieldLabel>
          <FieldDescription>
            Get notified when ChatGPT responds to requests that take time, like
            research or image generation.
          </FieldDescription>
          <FieldGroupComponent data-slot="checkbox-group">
            <Field orientation="horizontal">
              <Checkbox id="push" defaultChecked disabled />
              <FieldLabel htmlFor="push" className="font-normal">
                Push notifications
              </FieldLabel>
            </Field>
          </FieldGroupComponent>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLabel>Tasks</FieldLabel>
          <FieldDescription>
            Get notified when tasks you&apos;ve created have updates.{" "}
            <a href="#">Manage tasks</a>
          </FieldDescription>
          <FieldGroupComponent data-slot="checkbox-group">
            <Field orientation="horizontal">
              <Checkbox id="push-tasks" />
              <FieldLabel htmlFor="push-tasks" className="font-normal">
                Push notifications
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="email-tasks" />
              <FieldLabel htmlFor="email-tasks" className="font-normal">
                Email notifications
              </FieldLabel>
            </Field>
          </FieldGroupComponent>
        </FieldSet>
      </FieldGroupComponent>
    </div>
  )
}

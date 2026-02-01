"use client"

import {
  DirectionProvider,
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  Switch,
} from "@soar-design/soar-react-components"

export function SwitchDescription() {
  return (
    <DirectionProvider dir="rtl">
      <Field orientation="horizontal" className="max-w-sm">
        <FieldContent>
          <FieldLabel htmlFor="switch-focus-mode">
            المشاركة عبر الأجهزة
          </FieldLabel>
          <FieldDescription>
            يتم مشاركة التركيز عبر الأجهزة، ويتم إيقافه عند مغادرة التطبيق.
          </FieldDescription>
        </FieldContent>
        <Switch id="switch-focus-mode" />
      </Field>
    </DirectionProvider>
  )
}

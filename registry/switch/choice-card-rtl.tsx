"use client"

import {
  DirectionProvider,
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
  Switch,
} from "@soar-design/soar-react-components"

export function SwitchChoiceCard() {
  return (
    <DirectionProvider dir="rtl">
      <FieldGroup className="w-full max-w-sm">
        <FieldLabel htmlFor="switch-share">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>المشاركة عبر الأجهزة</FieldTitle>
              <FieldDescription>
                يتم مشاركة التركيز عبر الأجهزة، ويتم إيقافه عند مغادرة التطبيق.
              </FieldDescription>
            </FieldContent>
            <Switch id="switch-share" />
          </Field>
        </FieldLabel>
        <FieldLabel htmlFor="switch-notifications">
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>تمكين الإشعارات</FieldTitle>
              <FieldDescription>
                تلقي الإشعارات عند تمكين أو تعطيل وضع التركيز.
              </FieldDescription>
            </FieldContent>
            <Switch id="switch-notifications" defaultChecked />
          </Field>
        </FieldLabel>
      </FieldGroup>
    </DirectionProvider>
  )
}

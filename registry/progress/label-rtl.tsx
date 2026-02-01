"use client"

import {
  DirectionProvider,
  Field,
  FieldLabel,
  Progress,
} from "@soar-design/soar-react-components"

export function ProgressLabel() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Field className="w-full max-w-sm">
          <FieldLabel htmlFor="progress-upload">
            <span>تقدم التحميل</span>
            <span className="ml-auto">66%</span>
          </FieldLabel>
          <Progress value={66} id="progress-upload" />
        </Field>
      </div>
    </DirectionProvider>
  )
}

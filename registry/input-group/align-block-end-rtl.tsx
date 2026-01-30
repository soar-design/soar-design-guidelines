"use client"

import * as React from "react"
import {
  DirectionProvider,
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@soar-design/soar-react-components"

export function InputGroupBlockEnd() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <FieldGroup className="max-w-sm">
          <Field>
            <FieldLabel htmlFor="block-end-input">إدخال</FieldLabel>
            <InputGroup className="h-auto">
              <InputGroupInput id="block-end-input" placeholder="أدخل المبلغ" />
              <InputGroupAddon align="block-end">
                <InputGroupText>USD</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <FieldDescription>تم وضع التذييل أسفل الإدخال.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="block-end-textarea">منطقة النص</FieldLabel>
            <InputGroup>
              <InputGroupTextarea
                id="block-end-textarea"
                placeholder="اكتب تعليقًا..."
              />
              <InputGroupAddon align="block-end">
                <InputGroupText>0/280</InputGroupText>
                <InputGroupButton variant="default" size="sm" className="ml-auto">
                  نشر
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
            <FieldDescription>
              تم وضع التذييل أسفل منطقة النص.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </div>
    </DirectionProvider>
  )
}

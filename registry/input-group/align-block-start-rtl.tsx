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
import { CopyIcon, FileCodeIcon } from "lucide-react"

export function InputGroupBlockStart() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <FieldGroup className="max-w-sm">
          <Field>
            <FieldLabel htmlFor="block-start-input">إدخال</FieldLabel>
            <InputGroup className="h-auto">
              <InputGroupInput
                id="block-start-input"
                placeholder="أدخل اسمك"
              />
              <InputGroupAddon align="block-start">
                <InputGroupText>الاسم الكامل</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
            <FieldDescription>تم وضع الرأس أعلى الإدخال.</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="block-start-textarea">منطقة النص</FieldLabel>
            <InputGroup>
              <InputGroupTextarea
                id="block-start-textarea"
                placeholder="console.log('Hello, world!');"
                className="font-mono text-sm"
              />
              <InputGroupAddon align="block-start">
                <FileCodeIcon className="text-muted-foreground" />
                <InputGroupText className="font-mono">script.js</InputGroupText>
                <InputGroupButton size="icon-xs" className="ml-auto">
                  <CopyIcon />
                  <span className="sr-only">نسخ</span>
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
            <FieldDescription>
              تم وضع الرأس أعلى منطقة النص.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </div>
    </DirectionProvider>
  )
}

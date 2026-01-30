"use client"

import * as React from "react"
import {
  DirectionProvider,
  NativeSelect,
  NativeSelectOption,
} from "@soar-design/soar-react-components"

export function NativeSelectInvalid() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <NativeSelect aria-invalid="true">
          <NativeSelectOption value="">حالة خطأ</NativeSelectOption>
          <NativeSelectOption value="apple">تفاح</NativeSelectOption>
          <NativeSelectOption value="banana">موز</NativeSelectOption>
          <NativeSelectOption value="blueberry">توت أزرق</NativeSelectOption>
        </NativeSelect>
      </div>
    </DirectionProvider>
  )
}

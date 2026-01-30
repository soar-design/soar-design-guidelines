"use client"

import * as React from "react"
import {
  DirectionProvider,
  NativeSelect,
  NativeSelectOption,
} from "@soar-design/soar-react-components"

export function NativeSelectDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <NativeSelect>
          <NativeSelectOption value="">اختر الحالة</NativeSelectOption>
          <NativeSelectOption value="todo">مهام</NativeSelectOption>
          <NativeSelectOption value="in-progress">قيد التنفيذ</NativeSelectOption>
          <NativeSelectOption value="done">منجز</NativeSelectOption>
          <NativeSelectOption value="cancelled">ملغي</NativeSelectOption>
        </NativeSelect>
      </div>
    </DirectionProvider>
  )
}

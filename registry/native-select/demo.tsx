"use client"

import * as React from "react"
import {
  DirectionProvider,
  NativeSelect,
  NativeSelectOption,
} from "@soar-design/soar-react-components"

export function NativeSelectDemo() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <NativeSelect>
          <NativeSelectOption value="">Select status</NativeSelectOption>
          <NativeSelectOption value="todo">Todo</NativeSelectOption>
          <NativeSelectOption value="in-progress">In Progress</NativeSelectOption>
          <NativeSelectOption value="done">Done</NativeSelectOption>
          <NativeSelectOption value="cancelled">Cancelled</NativeSelectOption>
        </NativeSelect>
      </div>
    </DirectionProvider>
  )
}

"use client"

import * as React from "react"
import {
  DirectionProvider,
  NativeSelect,
  NativeSelectOption,
} from "@soar-design/soar-react-components"

export function NativeSelectDisabled() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <NativeSelect disabled>
          <NativeSelectOption value="">Disabled</NativeSelectOption>
          <NativeSelectOption value="apple">Apple</NativeSelectOption>
          <NativeSelectOption value="banana">Banana</NativeSelectOption>
          <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
        </NativeSelect>
      </div>
    </DirectionProvider>
  )
}

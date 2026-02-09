"use client"

import * as React from "react"
import { DirectionProvider, Input } from "@soar-design/soar-react-components"

export function InputBasic() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="w-full max-w-md">
          <Input placeholder="أدخل النص" />
        </div>
      </div>
    </DirectionProvider>
  )
}

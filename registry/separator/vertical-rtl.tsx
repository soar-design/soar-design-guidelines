"use client"

import {
  DirectionProvider,
  Separator,
} from "@soar-design/soar-react-components"

export function SeparatorVertical() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex h-5 items-center gap-4 text-sm">
          <div>المدونة</div>
          <Separator orientation="vertical" />
          <div>الوثائق</div>
          <Separator orientation="vertical" />
          <div>المصدر</div>
        </div>
      </div>
    </DirectionProvider>
  )
}

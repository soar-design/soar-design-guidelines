"use client"

import {
  DirectionProvider,
  Textarea,
} from "@soar-design/soar-react-components"

export function TextareaDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Textarea placeholder="اكتب رسالتك هنا." className="w-full max-w-md" />
      </div>
    </DirectionProvider>
  )
}

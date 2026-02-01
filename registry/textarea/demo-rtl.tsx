"use client"

import {
  DirectionProvider,
  Textarea,
} from "@soar-design/soar-react-components"

export function TextareaDemo() {
  return (
    <DirectionProvider dir="rtl">
      <Textarea placeholder="اكتب رسالتك هنا." />
    </DirectionProvider>
  )
}

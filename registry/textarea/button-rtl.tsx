"use client"

import {
  Button,
  DirectionProvider,
  Textarea,
} from "@soar-design/soar-react-components"

export function TextareaButton() {
  return (
    <DirectionProvider dir="rtl">
      <div className="grid w-full gap-2">
        <Textarea placeholder="اكتب رسالتك هنا." />
        <Button>إرسال الرسالة</Button>
      </div>
    </DirectionProvider>
  )
}

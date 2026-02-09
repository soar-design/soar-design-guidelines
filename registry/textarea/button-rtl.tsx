"use client"

import {
  Button,
  DirectionProvider,
  Textarea,
} from "@soar-design/soar-react-components"

export function TextareaButton() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="grid w-full max-w-md gap-2">
          <Textarea placeholder="اكتب رسالتك هنا." />
          <Button>إرسال الرسالة</Button>
        </div>
      </div>
    </DirectionProvider>
  )
}

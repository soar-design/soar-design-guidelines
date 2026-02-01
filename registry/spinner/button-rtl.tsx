"use client"

import {
  Button,
  DirectionProvider,
  Spinner,
} from "@soar-design/soar-react-components"

export function SpinnerButton() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex flex-col items-center gap-4">
        <Button disabled size="sm">
          <Spinner data-icon="inline-start" />
          جاري التحميل...
        </Button>
        <Button variant="outline" disabled size="sm">
          <Spinner data-icon="inline-start" />
          يرجى الانتظار
        </Button>
        <Button variant="secondary" disabled size="sm">
          <Spinner data-icon="inline-start" />
          جاري المعالجة
        </Button>
      </div>
    </DirectionProvider>
  )
}

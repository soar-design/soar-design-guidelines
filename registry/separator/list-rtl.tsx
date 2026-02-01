"use client"

import {
  DirectionProvider,
  Separator,
} from "@soar-design/soar-react-components"

export function SeparatorList() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex w-full max-w-sm flex-col gap-2 text-sm">
          <dl className="flex items-center justify-between">
            <dt>العنصر 1</dt>
            <dd className="text-muted-foreground">القيمة 1</dd>
          </dl>
          <Separator />
          <dl className="flex items-center justify-between">
            <dt>العنصر 2</dt>
            <dd className="text-muted-foreground">القيمة 2</dd>
          </dl>
          <Separator />
          <dl className="flex items-center justify-between">
            <dt>العنصر 3</dt>
            <dd className="text-muted-foreground">القيمة 3</dd>
          </dl>
        </div>
      </div>
    </DirectionProvider>
  )
}

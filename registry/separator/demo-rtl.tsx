"use client"

import {
  DirectionProvider,
  Separator,
} from "@soar-design/soar-react-components"

export function SeparatorDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <div className="flex max-w-sm flex-col gap-4 text-sm">
          <div className="flex flex-col gap-1.5">
            <div className="leading-none font-medium">shadcn/ui</div>
            <div className="text-muted-foreground">
              الأساس لنظام التصميم الخاص بك
            </div>
          </div>
          <Separator />
          <div>
            مجموعة من المكونات المصممة بشكل جميل يمكنك تخصيصها وتوسيعها والبناء عليها.
          </div>
        </div>
      </div>
    </DirectionProvider>
  )
}

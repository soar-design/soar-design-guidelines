"use client"

import {
  DirectionProvider,
  Toggle,
} from "@soar-design/soar-react-components"

export function ToggleSizes() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex flex-wrap items-center gap-2">
        <Toggle variant="outline" aria-label="تبديل صغير" size="sm">
          صغير
        </Toggle>
        <Toggle variant="outline" aria-label="تبديل افتراضي" size="default">
          افتراضي
        </Toggle>
        <Toggle variant="outline" aria-label="تبديل كبير" size="lg">
          كبير
        </Toggle>
      </div>
    </DirectionProvider>
  )
}

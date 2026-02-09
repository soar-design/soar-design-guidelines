"use client"

import {
  DirectionProvider,
  Toggle,
} from "@soar-design/soar-react-components"

export function ToggleSizes() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex flex-wrap items-center gap-2">
        <Toggle aria-label="تبديل صغير" size="sm">
          صغير
        </Toggle>
        <Toggle aria-label="تبديل افتراضي" size="default">
          افتراضي
        </Toggle>
        <Toggle aria-label="تبديل كبير" size="lg">
          كبير
        </Toggle>
      </div>
    </DirectionProvider>
  )
}

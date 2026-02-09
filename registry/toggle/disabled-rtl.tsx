"use client"

import {
  DirectionProvider,
  Toggle,
} from "@soar-design/soar-react-components"

export function ToggleDisabled() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex flex-wrap items-center gap-2">
        <Toggle aria-label="تبديل معطل" disabled>
          معطل
        </Toggle>
        <Toggle aria-label="تبديل معطل مخطط" disabled>
          معطل
        </Toggle>
      </div>
    </DirectionProvider>
  )
}

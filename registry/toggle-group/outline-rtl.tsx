"use client"

import {
  DirectionProvider,
  ToggleGroup,
  ToggleGroupItem,
} from "@soar-design/soar-react-components"

export function ToggleGroupOutline() {
  return (
    <DirectionProvider dir="rtl">
      <ToggleGroup variant="outline" type="single" defaultValue="all">
        <ToggleGroupItem value="all" aria-label="تبديل الكل">
          الكل
        </ToggleGroupItem>
        <ToggleGroupItem value="missed" aria-label="تبديل الفائت">
          فائت
        </ToggleGroupItem>
      </ToggleGroup>
    </DirectionProvider>
  )
}

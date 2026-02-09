"use client"

import {
  DirectionProvider,
  ToggleGroup,
  ToggleGroupItem,
} from "@soar-design/soar-react-components"

export function ToggleGroupSpacing() {
  return (
    <DirectionProvider dir="rtl">
      <ToggleGroup
        type="single"
        size="sm"
        defaultValue="top"
        spacing={2}
      >
        <ToggleGroupItem value="top" aria-label="تبديل أعلى">
          أعلى
        </ToggleGroupItem>
        <ToggleGroupItem value="bottom" aria-label="تبديل أسفل">
          أسفل
        </ToggleGroupItem>
        <ToggleGroupItem value="left" aria-label="تبديل يسار">
          يسار
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="تبديل يمين">
          يمين
        </ToggleGroupItem>
      </ToggleGroup>
    </DirectionProvider>
  )
}

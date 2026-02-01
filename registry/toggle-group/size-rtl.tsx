"use client"

import {
  DirectionProvider,
  ToggleGroup,
  ToggleGroupItem,
} from "@soar-design/soar-react-components"

export function ToggleGroupSizes() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex flex-col gap-4">
        <ToggleGroup type="single" size="sm" defaultValue="top" variant="outline">
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
        <ToggleGroup type="single" defaultValue="top" variant="outline">
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
      </div>
    </DirectionProvider>
  )
}

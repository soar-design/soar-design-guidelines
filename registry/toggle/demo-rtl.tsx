"use client"

import {
  DirectionProvider,
  Toggle,
} from "@soar-design/soar-react-components"
import { BookmarkIcon } from "lucide-react"

export function ToggleDemo() {
  return (
    <DirectionProvider dir="rtl">
      <Toggle aria-label="تبديل الإشارة المرجعية" size="sm" variant="outline">
        <BookmarkIcon className="group-data-[state=on]/toggle:fill-foreground" />
        إشارة مرجعية
      </Toggle>
    </DirectionProvider>
  )
}

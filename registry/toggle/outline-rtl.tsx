"use client"

import {
  DirectionProvider,
  Toggle,
} from "@soar-design/soar-react-components"
import { BoldIcon, ItalicIcon } from "lucide-react"

export function ToggleOutline() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex flex-wrap items-center gap-2">
        <Toggle variant="outline" aria-label="تبديل مائل">
          <ItalicIcon />
          مائل
        </Toggle>
        <Toggle variant="outline" aria-label="تبديل عريض">
          <BoldIcon />
          عريض
        </Toggle>
      </div>
    </DirectionProvider>
  )
}

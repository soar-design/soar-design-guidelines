"use client"

import {
  DirectionProvider,
  Toggle,
} from "@soar-design/soar-react-components"
import { ItalicIcon } from "lucide-react"

export function ToggleWithText() {
  return (
    <DirectionProvider dir="rtl">
      <Toggle aria-label="تبديل مائل">
        <ItalicIcon />
        مائل
      </Toggle>
    </DirectionProvider>
  )
}

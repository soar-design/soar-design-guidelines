"use client"

import {
  DirectionProvider,
  Toggle,
} from "@soar-design/soar-react-components"
import { ItalicIcon } from "lucide-react"

export function ToggleWithText() {
  return (
    <DirectionProvider dir="ltr">
      <Toggle aria-label="Toggle italic">
        <ItalicIcon />
        Italic
      </Toggle>
    </DirectionProvider>
  )
}

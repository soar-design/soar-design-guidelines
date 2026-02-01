"use client"

import {
  DirectionProvider,
  Toggle,
} from "@soar-design/soar-react-components"
import { BookmarkIcon } from "lucide-react"

export function ToggleDemo() {
  return (
    <DirectionProvider dir="ltr">
      <Toggle aria-label="Toggle bookmark" size="sm" variant="outline">
        <BookmarkIcon className="group-data-[state=on]/toggle:fill-foreground" />
        Bookmark
      </Toggle>
    </DirectionProvider>
  )
}

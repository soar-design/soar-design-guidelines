"use client"

import {
  DirectionProvider,
  ToggleGroup,
  ToggleGroupItem,
} from "@soar-design/soar-react-components"
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

export function ToggleGroupVertical() {
  return (
    <DirectionProvider dir="rtl">
      <ToggleGroup
        type="multiple"
        orientation="vertical"
        spacing={1}
        defaultValue={["bold", "italic"]}
      >
        <ToggleGroupItem value="bold" aria-label="تبديل عريض">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="تبديل مائل">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="تبديل خط سفلي">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </DirectionProvider>
  )
}

"use client"

import {
  DirectionProvider,
  ToggleGroup,
  ToggleGroupItem,
} from "@soar-design/soar-react-components"
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

export function ToggleGroupVertical() {
  return (
    <DirectionProvider dir="ltr">
      <ToggleGroup
        type="multiple"
        orientation="vertical"
        spacing={1}
        defaultValue={["bold", "italic"]}
      >
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </DirectionProvider>
  )
}

"use client"

import {
  DirectionProvider,
  ToggleGroup,
  ToggleGroupItem,
} from "@soar-design/soar-react-components"

export function ToggleGroupOutline() {
  return (
    <DirectionProvider dir="ltr">
      <ToggleGroup variant="outline" type="single" defaultValue="all">
        <ToggleGroupItem value="all" aria-label="Toggle all">
          All
        </ToggleGroupItem>
        <ToggleGroupItem value="missed" aria-label="Toggle missed">
          Missed
        </ToggleGroupItem>
      </ToggleGroup>
    </DirectionProvider>
  )
}

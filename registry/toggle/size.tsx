"use client"

import {
  DirectionProvider,
  Toggle,
} from "@soar-design/soar-react-components"

export function ToggleSizes() {
  return (
    <DirectionProvider dir="ltr">
      <div className="flex flex-wrap items-center gap-2">
        <Toggle aria-label="Toggle small" size="sm">
          Small
        </Toggle>
        <Toggle aria-label="Toggle default" size="default">
          Default
        </Toggle>
        <Toggle aria-label="Toggle large" size="lg">
          Large
        </Toggle>
      </div>
    </DirectionProvider>
  )
}

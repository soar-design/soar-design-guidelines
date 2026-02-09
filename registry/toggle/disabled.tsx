"use client"

import {
  DirectionProvider,
  Toggle,
} from "@soar-design/soar-react-components"

export function ToggleDisabled() {
  return (
    <DirectionProvider dir="ltr">
      <div className="flex flex-wrap items-center gap-2">
        <Toggle aria-label="Toggle disabled" disabled>
          Disabled
        </Toggle>
        <Toggle aria-label="Toggle disabled outline" disabled>
          Disabled
        </Toggle>
      </div>
    </DirectionProvider>
  )
}

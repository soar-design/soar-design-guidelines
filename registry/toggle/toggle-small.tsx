import { Italic } from "lucide-react"

import { Toggle } from "@soar-design/soar-react-components"

export function ToggleSmallDocs() {
  return (
    <Toggle size="sm" aria-label="Toggle italic">
      <Italic />
    </Toggle>
  )
}


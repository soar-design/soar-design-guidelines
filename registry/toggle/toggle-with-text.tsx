import { Italic } from "lucide-react"

import { Toggle } from "@soar-design/soar-react-components"

export function ToggleWithTextDocs() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic />
      Italic
    </Toggle>
  )
}


import { Underline } from "lucide-react"

import { Toggle } from "@soar-design/soar-react-components"

export function ToggleDisabledDocs() {
  return (
    <Toggle aria-label="Toggle italic" disabled>
      <Underline className="h-4 w-4" />
    </Toggle>
  )
}


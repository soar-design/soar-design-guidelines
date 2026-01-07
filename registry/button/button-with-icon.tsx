import { GitBranch } from "lucide-react"

import { Button } from "@soar-design/soar-react-components"

export function ButtonWithIconDocs() {
  return (
    <Button variant="outline" size="sm">
      <GitBranch /> New Branch
    </Button>
  )
}

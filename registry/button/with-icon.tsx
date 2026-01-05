import { GitBranch } from "lucide-react"

import { Button } from "@soar-design/soar-react-components"

export function ButtonWithIcon() {
  return (
    <Button variant="outline" size="sm">
      <GitBranch /> New Branch
    </Button>
  )
}

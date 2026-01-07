import { SearchIcon } from "lucide-react"

import { Button } from "@soar-design/soar-react-components"
import { ButtonGroup } from "@soar-design/soar-react-components"
import { Input } from "@soar-design/soar-react-components"

export function ButtonGroupInputDocsRTL() {
  return (
    <ButtonGroup>
      <Input placeholder="بحث..." />
      <Button variant="outline" aria-label="بحث">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  )
}


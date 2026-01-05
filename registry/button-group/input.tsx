import { SearchIcon } from "lucide-react"

import { Button } from "@soar-design/soar-react-components"
import { ButtonGroup } from "@soar-design/soar-react-components"
import { Input } from "@soar-design/soar-react-components"

export function ButtonGroupInput() {
  return (
    <ButtonGroup>
      <Input placeholder="Search..." />
      <Button variant="outline" aria-label="Search">
        <SearchIcon />
      </Button>
    </ButtonGroup>
  )
}

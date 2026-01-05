import { PlusIcon } from "lucide-react"

import { Button } from "@soar-design/soar-react-components"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@soar-design/soar-react-components"

export function ButtonGroupSplitRTL() {
  return (
    <ButtonGroup>
      <Button variant="secondary">زر</Button>
      <ButtonGroupSeparator />
      <Button size="icon" variant="secondary">
        <PlusIcon />
      </Button>
    </ButtonGroup>
  )
}


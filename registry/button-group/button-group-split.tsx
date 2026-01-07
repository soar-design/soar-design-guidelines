import { PlusIcon } from "lucide-react"

import { Button } from "@soar-design/soar-react-components"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@soar-design/soar-react-components"

export function ButtonGroupSplit() {
  return (
    <ButtonGroup>
      <Button variant="secondary">Button</Button>
      <ButtonGroupSeparator />
      <Button size="icon" variant="secondary">
        <PlusIcon />
      </Button>
    </ButtonGroup>
  )
}

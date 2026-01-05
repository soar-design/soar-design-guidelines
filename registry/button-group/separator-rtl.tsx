import { Button } from "@soar-design/soar-react-components"
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@soar-design/soar-react-components"

export function ButtonGroupSeparatorDemoRTL() {
  return (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        نسخ
      </Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" size="sm">
        لصق
      </Button>
    </ButtonGroup>
  )
}

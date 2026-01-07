import { Button } from "@soar-design/soar-react-components"
import {
  ButtonGroup,
  ButtonGroupSeparator as ButtonGroupSeparatorComponent,
} from "@soar-design/soar-react-components"

export function ButtonGroupSeparatorRTL() {
  return (
    <ButtonGroup>
      <Button variant="secondary" size="sm">
        نسخ
      </Button>
      <ButtonGroupSeparatorComponent />
      <Button variant="secondary" size="sm">
        لصق
      </Button>
    </ButtonGroup>
  )
}

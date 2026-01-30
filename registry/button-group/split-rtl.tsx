import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { PlusIcon } from "lucide-react"

export function ButtonGroupSplit() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <ButtonGroup>
          <Button variant="secondary">زر</Button>
          <ButtonGroupSeparator />
          <Button size="icon" variant="secondary">
            <PlusIcon />
          </Button>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}

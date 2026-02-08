import {
  Button,
  ButtonGroup,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { MinusIcon, PlusIcon } from "lucide-react"

export function ButtonGroupOrientation() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <ButtonGroup
          orientation="vertical"
          aria-label="Media controls"
          className="h-fit"
        >
          <Button variant="secondary" size="icon">
            <PlusIcon />
          </Button>
          <Button variant="secondary" size="icon">
            <MinusIcon />
          </Button>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}

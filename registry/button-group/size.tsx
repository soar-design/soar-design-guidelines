import {
  Button,
  ButtonGroup,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { PlusIcon } from "lucide-react"

export function ButtonGroupSize() {
  return (
    <DirectionProvider dir="ltr">
      <div className="flex w-full max-w-lg flex-col items-center gap-8 mx-auto">
        <ButtonGroup>
          <Button variant="secondary" size="sm">
            Small
          </Button>
          <Button variant="secondary" size="sm">
            Button
          </Button>
          <Button variant="secondary" size="sm">
            Group
          </Button>
          <Button variant="secondary" size="icon-sm">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="secondary">Default</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="secondary">Group</Button>
          <Button variant="secondary" size="icon">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="secondary" size="lg">
            Large
          </Button>
          <Button variant="secondary" size="lg">
            Button
          </Button>
          <Button variant="secondary" size="lg">
            Group
          </Button>
          <Button variant="secondary" size="icon-lg">
            <PlusIcon />
          </Button>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}

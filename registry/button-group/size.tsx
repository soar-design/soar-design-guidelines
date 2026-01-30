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
          <Button variant="outline" size="sm">
            Small
          </Button>
          <Button variant="outline" size="sm">
            Button
          </Button>
          <Button variant="outline" size="sm">
            Group
          </Button>
          <Button variant="outline" size="icon-sm">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">Default</Button>
          <Button variant="outline">Button</Button>
          <Button variant="outline">Group</Button>
          <Button variant="outline" size="icon">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="lg">
            Large
          </Button>
          <Button variant="outline" size="lg">
            Button
          </Button>
          <Button variant="outline" size="lg">
            Group
          </Button>
          <Button variant="outline" size="icon-lg">
            <PlusIcon />
          </Button>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}

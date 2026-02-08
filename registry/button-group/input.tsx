import {
  Button,
  ButtonGroup,
  DirectionProvider,
  Input,
} from "@soar-design/soar-react-components"
import { SearchIcon } from "lucide-react"

export function ButtonGroupInput() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <ButtonGroup>
          <Input placeholder="Search..." />
          <Button variant="secondary" aria-label="Search">
            <SearchIcon />
          </Button>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}

import {
  Button,
  ButtonGroup,
  DirectionProvider,
  Input,
} from "@soar-design/soar-react-components"
import { SearchIcon } from "lucide-react"

export function ButtonGroupInput() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <ButtonGroup>
          <Input placeholder="بحث..." />
          <Button variant="secondary" aria-label="بحث">
            <SearchIcon />
          </Button>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}

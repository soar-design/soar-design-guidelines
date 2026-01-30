import {
  Button,
  ButtonGroup,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { MinusIcon, PlusIcon } from "lucide-react"

export function ButtonGroupOrientation() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <ButtonGroup
          orientation="vertical"
          aria-label="أزرار التحكم في الوسائط"
          className="h-fit"
        >
          <Button variant="outline" size="icon">
            <PlusIcon />
          </Button>
          <Button variant="outline" size="icon">
            <MinusIcon />
          </Button>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}

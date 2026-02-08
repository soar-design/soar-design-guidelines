import {
  Button,
  ButtonGroup,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { PlusIcon } from "lucide-react"

export function ButtonGroupSize() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex w-full max-w-lg flex-col items-center gap-8 mx-auto">
        <ButtonGroup>
          <Button variant="secondary" size="sm">
            صغير
          </Button>
          <Button variant="secondary" size="sm">
            زر
          </Button>
          <Button variant="secondary" size="sm">
            مجموعة
          </Button>
          <Button variant="secondary" size="icon-sm">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="secondary">افتراضي</Button>
          <Button variant="secondary">زر</Button>
          <Button variant="secondary">مجموعة</Button>
          <Button variant="secondary" size="icon">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="secondary" size="lg">
            كبير
          </Button>
          <Button variant="secondary" size="lg">
            زر
          </Button>
          <Button variant="secondary" size="lg">
            مجموعة
          </Button>
          <Button variant="secondary" size="icon-lg">
            <PlusIcon />
          </Button>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}

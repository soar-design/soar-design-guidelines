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
          <Button variant="outline" size="sm">
            صغير
          </Button>
          <Button variant="outline" size="sm">
            زر
          </Button>
          <Button variant="outline" size="sm">
            مجموعة
          </Button>
          <Button variant="outline" size="icon-sm">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline">افتراضي</Button>
          <Button variant="outline">زر</Button>
          <Button variant="outline">مجموعة</Button>
          <Button variant="outline" size="icon">
            <PlusIcon />
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button variant="outline" size="lg">
            كبير
          </Button>
          <Button variant="outline" size="lg">
            زر
          </Button>
          <Button variant="outline" size="lg">
            مجموعة
          </Button>
          <Button variant="outline" size="icon-lg">
            <PlusIcon />
          </Button>
        </ButtonGroup>
      </div>
    </DirectionProvider>
  )
}

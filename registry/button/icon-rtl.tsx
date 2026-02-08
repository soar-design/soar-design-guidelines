import { Button, DirectionProvider } from "@soar-design/soar-react-components"
import { CircleFadingArrowUpIcon } from "lucide-react"

export function ButtonIcon() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Button variant="secondary" size="icon">
          <CircleFadingArrowUpIcon />
        </Button>
      </div>
    </DirectionProvider>
  )
}

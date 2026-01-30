import { Button, DirectionProvider } from "@soar-design/soar-react-components"
import { ArrowUpRightIcon } from "lucide-react"

export function ButtonSize() {
  return (
    <DirectionProvider dir="ltr">
      <div className="flex w-full max-w-lg flex-col items-center gap-8 sm:flex-row sm:justify-center">
        <div className="flex items-start gap-2">
          <Button size="xs" variant="outline">
            Extra Small
          </Button>
          <Button size="icon-xs" aria-label="Submit" variant="outline">
            <ArrowUpRightIcon />
          </Button>
        </div>
        <div className="flex items-start gap-2">
          <Button size="sm" variant="outline">
            Small
          </Button>
          <Button size="icon-sm" aria-label="Submit" variant="outline">
            <ArrowUpRightIcon />
          </Button>
        </div>
        <div className="flex items-start gap-2">
          <Button variant="outline">Default</Button>
          <Button size="icon" aria-label="Submit" variant="outline">
            <ArrowUpRightIcon />
          </Button>
        </div>
        <div className="flex items-start gap-2">
          <Button variant="outline" size="lg">
            Large
          </Button>
          <Button size="icon-lg" aria-label="Submit" variant="outline">
            <ArrowUpRightIcon />
          </Button>
        </div>
      </div>
    </DirectionProvider>
  )
}

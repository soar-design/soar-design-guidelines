import { Button, DirectionProvider } from "@soar-design/soar-react-components"
import { ArrowUpRightIcon } from "lucide-react"

export function ButtonSize() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex w-full max-w-lg flex-col items-center gap-8 sm:flex-row sm:justify-center">
        <div className="flex items-start gap-2">
          <Button size="xs" variant="secondary">
            صغير جداً
          </Button>
          <Button size="icon-xs" aria-label="إرسال" variant="secondary">
            <ArrowUpRightIcon />
          </Button>
        </div>
        <div className="flex items-start gap-2">
          <Button size="sm" variant="secondary">
            صغير
          </Button>
          <Button size="icon-sm" aria-label="إرسال" variant="secondary">
            <ArrowUpRightIcon />
          </Button>
        </div>
        <div className="flex items-start gap-2">
          <Button variant="secondary">افتراضي</Button>
          <Button size="icon" aria-label="إرسال" variant="secondary">
            <ArrowUpRightIcon />
          </Button>
        </div>
        <div className="flex items-start gap-2">
          <Button variant="secondary" size="lg">
            كبير
          </Button>
          <Button size="icon-lg" aria-label="إرسال" variant="secondary">
            <ArrowUpRightIcon />
          </Button>
        </div>
      </div>
    </DirectionProvider>
  )
}

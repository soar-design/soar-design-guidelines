import { Button, DirectionProvider } from "@soar-design/soar-react-components"
import { ArrowUpIcon } from "lucide-react"

export function ButtonDemo() {
  return (
    <DirectionProvider dir="rtl">
      <div className="flex w-full max-w-lg flex-wrap items-center justify-center gap-2 md:flex-row">
        <Button variant="secondary">زر</Button>
        <Button variant="secondary" size="icon" aria-label="إرسال">
          <ArrowUpIcon />
        </Button>
      </div>
    </DirectionProvider>
  )
}

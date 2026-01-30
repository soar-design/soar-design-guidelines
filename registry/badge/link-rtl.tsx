import { Badge, DirectionProvider } from "@soar-design/soar-react-components"
import { ArrowUpRightIcon } from "lucide-react"

export function BadgeAsLink() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Badge asChild>
          <a href="#link">
            افتح الرابط <ArrowUpRightIcon data-icon="inline-end" />
          </a>
        </Badge>
      </div>
    </DirectionProvider>
  )
}

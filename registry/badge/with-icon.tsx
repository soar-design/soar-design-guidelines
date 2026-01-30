import { Badge, DirectionProvider } from "@soar-design/soar-react-components"
import { BadgeCheck, BookmarkIcon } from "lucide-react"

export function BadgeWithIconLeft() {
  return (
    <DirectionProvider dir="ltr">
      <div className="flex w-full max-w-lg flex-wrap justify-center gap-2">
        <Badge variant="secondary">
          <BadgeCheck data-icon="inline-start" />
          Verified
        </Badge>
        <Badge variant="outline">
          Bookmark
          <BookmarkIcon data-icon="inline-end" />
        </Badge>
      </div>
    </DirectionProvider>
  )
}

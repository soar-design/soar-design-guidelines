import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { PlusIcon } from "lucide-react"

export function AvatarBadgeIconExample() {
  return (
    <DirectionProvider dir="rtl">
      <Avatar className="grayscale">
        <AvatarImage src="https://github.com/pranathip.png" alt="@pranathip" />
        <AvatarFallback>PP</AvatarFallback>
        <AvatarBadge>
          <PlusIcon />
        </AvatarBadge>
      </Avatar>
    </DirectionProvider>
  )
}

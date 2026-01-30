import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
  DirectionProvider,
} from "@soar-design/soar-react-components"

export function AvatarWithBadge() {
  return (
    <DirectionProvider dir="ltr">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge className="bg-green-600 dark:bg-green-800" />
      </Avatar>
    </DirectionProvider>
  )
}

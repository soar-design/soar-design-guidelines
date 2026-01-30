import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
  DirectionProvider,
} from "@soar-design/soar-react-components"

export function AvatarGroupExample() {
  return (
    <DirectionProvider dir="rtl">
      <AvatarGroup className="grayscale">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/maxleiter.png" alt="@maxleiter" />
        <AvatarFallback>LR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      </AvatarGroup>
    </DirectionProvider>
  )
}

import { Avatar, AvatarFallback, AvatarImage, DirectionProvider } from "@soar-design/soar-react-components"

export function AvatarBasic() {
  return (
    <DirectionProvider dir="rtl">
      <Avatar>
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="@shadcn"
          className="grayscale"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </DirectionProvider>
  )
}

import { Avatar, AvatarFallback, AvatarImage, DirectionProvider } from "@soar-design/soar-react-components"
import { Button } from "@soar-design/soar-react-components"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@soar-design/soar-react-components"

export function AvatarDropdown() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-32">
          <DropdownMenuGroup>
            <DropdownMenuItem>الملف الشخصي</DropdownMenuItem>
            <DropdownMenuItem>الفوترة</DropdownMenuItem>
            <DropdownMenuItem>الإعدادات</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem variant="destructive">تسجيل الخروج</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </DirectionProvider>
  )
}

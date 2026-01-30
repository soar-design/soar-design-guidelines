"use client"

import * as React from "react"
import {
  Button,
  DirectionProvider,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@soar-design/soar-react-components"

export function DropdownMenuRadioGroupDemo() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">فتح</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuGroup>
              <DropdownMenuLabel>موضع اللوحة</DropdownMenuLabel>
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="top">أعلى</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">أسفل</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">يمين</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </DirectionProvider>
  )
}

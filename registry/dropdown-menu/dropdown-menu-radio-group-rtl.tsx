"use client"

import * as React from "react"

import { Button } from "@soar-design/soar-react-components"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup as DropdownMenuRadioGroupComponent,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@soar-design/soar-react-components"

export function DropdownMenuRadioGroupRTL() {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">فتح</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>موضع اللوحة</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroupComponent value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">أعلى</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">أسفل</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">يمين</DropdownMenuRadioItem>
        </DropdownMenuRadioGroupComponent>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

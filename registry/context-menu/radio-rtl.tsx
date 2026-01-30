"use client"

import * as React from "react"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"

export function ContextMenuRadio() {
  const [user, setUser] = React.useState("pedro")
  const [theme, setTheme] = React.useState("light")

  return (
    <DirectionProvider dir="rtl">
      <ContextMenu>
        <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="hidden pointer-fine:inline-block">
            انقر بزر الماوس الأيمن هنا
          </span>
          <span className="hidden pointer-coarse:inline-block">
            اضغط مطولاً هنا
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuGroup>
            <ContextMenuLabel>الأشخاص</ContextMenuLabel>
            <ContextMenuRadioGroup value={user} onValueChange={setUser}>
              <ContextMenuRadioItem value="pedro">
                بيدرو دوارتي
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="colm">كولم تويته</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuLabel>المظهر</ContextMenuLabel>
            <ContextMenuRadioGroup value={theme} onValueChange={setTheme}>
              <ContextMenuRadioItem value="light">فاتح</ContextMenuRadioItem>
              <ContextMenuRadioItem value="dark">داكن</ContextMenuRadioItem>
              <ContextMenuRadioItem value="system">النظام</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </DirectionProvider>
  )
}

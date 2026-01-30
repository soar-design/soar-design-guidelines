"use client"

import * as React from "react"
import {
  DirectionProvider,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger,
} from "@soar-design/soar-react-components"

export function MenubarRadio() {
  const [user, setUser] = React.useState("benoit")
  const [theme, setTheme] = React.useState("system")

  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Menubar className="w-72">
          <MenubarMenu>
            <MenubarTrigger>الملفات الشخصية</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value={user} onValueChange={setUser}>
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset>تحرير...</MenubarItem>
              <MenubarItem inset>إضافة ملف شخصي...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>المظهر</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value={theme} onValueChange={setTheme}>
                <MenubarRadioItem value="light">فاتح</MenubarRadioItem>
                <MenubarRadioItem value="dark">داكن</MenubarRadioItem>
                <MenubarRadioItem value="system">النظام</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </DirectionProvider>
  )
}

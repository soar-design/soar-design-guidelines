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
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Menubar className="w-72">
          <MenubarMenu>
            <MenubarTrigger>Profiles</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value={user} onValueChange={setUser}>
                <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
              </MenubarRadioGroup>
              <MenubarSeparator />
              <MenubarItem inset>Edit...</MenubarItem>
              <MenubarItem inset>Add Profile...</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Theme</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value={theme} onValueChange={setTheme}>
                <MenubarRadioItem value="light">Light</MenubarRadioItem>
                <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
                <MenubarRadioItem value="system">System</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </DirectionProvider>
  )
}

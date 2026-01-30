"use client"

import * as React from "react"
import {
  DirectionProvider,
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@soar-design/soar-react-components"
import {
  FileIcon,
  FolderIcon,
  HelpCircleIcon,
  SaveIcon,
  SettingsIcon,
  TrashIcon,
} from "lucide-react"

export function MenubarIcons() {
  return (
    <DirectionProvider dir="ltr">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Menubar className="w-72">
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <FileIcon />
                New File <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <FolderIcon />
                Open Folder
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <SaveIcon />
                Save <MenubarShortcut>⌘S</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>More</MenubarTrigger>
            <MenubarContent>
              <MenubarGroup>
                <MenubarItem>
                  <SettingsIcon />
                  Settings
                </MenubarItem>
                <MenubarItem>
                  <HelpCircleIcon />
                  Help
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem variant="destructive">
                  <TrashIcon />
                  Delete
                </MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </DirectionProvider>
  )
}

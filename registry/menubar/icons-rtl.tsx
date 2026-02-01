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
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>ملف</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <FileIcon />
                ملف جديد <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                <FolderIcon />
                فتح مجلد
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <SaveIcon />
                حفظ <MenubarShortcut>⌘S</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>المزيد</MenubarTrigger>
            <MenubarContent>
              <MenubarGroup>
                <MenubarItem>
                  <SettingsIcon />
                  الإعدادات
                </MenubarItem>
                <MenubarItem>
                  <HelpCircleIcon />
                  المساعدة
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem variant="destructive">
                  <TrashIcon />
                  حذف
                </MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </DirectionProvider>
  )
}

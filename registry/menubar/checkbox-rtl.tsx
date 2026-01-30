"use client"

import * as React from "react"
import {
  DirectionProvider,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@soar-design/soar-react-components"

export function MenubarCheckbox() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Menubar className="w-72">
          <MenubarMenu>
            <MenubarTrigger>عرض</MenubarTrigger>
            <MenubarContent className="w-64">
              <MenubarCheckboxItem>إظهار شريط الإشارات المرجعية دائمًا</MenubarCheckboxItem>
              <MenubarCheckboxItem checked>
                إظهار عناوين URL الكاملة دائمًا
              </MenubarCheckboxItem>
              <MenubarSeparator />
              <MenubarItem inset>
                إعادة تحميل <MenubarShortcut>⌘R</MenubarShortcut>
              </MenubarItem>
              <MenubarItem disabled inset>
                إعادة تحميل قسري <MenubarShortcut>⇧⌘R</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>تنسيق</MenubarTrigger>
            <MenubarContent>
              <MenubarCheckboxItem checked>خط في المنتصف</MenubarCheckboxItem>
              <MenubarCheckboxItem>رمز</MenubarCheckboxItem>
              <MenubarCheckboxItem>نص علوي</MenubarCheckboxItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </DirectionProvider>
  )
}

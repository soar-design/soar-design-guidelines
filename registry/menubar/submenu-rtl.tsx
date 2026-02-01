"use client"

import * as React from "react"
import {
  DirectionProvider,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@soar-design/soar-react-components"

export function MenubarSubmenu() {
  return (
    <DirectionProvider dir="rtl">
      <div className="w-full max-w-lg mx-auto flex justify-center">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>ملف</MenubarTrigger>
            <MenubarContent>
              <MenubarSub>
                <MenubarSubTrigger>مشاركة</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>رابط البريد الإلكتروني</MenubarItem>
                  <MenubarItem>الرسائل</MenubarItem>
                  <MenubarItem>الملاحظات</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>
                طباعة... <MenubarShortcut>⌘P</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>تحرير</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                تراجع <MenubarShortcut>⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                إعادة <MenubarShortcut>⇧⌘Z</MenubarShortcut>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>بحث</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>بحث...</MenubarItem>
                  <MenubarItem>البحث التالي</MenubarItem>
                  <MenubarItem>البحث السابق</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarItem>قص</MenubarItem>
              <MenubarItem>نسخ</MenubarItem>
              <MenubarItem>لصق</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </DirectionProvider>
  )
}

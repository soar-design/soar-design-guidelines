"use client";

import { useState } from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarItem,
} from "@soar-design/soar-react-components";

export default function MenubarWithRadio() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="w-full max-w-3xl" dir="rtl">
      <Menubar dir="rtl">
        <MenubarMenu>
          <MenubarTrigger>التفضيلات</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value={theme} onValueChange={setTheme}>
              <MenubarRadioItem value="light">فاتح</MenubarRadioItem>
              <MenubarRadioItem value="dark">داكن</MenubarRadioItem>
              <MenubarRadioItem value="system">النظام</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem>الإعدادات</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}


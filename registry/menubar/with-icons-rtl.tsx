"use client";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from "@soar-design/soar-react-components";
import {
  FileText,
  FolderOpen,
  Save,
  Printer,
  Scissors,
  Copy,
  ClipboardPaste,
} from "lucide-react";

export default function MenubarWithIcons() {
  return (
    <div className="w-full max-w-3xl" dir="rtl">
      <Menubar dir="rtl">
        <MenubarMenu>
          <MenubarTrigger>ملف</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <FileText className="me-2 rtl:me-0 rtl:ms-2" />
              ملف جديد
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <FolderOpen className="me-2 rtl:me-0 rtl:ms-2" />
              فتح
              <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Save className="me-2 rtl:me-0 rtl:ms-2" />
              حفظ
              <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Printer className="me-2 rtl:me-0 rtl:ms-2" />
              طباعة
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>تحرير</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Scissors className="me-2 rtl:me-0 rtl:ms-2" />
              قص
              <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <Copy className="me-2 rtl:me-0 rtl:ms-2" />
              نسخ
              <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <ClipboardPaste className="me-2 rtl:me-0 rtl:ms-2" />
              لصق
              <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}


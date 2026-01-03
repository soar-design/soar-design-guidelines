"use client";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "@soar-design/soar-react-components";

export default function MenubarWithSubmenu() {
  return (
    <div className="w-full max-w-3xl" dir="rtl">
      <Menubar dir="rtl">
        <MenubarMenu>
          <MenubarTrigger>ملف</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>ملف جديد</MenubarItem>
            <MenubarItem>نافذة جديدة</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>فتح حديث</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>project-1.tsx</MenubarItem>
                <MenubarItem>project-2.tsx</MenubarItem>
                <MenubarItem>project-3.tsx</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>مسح الحديث</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>حفظ</MenubarItem>
            <MenubarItem>حفظ باسم...</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>تحرير</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>تراجع</MenubarItem>
            <MenubarItem>إعادة</MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>بحث</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>البحث في الملف</MenubarItem>
                <MenubarItem>البحث في المجلد</MenubarItem>
                <MenubarItem>البحث والاستبدال</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}


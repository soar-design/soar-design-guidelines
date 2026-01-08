import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@soar-design/soar-react-components"

export function MenubarDemoDocsRTL() {
  return (
    <Menubar dir="rtl">
      <MenubarMenu>
        <MenubarTrigger>ملف</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            علامة تبويب جديدة <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            نافذة جديدة <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>نافذة التصفح المتخفي الجديدة</MenubarItem>
          <MenubarSeparator />
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
              <MenubarItem>البحث على الويب</MenubarItem>
              <MenubarSeparator />
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
      <MenubarMenu>
        <MenubarTrigger>عرض</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>إظهار شريط الإشارات المرجعية دائماً</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            إظهار عناوين URL الكاملة دائماً
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            إعادة التحميل <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            إعادة التحميل القسري <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>تبديل وضع ملء الشاشة</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>إخفاء الشريط الجانبي</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>الملفات الشخصية</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>تعديل...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>إضافة ملف شخصي...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}


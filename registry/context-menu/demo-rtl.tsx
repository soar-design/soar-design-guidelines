import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"

export function ContextMenuDemo() {
  return (
    <DirectionProvider dir="rtl">
      <ContextMenu>
        <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="hidden pointer-fine:inline-block">
            انقر بزر الماوس الأيمن هنا
          </span>
          <span className="hidden pointer-coarse:inline-block">
            اضغط مطولاً هنا
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent className="w-48">
          <ContextMenuGroup>
            <ContextMenuItem>
              رجوع
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem disabled>
              تقدم
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              إعادة التحميل
              <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>أدوات إضافية</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-44">
                <ContextMenuGroup>
                  <ContextMenuItem>حفظ الصفحة...</ContextMenuItem>
                  <ContextMenuItem>إنشاء اختصار...</ContextMenuItem>
                  <ContextMenuItem>تسمية النافذة...</ContextMenuItem>
                </ContextMenuGroup>
                <ContextMenuSeparator />
                <ContextMenuGroup>
                  <ContextMenuItem>أدوات المطور</ContextMenuItem>
                </ContextMenuGroup>
                <ContextMenuSeparator />
                <ContextMenuGroup>
                  <ContextMenuItem variant="destructive">حذف</ContextMenuItem>
                </ContextMenuGroup>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuCheckboxItem checked>
              إظهار الإشارات المرجعية
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>إظهار عناوين URL الكاملة</ContextMenuCheckboxItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuRadioGroup value="pedro">
              <ContextMenuLabel>الأشخاص</ContextMenuLabel>
              <ContextMenuRadioItem value="pedro">
                بيدرو دوارتي
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="colm">كولم تويته</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </DirectionProvider>
  )
}

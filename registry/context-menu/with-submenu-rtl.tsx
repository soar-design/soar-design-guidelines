import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@soar-design/soar-react-components";

export default function ContextMenuWithSubmenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        انقر بزر الماوس الأيمن هنا
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>فتح</ContextMenuItem>
        <ContextMenuItem>تحميل</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>مشاركة</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>رابط البريد الإلكتروني</ContextMenuItem>
            <ContextMenuItem>نسخ الرابط</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>مشاركة على Twitter</ContextMenuItem>
            <ContextMenuItem>مشاركة على Facebook</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSub>
          <ContextMenuSubTrigger>أدوات إضافية</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>حفظ الصفحة كـ...</ContextMenuItem>
            <ContextMenuItem>إنشاء اختصار...</ContextMenuItem>
            <ContextMenuItem>تسمية النافذة...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>أدوات المطور</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuItem>طباعة...</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}


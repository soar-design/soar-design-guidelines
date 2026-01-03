import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@soar-design/soar-react-components";
import {
  Copy,
  Download,
  Mail,
  MessageSquare,
  Pencil,
  Trash,
  User,
} from "lucide-react";

export default function ContextMenuWithIcons() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        انقر بزر الماوس الأيمن هنا
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          <User className="me-2 h-4 w-4" />
          الملف الشخصي
          <ContextMenuShortcut>⇧⌘P</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          <Mail className="me-2 h-4 w-4" />
          الرسائل
          <ContextMenuShortcut>⌘M</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem inset>
          <Pencil className="me-2 h-4 w-4" />
          تعديل
          <ContextMenuShortcut>⌘E</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          <Copy className="me-2 h-4 w-4" />
          نسخ
          <ContextMenuShortcut>⌘D</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem inset>
          <Download className="me-2 h-4 w-4" />
          تحميل
        </ContextMenuItem>
        <ContextMenuItem variant="destructive" inset>
          <Trash className="me-2 h-4 w-4" />
          حذف
          <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}


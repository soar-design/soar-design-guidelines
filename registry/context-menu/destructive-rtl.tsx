import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import { Pencil, Share, Trash } from "lucide-react"

export function ContextMenuDestructive() {
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
        <ContextMenuContent>
          <ContextMenuGroup>
            <ContextMenuItem>
              <Pencil className="h-4 w-4" />
              تعديل
            </ContextMenuItem>
            <ContextMenuItem>
              <Share className="h-4 w-4" />
              مشاركة
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem variant="destructive">
              <Trash className="h-4 w-4" />
              حذف
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </DirectionProvider>
  )
}

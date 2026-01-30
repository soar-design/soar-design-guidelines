import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"
import {
  ClipboardPaste,
  Copy,
  Scissors,
  Trash,
} from "lucide-react"

export function ContextMenuIcons() {
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
              <Copy className="h-4 w-4" />
              نسخ
            </ContextMenuItem>
            <ContextMenuItem>
              <Scissors className="h-4 w-4" />
              قص
            </ContextMenuItem>
            <ContextMenuItem>
              <ClipboardPaste className="h-4 w-4" />
              لصق
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

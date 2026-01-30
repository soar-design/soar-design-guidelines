import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"

export function ContextMenuSides() {
  return (
    <DirectionProvider dir="rtl">
      <div className="grid w-full max-w-sm grid-cols-2 gap-4">
        <ContextMenu>
          <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
            <span className="hidden pointer-fine:inline-block">
              انقر بزر الماوس الأيمن (أعلى)
            </span>
            <span className="hidden pointer-coarse:inline-block">
              اضغط مطولاً (أعلى)
            </span>
          </ContextMenuTrigger>
          <ContextMenuContent side="top">
            <ContextMenuGroup>
              <ContextMenuItem>رجوع</ContextMenuItem>
              <ContextMenuItem>تقدم</ContextMenuItem>
              <ContextMenuItem>إعادة التحميل</ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
        <ContextMenu>
          <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
            <span className="hidden pointer-fine:inline-block">
              انقر بزر الماوس الأيمن (يمين)
            </span>
            <span className="hidden pointer-coarse:inline-block">
              اضغط مطولاً (يمين)
            </span>
          </ContextMenuTrigger>
          <ContextMenuContent side="right">
            <ContextMenuGroup>
              <ContextMenuItem>رجوع</ContextMenuItem>
              <ContextMenuItem>تقدم</ContextMenuItem>
              <ContextMenuItem>إعادة التحميل</ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
        <ContextMenu>
          <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
            <span className="hidden pointer-fine:inline-block">
              انقر بزر الماوس الأيمن (أسفل)
            </span>
            <span className="hidden pointer-coarse:inline-block">
              اضغط مطولاً (أسفل)
            </span>
          </ContextMenuTrigger>
          <ContextMenuContent side="bottom">
            <ContextMenuGroup>
              <ContextMenuItem>رجوع</ContextMenuItem>
              <ContextMenuItem>تقدم</ContextMenuItem>
              <ContextMenuItem>إعادة التحميل</ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
        <ContextMenu>
          <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
            <span className="hidden pointer-fine:inline-block">
              انقر بزر الماوس الأيمن (يسار)
            </span>
            <span className="hidden pointer-coarse:inline-block">
              اضغط مطولاً (يسار)
            </span>
          </ContextMenuTrigger>
          <ContextMenuContent side="left">
            <ContextMenuGroup>
              <ContextMenuItem>رجوع</ContextMenuItem>
              <ContextMenuItem>تقدم</ContextMenuItem>
              <ContextMenuItem>إعادة التحميل</ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      </div>
    </DirectionProvider>
  )
}

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
  DirectionProvider,
} from "@soar-design/soar-react-components"

export function ContextMenuBasic() {
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
            <ContextMenuItem>رجوع</ContextMenuItem>
            <ContextMenuItem disabled>تقدم</ContextMenuItem>
            <ContextMenuItem>إعادة التحميل</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </DirectionProvider>
  )
}
